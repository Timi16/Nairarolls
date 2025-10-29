# Push Chain Universal Wallet Integration

## Overview

NairaRolls now supports **universal wallet connectivity** through Push Chain UI Kit, enabling users from **any blockchain** (Ethereum, Solana, Polygon, Base, etc.) to connect and process payroll transactions seamlessly.

## What's New

### 🌐 Universal Wallet Support
- Connect from **any supported blockchain** (EVM chains, Solana, etc.)
- Single unified interface for all chains
- No need to switch networks manually

### 🔐 Multiple Authentication Methods
- Email login
- Google OAuth
- Traditional wallet connection (MetaMask, Phantom, etc.)
- Social login options

### ⚡ Instant Integration
- Less than 5 minutes setup time
- Plug-and-play React components
- Built-in UI components and hooks

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    NairaRolls Frontend                         │
│  ┌─────────────────────────────────────────────────────┐   │
│  │         PushChainProvider (Root Wrapper)             │   │
│  │  ┌───────────────────────────────────────────────┐  │   │
│  │  │      PushUniversalWalletProvider              │  │   │
│  │  │                                                │  │   │
│  │  │  • Manages wallet connections                 │  │   │
│  │  │  • Handles authentication state               │  │   │
│  │  │  • Provides Push Chain client                 │  │   │
│  │  └───────────────────────────────────────────────┘  │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                   Push Chain Network                         │
│  • Universal Executor Account (UEA)                          │
│  • Cross-chain transaction routing                           │
│  • Unified balance management                                │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│              Target Blockchains                              │
│  Ethereum │ Solana │ Polygon │ Base │ Arbitrum │ ...        │
└─────────────────────────────────────────────────────────────┘
```

## Installation

```bash
npm install @pushchain/ui-kit
```

## Key Components

### 1. PushChainProvider
**Location:** `/components/providers/PushChainProvider.tsx`

Wraps the entire application and provides Push Chain functionality.

```typescript
import { PushChainProvider } from '@/components/providers/PushChainProvider';

export default function RootLayout({ children }) {
  return (
    <PushChainProvider>
      {children}
    </PushChainProvider>
  );
}
```

**Configuration:**
- Network: Push Chain Testnet
- Login methods: Email, Google, Wallet
- Modal layout: Split view with app preview
- App metadata: Logo, title, description

### 2. PushWalletButton
**Location:** `/components/PushWalletButton.tsx`

Pre-built wallet connection button with account display.

```typescript
import { PushWalletButton } from '@/components/PushWalletButton';

function Header() {
  return <PushWalletButton />;
}
```

**Features:**
- One-click wallet connection
- Displays connected account address
- Auto-syncs with app store
- Shows connection status

### 3. usePushChainPayroll Hook
**Location:** `/hooks/usePushChainPayroll.ts`

Custom hook for payroll operations via Push Chain.

```typescript
import { usePushChainPayroll } from '@/hooks/usePushChainPayroll';

function PaymentComponent() {
  const { 
    isConnected, 
    isLoading, 
    account, 
    sendPayment, 
    sendBatchPayments 
  } = usePushChainPayroll();

  const handlePayment = async () => {
    const result = await sendPayment(
      '0x1234...', // recipient
      '0.01'       // amount in PC
    );
  };
}
```

**Available Methods:**
- `sendPayment(to, amount)` - Send single payment
- `sendBatchPayments(recipients[])` - Send multiple payments
- `getBalance()` - Get account balance
- `getAccount()` - Get Universal Executor Account address

## Usage Examples

### Basic Connection

```typescript
import { PushWalletButton } from '@/components/PushWalletButton';
import { usePushWalletContext } from '@pushchain/ui-kit';

function MyComponent() {
  const { connectionStatus } = usePushWalletContext();
  
  return (
    <div>
      <PushWalletButton />
      {connectionStatus === 'CONNECTED' && (
        <p>Wallet connected!</p>
      )}
    </div>
  );
}
```

### Send Payment

```typescript
import { usePushChainPayroll } from '@/hooks/usePushChainPayroll';

function SendPayment() {
  const { sendPayment, isLoading } = usePushChainPayroll();
  
  const handleSend = async () => {
    const result = await sendPayment(
      '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
      '0.01' // 0.01 PC
    );
    
    if (result) {
      console.log('Transaction hash:', result.hash);
      console.log('Explorer URL:', result.explorerUrl);
    }
  };
  
  return (
    <button onClick={handleSend} disabled={isLoading}>
      Send Payment
    </button>
  );
}
```

### Batch Payments

```typescript
import { usePushChainPayroll } from '@/hooks/usePushChainPayroll';

