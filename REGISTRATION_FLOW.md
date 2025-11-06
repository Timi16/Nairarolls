# 📝 NairaRolls Registration & Authentication Flow

## Current Implementation Status

### ⚠️ Important: This is a Demo/Prototype

The current authentication system is a **frontend-only demo**. Here's what's implemented and what's not:

## ✅ What Works Now

### Registration (`/auth/register`)

**3-Step Registration Form:**

1. **Organization Details**
   - Organization name
   - Organization type (Small Business, Enterprise, NGO, etc.)
   - Expected monthly volume
   - Optional description

2. **Contact Information**
   - Primary contact name
   - Contact email
   - Phone number

3. **Terms & Confirmation**
   - Agree to Terms of Service
   - Optional marketing consent
   - Review what happens next

**What Happens When You Click "Create Account":**

```
1. Form validation runs
   ↓
2. Data is stored in browser (Zustand state)
   ↓
3. Mock user and organization objects created
   ↓
4. Success toast notification shown
   ↓
5. Automatic redirect to /dashboard (after 1.5 seconds)
   ↓
6. You're now "logged in" with a demo account
```

**⚠️ What Does NOT Happen:**
- ❌ No email is sent
- ❌ No backend API call
- ❌ No database storage
- ❌ No email verification
- ❌ No password creation
- ❌ Data only exists in browser memory

### Login (`/auth/login`)

**Wallet-Based Login:**

The login page uses **Push Chain** for wallet authentication:

```
1. Click "Connect Wallet" button
   ↓
2. Push Chain modal opens with options:
   - Email (creates wallet via email)
   - Google (social login)
   - MetaMask
   - WalletConnect
   - Other wallets
   ↓
3. Complete authentication
   ↓
4. Wallet connection detected
   ↓
5. Auto-login triggered (useEffect hook)
   ↓
6. Mock user/org data created
   ↓
7. Redirect to /dashboard
```

**Email Login via Push Chain:**
- ✅ **Email IS sent** (by Push Protocol, not NairaRolls)
- ✅ You receive verification link
- ✅ Creates a Universal Executor Account (UEA)
- ✅ Fully functional wallet

**Traditional Email/Password Login:**
- ❌ **NOT implemented**
- The "Email" tab on login page shows error message
- Only wallet-based auth works

## 🔄 Complete User Journey

### For New Users

**Option 1: Register First, Then Connect Wallet**

```
1. Visit /auth/register
2. Fill out 3-step form
3. Click "Create Account"
4. Redirected to /dashboard
5. Click "Connect Wallet" in header
6. Choose wallet method (Email/Google/MetaMask)
7. Complete wallet connection
8. Start using the app
```

**Option 2: Direct Login with Wallet**

```
1. Visit /auth/login
2. Click "Connect Wallet"
3. Choose Email or Social login
4. Verify via email (from Push Protocol)
5. Auto-login to dashboard
6. Start using the app
```

### For Returning Users

```
1. Visit /auth/login
2. Click "Connect Wallet"
3. Connect with same wallet used before
4. Auto-login to dashboard
```

## 📧 Email Expectations

### Registration Page
- **NO email sent**
- Form submission is instant
- Data stored locally only
- Immediate dashboard access

### Login Page (Wallet Method)
- **Email IS sent** (if using Email login option via Push Chain)
- Email comes from **Push Protocol**, not NairaRolls
- Contains verification link
- Click link to complete wallet creation
- Then auto-login happens

## 🛠️ What Needs to Be Built for Production

### Backend Requirements

1. **User Registration API**
   ```
   POST /api/auth/register
   - Validate organization data
   - Create user account in database
   - Send verification email
   - Return user token
   ```

2. **Email Verification**
   ```
   GET /api/auth/verify-email?token=xxx
   - Verify email token
   - Activate account
   - Redirect to login
   ```

3. **Wallet Authentication API**
   ```
   POST /api/auth/wallet-login
   - Verify wallet signature
   - Check if user exists
   - Create session
   - Return auth token
   ```

