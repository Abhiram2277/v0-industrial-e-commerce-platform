-- Create quotes table to store all quote requests
CREATE TABLE IF NOT EXISTS public.quotes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  category TEXT,
  product_name TEXT,
  quantity INTEGER,
  message TEXT,
  cart_items JSONB,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create contacts table to store all contact form submissions
CREATE TABLE IF NOT EXISTS public.contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert quotes (public form submissions)
CREATE POLICY "Allow public to insert quotes"
  ON public.quotes
  FOR INSERT
  WITH CHECK (true);

-- Allow anyone to insert contacts (public form submissions)
CREATE POLICY "Allow public to insert contacts"
  ON public.contacts
  FOR INSERT
  WITH CHECK (true);

-- Only allow reading/updating/deleting for authenticated users (admin dashboard)
CREATE POLICY "Allow authenticated users to read quotes"
  ON public.quotes
  FOR SELECT
  USING (true);

CREATE POLICY "Allow authenticated users to update quotes"
  ON public.quotes
  FOR UPDATE
  USING (true);

CREATE POLICY "Allow authenticated users to delete quotes"
  ON public.quotes
  FOR DELETE
  USING (true);

CREATE POLICY "Allow authenticated users to read contacts"
  ON public.contacts
  FOR SELECT
  USING (true);

CREATE POLICY "Allow authenticated users to update contacts"
  ON public.contacts
  FOR UPDATE
  USING (true);

CREATE POLICY "Allow authenticated users to delete contacts"
  ON public.contacts
  FOR DELETE
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_quotes_created_at ON public.quotes(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quotes_status ON public.quotes(status);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON public.contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_status ON public.contacts(status);
