# 🚀 E-Commerce Next.js App - Complete Setup Guide

## 📋 What You're Getting

A fully functional e-commerce web application built with:
- **Frontend & Backend**: Next.js 14 (App Router)
- **Database**: Supabase (PostgreSQL)
- **Payments**: Stripe
- **Styling**: Tailwind CSS
- **Authentication**: Supabase Auth

### ✨ Features Included:
- ✅ Product browsing with categories and filters
- ✅ Shopping cart functionality
- ✅ User authentication (sign up/sign in)
- ✅ Wishlist
- ✅ Stripe checkout integration
- ✅ Order management
- ✅ Responsive design
- ✅ Image optimization

---

## 🎯 Quick Start (5 Minutes)

### Step 1: Extract the ZIP File
Extract the `ecommerce-nextjs.zip` file to your desired location.

### Step 2: Install Dependencies
```bash
cd ecommerce-nextjs
npm install
```

### Step 3: Set Up Supabase Database

1. **Go to Supabase Dashboard**: https://supabase.com/dashboard
2. **Open your project**: `tzelnqglliypdlxqimvt`
3. **Click on SQL Editor** (left sidebar)
4. **Create a new query**
5. **Copy and paste** the entire contents of `database/schema.sql`
6. **Click "Run"** (or press Ctrl/Cmd + Enter)
7. **Wait for success message**: "Database schema created successfully! You now have 6 products."

### Step 4: Configure Environment Variables

1. **Rename** `.env.example` to `.env.local`
2. **Get your Supabase keys**:
   - Go to Supabase Dashboard → Settings → API
   - Copy the **Project URL**
   - Copy the **anon public key** (the long JWT token)
3. **Update** `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://tzelnqglliypdlxqimvt.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc... (paste your full anon key here)

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51SrhPBPCB1maklwHXChuO3d90uKkmngvNGrAYHTSjFhrIIELj8X5BigWCwxseZGJqS1ZIvHYbgWBWh9Gz5Lrz0Za00qJh
STRIPE_SECRET_KEY=sk_test_51SrhPBPCB1maklwHx1lXTyhQnC6goAVXr5B8bZ53Hf6XlhWV9y0zeVWmku2RktON7vLc9iRtTPry45Kk1sPYpwr700W47
```

### Step 5: Run the Development Server
```bash
npm run dev
```

### Step 6: Open Your App
Open http://localhost:3000 in your browser

🎉 **You're done!** Your e-commerce app is now running!

---

## 🧪 Testing the App

### Test User Flow:
1. **Browse Products**: You'll see 6 sample products on the homepage
2. **Sign Up**: Click "Sign In" → Create an account
3. **Add to Cart**: Click "Add" button on any product
4. **View Cart**: Click cart icon in navbar
5. **Checkout**: Click "Proceed to Checkout"
   - Use Stripe test card: `4242 4242 4242 4242`
   - Any future expiry date (e.g., 12/34)
   - Any 3-digit CVC (e.g., 123)
   - Any ZIP code (e.g., 12345)

### Test Features:
- ✅ Filter by category (Electronics, Clothing, Home & Garden)
- ✅ Sort by price or newest
- ✅ Add/remove from cart
- ✅ Update quantities
- ✅ Add to wishlist (heart icon)
- ✅ Sign in/out

---

## 🚀 Deploying to Production

### Option 1: Deploy to Vercel (Recommended)

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Deploy to Vercel**:
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - **Add environment variables**:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
     - `STRIPE_SECRET_KEY`
   - Click "Deploy"

3. **Done!** Your app will be live at `your-project.vercel.app`

### Option 2: Deploy to Netlify

1. **Install Netlify CLI**:
```bash
npm install -g netlify-cli
```

2. **Build and Deploy**:
```bash
npm run build
netlify deploy --prod
```

3. **Add environment variables** in Netlify Dashboard:
   - Site settings → Environment variables
   - Add all variables from `.env.local`

---

## 📁 Project Structure

```
ecommerce-nextjs/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── checkout/      # Stripe checkout endpoint
│   ├── auth/              # Authentication page
│   ├── cart/              # Shopping cart page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navbar.tsx         # Navigation bar
│   └── ProductCard.tsx    # Product card component
├── lib/                   # Utility functions
│   ├── supabase.ts        # Supabase client
│   └── stripe.ts          # Stripe client
├── types/                 # TypeScript types
│   ├── index.ts           # App types
│   └── supabase.ts        # Database types
├── database/              # Database files
│   └── schema.sql         # Complete database schema
├── .env.example           # Environment variables template
├── package.json           # Dependencies
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS config
└── tsconfig.json          # TypeScript config
```

