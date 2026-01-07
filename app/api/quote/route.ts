import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const data = await request.json()

    const { data: quote, error } = await supabase
      .from("quotes")
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        category: data.category,
        product_name: data.productName,
        quantity: data.quantity ? Number.parseInt(data.quantity) : null,
        message: data.message,
        cart_items: data.cartItems || null,
      })
      .select()
      .single()

    if (error) {
      console.error("[v0] Error saving quote:", error)
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    console.log("[v0] Quote saved successfully:", quote.id)

    if (process.env.RESEND_API_KEY) {
      try {
        // Use environment variable or default to common PND email patterns
        const adminEmail = process.env.ADMIN_EMAIL || "abhiramgollapalli@gmail.com"

        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "PND Industrial Suppliers <noreply@resend.dev>", // Using Resend's test domain
            to: [adminEmail],
            subject: `New Quote Request from ${data.name}`,
            html: `
              <h2>New Quote Request</h2>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              <p><strong>Company:</strong> ${data.company || "N/A"}</p>
              <p><strong>Category:</strong> ${data.category || "N/A"}</p>
              <p><strong>Product:</strong> ${data.productName || "N/A"}</p>
              <p><strong>Quantity:</strong> ${data.quantity || "N/A"}</p>
              <p><strong>Message:</strong> ${data.message || "N/A"}</p>
              ${
                data.cartItems && data.cartItems.length > 0
                  ? `
                <h3>Cart Items:</h3>
                <ul>
                  ${data.cartItems.map((item: any) => `<li>${item.name} - Qty: ${item.quantity}</li>`).join("")}
                </ul>
              `
                  : ""
              }
              <br/>
              <p><small>View all quotes in your admin dashboard at /admin</small></p>
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
        // Don't fail the request if email fails
      }
    }

    return NextResponse.json({ success: true, data: quote })
  } catch (error) {
    console.error("[v0] Quote API error:", error)
    return NextResponse.json({ success: false, error: "Failed to submit quote" }, { status: 500 })
  }
}
