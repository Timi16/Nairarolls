/**
 * Wallet hooks - Now using Push Chain instead of Thirdweb
 * This file maintains backward compatibility with existing code
 * while using Push Chain as the underlying provider
 */

import { usePushChainPayroll } from "@/hooks/usePushChainPayroll";
import { useCallback } from "react";

// Custom hook to mimic useAccount (now uses Push Chain)
export const useAccount = () => {
  const { account, isConnected } = usePushChainPayroll();
  
  return {
    address: account || undefined,
    isConnected,
    account: account ? { address: account } : undefined,
  };
};

// Custom hook to mimic useChainId
export const useChainId = () => {
  // Push Chain abstracts chain IDs through Universal Executor Account
  // Return undefined for now - can be enhanced if needed
  return undefined;
};

// Custom hook to mimic useSignMessage
export const useSignMessage = () => {
  const { account, pushChainClient } = usePushChainPayroll();

  const signMessageAsync = useCallback(
    async (message: string) => {
      if (!account || !pushChainClient) {
        throw new Error("No account connected");
      }
      
      // TODO: Implement message signing with Push Chain
      // For now, throw error to indicate it needs implementation
      throw new Error("Message signing not yet implemented with Push Chain");
    },
    [account, pushChainClient]
  );

  return { signMessageAsync };
};

// Custom hook to mimic useAppKitProvider
export const useAppKitProvider = () => {
  const { pushChainClient } = usePushChainPayroll();
  return { walletProvider: pushChainClient };
};

// Utility function to check if wallet supports a method
export const walletSupports = (wallet: any, method: string): boolean => {
  return wallet && method in wallet && typeof wallet[method] === "function";
};