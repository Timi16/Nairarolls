"use client";

import {
  PushUniversalAccountButton,
  usePushWalletContext,
  usePushChainClient,
  PushUI,
} from "@pushchain/ui-kit";
import { useEffect } from "react";
import { useAppStore } from "@/lib/store";
import { Wallet } from "lucide-react";

export function PushWalletButton() {
  const { connectionStatus } = usePushWalletContext();
  const { pushChainClient } = usePushChainClient();
  const { setUser, setOrganization } = useAppStore();

  // Sync Push Chain wallet state with app store
  useEffect(() => {
    const account = pushChainClient?.universal.account;
    
    if (connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED && account) {
      // Update user in store with Push Chain account
      setUser({
        id: account,
        walletAddress: account,
        organizationId: "default",
        role: "admin",
      });

      // You can also set organization if available
      // This would typically come from your backend or contract
    } else if (!account) {
      // Clear user when disconnected
      setUser(null);
      setOrganization(null);
    }
  }, [connectionStatus, pushChainClient, setUser, setOrganization]);

  return (
    <div className="flex items-center gap-2">
      <PushUniversalAccountButton />
      
      {connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED && (
        <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
          <Wallet className="h-4 w-4" />
          <span className="font-mono text-xs">
            {pushChainClient?.universal.account?.slice(0, 6)}...
            {pushChainClient?.universal.account?.slice(-4)}
          </span>
        </div>
      )}
    </div>
  );
}
