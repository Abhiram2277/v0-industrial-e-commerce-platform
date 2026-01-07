import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const data = await request.json()

    const { data: contact, error } = await supabase
      .from("contacts")
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
      })
      .select()
      .single()

    if (error) {
      console.error("[v0] Error saving contact:", error)
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    console.log("[v0] Contact message saved successfully:", contact.id)

    if (process.env.RESEND_API_KEY) {
      try {
        const adminEmail = process.env.ADMIN_EMAIL || "abhiramgollapalli@gmail.com"

        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "PND Industrial Suppliers <noreply@resend.dev>",
            to: [adminEmail],
            subject: `New Contact Message from ${data.name}`,
            html: `
              <h2>New Contact Message</h2>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              <p><strong>Subject:</strong> ${data.subject}</p>
              <p><strong>Message:</strong></p>
              <p>${data.message}</p>
              <br/>
              <p><small>View all messages in your admin dashboard at /admin</small></p>
            `,
          }),
        })

        if (!response.ok) {
          console.error("[v0] Failed to send email notification")
        } else {
          console.log("[v0] Email notification sent successfully to", adminEmail)
        }
      } catch (emailError) {
        console.error("[v0] Email error:", emailError)
      }
    }

    return NextResponse.json({ success: true, data: contact })
  } catch (error) {
    console.error("[v0] Contact API error:", error)
    return NextResponse.json({ success: false, error: "Failed to submit message" }, { status: 500 })
  }
}
