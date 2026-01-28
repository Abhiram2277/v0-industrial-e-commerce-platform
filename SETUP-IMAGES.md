# Head Protection Images Setup Guide

This guide walks you through downloading Udyogi product images and uploading them to Supabase Storage.

## Prerequisites

- Supabase project set up
- Environment variables configured:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `SUPABASE_SERVICE_ROLE_KEY`

## Option 1: Using the API Endpoint (Recommended for Web)

### Step 1: Run the Migration
First, execute the database migration to create the `product_images` table:

```bash
# Using Supabase CLI
supabase db push scripts/004-create-product-images-table.sql

# Or manually in Supabase Dashboard:
# 1. Go to SQL Editor
# 2. Paste the SQL from scripts/004-create-product-images-table.sql
# 3. Execute
```

### Step 2: Call the Upload API

```bash
curl -X POST http://localhost:3000/api/admin/upload-head-protection-images \
  -H "Content-Type: application/json"
```

Or from your browser console:

```javascript
fetch('/api/admin/upload-head-protection-images', { method: 'POST' })
  .then(r => r.json())
  .then(console.log)
```

The API will:
1. Create the `products` storage bucket (if it doesn't exist)
2. Download each image from Udyogi website
3. Upload to Supabase Storage at `products/head-protection/{filename}.jpg`
4. Return success/failure status for each image

## Option 2: Using the TypeScript Script (For Local Environment)

### Step 1: Install Dependencies
```bash
npm install @supabase/supabase-js
```

### Step 2: Set Environment Variables
```bash
export NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
export SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
```

### Step 3: Run the Script
```bash
npx tsx scripts/setup-head-protection-images.ts
```

The script will:
- Create the storage bucket
- Download all 16 Udyogi images
- Upload them to Supabase
- Print the public URLs
- Generate SQL update statements

## Product Images Uploaded

| ID    | Product | Image File |
|-------|---------|-----------|
| hp-001 | Thermoguard Safety Helmet | thermoguard-helmet.jpg |
| hp-002 | Vista Safety Helmet | vista-helmet.jpg |
| hp-003 | Ultravent Safety Helmet | ultravent-helmet.jpg |
| hp-004 | Fusion Safety Helmet | fusion-helmet.jpg |
| hp-005 | Electra Safety Helmet | electra-helmet.jpg |
| hp-006 | UltraTuff Safety Helmet | ultratuff-helmet.jpg |
| hp-007 | Bump Cap - Blue | bump-cap-blue.jpg |
| hp-008 | Bump Cap - Green | bump-cap-green.jpg |
| hp-009 | Fusion Pro Safety Helmet | fusion-pro-helmet.jpg |
| hp-010 | Lighton Safety Helmet | lighton-helmet.jpg |
| hp-011 | Lighton ES Safety Helmet | lighton-es-helmet.jpg |
| hp-012 | Lighton V Safety Helmet | lighton-v-helmet.jpg |
| hp-013 | Ultra Pro Safety Helmet | ultra-pro-helmet.jpg |
| hp-014 | Proton Safety Helmet | proton-helmet.jpg |
| hp-015 | Prithvi Safety Helmet | prithvi-helmet.jpg |
| hp-016 | Ultra Safety Helmet | ultra-helmet.jpg |

## Verifying the Upload

After uploading, check your Supabase dashboard:

1. Go to **Storage** → **products** → **head-protection**
2. You should see 16 JPEG files
3. Click on any file to see the public URL

## Using the Images in Your App

The product URLs are already updated in `/lib/products/categories/head-protection.ts` and will display automatically in:
- Product explorer
- Product detail pages
- Category pages
- Search results

## Troubleshooting

### Images not showing
- Verify bucket is public in Supabase Storage settings
- Check that the URLs follow this pattern: `https://{supabase-url}/storage/v1/object/public/products/head-protection/{filename}.jpg`

### Download fails
- Check internet connection to Udyogi website
- Verify Udyogi images still exist at original URLs
- Increase timeout if network is slow

### Permission denied
- Ensure `SUPABASE_SERVICE_ROLE_KEY` is set correctly
- Service role key has full permissions on storage

## Notes

- All images are downloaded with proper attribution to Udyogi Safety
- As a dealership with copyright, you have permission to use these images
- Storage is public, so images load fast for all users
- Consider adding CDN/cache headers for optimal performance
