# 🔐 NairaRolls Authentication Guide

## Registration vs Login

### 📝 Registration (`/auth/register`)

The registration page is for **creating a new organization account**. Here's what happens:

**Current Implementation (Demo Mode):**
1. Fill out the 3-step registration form:
   - **Step 1**: Organization details (name, type, expected volume)
   - **Step 2**: Contact information (name, email, phone)
   - **Step 3**: Terms & confirmation
2. Click "Create Account"
3. Account is created **instantly** (stored locally in browser)
4. You're **automatically redirected** to the dashboard
5. **No email is sent** (this is a demo/prototype)

**⚠️ Important Notes:**
- ❌ **No email verification** is sent currently
- ❌ **No backend API** is connected
- ✅ Account data is stored in browser (Zustand state)
- ✅ You can immediately access the dashboard
- ✅ In production, you would receive email verification

**What You Should Do After Registration:**
1. After being redirected to dashboard
2. **Connect your wallet** using the wallet button in the header
3. This links your blockchain wallet to your organization
4. Start using the platform!

---

## How to Log In

### ✅ Wallet Login (Recommended)

NairaRolls uses **Push Chain** for universal wallet support, which means you can log in using:

#### 1. **Email Login** 📧
- Click "Connect Wallet" on the login page
- Choose "Email" option in the Push Chain modal
- Enter your email address
- Check your email for a verification link/code
- Click the link or enter the code to authenticate
- You'll be automatically logged in and redirected to the dashboard

#### 2. **Social Login** 🌐
- Click "Connect Wallet" on the login page
- Choose "Google" (or other social providers)
- Authenticate with your Google account
- Automatically logged in and redirected

#### 3. **Traditional Wallet** 👛
- Click "Connect Wallet" on the login page
- Choose your wallet (MetaMask, WalletConnect, etc.)
- Approve the connection in your wallet
- Automatically logged in and redirected

### 🔄 Login Flow

```
1. Visit /auth/login
   ↓
2. Click "Connect Wallet" button
   ↓
3. Push Chain modal opens with options:
   - Email
   - Google
   - MetaMask
   - WalletConnect
   - Other wallets
   ↓
4. Choose your preferred method
   ↓
5. Complete authentication
   ↓
6. Automatic login + redirect to dashboard
```

## 📧 Email Login Details

**Yes, you should receive an email!** Here's what happens:

1. **Enter your email** in the Push Chain wallet modal
2. **Check your inbox** for an email from Push Protocol
3. **Click the verification link** or enter the code
4. **Wallet is created** - Push Chain creates a Universal Executor Account (UEA) for you
5. **Auto-login** - You're automatically logged into NairaRolls

### Email Not Arriving?

- Check your **spam/junk folder**
- Wait 1-2 minutes (emails can be delayed)
- Ensure you entered the correct email address
- Try a different email provider if issues persist
- Check Push Protocol status page

## 🚫 Email/Password Login

The traditional email/password login (the second tab on the login page) is **NOT YET IMPLEMENTED**. 

Currently, only **wallet-based authentication** is supported. This includes:
- ✅ Email via Push Chain (creates a wallet for you)
- ✅ Social login via Push Chain
- ✅ Traditional crypto wallets

## 🔧 Troubleshooting

### "Nothing happens when I click Connect Wallet"

**Solution:**
1. Ensure JavaScript is enabled in your browser
2. Clear browser cache and cookies
3. Try a different browser (Chrome, Firefox, Brave)
4. Check browser console for errors (F12 → Console tab)

### "Wallet connects but doesn't log me in"

**Solution:**
- The latest update fixes this! The app now automatically logs you in after wallet connection
- If still having issues:
  1. Disconnect your wallet
  2. Refresh the page
  3. Try connecting again

### "Email verification link doesn't work"

**Solution:**
1. Make sure you're clicking the link in the same browser
2. Try copying and pasting the link into your browser
3. Request a new verification email
4. Contact Push Protocol support if issue persists

### "I'm stuck on 'Logging you in...'"

**Solution:**
1. Wait 30 seconds - it may just be slow
2. Refresh the page and try again
3. Check your internet connection
4. Try a different wallet connection method

## 🌐 Supported Chains

When you connect via Push Chain, you can use wallets from:

- **Ethereum** and all EVM chains
- **Solana**
- **Base** (recommended for this app)
- **Polygon**
- **Arbitrum**
- **Optimism**
- **BNB Chain**
- **Avalanche**
- And many more...

## 🔐 Security Notes

### Email/Social Login Security

When you log in with email or social accounts via Push Chain:

1. **No password needed** - Uses cryptographic signatures
2. **MPC wallet** - Your keys are split and secured using Multi-Party Computation
3. **Non-custodial** - You control your wallet, not Push Protocol
4. **Recovery options** - Can recover access via email/social account

### Traditional Wallet Security

When using MetaMask or other wallets:

1. **You control your keys** - Keep your seed phrase safe
2. **Hardware wallet support** - Use Ledger/Trezor for extra security
3. **Transaction signing** - Approve each transaction manually

## 📱 Mobile Support

Push Chain wallets work on mobile browsers:

1. Open the app in your mobile browser
2. Connect wallet (email/social login recommended on mobile)
3. Complete authentication
4. Use the app normally

## 🆘 Still Having Issues?

### Quick Checks:
- [ ] Are you on the correct URL/domain?
- [ ] Is your internet connection stable?
- [ ] Have you tried a different browser?
- [ ] Did you check spam folder for email verification?
- [ ] Is JavaScript enabled?

### Get Help:
- **GitHub Issues**: Report bugs at the repository
- **Push Protocol Discord**: Get wallet connection help
- **Documentation**: Check [PUSH_CHAIN_INTEGRATION.md](./PUSH_CHAIN_INTEGRATION.md)

## 🎯 Quick Start

**First time user? Follow these steps:**

1. Go to `/auth/login`
2. Click the **"Connect Wallet"** button
3. Choose **"Email"** in the Push Chain modal
4. Enter your email address
5. Check your email and click the verification link
6. Wait for automatic redirect to dashboard
7. Start using NairaRolls! 🎉

---

## 💡 Pro Tips

- **Email login is easiest** for first-time users
- **Social login** is fastest if you have a Google account
- **Traditional wallets** give you more control if you're crypto-native
- **Save your wallet info** - You'll need it to log in again
- **Test with small amounts** before processing large payrolls

---

**Need more help?** Check out:
- [Quick Start Guide](./QUICK_START_PUSH_CHAIN.md)
- [Push Chain Integration Docs](./PUSH_CHAIN_INTEGRATION.md)
- [Main README](./README.md)
