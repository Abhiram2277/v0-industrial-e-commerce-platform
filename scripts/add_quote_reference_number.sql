-- Add reference_number column to quotes table for tracking quote requests
ALTER TABLE quotes ADD COLUMN reference_number TEXT UNIQUE;

-- Create index on reference_number for faster lookups
CREATE INDEX idx_quotes_reference_number ON quotes(reference_number);
