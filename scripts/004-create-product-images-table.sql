-- Create product_images table to store image URLs
CREATE TABLE IF NOT EXISTS product_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id TEXT NOT NULL UNIQUE,
  image_url TEXT NOT NULL,
  storage_path TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add image_url column to products table if it doesn't exist
ALTER TABLE products ADD COLUMN IF NOT EXISTS image_url TEXT;

-- Create index on product_id for faster lookups
CREATE INDEX IF NOT EXISTS idx_product_images_product_id ON product_images(product_id);

-- Enable RLS on product_images
ALTER TABLE product_images ENABLE ROW LEVEL SECURITY;

-- Create policies for product_images
CREATE POLICY "Allow public read access to product images"
  ON product_images FOR SELECT
  USING (true);

CREATE POLICY "Allow authenticated users to update product images"
  ON product_images FOR UPDATE
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');
