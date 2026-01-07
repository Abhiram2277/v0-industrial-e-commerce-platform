import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, Building2, Package, MessageSquare, Calendar, ShoppingCart } from "lucide-react"

export default async function AdminPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // For now, allow access without auth. You can uncomment below to require login
  // if (!user) {
  //   redirect("/admin/login")
  // }

  const { data: quotes } = await supabase.from("quotes").select("*").order("created_at", { ascending: false })

  const { data: contacts } = await supabase.from("contacts").select("*").order("created_at", { ascending: false })

  return (
    <div className="min-h-screen bg-secondary/10">
      <div className="border-b bg-background">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">Manage quotes and customer messages</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="quotes" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="quotes">Quote Requests ({quotes?.length || 0})</TabsTrigger>
            <TabsTrigger value="contacts">Contact Messages ({contacts?.length || 0})</TabsTrigger>
          </TabsList>

          <TabsContent value="quotes" className="mt-6 space-y-4">
            {quotes && quotes.length > 0 ? (
              quotes.map((quote) => (
                <Card key={quote.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{quote.name}</CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(quote.created_at).toLocaleString()}
                        </CardDescription>
                      </div>
                      <Badge variant={quote.status === "pending" ? "secondary" : "default"}>{quote.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <a href={`mailto:${quote.email}`} className="hover:underline">
                          {quote.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <a href={`tel:${quote.phone}`} className="hover:underline">
                          {quote.phone}
                        </a>
                      </div>
                      {quote.company && (
                        <div className="flex items-center gap-2 text-sm">
                          <Building2 className="h-4 w-4 text-muted-foreground" />
                          {quote.company}
                        </div>
                      )}
                      {quote.product_name && (
                        <div className="flex items-center gap-2 text-sm">
                          <Package className="h-4 w-4 text-muted-foreground" />
                          {quote.product_name}
                          {quote.quantity && ` (Qty: ${quote.quantity})`}
                        </div>
                      )}
                    </div>

                    {quote.cart_items && quote.cart_items.length > 0 && (
                      <div className="border-t pt-4">
                        <div className="flex items-center gap-2 text-sm font-semibold mb-2">
                          <ShoppingCart className="h-4 w-4" />
                          Cart Items:
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {quote.cart_items.map((item: any, idx: number) => (
                            <li key={idx}>
                              {item.name} - {item.brand} (Qty: {item.quantity})
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {quote.message && (
                      <div className="border-t pt-4">
                        <div className="flex items-center gap-2 text-sm font-semibold mb-2">
                          <MessageSquare className="h-4 w-4" />
                          Message:
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{quote.message}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="py-12 text-center text-muted-foreground">No quote requests yet.</CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="contacts" className="mt-6 space-y-4">
            {contacts && contacts.length > 0 ? (
              contacts.map((contact) => (
                <Card key={contact.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{contact.name}</CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(contact.created_at).toLocaleString()}
                        </CardDescription>
                      </div>
                      <Badge variant={contact.status === "pending" ? "secondary" : "default"}>{contact.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <a href={`mailto:${contact.email}`} className="hover:underline">
                          {contact.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <a href={`tel:${contact.phone}`} className="hover:underline">
                          {contact.phone}
                        </a>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="text-sm font-semibold mb-2">Subject:</div>
                      <p className="text-sm text-muted-foreground">{contact.subject}</p>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex items-center gap-2 text-sm font-semibold mb-2">
                        <MessageSquare className="h-4 w-4" />
                        Message:
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{contact.message}</p>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="py-12 text-center text-muted-foreground">No contact messages yet.</CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
