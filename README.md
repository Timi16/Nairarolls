# NairaRolls (NairaRolls) - Universal Web3 Payroll Platform

> Enterprise-grade payroll management with **universal wallet support** - process payroll from any blockchain!

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![Solidity](https://img.shields.io/badge/Solidity-0.8.20-blue?logo=solidity)](https://soliditylang.org/)
[![Push Chain](https://img.shields.io/badge/Push_Chain-Integrated-orange)](https://push.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)

---

## 🌟 What's New: Universal Wallet Support

**Your app now supports wallet connections from ANY blockchain!**

✅ **Ethereum** & all EVM chains (Polygon, Base, Arbitrum, Optimism, etc.)  
✅ **Solana** native support  
✅ **Email & Social Login** (Google, etc.)  
✅ **Cross-chain payments** with single interface  

[**🚀 Quick Start Guide**](./QUICK_START_PUSH_CHAIN.md) | [**📖 Full Documentation**](./PUSH_CHAIN_INTEGRATION.md) | [**🔄 Migration Guide**](./MIGRATION_GUIDE.md)

---

## 📁 Project Structure

```
Nairarolls/
├── NairaRollsMultisig/          # Smart Contracts (Foundry)
│   ├── src/
│   │   ├── v1/                  # Factory-based multisig
│   │   └── v2/                  # Batch-centric multisig
│   ├── script/                  # Deployment scripts
│   └── test/                    # Contract tests
│
├── frontend/                    # Next.js Frontend
│   ├── app/                     # App Router pages
│   │   ├── (dashboard)/         # Dashboard routes
│   │   │   ├── dashboard/       # Main dashboard
│   │   │   ├── employees/       # Employee management
│   │   │   ├── payments/        # Payment processing
│   │   │   ├── approvals/       # Approval workflows
│   │   │   ├── transactions/    # Transaction history
│   │   │   └── push-chain-demo/ # 🆕 Universal wallet demo
│   │   └── auth/                # Authentication
│   ├── components/              # React components
│   │   ├── providers/
│   │   │   └── PushChainProvider.tsx  # 🆕 Universal wallet provider
│   │   ├── PushWalletButton.tsx       # 🆕 Wallet connection button
│   │   └── ui/                  # shadcn/ui components
│   ├── hooks/                   # Custom React hooks
│   │   └── usePushChainPayroll.ts     # 🆕 Cross-chain payroll hook
│   ├── lib/                     # Utilities
│   │   ├── store.ts             # Zustand state management
│   │   └── types.ts             # TypeScript definitions
│   └── constants/               # Contract ABIs & addresses
│
├── employees.csv                # Sample employee data
├── PUSH_CHAIN_INTEGRATION.md    # 🆕 Technical documentation
├── QUICK_START_PUSH_CHAIN.md    # 🆕 Quick start guide
├── MIGRATION_GUIDE.md           # 🆕 Migration guide
└── INTEGRATION_SUMMARY.md       # 🆕 Integration summary
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Foundry (for smart contracts)
- Git

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd Nairarolls

# Install frontend dependencies
cd frontend
npm install
```

### 2. Configure Environment

```bash
# Copy example env file
cp .env.example .env.local

# Add your keys
THIRDWEB_CLIENT_ID=your_client_id
THIRDWEB_SECRET_KEY=your_secret_key
```

### 3. Run Development Server

```bash
npm run dev
```

Visit:
- **Main App**: http://localhost:3000
- **Universal Wallet Demo**: http://localhost:3000/push-chain-demo

---

## 🎯 Key Features

### 🔐 Security
- **Multi-signature approvals** with customizable quorum
- **MPC wallet technology** - no single point of failure
- **On-chain audit trails** for compliance
- **30-day transaction expiry** for safety

### 🌐 Universal Wallet Support (NEW!)
- **Connect from any blockchain** - EVM, Solana, and more
- **Multiple auth methods** - Email, Google, traditional wallets
- **Cross-chain payments** - Process payroll from any chain
- **Seamless UX** - Single interface for all chains

### 💼 Payroll Management
- **Batch payments** - Up to 100 employees per batch
- **CSV import** - Bulk employee data upload
- **Approval workflows** - Configurable signatory requirements
- **Transaction tracking** - Complete payment history

### 🎨 Modern UI/UX
- **Next.js 14** with App Router
- **shadcn/ui** components
- **Dark mode** support
- **Responsive design**

---

## 🛠️ Technology Stack

### Smart Contracts
- **Solidity 0.8.20**
- **Foundry** - Development framework
- **OpenZeppelin** - Security libraries
- **Base Sepolia** - Testnet deployment

### Frontend
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Zustand** - State management

### Web3 Integration
- **Push Chain UI Kit** 🆕 - Universal wallet support
- **Thirdweb SDK** - EVM wallet integration
- **ethers.js v6** - Blockchain interactions
- **cNGN Token** - Stablecoin for payroll

---

## 📚 Documentation

### Getting Started
- [**Quick Start Guide**](./QUICK_START_PUSH_CHAIN.md) - Get up and running in 5 minutes
- [**Frontend README**](./frontend/README.md) - Detailed frontend documentation

### Integration Guides
- [**Push Chain Integration**](./PUSH_CHAIN_INTEGRATION.md) - Universal wallet technical docs
- [**Migration Guide**](./MIGRATION_GUIDE.md) - Migrating existing code
- [**Integration Summary**](./INTEGRATION_SUMMARY.md) - What was added

### Smart Contracts
- [**Contract README**](./NairaRollsMultisig/README.md) - Smart contract documentation
- **v1 Contracts** - Factory-based multisig system
- **v2 Contracts** - Batch-centric payroll system

---

## 🎮 Demo & Testing

### Universal Wallet Demo
Visit `/push-chain-demo` to see:
- ✅ Wallet connection from any chain
- ✅ Single payment processing
- ✅ Batch payment demonstration
- ✅ Transaction tracking
- ✅ Integration examples

### Test Accounts
Sample employees in `employees.csv`:
```csv
name,walletaddress,role,salary
Abdul Olamide,0x937fBAbFE1c8d1C8fFbeB99e7CD89d2c24ac0937,Software Engineer,750000000000
Dami Lola,0x51cAd5B8e0ad2C427e7748E275A2eb2523a1556B,Designer,750000000000
```

---

## 🔧 Development

### Frontend Development
```bash
cd frontend
npm run dev      # Start dev server
npm run build    # Build for production
npm run lint     # Run linter
```

### Smart Contract Development
```bash
cd NairaRollsMultisig
forge build      # Compile contracts
forge test       # Run tests
forge script script/DeployV2.s.sol --rpc-url $BASE_SEPOLIA_RPC_URL --broadcast
```

---

## 🌍 Supported Chains

### Via Push Chain (Universal)
- Ethereum & all EVM chains
- Solana
- Polygon, Base, Arbitrum, Optimism
- BNB Chain, Avalanche
- And more...

### Via Thirdweb (EVM)
- Base Sepolia (testnet)
- Base Mainnet
- Polygon
- Ethereum

---

## 📦 Smart Contract Versions

### Version 1 (v1/)
- **NairaRollsMultisig.sol** - Transaction-based multisig
- **NairaRollsMultisigFactory.sol** - Factory for deployment
- Features: Global signers, transaction IDs, emergency pause

### Version 2 (v2/) - Recommended
- **BatchPayrollMultisig.sol** - Batch-centric design
- Features: Per-batch signers, string-based IDs, flexible quorum
- Max 100 recipients per batch
- 30-day expiry per batch

---

## 🔐 Security

### Smart Contract Security
- OpenZeppelin libraries
- Custom error messages (gas efficient)
- Reentrancy protection
- SafeERC20 for token transfers

### Wallet Security
- Multi-signature approvals
- No single private key exposure
- Hardware wallet support
- Social recovery options (via Push Chain)

---

## 🚢 Deployment

### Frontend (Vercel)
```bash
npm run build
# Deploy to Vercel via GitHub integration
```

### Smart Contracts (Base Sepolia)
```bash
forge script script/DeployV2.s.sol \
  --rpc-url $BASE_SEPOLIA_RPC_URL \
  --broadcast \
  --verify
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

---

## 📄 License

MIT License - see LICENSE file for details

---

## 🆘 Support

### Documentation
- Check `/push-chain-demo` for live examples
- Read integration docs in root directory
- Review frontend README

### External Resources
- [Push Chain Docs](https://pushchain.github.io/push-chain-website/)
- [Thirdweb Docs](https://portal.thirdweb.com/)
- [Foundry Book](https://book.getfoundry.sh/)

### Community
- GitHub Issues for bug reports
- GitHub Discussions for questions
- Push Chain Discord for wallet support

---

## 🎉 What's Next?

1. **Test the demo** - Visit `/push-chain-demo`
2. **Connect a wallet** - Try email, Google, or traditional wallet
3. **Process a payment** - Test cross-chain functionality
4. **Integrate into your flows** - Add universal wallet to your pages
5. **Deploy** - Ship to production!

---

<div align="center">

**Built with ❤️ for universal Web3 payroll**

[Demo](http://localhost:3000/push-chain-demo) • [Docs](./PUSH_CHAIN_INTEGRATION.md) • [Quick Start](./QUICK_START_PUSH_CHAIN.md)

</div>
