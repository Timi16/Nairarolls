# 💰 NairaRolls - Universal Web3 Payroll Platform

> Enterprise-grade multi-signature payroll management with **universal wallet support** - process payroll from any blockchain with complete security and transparency!

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![Solidity](https://img.shields.io/badge/Solidity-0.8.20-blue?logo=solidity)](https://soliditylang.org/)
[![Push Chain](https://img.shields.io/badge/Push_Chain-Integrated-orange)](https://push.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Technology Stack](#️-technology-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Smart Contracts](#-smart-contracts)
- [Development](#-development)
- [Deployment](#-deployment)
- [Documentation](#-documentation)
- [Support](#-support)

---

## 🎯 Overview

NairaRolls is a **decentralized payroll management platform** that combines the security of multi-signature wallets with the flexibility of universal blockchain support. Built for enterprises and DAOs, it enables secure, transparent, and efficient salary distribution with customizable approval workflows.

### 🌟 What Makes NairaRolls Special?

**🔐 Multi-Signature Security**
- Customizable quorum requirements (60-100%)
- Per-batch signer configuration
- No single point of failure
- On-chain audit trails

**🌐 Universal Wallet Support**
- Connect from **any blockchain** - EVM, Solana, and more
- **Email & Social Login** - Google, traditional wallets
- **Cross-chain payments** - Process payroll from any chain
- Powered by [Push Chain](https://push.org/)

**💼 Enterprise-Ready**
- Batch payments up to 100 employees
- CSV bulk import
- Approval workflows
- Complete transaction history
- 30-day batch expiry for safety

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

Create a `.env.local` file in the `frontend` directory:

```bash
cd frontend

# Create environment file
cat > .env.local << EOF
# Thirdweb Configuration (for EVM wallet support)
THIRDWEB_CLIENT_ID=your_thirdweb_client_id
THIRDWEB_SECRET_KEY=your_thirdweb_secret_key

# Smart Contract Address (Base Sepolia)
BATCH_PAYROLL_ADDRESS=your_deployed_contract_address

# Optional: RPC URLs
NEXT_PUBLIC_BASE_SEPOLIA_RPC=https://sepolia.base.org
EOF
```

**Get Your API Keys:**
- **Thirdweb**: [Get API Key](https://thirdweb.com/dashboard/settings/api-keys)
- **Push Chain**: No API key required - integrated via `@pushchain/ui-kit`

### 3. Run Development Server

```bash
npm run dev
```

Visit:
- **Main App**: http://localhost:3000
- **Universal Wallet Demo**: http://localhost:3000/push-chain-demo

---

## ✨ Key Features

### 🔐 Multi-Signature Security
- **Customizable Quorum**: Set approval thresholds from 60-100%
- **Per-Batch Signers**: Configure different signers for each payment batch
- **MPC Wallet Technology**: No single point of failure
- **On-Chain Audit Trails**: Complete transparency and compliance
- **Automatic Expiry**: 30-day batch expiry for enhanced safety
- **Reentrancy Protection**: OpenZeppelin security standards

### 🌐 Universal Wallet Support
- **Multi-Chain Connectivity**: EVM (Ethereum, Polygon, Base, Arbitrum), Solana, and more
- **Flexible Authentication**: 
  - Traditional wallet connections (MetaMask, WalletConnect)
  - Email login
  - Social login (Google, etc.)
- **Cross-Chain Payments**: Process payroll from any supported blockchain
- **Unified Interface**: Single UX for all chains via Push Chain integration

### 💼 Enterprise Payroll Management
- **Batch Processing**: Handle up to 100 employees per payment batch
- **CSV Import**: Bulk upload employee data with wallet addresses
- **Flexible Workflows**: 
  - Create payment batches with custom names
  - Configure approval requirements per batch
  - Track approval progress in real-time
- **Employee Management**: Add, edit, and manage employee records
- **Transaction History**: Complete audit trail of all payments
- **Status Tracking**: Monitor pending, approved, and executed batches

### 🎨 Modern User Experience
- **Next.js 14 App Router**: Server-side rendering and optimal performance
- **shadcn/ui Components**: Beautiful, accessible UI components
- **Dark Mode**: Full dark mode support
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Real-time Updates**: Live status updates via Zustand state management
- **Toast Notifications**: User-friendly feedback with Sonner

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

## 📋 How It Works

### Payment Batch Workflow

```
1. CREATE BATCH
   ↓
   Admin creates payment batch with:
   - Batch name (e.g., "December_2024_Salary")
   - Authorized signers (3-20 addresses)
   - Quorum requirement (60-100%)
   - Employee recipients & amounts
   
2. APPROVAL PHASE
   ↓
   Signers review and approve:
   - View batch details
   - Approve or reject with reason
   - Track approval progress
   - Automatic quorum calculation
   
3. EXECUTION
   ↓
   When quorum reached:
   - Creator executes batch
   - Funds distributed to all employees
   - Transaction recorded on-chain
   - Status updated to "Executed"
```

### 5-Step Payment Creation

1. **Batch Details**: Set name and approval percentage
2. **Configure Signers**: Add 3-20 wallet addresses
3. **Select Employees**: Choose recipients from employee list
4. **Set Amounts**: Review and adjust payment amounts
5. **Review & Confirm**: Final review before submission

### User Roles

**👨‍💼 Admin/Creator**
- Create payment batches
- Add/manage employees
- Execute approved batches
- View all transactions

**✍️ Signer**
- Review pending batches
- Approve or reject batches
- View batch details
- Track approval status

**👤 Employee**
- Receive payments to wallet
- View transaction history

---

## 🎮 Demo & Testing

### Universal Wallet Demo
Visit `/push-chain-demo` to test:
- ✅ **Wallet Connection**: Connect from any blockchain
- ✅ **Single Payment**: Send test payment to an address
- ✅ **Batch Payment**: Process multiple payments at once
- ✅ **Transaction Tracking**: View transaction hashes and explorer links
- ✅ **Integration Examples**: See code examples for your own implementation

### Test Accounts
Sample employees in `employees.csv`:
```csv
name,walletaddress,role,salary
Abdul Olamide,0x937fBAbFE1c8d1C8fFbeB99e7CD89d2c24ac0937,Software Engineer,750000000000
Dami Lola,0x51cAd5B8e0ad2C427e7748E275A2eb2523a1556B,Designer,750000000000
```

**Note**: Salary amounts are in token base units (6 decimals for cNGN)

---

## 🔧 Development

### Frontend Development

```bash
cd frontend

# Development
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Key Development Routes
# - /                     → Landing page
# - /dashboard            → Main dashboard
# - /employees            → Employee management
# - /employees/new        → Add new employee
# - /employees/upload     → CSV bulk upload
# - /payments             → Payment history
# - /payments/new         → Create payment batch (5-step wizard)
# - /approvals            → Approve/reject batches
# - /transactions         → Transaction history
# - /settings             → App settings
# - /push-chain-demo      → Universal wallet demo
```

### Smart Contract Development

```bash
cd NairaRollsMultisig

# Compile contracts
forge build

# Run tests
forge test
forge test -vvv              # Verbose output
forge test --match-test testCreateBatch  # Run specific test

# Deploy to Base Sepolia
forge script script/DeployV2.s.sol \
  --rpc-url $BASE_SEPOLIA_RPC_URL \
  --private-key $PRIVATE_KEY \
  --broadcast \
  --verify

# Local testing with Anvil
anvil                        # Start local node
forge script script/DeployV2.s.sol --rpc-url http://localhost:8545 --broadcast
```

### Project Scripts

**Frontend (`frontend/package.json`):**
- `dev` - Start Next.js development server
- `build` - Create production build
- `start` - Start production server
- `lint` - Run ESLint checks

**Smart Contracts:**
- `forge build` - Compile Solidity contracts
- `forge test` - Run contract tests
- `forge fmt` - Format Solidity code
- `forge snapshot` - Generate gas snapshots

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

## 📦 Smart Contracts

NairaRolls includes two versions of multi-signature payroll contracts, each optimized for different use cases.

### Version 2 (v2/) - **Recommended** ⭐

**BatchPayrollMultisig.sol** - Modern batch-centric payroll system

**Key Features:**
- ✅ **Per-Batch Signers**: Configure different signers for each payment batch
- ✅ **String-Based IDs**: Human-readable batch names (e.g., "December_2024_Salary")
- ✅ **Flexible Quorum**: Set custom approval thresholds per batch (60-100%)
- ✅ **Batch Limits**: Up to 100 recipients per batch
- ✅ **Automatic Expiry**: 30-day expiration for enhanced security
- ✅ **Gas Optimized**: Custom errors and efficient storage patterns

**Core Functions:**
```solidity
createBatchPayroll(string batchName, address[] signers, uint256 quorum, 
                   address[] recipients, uint256[] amounts)
approveBatch(string batchName)
executeBatchPayroll(string batchName)
```

**Use Cases:**
- Organizations with varying approval requirements
- Projects needing different signers for different departments
- Teams requiring flexible, human-readable batch identification

### Version 1 (v1/)

**NairaRollsMultisig.sol** - Traditional transaction-based multisig

**Key Features:**
- Global signer configuration
- Numeric transaction IDs
- Emergency pause functionality
- Factory pattern deployment via **NairaRollsMultisigFactory.sol**

**Use Cases:**
- Organizations with fixed signer sets
- Projects requiring emergency pause capabilities
- Traditional multisig wallet patterns

### Contract Addresses

**Base Sepolia Testnet:**
- BatchPayrollMultisig (v2): `[Deployed Address]`
- cNGN Token: `[Token Address]`

### Security Features (Both Versions)

- ✅ **OpenZeppelin Libraries**: Industry-standard security
- ✅ **Reentrancy Protection**: SafeERC20 for token transfers
- ✅ **Access Control**: Signer-only functions
- ✅ **Input Validation**: Comprehensive checks on all parameters
- ✅ **Event Logging**: Complete audit trail
- ✅ **Gas Optimization**: Custom errors instead of require strings

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

## 🐛 Troubleshooting

### Common Issues

**Build Error: `useActiveAccount must be used within <ThirdwebProvider>`**
- **Solution**: Already fixed! Pages now use `dynamic = 'force-dynamic'` to prevent static generation
- If you encounter this, ensure your page has:
  ```typescript
  export const dynamic = 'force-dynamic';
  export const revalidate = 0;
  ```

**Wallet Connection Issues**
- Clear browser cache and cookies
- Try a different wallet or connection method
- Check that you're on the correct network (Base Sepolia)
- Ensure wallet has test ETH for gas fees

**Contract Interaction Failures**
- Verify contract address in `.env.local`
- Check wallet has sufficient token balance
- Ensure you're connected to Base Sepolia testnet
- Verify you're an authorized signer for the batch

**CSV Upload Errors**
- Ensure CSV format matches: `name,walletaddress,role,salary`
- Wallet addresses must be valid Ethereum addresses (0x...)
- Salary amounts should be in base units (6 decimals)
- Check for special characters or encoding issues

### Getting Help

**📚 Documentation**
- [Quick Start Guide](./QUICK_START_PUSH_CHAIN.md) - 5-minute setup
- [Push Chain Integration](./PUSH_CHAIN_INTEGRATION.md) - Technical details
- [Migration Guide](./MIGRATION_GUIDE.md) - Upgrade existing code
- [Frontend README](./frontend/README.md) - Frontend documentation

**🔗 External Resources**
- [Push Chain Documentation](https://pushchain.github.io/push-chain-website/)
- [Thirdweb Portal](https://portal.thirdweb.com/)
- [Foundry Book](https://book.getfoundry.sh/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Base Sepolia Faucet](https://www.coinbase.com/faucets/base-ethereum-goerli-faucet)

**💬 Community & Support**
- **GitHub Issues**: Report bugs and feature requests
- **GitHub Discussions**: Ask questions and share ideas
- **Push Chain Discord**: Get help with wallet integration
- **Base Discord**: Network-specific support

---

## 🎉 Getting Started Checklist

Ready to use NairaRolls? Follow these steps:

- [ ] **Clone the repository** and install dependencies
- [ ] **Set up environment variables** (Thirdweb API keys, contract address)
- [ ] **Run the development server** (`npm run dev`)
- [ ] **Connect a wallet** - Try Push Chain universal wallet
- [ ] **Add test employees** - Use CSV upload or manual entry
- [ ] **Create a payment batch** - Follow the 5-step wizard
- [ ] **Test approval workflow** - Connect as different signers
- [ ] **Execute a batch** - Complete the full payment flow
- [ ] **Explore the demo** - Visit `/push-chain-demo` for examples
- [ ] **Deploy your contracts** - Use Foundry to deploy to Base Sepolia
- [ ] **Ship to production** - Deploy frontend to Vercel

---

## 🗺️ Roadmap

### ✅ Completed
- Multi-signature payroll smart contracts (v1 & v2)
- Next.js 14 frontend with App Router
- Universal wallet support via Push Chain
- CSV employee import
- 5-step payment batch creation
- Approval workflow UI
- Transaction history tracking
- Dark mode support

### 🚧 In Progress
- Enhanced analytics dashboard
- Email notifications for approvals
- Mobile app (React Native)
- Additional chain support

### 📋 Planned Features
- **Recurring Payments**: Automated monthly/weekly payroll
- **Payment Scheduling**: Schedule batches for future execution
- **Multi-Token Support**: Pay in different stablecoins (USDC, USDT, DAI)
- **Advanced Reporting**: Export reports, tax documents
- **Role-Based Access Control**: Granular permissions
- **Webhook Integration**: Notify external systems
- **API Access**: RESTful API for integrations
- **Audit Logs**: Detailed activity tracking
- **2FA Authentication**: Additional security layer
- **Contract Upgrades**: Proxy pattern for upgradeability

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Ways to Contribute

1. **🐛 Report Bugs**: Open an issue with detailed reproduction steps
2. **💡 Suggest Features**: Share your ideas in GitHub Discussions
3. **📝 Improve Documentation**: Fix typos, add examples, clarify instructions
4. **🔧 Submit Code**: Fix bugs or implement new features
5. **🎨 Design**: Improve UI/UX, create mockups
6. **🧪 Testing**: Write tests, report edge cases

### Development Workflow

```bash
# 1. Fork the repository
# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/Nairarolls.git
cd Nairarolls

# 3. Create a feature branch
git checkout -b feature/your-feature-name

# 4. Make your changes
# - Write clean, documented code
# - Follow existing code style
# - Add tests if applicable

# 5. Test your changes
cd frontend && npm run build  # Ensure build succeeds
cd ../NairaRollsMultisig && forge test  # Run contract tests

# 6. Commit and push
git add .
git commit -m "feat: add your feature description"
git push origin feature/your-feature-name

# 7. Open a Pull Request
# - Describe your changes
# - Link related issues
# - Wait for review
```

### Code Standards

- **TypeScript**: Use strict typing, avoid `any`
- **Solidity**: Follow Solidity style guide, use NatSpec comments
- **React**: Use functional components and hooks
- **Testing**: Write tests for new features
- **Documentation**: Update README and docs for significant changes

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What This Means

✅ **Commercial Use**: Use in commercial projects  
✅ **Modification**: Modify and adapt the code  
✅ **Distribution**: Share and distribute freely  
✅ **Private Use**: Use privately without restrictions  

⚠️ **No Warranty**: Software provided "as is"  
⚠️ **Liability**: Authors not liable for damages  

---

## 🙏 Acknowledgments

Built with amazing open-source technologies:

- **[Push Chain](https://push.org/)** - Universal wallet infrastructure
- **[Thirdweb](https://thirdweb.com/)** - Web3 development tools
- **[Next.js](https://nextjs.org/)** - React framework
- **[Foundry](https://getfoundry.sh/)** - Ethereum development toolkit
- **[OpenZeppelin](https://openzeppelin.com/)** - Smart contract libraries
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful UI components
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[Base](https://base.org/)** - Ethereum L2 network

Special thanks to the Web3 community for continuous innovation! 🚀

---

<div align="center">

### 💰 NairaRolls

**Enterprise-grade Web3 payroll for the modern world**

[🚀 Quick Start](./QUICK_START_PUSH_CHAIN.md) • [📖 Documentation](./PUSH_CHAIN_INTEGRATION.md) • [🎮 Live Demo](http://localhost:3000/push-chain-demo)

**Built with ❤️ for universal Web3 payroll**

⭐ Star us on GitHub if you find this project useful!

</div>
