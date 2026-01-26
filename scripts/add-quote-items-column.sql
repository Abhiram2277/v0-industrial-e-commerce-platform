-- Add quote_items column to quotes table to store multiple products
ALTER TABLE quotes ADD COLUMN IF NOT EXISTS quote_items jsonb;

-- Add a comment to describe the column
COMMENT ON COLUMN quotes.quote_items IS 'JSON array of products with category, product name, and quantity';
