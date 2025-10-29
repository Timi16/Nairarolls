"use client";

import { ReactNode } from "react";
import {
  PushUniversalWalletProvider,
  PushUI,
} from "@pushchain/ui-kit";

interface PushChainProviderProps {
  children: ReactNode;
}

export function PushChainProvider({ children }: PushChainProviderProps) {
  // Define Wallet Config
  const walletConfig = {
    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,
    login: {
      email: true,
      google: true,
      wallet: {
        enabled: true,
      },
      appPreview: true,
    },
    modal: {
      loginLayout: PushUI.CONSTANTS.LOGIN.LAYOUT.SPLIT,
      connectedLayout: PushUI.CONSTANTS.CONNECTED.LAYOUT.HOVER,
      appPreview: true,
    },
  };

  // Define App Metadata
  const appMetadata = {
    logoUrl: "/favicon.ico",
    title: "NairaRolls - Universal Payroll",
    description:
      "Enterprise Web3 payroll management supporting all chains - EVM, Solana, and more. Process payroll securely with multi-signature approvals.",
  };

  return (
    <PushUniversalWalletProvider config={walletConfig} app={appMetadata}>
      {children}
    </PushUniversalWalletProvider>
  );
}
