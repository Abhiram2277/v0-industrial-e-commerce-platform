# URGENT: Fix Sitemap Domain Issue

## Problem Identified ⚠️

Your sitemap is currently showing URLs from `v0-industrial-ecommerce.vercel.app` instead of `pndindustrialsuppliers.com`.

**Current Sitemap Output:**
```
https://v0-industrial-ecommerce.vercel.app/
https://v0-industrial-ecommerce.vercel.app/about
https://v0-industrial-ecommerce.vercel.app/contact
```

**Expected Output:**
```
https://pndindustrialsuppliers.com/
https://pndindustrialsuppliers.com/about
https://pndindustrialsuppliers.com/contact
```

## Root Cause

The `NEXT_PUBLIC_SITE_URL` environment variable is **NOT SET** in your Vercel production environment. The sitemap is falling back to the default URL, which is incorrect.

## Solution: Set Environment Variable in Vercel

### Step 1: Go to Vercel Dashboard
1. Visit: https://vercel.com/dashboard
2. Select your project: `v0-industrial-e-commerce-platform`

### Step 2: Access Project Settings
1. Click **Settings** (top navigation)
2. Click **Environment Variables** (left sidebar)

### Step 3: Add the Environment Variable
1. Click **Add New** 
2. **Name:** `NEXT_PUBLIC_SITE_URL`
3. **Value:** `https://pndindustrialsuppliers.com`
4. **Environment:** Select `Production` (or all if you want it everywhere)
5. Click **Save**

### Step 4: Redeploy
1. Go to **Deployments** tab
2. Click the **...** menu on the latest deployment
3. Select **Redeploy**
4. Wait for deployment to complete (2-3 minutes)

### Step 5: Verify
1. Visit: `https://pndindustrialsuppliers.com/sitemap.xml`
2. Check that all URLs now show `pndindustrialsuppliers.com`

## Timeline
- ✅ Fix applied immediately after redeployment
- ✅ Sitemap updates automatically
- ✅ GSC will re-crawl within 24-48 hours

## What This Changes
- ✅ All sitemap URLs corrected
- ✅ All canonical tags work properly
- ✅ Robots.txt points to correct sitemap
- ✅ GSC can properly crawl your site
- ✅ No user-facing changes

## Verification Checklist

After redeployment, verify each:

- [ ] Visit `https://pndindustrialsuppliers.com/sitemap.xml`
- [ ] All URLs start with `https://pndindustrialsuppliers.com/`
- [ ] No URLs contain `v0-industrial-ecommerce.vercel.app`
- [ ] Open View Source and search for your domain
- [ ] Verify 180+ product/category/blog URLs are present
- [ ] Check Google Search Console shows new sitemap URLs

## Quick Status Check

Run this command to verify (or paste in browser):
```
https://pndindustrialsuppliers.com/sitemap.xml
```

Should show:
```xml
<url>
  <loc>https://pndindustrialsuppliers.com/</loc>
  <lastModified>2026-05-06T...</lastModified>
  <changeFrequency>daily</changeFrequency>
  <priority>1</priority>
</url>
```

## Support

If after redeployment the domain is still wrong:
1. Clear browser cache (Ctrl+Shift+Del or Cmd+Shift+Del)
2. Check Vercel env var was saved (should show under Environment Variables)
3. Verify deployment completed successfully
4. Check that this variable isn't set as preview-only

---

**Priority:** CRITICAL - This affects ALL indexing efforts
**Time to Fix:** 5 minutes
**Impact:** Immediate - sitemap will be correct within 3 minutes of redeployment
