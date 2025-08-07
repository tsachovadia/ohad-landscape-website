# DNS Fix Instructions for ohadhaim.co.il

## 🚨 PROBLEM IDENTIFIED
- www.ohadhaim.co.il = NEW SITE (correct) ✅  
- ohadhaim.co.il = OLD SITE (incorrect) ❌

## 🔧 SOLUTION - Cloudflare DNS Fix

### Step 1: Login to Cloudflare
- URL: https://dash.cloudflare.com/
- Select domain: `ohadhaim.co.il`
- Go to: **DNS → Records**

### Step 2: Find and Edit A Record
**Current (problematic) setting:**
```
Type: A
Name: ohadhaim.co.il (or @)  
Value: 216.198.79.1
```

**Correct setting (change to):**
```
Type: A
Name: ohadhaim.co.il (or @)
Value: 64.29.17.65
```

### Step 3: Alternative Solution (CNAME)
If A record doesn't work, use CNAME:
```
Type: CNAME
Name: ohadhaim.co.il (or @)
Value: 7a619aea507b60f9.vercel-dns-017.com
```

### Step 4: Verification
After 5-10 minutes, test:
```bash
curl -sL https://ohadhaim.co.il | grep "יוצרים מרחבים"
```
Should return content with "יוצרים מרחבים" (new site)

## ✅ EXPECTED RESULT
Both domains will show the same NEW site:
- https://ohadhaim.co.il → NEW SITE
- https://www.ohadhaim.co.il → NEW SITE

## 🔗 Technical Details
- Domain Registrar: InterSpace Ltd  
- DNS Provider: Cloudflare  
- Name Servers: melody.ns.cloudflare.com, zac.ns.cloudflare.com  
- Target Vercel CNAME: 7a619aea507b60f9.vercel-dns-017.com  
- Target IP: 64.29.17.65 or 216.198.79.65

---
**Date:** 2025-08-07  
**Status:** Ready for implementation