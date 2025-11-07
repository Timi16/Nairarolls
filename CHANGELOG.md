# Changelog

All notable changes to the NairaRolls project will be documented in this file.

## [Unreleased] - 2025-11-06

### Added
- Custom 404 not-found page with navigation back to home
- Comprehensive README with project overview, features, and documentation
- LOGIN_GUIDE.md with detailed authentication instructions
- REGISTRATION_FLOW.md explaining the complete user journey
- Auto-login functionality after wallet connection on login page
- Loading states and user feedback during authentication
- Support for universal wallet connections (Email, Social, Traditional wallets)

### Fixed
- Build error caused by static generation of pages using wallet hooks
- Login page now automatically logs users in after wallet connection
- Registration page messaging clarified - no misleading email notifications
- Dashboard layout configured for dynamic rendering to prevent build errors

### Changed
- Updated README with better structure, table of contents, and comprehensive sections
- Improved login page UX with clear messaging about authentication methods
- Registration success message now accurately reflects instant account creation
- Enhanced documentation for troubleshooting and getting started

### Technical Improvements
- Added `dynamic = 'force-dynamic'` to dashboard layout
- Added `revalidate = 0` to pages using wallet hooks
- Implemented useEffect hook for automatic login detection
- Better error handling and user feedback with toast notifications

## [Previous] - 2025-10-31

### Added
- Push Chain integration for universal wallet support
- Multi-signature payroll smart contracts (v1 and v2)
- Next.js 14 frontend with App Router
- Employee management system
- Payment batch creation workflow
- Approval system for multi-signature transactions
- Transaction history tracking
- CSV employee import functionality

### Features
- Support for multiple wallet types (MetaMask, WalletConnect, Email, Social)
- Cross-chain payment capabilities
- Batch processing up to 100 employees
- Customizable approval quorum (60-100%)
- Dark mode support
- Responsive design for mobile and desktop
