# ⚡ QUICK START - E-Commerce Next.js App

## 📦 What You Have

A complete ZIP file containing a fully functional e-commerce application built with:
- Next.js 14 (Frontend + Backend)
- Supabase (Database + Auth)
- Stripe (Payments)
- Tailwind CSS (Styling)

## 🚀 Get Running in 5 Minutes

### 1️⃣ Extract ZIP File
Unzip `ecommerce-nextjs.zip` to your preferred location

### 2️⃣ Install Dependencies
```bash
cd ecommerce-nextjs
npm install
```
⏱️ Takes about 1-2 minutes

### 3️⃣ Setup Database
1. Go to: https://supabase.com/dashboard
2. Open your project: `tzelnqglliypdlxqimvt`
3. Click **SQL Editor** (left sidebar)
4. Open file: `database/schema.sql`
5. Copy ALL contents
6. Paste into SQL Editor
7. Click **Run** (or Ctrl/Cmd + Enter)
8. Wait for: "Database schema created successfully! You now have 6 products."

### 4️⃣ Configure Environment
1. Rename `.env.example` to `.env.local`
2. Get your Supabase keys:
   - Dashboard → Settings → API
   - Copy **Project URL**
   - Copy **anon public** key (long JWT)
3. Edit `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://tzelnqglliypdlxqimvt.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc... (paste your key)

# Stripe keys (already filled in for testing)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51SrhPBPCB...
STRIPE_SECRET_KEY=sk_test_51SrhPBPCB...
```

### 5️⃣ Run the App
```bash
npm run dev
```

### 6️⃣ Open in Browser
Go to: http://localhost:3000

## ✅ Test It Out

### Create Account
1. Click "Sign In" button
2. Click "Don't have an account? Sign up"
3. Enter email, password, name
4. Check email for verification (or skip for testing)

### Add to Cart
1. Browse products on homepage
2. Click "Add" button on any product
3. Click cart icon (top right)
4. See your items

### Test Checkout
1. In cart, click "Proceed to Checkout"
2. Use test card: `4242 4242 4242 4242`
3. Expiry: any future date (e.g., `12/34`)
4. CVC: any 3 digits (e.g., `123`)
5. ZIP: any 5 digits (e.g., `12345`)
6. Complete payment
7. See success page!

## 📁 What's Inside

```
ecommerce-nextjs/
├── app/                    # All pages and API routes
│   ├── page.tsx           # Homepage with products
│   ├── cart/              # Shopping cart
│   ├── auth/              # Login/Signup
│   ├── wishlist/          # Wishlist page
│   ├── success/           # Payment success
│   └── api/checkout/      # Stripe checkout API
├── components/            # React components
├── lib/                   # Supabase & Stripe clients
├── types/                 # TypeScript types
├── database/              # SQL schema
├── README.md              # Full documentation
└── VERCEL_DEPLOY.md       # Deployment guide
```

## 🎨 Features Included

✅ Product browsing with images
✅ Category filtering & sorting
✅ Shopping cart with quantities
✅ User authentication (signup/signin)
✅ Wishlist functionality
✅ Stripe checkout
✅ Responsive design
✅ 6 sample products included
✅ Secure database with RLS
✅ Image optimization

## 🚀 Deploy to Production

See `VERCEL_DEPLOY.md` for step-by-step deployment to Vercel (free hosting).

Quick version:
```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git push

# Deploy to Vercel
# Go to vercel.com → Import GitHub repo → Deploy
```

## 📚 Documentation

- **Full Setup Guide**: `README.md` (comprehensive)
- **Deployment Guide**: `VERCEL_DEPLOY.md` (Vercel specific)
- **Database Schema**: `database/schema.sql`

## 🐛 Common Issues

**"Module not found"**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Database not connecting**
- Check `.env.local` has correct Supabase URL and key
- Make sure you ran the SQL schema

**Stripe not working**
- Test card: `4242 4242 4242 4242`
- Check both Stripe keys in `.env.local`

**Build errors**
```bash
rm -rf .next
npm run dev
```

## 🎯 Next Steps

1. ✅ Get it running locally (you're here!)
2. 📝 Customize products in database
3. 🎨 Change colors in `tailwind.config.js`
4. 🚀 Deploy to Vercel
5. 🌐 Add your custom domain
6. 📧 Add email notifications
7. 📊 Add analytics

## 💡 Pro Tips

- Always use Stripe test mode for development
- Sample products use Unsplash images (free)
- Check browser console if something doesn't work
- Supabase has logs in the dashboard
- Stripe has logs in the dashboard

## 🆘 Need Help?

1. Check error messages in browser console (F12)
2. Review logs in Supabase dashboard
3. Check Stripe dashboard for payment issues
4. Read `README.md` for detailed troubleshooting

---

## That's It! 🎉

You now have:
- ✅ A working e-commerce app
- ✅ Full source code
- ✅ Database with sample products
- ✅ Payment processing setup
- ✅ User authentication
- ✅ Professional UI

**Ready to customize and deploy!** 🚀

---

**Quick Command Reference:**

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Run production build
npm run lint     # Check code quality
```

**Important URLs:**
- Local app: http://localhost:3000
- Supabase: https://supabase.com/dashboard
- Stripe: https://dashboard.stripe.com
- Vercel: https://vercel.com

Happy coding! 💻✨