---

## 🔧 Customization Guide

### Adding More Products

**Option 1: Via SQL**
```sql
-- In Supabase SQL Editor
INSERT INTO products (name, description, price, category, stock_quantity) 
VALUES ('New Product', 'Description here', 49.99, 'electronics', 25);

-- Add image for the product
INSERT INTO product_images (product_id, image_url, alt_text, display_order)
VALUES (
  (SELECT id FROM products WHERE name = 'New Product'),
  'https://your-image-url.com/image.jpg',
  'Product image',
  0
);
```

**Option 2: Via Admin Panel** (you can build this)
Create an admin page that allows you to add products through a form.

### Changing Colors/Theme

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#8B5CF6',    // Change to your color
      secondary: '#EC4899',  // Change to your color
    },
  },
},
```

### Adding More Categories

Just use them in your products! Categories are dynamic based on what's in the database.

---

## 🔐 Environment Variables Reference

```env
# Frontend Variables (accessible in browser)
NEXT_PUBLIC_SUPABASE_URL=          # Your Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=     # Public anon key from Supabase
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY= # Stripe public key

# Backend Variables (server-only)
STRIPE_SECRET_KEY=                  # Stripe secret key (NEVER expose to frontend)
STRIPE_WEBHOOK_SECRET=              # Optional: Stripe webhook secret (add after deployment)
```

---

## 🎨 Stripe Webhook Setup (Optional)

**After deploying**, you can set up webhooks for real-time payment updates:

1. **Go to Stripe Dashboard**: https://dashboard.stripe.com/webhooks
2. **Click "Add endpoint"**
3. **Endpoint URL**: `https://your-domain.com/api/webhooks/stripe`
4. **Select events**:
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. **Copy webhook secret** (starts with `whsec_`)
6. **Add to environment variables**: `STRIPE_WEBHOOK_SECRET`

---

## 🐛 Troubleshooting

### "Module not found" errors
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Database connection issues
- Verify your `NEXT_PUBLIC_SUPABASE_URL` is correct
- Make sure you copied the full `NEXT_PUBLIC_SUPABASE_ANON_KEY` (it's very long)
- Check that you ran the `schema.sql` file in Supabase

### Stripe checkout not working
- Verify both Stripe keys are set correctly
- Use test card: `4242 4242 4242 4242`
- Check browser console for errors

### Images not loading
- Images use Unsplash URLs (should work by default)
- If blocked, update `next.config.js` to allow your image domain

### Build errors
```bash
# Make sure you're using Node.js 18+
node --version

# Clear Next.js cache
rm -rf .next
npm run dev
```

---

## 📚 Tech Stack Documentation

- **Next.js**: https://nextjs.org/docs
- **Supabase**: https://supabase.com/docs
- **Stripe**: https://stripe.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs

---

## 🎯 Next Steps

Now that your app is running, you can:

1. **Add more products** to the database
2. **Customize the design** (colors, fonts, layout)
3. **Add product details page** (`/product/[id]`)
4. **Build admin dashboard** for managing products
5. **Add order history page** for users
6. **Implement email notifications** with Resend/SendGrid
7. **Add reviews and ratings**
8. **Implement search functionality**
9. **Add product variants** (sizes, colors)
10. **Deploy to production**

---

## 💡 Tips

- Always test payments in Stripe test mode first
- Use the Stripe CLI for local webhook testing
- Monitor your Supabase dashboard for database performance
- Enable Supabase realtime for live cart updates
- Add analytics (Google Analytics, Plausible)
- Implement error tracking (Sentry)

---

## 🆘 Need Help?

If you run into issues:
1. Check the troubleshooting section above
2. Review error messages in browser console
3. Check Supabase logs in the dashboard
4. Review Stripe logs in the dashboard

---

## 🎉 Congratulations!

You now have a fully functional e-commerce application! 

**What you've accomplished:**
✅ Set up a modern tech stack
✅ Integrated payment processing
✅ Implemented user authentication
✅ Created a responsive UI
✅ Deployed a production-ready app

Happy coding! 🚀
