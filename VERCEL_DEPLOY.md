# 🚀 Deploy to Vercel - Quick Guide

## Prerequisites
- GitHub account
- Vercel account (free at https://vercel.com)

## Step 1: Push to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - E-commerce Next.js app"

# Create main branch
git branch -M main

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

## Step 2: Deploy to Vercel

1. **Go to Vercel**: https://vercel.com
2. **Sign in with GitHub**
3. **Click "Add New..."** → "Project"
4. **Import your repository**
5. **Configure project**:
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (leave default)
   - Build Command: `next build` (auto-detected)
   - Output Directory: `.next` (auto-detected)

6. **Add Environment Variables**:

Click "Environment Variables" and add these:

```
NEXT_PUBLIC_SUPABASE_URL
https://tzelnqglliypdlxqimvt.supabase.co

NEXT_PUBLIC_SUPABASE_ANON_KEY
[Your Supabase anon key - starts with eyJ...]

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
pk_test_51SrhPBPCB1maklwHXChuO3d90uKkmngvNGrAYHTSjFhrIIELj8X5BigWCwxseZGJqS1ZIvHYbgWBWh9Gz5Lrz0Za00qJh

STRIPE_SECRET_KEY
sk_test_51SrhPBPCB1maklwHx1lXTyhQnC6goAVXr5B8bZ53Hf6XlhWV9y0zeVWmku2RktON7vLc9iRtTPry45Kk1sPYpwr700W47
```

7. **Click "Deploy"**

## Step 3: Wait for Deployment

Vercel will:
- ✅ Clone your repository
- ✅ Install dependencies
- ✅ Build your Next.js app
- ✅ Deploy to production

Takes about 2-3 minutes.

## Step 4: Your App is Live! 🎉

Once deployed, you'll get a URL like:
- `https://your-project.vercel.app`

## Automatic Deployments

Every time you push to GitHub, Vercel will automatically:
- Build and deploy your changes
- Run on a preview URL first
- Promote to production when ready

## Custom Domain (Optional)

To use your own domain:
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS instructions

## Environment Variables for Production

If you need to switch to production Stripe keys:

1. Go to your Vercel project
2. Settings → Environment Variables
3. Update the Stripe keys:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` → use `pk_live_...`
   - `STRIPE_SECRET_KEY` → use `sk_live_...`
4. Redeploy

## Troubleshooting

### Build fails?
- Check build logs in Vercel dashboard
- Make sure all environment variables are set
- Verify your code builds locally: `npm run build`

### 404 errors?
- Vercel handles Next.js routing automatically
- Check that your pages are in the correct `app/` directory

### Environment variables not working?
- Make sure they start with `NEXT_PUBLIC_` for client-side variables
- Redeploy after adding/changing variables

## Vercel CLI (Alternative Method)

You can also deploy directly from terminal:

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Monitoring Your App

Vercel provides:
- 📊 Analytics
- 🐛 Error tracking
- ⚡ Performance metrics
- 📈 Usage statistics

Access these in your project dashboard.

---

That's it! Your e-commerce app is now live on Vercel! 🚀
