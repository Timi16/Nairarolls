"use client";

import { usePushChainClient, usePushWalletContext, PushUI } from "@pushchain/ui-kit";
import { PushChain } from "@pushchain/core";
import { useState } from "react";
import { toast } from "sonner";

/**
 * Hook for Push Chain payroll operations
 * Enables cross-chain payroll processing from any supported chain (EVM, Solana, etc.)
 */
export function usePushChainPayroll() {
  const { pushChainClient } = usePushChainClient();
  const { connectionStatus } = usePushWalletContext();
  const [isLoading, setIsLoading] = useState(false);

  const isConnected =
    connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED;

  /**
   * Send a single payment via Push Chain
   */
  const sendPayment = async (to: string, amount: string) => {
    if (!pushChainClient) {
      toast.error("Wallet not connected");
      return null;
    }

    setIsLoading(true);
    try {
      // Convert amount to proper units (assuming 18 decimals)
      const value = PushChain.utils.helpers.parseUnits(amount, 18);

      const res = await pushChainClient.universal.sendTransaction({
        to: to as `0x${string}`,
        value,
      });

      toast.success("Payment sent successfully!", {
        description: `Transaction hash: ${res.hash.slice(0, 10)}...`,
      });

      return {
        hash: res.hash,
        explorerUrl: pushChainClient.explorer.getTransactionUrl(res.hash),
      };
    } catch (error: any) {
      console.error("Payment failed:", error);
      toast.error("Payment failed", {
        description: error.message || "Unknown error occurred",
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Send batch payments via Push Chain
   */
  const sendBatchPayments = async (
    recipients: Array<{ address: string; amount: string }>
  ) => {
    if (!pushChainClient) {
      toast.error("Wallet not connected");
      return null;
    }

    setIsLoading(true);
    const results = [];
    const failed = [];

    try {
      for (const recipient of recipients) {
        try {
          const value = PushChain.utils.helpers.parseUnits(
            recipient.amount,
            18
          );

          const res = await pushChainClient.universal.sendTransaction({
            to: recipient.address as `0x${string}`,
            value,
          });

          results.push({
            address: recipient.address,
            hash: res.hash,
            explorerUrl: pushChainClient.explorer.getTransactionUrl(res.hash),
          });
        } catch (error: any) {
          console.error(`Failed to send to ${recipient.address}:`, error);
          failed.push({
            address: recipient.address,
            error: error.message,
          });
        }
      }

      if (failed.length === 0) {
        toast.success("All payments sent successfully!", {
          description: `${results.length} transactions completed`,
        });
      } else {
        toast.warning("Some payments failed", {
          description: `${results.length} succeeded, ${failed.length} failed`,
        });
      }

      return { results, failed };
    } catch (error: any) {
      console.error("Batch payment failed:", error);
      toast.error("Batch payment failed", {
        description: error.message || "Unknown error occurred",
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Get account balance
   */
  const getBalance = async () => {
    if (!pushChainClient?.universal.account) {
      return null;
    }

    try {
      // This would need to be implemented based on Push Chain's balance API
      // Placeholder for now
      return "0";
    } catch (error) {
      console.error("Failed to get balance:", error);
      return null;
    }
  };

  /**
   * Get Universal Executor Account (UEA) address
   */
  const getAccount = () => {
    return pushChainClient?.universal.account || null;
  };

  return {
    isConnected,
    isLoading,
    account: getAccount(),
    sendPayment,
    sendBatchPayments,
    getBalance,
    pushChainClient,
  };
}
