import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.enquiryType || !data.message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Insert contact - note: company field not in current schema, so we omit it
    const { data: contact, error } = await supabase
      .from("contacts")
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.enquiryType, // Maps enquiry type to subject field
        message: data.message,
      })
      .select()
      .single()

    if (error) {
      console.error("[v0] Error saving contact:", error)
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    console.log("[v0] Contact message saved successfully to database:", contact.id)

    // Attempt to send email notification if Resend API is configured
    if (process.env.RESEND_API_KEY) {
      try {
        const adminEmail = process.env.ADMIN_EMAIL || "info@pndindustrial.com"

        const enquiryTypeLabels: Record<string, string> = {
          "product-enquiry": "Product Enquiry",
          "bulk-order-quote": "Bulk Order Quote",
          "general-query": "General Query",
        }

        const emailSubject = `New Contact Message from ${data.name} - ${enquiryTypeLabels[data.enquiryType] || data.enquiryType}`

        const emailHtml = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { border-bottom: 3px solid #FF8C00; padding-bottom: 16px; margin-bottom: 24px; }
                .field { margin-bottom: 16px; }
                .field-label { font-weight: bold; color: #666; }
                .field-value { color: #333; margin-top: 4px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2>New Contact Message</h2>
                </div>
                <div class="field">
                  <div class="field-label">Name:</div>
                  <div class="field-value">${data.name}</div>
                </div>
                <div class="field">
                  <div class="field-label">Company:</div>
                  <div class="field-value">${data.company || "Not provided"}</div>
                </div>
                <div class="field">
                  <div class="field-label">Email:</div>
                  <div class="field-value"><a href="mailto:${data.email}">${data.email}</a></div>
                </div>
                <div class="field">
                  <div class="field-label">Phone:</div>
                  <div class="field-value"><a href="tel:${data.phone}">${data.phone}</a></div>
                </div>
                <div class="field">
                  <div class="field-label">Enquiry Type:</div>
                  <div class="field-value">${enquiryTypeLabels[data.enquiryType] || data.enquiryType}</div>
                </div>
                <div class="field">
                  <div class="field-label">Message:</div>
                  <div class="field-value">${data.message.replace(/\n/g, "<br/>")}</div>
                </div>
                <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;">
                <div style="font-size: 12px; color: #999; text-align: center;">
                  <p>View all messages in your admin dashboard: <a href="https://${process.env.VERCEL_URL || "localhost:3000"}/admin">/admin</a></p>
                  <p>Submitted at: ${new Date().toLocaleString()}</p>
                </div>
              </div>
            </body>
          </html>
        `

        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "PND Industrial Suppliers <noreply@resend.dev>",
            to: [adminEmail],
            subject: emailSubject,
            html: emailHtml,
          }),
        })

        if (!response.ok) {
          const errorData = await response.text()
          console.error("[v0] Email notification failed:", response.status, errorData)
        } else {
          console.log("[v0] Email notification sent successfully to:", adminEmail)
        }
      } catch (emailError) {
        console.error("[v0] Email error:", emailError)
        // Don't fail the entire submission if email fails - data is already saved
      }
    } else {
      console.warn("[v0] RESEND_API_KEY not configured - email notifications disabled")
    }

    return NextResponse.json({ success: true, data: contact })
  } catch (error) {
    console.error("[v0] Contact API error:", error)
    return NextResponse.json(
      { success: false, error: "Failed to submit message. Please try again." },
      { status: 500 }
    )
  }
}
