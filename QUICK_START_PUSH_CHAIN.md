# Quick Start: Push Chain Universal Wallet

## 🚀 5-Minute Integration Guide

Your NairaRolls app now supports **universal wallet connectivity** from any blockchain!

## What You Get

✅ **Connect from ANY chain** - Ethereum, Solana, Polygon, Base, etc.  
✅ **Multiple auth methods** - Email, Google, traditional wallets  
✅ **Cross-chain payments** - Process payroll from any blockchain  
✅ **Plug-and-play** - Pre-built components and hooks  

## Files Added

```
frontend/
├── components/
│   ├── providers/
│   │   └── PushChainProvider.tsx       # Main provider wrapper
│   └── PushWalletButton.tsx            # Wallet connection button
├── hooks/
│   └── usePushChainPayroll.ts          # Payroll operations hook
└── app/
    └── (dashboard)/
        └── push-chain-demo/
            └── page.tsx                 # Demo page
```

## How to Use

### 1. View the Demo

Visit the demo page to see it in action:

```bash
npm run dev
# Navigate to: http://localhost:3000/push-chain-demo
```

### 2. Add Wallet Button to Your UI

Replace or add alongside your existing wallet button:

```typescript
import { PushWalletButton } from '@/components/PushWalletButton';

function Header() {
  return (
    <div className="flex items-center gap-4">
      <PushWalletButton />
    </div>
  );
}
```

### 3. Use in Payment Flows

```typescript
import { usePushChainPayroll } from '@/hooks/usePushChainPayroll';

function PaymentPage() {
  const { sendPayment, isConnected, isLoading } = usePushChainPayroll();
  
  const handlePay = async () => {
    const result = await sendPayment(
      '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
      '0.01' // amount in PC
    );
    
    if (result) {
      console.log('Success!', result.hash);
    }
  };
  
  return (
    <button onClick={handlePay} disabled={!isConnected || isLoading}>
      Send Payment
    </button>
  );
}
```

### 4. Batch Payments

```typescript
const { sendBatchPayments } = usePushChainPayroll();

const employees = [
  { address: '0x1234...', amount: '100' },
  { address: '0x5678...', amount: '150' },
];

const result = await sendBatchPayments(employees);
```

## Key Features

### Universal Wallet Button
- One-click connection from any chain
- Shows connected account
- Auto-syncs with app state

### Cross-Chain Support
Users can connect from:
- **Ethereum** & all EVM chains
- **Solana** 
- **Polygon, Base, Arbitrum, Optimism**
- And more...

### Multiple Auth Methods
- 📧 Email login
- 🔐 Google OAuth
- 👛 Traditional wallet (MetaMask, Phantom, etc.)

## Configuration

All configuration is in `/components/providers/PushChainProvider.tsx`:

```typescript
const walletConfig = {
  network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET, // or MAINNET
  login: {
    email: true,
    google: true,
    wallet: { enabled: true },
  },
  modal: {
    loginLayout: PushUI.CONSTANTS.LOGIN.LAYOUT.SPLIT,
    connectedLayout: PushUI.CONSTANTS.CONNECTED.LAYOUT.HOVER,
  },
};
```

## Testing

1. **Start dev server**: `npm run dev`
2. **Visit demo page**: http://localhost:3000/push-chain-demo
3. **Connect wallet**: Click "Connect" button
4. **Choose method**: Email, Google, or Wallet
5. **Send test payment**: Use the demo form

## Integration Status

✅ Package installed: `@pushchain/ui-kit`  
✅ Provider configured  
✅ Components created  
✅ Hooks implemented  
✅ Demo page ready  
✅ Documentation complete  

## Next Steps

1. **Test the demo page** - See it working live
2. **Customize the UI** - Adjust colors, layout in provider config
3. **Integrate into flows** - Add to existing payment pages
4. **Deploy** - Works on testnet and mainnet

## Resources

- 📖 **Full Documentation**: `/PUSH_CHAIN_INTEGRATION.md`
- 🎮 **Demo Page**: `/push-chain-demo`
- 🌐 **Push Chain Docs**: https://pushchain.github.io/push-chain-website/docs/chain/ui-kit/
- 🔍 **Explorer**: https://donut.push.network

## Support

Questions? Check:
1. Demo page at `/push-chain-demo`
2. Full docs in `/PUSH_CHAIN_INTEGRATION.md`
3. Push Chain documentation
4. GitHub issues

---

**You're all set! 🎉**

Your app now supports universal wallet connectivity from any blockchain.