4. **Session Management**
   - JWT tokens
   - Refresh tokens
   - Secure cookie storage
   - Session expiry

### Email Service

1. **Welcome Email** (after registration)
   - Account confirmation
   - Setup instructions
   - Next steps

2. **Email Verification**
   - Verification link
   - Expiry time (24 hours)
   - Resend option

3. **Wallet Connection Notification**
   - Alert when new wallet connected
   - Security notification

### Database Schema

```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  wallet_address VARCHAR(42),
  organization_id UUID,
  role VARCHAR(50),
  email_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

-- Organizations table
CREATE TABLE organizations (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(100),
  contact_email VARCHAR(255),
  contact_phone VARCHAR(50),
  wallet_address VARCHAR(42),
  multisig_threshold INTEGER,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

-- Email verifications table
CREATE TABLE email_verifications (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  token VARCHAR(255) UNIQUE,
  expires_at TIMESTAMP,
  verified_at TIMESTAMP,
  created_at TIMESTAMP
);
```

## 🔐 Security Considerations

### Current Demo Limitations

- ⚠️ No authentication required to access dashboard
- ⚠️ Data stored in browser can be cleared
- ⚠️ No session management
- ⚠️ No CSRF protection
- ⚠️ No rate limiting

### Production Requirements

1. **Authentication**
   - JWT tokens with expiry
   - Secure HTTP-only cookies
   - Refresh token rotation

2. **Authorization**
   - Role-based access control (RBAC)
   - Organization-level permissions
   - Route protection

3. **Wallet Security**
   - Signature verification
   - Nonce-based authentication
   - Replay attack prevention

4. **Email Security**
   - Token expiry (24 hours)
   - One-time use tokens
   - Rate limiting on email sends

## 🚀 Quick Start Guide

### To Test Registration

1. Go to: `http://localhost:3000/auth/register`
2. Fill in:
   - Organization: "Test Company"
   - Type: "Small Business"
   - Volume: "Less than ₦1M monthly"
   - Name: "John Doe"
   - Email: "john@test.com"
   - Phone: "+234 800 000 0000"
3. Check terms box
4. Click "Create Account"
5. You'll be redirected to dashboard
6. **No email will arrive** (it's a demo)

### To Test Login

1. Go to: `http://localhost:3000/auth/login`
2. Click "Connect Wallet"
3. Choose "Email" in Push Chain modal
4. Enter your email
5. **Check your email** for Push Protocol verification
6. Click the link
7. You'll be auto-logged in

## 📊 Data Flow Diagram

```
┌─────────────────┐
│  Registration   │
│      Form       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Validation    │
│   (Zod Schema)  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Store in       │
│  Zustand        │
│  (Browser)      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Redirect to   │
│   Dashboard     │
└─────────────────┘

┌─────────────────┐
│  Login Page     │
│  Click Wallet   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Push Chain     │
│  Modal Opens    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Choose Method  │
│  (Email/Social) │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Push Protocol  │
│  Sends Email    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  User Verifies  │
│  via Email      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Wallet         │
│  Connected      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Auto-login     │
│  (useEffect)    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Dashboard      │
└─────────────────┘
```

## 🎯 Summary

### Registration Page
- ✅ Works instantly
- ❌ No email sent
- ✅ Redirects to dashboard
- ⚠️ Demo only

### Login Page
- ✅ Wallet connection works
- ✅ Email sent (via Push Chain)
- ✅ Auto-login after wallet connect
- ✅ Fully functional

### What You Need to Know
1. **Registration** = Fill form → Instant access (no email)
2. **Login** = Connect wallet → Email verification (from Push) → Auto-login
3. Both methods get you to the dashboard
4. You still need to connect a wallet to use blockchain features

---

**For Production Deployment:**
- Implement backend API
- Add email service (SendGrid, AWS SES, etc.)
- Set up database
- Add proper authentication
- Implement session management
- Add security measures

**For Demo/Testing:**
- Current implementation works fine
- Just understand no emails from registration
- Wallet login emails come from Push Protocol
- Data is temporary (browser storage only)
