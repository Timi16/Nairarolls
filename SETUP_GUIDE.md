# Setup Guide - Getting Started

## 🚨 Quick Fix for Current Error

You're seeing this error because Thirdweb credentials are missing. Follow these steps:

---

## Step 1: Get Thirdweb Client ID

### Option A: Get Free Client ID (Recommended)

1. **Visit Thirdweb Dashboard**
   - Go to: https://thirdweb.com/dashboard

2. **Sign Up / Login**
   - Create a free account or login

3. **Create API Key**
   - Click "Settings" → "API Keys"
   - Click "Create API Key"
   - Copy your **Client ID**

4. **Add to .env.local**
   ```bash
   # Open the file
   nano /home/lynndabel/Nairarolls/frontend/.env.local
   
   # Replace with your actual client ID
   NEXT_PUBLIC_THIRDWEB_CLIENT_ID=your_actual_client_id_here
   ```

### Option B: Use Demo Mode (Temporary)

If you want to test Push Chain only (without Thirdweb), you can temporarily disable Thirdweb:

1. **Comment out Thirdweb in layout.tsx**
   ```typescript
   // Temporarily disable Thirdweb
   // <ThirdwebProvider>
     {children}
   // </ThirdwebProvider>
   ```

---

## Step 2: Install Dependencies (Already Done ✅)

```bash
cd /home/lynndabel/Nairarolls/frontend
npm install
```

---

## Step 3: Start Development Server

```bash
npm run dev
```

Visit:
- **Main App**: http://localhost:3000
- **Push Chain Demo**: http://localhost:3000/push-chain-demo

---

## Environment Variables Reference

### Required for Thirdweb
```bash
NEXT_PUBLIC_THIRDWEB_CLIENT_ID=your_client_id
```

### Optional
```bash
# Only needed for server-side Thirdweb operations
NEXT_PUBLIC_THIRDWEB_SECRET_KEY=your_secret_key

# Your deployed contract address
NEXT_PUBLIC_NAIRA_ROLLS_MULTISIG_FACTORY=0x...
```

### Not Needed for Push Chain
Push Chain UI Kit doesn't require environment variables! It's configured in code at:
`/components/providers/PushChainProvider.tsx`

---

## Quick Test Without Thirdweb

If you want to test Push Chain immediately without setting up Thirdweb:

### 1. Temporarily Disable Thirdweb

Edit `/home/lynndabel/Nairarolls/frontend/app/layout.tsx`:

```typescript
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <PushChainProvider>
          {/* Temporarily commented out */}
          {/* <ThirdwebProvider> */}
            <SonnerToaster />
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          {/* </ThirdwebProvider> */}
        </PushChainProvider>
      </body>
    </html>
  );
}
```

### 2. Start Server
```bash
npm run dev
```

### 3. Visit Push Chain Demo
http://localhost:3000/push-chain-demo

---

## Troubleshooting

### Error: "No client ID provided"
**Solution**: Add `NEXT_PUBLIC_THIRDWEB_CLIENT_ID` to `.env.local`

### Error: "Module not found: pino-pretty"
**Solution**: Already fixed! ✅ (installed as dev dependency)

### Push Chain not working
**Solution**: 
1. Check browser console for errors
2. Ensure PushChainProvider is in layout.tsx
3. Try clearing browser cache

### Port 3000 already in use
**Solution**:
```bash
# Kill existing process
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

---

## File Structure Check

Ensure these files exist:

```
frontend/
├── .env.local                           # ✅ Created (needs your client ID)
├── .env.example                         # ✅ Template
├── app/
│   ├── layout.tsx                       # ✅ Has PushChainProvider
│   └── client.ts                        # ✅ Fixed to use NEXT_PUBLIC_
├── components/
│   ├── providers/
│   │   └── PushChainProvider.tsx        # ✅ Push Chain config
│   └── PushWalletButton.tsx             # ✅ Wallet button
└── hooks/
    └── usePushChainPayroll.ts           # ✅ Payroll hook
```

---

## Next Steps After Setup

1. **Get Thirdweb Client ID** (5 minutes)
   - Visit https://thirdweb.com/dashboard
   - Create API key
   - Add to `.env.local`

2. **Restart Dev Server**
   ```bash
   npm run dev
   ```

3. **Test Push Chain Demo**
   - Visit http://localhost:3000/push-chain-demo
   - Connect wallet from any chain
   - Test payment functionality

4. **Integrate into Your App**
   - Add `<PushWalletButton />` to your pages
   - Use `usePushChainPayroll()` hook for payments

---

## Quick Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Install missing dependencies
npm install
```

---

## Getting Help

### Documentation
- **Push Chain Integration**: `/PUSH_CHAIN_INTEGRATION.md`
- **Quick Start**: `/QUICK_START_PUSH_CHAIN.md`
- **Migration Guide**: `/MIGRATION_GUIDE.md`

### External Resources
- **Thirdweb Dashboard**: https://thirdweb.com/dashboard
- **Push Chain Docs**: https://pushchain.github.io/push-chain-website/
- **Next.js Docs**: https://nextjs.org/docs

---

## Summary

**Current Issue**: Missing Thirdweb Client ID

**Solution**: 
1. Get free client ID from https://thirdweb.com/dashboard
2. Add to `.env.local` as `NEXT_PUBLIC_THIRDWEB_CLIENT_ID`
3. Restart dev server

**Alternative**: Temporarily disable Thirdweb to test Push Chain only

---

**Need immediate testing?** Comment out `<ThirdwebProvider>` in layout.tsx and test Push Chain at `/push-chain-demo`!
