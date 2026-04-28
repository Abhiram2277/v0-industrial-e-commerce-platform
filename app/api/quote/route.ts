import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

// Generate unique quote reference number
function generateQuoteReference(): string {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  const random = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0")
  return `QT-${year}-${month}-${day}-${random}`
}

// Generate customer confirmation email HTML
function generateCustomerEmailHTML(
  quoteReference: string,
  items: Array<{ name: string; brand?: string; quantity: string | number }>,
  customerName: string
): string {
  const itemsList = items
    .map(
      (item) =>
        `
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
        <strong>${item.name}</strong>
        ${item.brand ? `<br/><small style="color: #6b7280;">${item.brand}</small>` : ""}
      </td>
      <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right;">
        ${item.quantity} units
      </td>
    </tr>
  `
    )
    .join("")

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
          }
          .container {
            background-color: #f9fafb;
            padding: 20px;
          }
          .email-content {
            background-color: white;
            border-radius: 8px;
            padding: 32px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          }
          .header {
            border-bottom: 3px solid #FF8C00;
            padding-bottom: 16px;
            margin-bottom: 24px;
          }
          .header h1 {
            margin: 0;
            color: #1a1a2e;
            font-size: 24px;
          }
          .reference-badge {
            display: inline-block;
            background-color: #FFF5EB;
            color: #FF8C00;
            padding: 8px 12px;
            border-radius: 4px;
            font-weight: bold;
            font-size: 14px;
            margin-top: 8px;
          }
          .quote-items {
            margin: 24px 0;
          }
          .quote-items table {
            width: 100%;
            border-collapse: collapse;
          }
          .quote-items th {
            background-color: #f3f4f6;
            padding: 12px;
            text-align: left;
            font-weight: 600;
            border-bottom: 2px solid #e5e7eb;
          }
          .info-section {
            background-color: #f0f9ff;
            border-left: 4px solid #0ea5e9;
            padding: 16px;
            margin: 20px 0;
            border-radius: 4px;
          }
          .info-section h3 {
            margin: 0 0 8px 0;
            color: #0369a1;
            font-size: 14px;
            font-weight: 600;
          }
          .info-section p {
            margin: 4px 0;
            color: #333;
            font-size: 14px;
          }
          .footer-text {
            color: #6b7280;
            font-size: 12px;
            margin-top: 24px;
            padding-top: 16px;
            border-top: 1px solid #e5e7eb;
          }
          .divider {
            height: 1px;
            background-color: #e5e7eb;
            margin: 24px 0;
          }
          .logo {
            text-align: center;
            margin-bottom: 24px;
            padding-bottom: 16px;
            border-bottom: 1px solid #e5e7eb;
          }
          .logo img {
            max-height: 60px;
            max-width: 200px;
            display: inline-block;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="email-content">
            <div class="logo">
              <img src="https://pndindustrialsuppliers.com/favicon.png" alt="PND Industrial Suppliers Logo" style="max-height: 80px; width: auto; object-fit: contain;" />
            </div>

            <div class="header">
              <h1>Quote Request Confirmation</h1>
              <div class="reference-badge">${quoteReference}</div>
            </div>

            <p>Hi <strong>${customerName}</strong>,</p>
            <p>Thank you for requesting a quote from <strong>PND Industrial Suppliers</strong>! We&apos;ve received your request and our team is already working on it.</p>

            <div class="info-section">
              <h3>📋 What Happens Next?</h3>
              <p>Our sales team will review your request and prepare a detailed quote with:</p>
              <p>✓ Competitive pricing based on your quantities<br/>
              ✓ Availability confirmation<br/>
              ✓ Bulk discounts (if applicable)<br/>
              ✓ Delivery timeline<br/>
              ✓ Payment terms</p>
            </div>

            <div class="quote-items">
              <h3 style="margin: 0 0 16px 0; color: #1a1a2e;">📦 Items in Your Quote</h3>
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th style="text-align: right;">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  ${itemsList}
                </tbody>
              </table>
            </div>

            <div class="divider"></div>

            <div class="info-section">
              <h3>⏱️ Response Timeline</h3>
              <p><strong>Expected Response: Within 24 hours</strong></p>
              <p>We&apos;ll send you a detailed quote via email with all the information you need to make a decision.</p>
            </div>

            <div class="info-section">
              <h3>📞 Need Immediate Assistance?</h3>
              <p>If you need to discuss your requirements before receiving the quote, our team is available on WhatsApp for instant support.</p>
            </div>

            <div class="footer-text">
              <p><strong>Reference Number:</strong> ${quoteReference}</p>
              <p>Keep this reference number for your records. You can use it when contacting our sales team.</p>
              <p style="margin-top: 16px; color: #999;">This is an automated confirmation email. Please do not reply to this email. For inquiries, please contact our sales team directly.</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `
}

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const data = await request.json()

    // Generate quote reference
    const quoteReference = generateQuoteReference()

    // Handle both old format (single product) and new format (multiple products)
    const quoteItems = data.quoteItems || []
    const firstItem = quoteItems[0] || {}
    
    const { data: quote, error } = await supabase
      .from("quotes")
      .insert({
        reference_number: quoteReference,
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        category: data.category || firstItem.category || null,
        product_name: data.productName || firstItem.product || null,
        quantity: data.quantity ? Number.parseInt(data.quantity) : (firstItem.quantity ? Number.parseInt(firstItem.quantity) : null),
        message: data.message,
        cart_items: data.cartItems || null,
        quote_items: quoteItems.length > 0 ? quoteItems : null,
      })
      .select()
      .single()

    if (error) {
      console.error("[v0] Error saving quote:", error)
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    console.log("[v0] Quote saved successfully:", quote.id)

    // Combine all items for email
    const allItems = [
      ...(data.cartItems || []).map((item: any) => ({
        name: item.name,
        brand: item.brand || "",
        quantity: item.quantity.toString(),
      })),
      ...(quoteItems || []).map((item: any) => ({
        name: item.product || "Custom Product",
        brand: "",
        quantity: item.quantity || "1",
      })),
    ].filter((item) => item.name)

    // Send confirmation email to customer
    if (process.env.RESEND_API_KEY && data.email) {
      try {
        const customerEmailHTML = generateCustomerEmailHTML(quoteReference, allItems, data.name)

        console.log("[v0] Attempting to send customer email to:", data.email)

        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL || "PND Industrial Suppliers <noreply@resend.dev>",
            to: data.email,
            subject: `Quote Confirmation - Reference ${quoteReference}`,
            html: customerEmailHTML,
          }),
        })

        const responseBody = await response.json()
        console.log("[v0] Resend API response status:", response.status)
        console.log("[v0] Resend API response:", responseBody)

        if (!response.ok) {
          console.error("[v0] Failed to send customer confirmation email:", responseBody)
        } else {
          console.log("[v0] Customer confirmation email sent successfully to", data.email)
        }
      } catch (emailError) {
        console.error("[v0] Customer email error:", emailError)
      }
    } else {
      if (!process.env.RESEND_API_KEY) {
        console.warn("[v0] RESEND_API_KEY not configured")
      }
      if (!data.email) {
        console.warn("[v0] No customer email provided")
      }
    }

    // Send admin notification email
    if (process.env.RESEND_API_KEY) {
      try {
        const adminEmail = process.env.ADMIN_EMAIL || "pndindustrialsuppliers@gmail.com"

        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL || "PND Industrial Suppliers <noreply@resend.dev>",
            to: [adminEmail],
            subject: `New Quote Request - Reference ${quoteReference}`,
            html: `
              <h2>New Quote Request - ${quoteReference}</h2>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              <p><strong>Company:</strong> ${data.company || "N/A"}</p>
              <p><strong>Message:</strong> ${data.message || "N/A"}</p>
              ${
                quoteItems.length > 0
                  ? `
                <h3>Requested Products:</h3>
                <ul>
                  ${quoteItems.map((item: any) => `<li>${item.product || 'Any product'} (${item.category || 'Any category'}) - Qty: ${item.quantity || 1}</li>`).join("")}
                </ul>
              `
                  : ""
              }
              ${
                data.cartItems && data.cartItems.length > 0
                  ? `
                <h3>Cart Items:</h3>
                <ul>
                  ${data.cartItems.map((item: any) => `<li>${item.name} (${item.brand || "Generic"}) - Qty: ${item.quantity}</li>`).join("")}
                </ul>
              `
                  : ""
              }
              <br/>
              <p><small>View all quotes in your admin dashboard</small></p>
            `,
          }),
        })

        if (!response.ok) {
          const errorText = await response.text()
          console.error("[v0] Failed to send admin email notification:", errorText)
        } else {
          console.log("[v0] Admin email notification sent successfully to", adminEmail)
        }
      } catch (emailError) {
        console.error("[v0] Admin email error:", emailError)
      }
    }

    return NextResponse.json({ success: true, data: { ...quote, quoteReference } })
  } catch (error) {
    console.error("[v0] Quote API error:", error)
    return NextResponse.json({ success: false, error: "Failed to submit quote" }, { status: 500 })
  }
}

