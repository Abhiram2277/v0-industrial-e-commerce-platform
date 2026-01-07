# Resend Email Configuration

## Current Status: Testing Mode

Your Resend account is currently in **testing mode**, which means:

- Emails can ONLY be sent to: `abhiramgollapalli@gmail.com` (your Resend account email)
- This is Resend's free tier restriction for security

## What's Working Now:

✅ Quote requests → Saved to database  
✅ Contact messages → Saved to database  
✅ Email notifications → Sent to `abhiramgollapalli@gmail.com`  
✅ Admin dashboard → View all submissions at `/admin`

## To Send Emails to Your Company Email (info@pndindustrial.com):

You need to **verify a domain** in Resend:

### Steps:

1. Go to https://resend.com/domains
2. Click "Add Domain"
3. Enter your domain: `pndindustrial.com`
4. Add the DNS records Resend provides to your domain provider
5. Wait for verification (usually 5-10 minutes)
6. Update the `from` email in the code to use your domain:
   ```
   from: "PND Industrial <noreply@pndindustrial.com>"
   ```

### Alternative (No Domain Verification):

Keep receiving emails at `abhiramgollapalli@gmail.com` - you can forward them to your company email manually, or set up Gmail forwarding rules.

### Current Configuration:

- All notifications go to: `abhiramgollapalli@gmail.com`
- Data is still saved to database
- Admin dashboard works perfectly
- You can change the recipient email by updating the `ADMIN_EMAIL` environment variable once domain is verified
