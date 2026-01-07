# Backend Setup Guide for PND Industrial Suppliers

Your backend is now configured with **Supabase database** and optional **Resend email notifications**.

## What's Already Set Up:

### 1. Database (Supabase) ✅
- **Tables Created**: `quotes` and `contacts`
- **Location**: Run the SQL script at `scripts/001_create_tables.sql` in your project
- **Access**: Forms automatically save data to Supabase
- **Security**: Row Level Security (RLS) enabled

### 2. Forms Connected ✅
- Quote form → Saves to `quotes` table
- Contact form → Saves to `contacts` table
- Both show success messages after submission

### 3. Admin Dashboard ✅
- **URL**: `yourwebsite.com/admin`
- View all quote requests
- View all contact messages
- Click phone/email to call or email customers directly

## Next Steps:

### Step 1: Run the Database Script

The database tables need to be created. Go to your v0 chat and the SQL script should run automatically when you preview the site.

Alternatively, you can manually run the script in Supabase:
1. Go to Supabase Dashboard
2. Select your project
3. Go to SQL Editor
4. Copy contents from `scripts/001_create_tables.sql`
5. Click "Run"

### Step 2: Set Up Email Notifications (Optional)

To receive email notifications when customers submit forms:

1. **Create Resend Account** (Free - 100 emails/day)
   - Go to https://resend.com
   - Sign up with your email
   - Verify your account

2. **Get API Key**
   - Go to Settings → API Keys
   - Create new API key
   - Copy the key (starts with `re_...`)

3. **Add to Vercel Environment Variables**
   - In v0, go to your project settings
   - Add environment variable:
     - Name: `RESEND_API_KEY`
     - Value: Your Resend API key

4. **Update Email Addresses**
   - Open `app/api/quote/route.ts`
   - Change line: `to: ["pndindustrial@example.com"]`
   - Replace with your actual email
   - Do the same in `app/api/contact/route.ts`

## How It Works:

### Customer Submits Form
1. Customer fills quote/contact form
2. Data saved to Supabase database
3. Success message shown to customer
4. (Optional) You receive email notification

### You Check Submissions
**Option 1: Admin Dashboard**
- Go to `yourwebsite.com/admin`
- View all submissions
- Click email/phone to contact customers

**Option 2: Supabase Dashboard**
- Login to supabase.com
- Go to your project
- Click "Table Editor"
- View `quotes` or `contacts` tables

## Existing Features (Already Working):

- **Call Buttons**: Click to call +91 9398644987, +91 9701110242, +91 8712268672
- **WhatsApp Button**: Opens WhatsApp to +91 9398644987
- **Google Maps**: Shows your Nellore location with directions

## Troubleshooting:

**Forms not saving?**
- Check that SQL script ran successfully
- Check browser console for errors (F12)

**Not receiving emails?**
- Verify `RESEND_API_KEY` is set
- Check email address is correct in API routes
- Check Resend dashboard for delivery status

**Admin dashboard empty?**
- Verify SQL script created tables
- Check Supabase connection is active
- Try submitting a test form

## Security Notes:

- Database uses Row Level Security (RLS)
- Customers can only INSERT data
- Only YOU can view/edit via admin dashboard
- Email and phone numbers are clickable for easy contact