function BatchPayroll() {
  const { sendBatchPayments } = usePushChainPayroll();
  
  const processPayroll = async () => {
    const employees = [
      { address: '0x1234...', amount: '100' },
      { address: '0x5678...', amount: '150' },
      { address: '0x9abc...', amount: '200' },
    ];
    
    const result = await sendBatchPayments(employees);
    
    if (result) {
      console.log('Successful:', result.results.length);
      console.log('Failed:', result.failed.length);
    }
  };
  
  return (
    <button onClick={processPayroll}>
      Process Payroll
    </button>
  );
}
```

### Access Push Chain Client

```typescript
import { usePushChainClient } from '@pushchain/ui-kit';

function AdvancedComponent() {
  const { pushChainClient } = usePushChainClient();
  
  const getAccountInfo = () => {
    if (pushChainClient) {
      const account = pushChainClient.universal.account;
      const explorerUrl = pushChainClient.explorer.getTransactionUrl(txHash);
      // ... more operations
    }
  };
}
```

## Demo Page

A comprehensive demo page is available at `/push-chain-demo` showing:
- Wallet connection from any chain
- Single payment processing
- Batch payment demonstration
- Transaction tracking
- Integration documentation

## Integration Checklist

- [x] Install @pushchain/ui-kit package
- [x] Create PushChainProvider wrapper
- [x] Add provider to root layout
- [x] Create PushWalletButton component
- [x] Build usePushChainPayroll hook
- [x] Create demo page
- [x] Document integration

## Benefits

### For Users
✅ Connect from any blockchain wallet  
✅ No network switching required  
✅ Email/social login options  
✅ Unified account management  
✅ Seamless cross-chain transactions  

### For Developers
✅ 5-minute integration  
✅ Plug-and-play components  
✅ Built-in UI components  
✅ TypeScript support  
✅ Comprehensive hooks API  

## Configuration Options

### Network Options
- `PUSH_NETWORK.TESTNET` - Push Chain Testnet (default)
- `PUSH_NETWORK.TESTNET_DONUT` - Donut Testnet
- `PUSH_NETWORK.LOCALNET` - Local development

### Login Methods
```typescript
login: {
  email: true,        // Email authentication
  google: true,       // Google OAuth
  wallet: {           // Traditional wallet
    enabled: true
  },
  appPreview: true    // Show app info in modal
}
```

### Modal Layouts
- `LOGIN.LAYOUT.SPLIT` - Split view with app preview
- `LOGIN.LAYOUT.FULL` - Full-screen login
- `CONNECTED.LAYOUT.HOVER` - Hover dropdown when connected
- `CONNECTED.LAYOUT.MODAL` - Modal view when connected

## State Management

The integration automatically syncs with your Zustand store:

```typescript
// When wallet connects
setUser({
  id: pushChainClient.universal.account,
  walletAddress: pushChainClient.universal.account,
  organizationId: "default",
  role: "admin",
});

// When wallet disconnects
setUser(null);
setOrganization(null);
```

## Supported Chains

Push Chain UI Kit supports connections from:
- **EVM Chains**: Ethereum, Polygon, Base, Arbitrum, Optimism, BNB Chain, Avalanche, etc.
- **Solana**: Native Solana wallet support
- **More chains**: Additional chains supported by Push Chain network

## Resources

- **Push Chain Docs**: https://pushchain.github.io/push-chain-website/docs/chain/ui-kit/
- **Push Chain Explorer**: https://donut.push.network
- **Push Chain Faucet**: https://faucet.push.org
- **GitHub**: https://github.com/pushchain

## Troubleshooting

### Buffer Error with Vite
If using Vite with Plug'n'Play (PnP), install buffer:
```bash
npm install buffer
```
The UI-kit includes necessary polyfills, no extra configuration needed.

### TypeScript Errors
Ensure address types are cast properly:
```typescript
const address = userInput as `0x${string}`;
```

### Connection Issues
1. Check network configuration in PushChainProvider
2. Verify wallet is unlocked
3. Check browser console for errors
4. Ensure sufficient balance for transactions

## Migration from Thirdweb

Push Chain works **alongside** your existing Thirdweb integration:

```typescript
<PushChainProvider>
  <ThirdwebProvider>
    {/* Your app */}
  </ThirdwebProvider>
</PushChainProvider>
```

Users can choose to connect via:
- Push Chain (universal, any chain)
- Thirdweb (EVM-specific)

## Next Steps

1. **Test the demo page**: Visit `/push-chain-demo` to see it in action
2. **Integrate into existing flows**: Add PushWalletButton to your header/navbar
3. **Update payment flows**: Use `usePushChainPayroll` for cross-chain payments
4. **Customize UI**: Adjust theme and layout in PushChainProvider config
5. **Deploy**: Push Chain works on testnet and mainnet

## Support

For issues or questions:
- Check the demo page at `/push-chain-demo`
- Review Push Chain documentation
- Open an issue on GitHub
- Contact Push Chain support

---

**Integration completed successfully! 🎉**

Your app now supports universal wallet connectivity from any blockchain.
