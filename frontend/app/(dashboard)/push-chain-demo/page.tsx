"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Wallet,
  Send,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Loader2,
  Globe,
  Zap,
} from "lucide-react";
import { usePushChainPayroll } from "@/hooks/usePushChainPayroll";
import { PushWalletButton } from "@/components/PushWalletButton";

export default function PushChainDemoPage() {
  const { isConnected, isLoading, account, sendPayment, sendBatchPayments } =
    usePushChainPayroll();

  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [txResult, setTxResult] = useState<{
    hash: string;
    explorerUrl: string;
  } | null>(null);

  const handleSendPayment = async () => {
    if (!recipient || !amount) return;

    const result = await sendPayment(recipient, amount);
    if (result) {
      setTxResult(result);
      setRecipient("");
      setAmount("");
    }
  };

  const handleBatchDemo = async () => {
    const demoRecipients = [
      { address: "0x1234567890123456789012345678901234567890", amount: "0.01" },
      { address: "0x0987654321098765432109876543210987654321", amount: "0.02" },
    ];

    await sendBatchPayments(demoRecipients);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Push Chain Universal Wallet
          </h1>
          <p className="text-muted-foreground mt-2">
            Process payroll from any blockchain - EVM, Solana, and more
          </p>
        </div>
        <PushWalletButton />
      </div>

      {/* Features Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Universal Access</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">All Chains</div>
            <p className="text-xs text-muted-foreground">
              Connect from EVM, Solana, or any supported chain
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Instant Setup</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">&lt; 5 min</div>
            <p className="text-xs text-muted-foreground">
              Plug and play integration with React apps
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Connection Status</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isConnected ? (
                <Badge variant="default" className="text-sm">
                  <CheckCircle className="mr-1 h-3 w-3" />
                  Connected
                </Badge>
              ) : (
                <Badge variant="secondary" className="text-sm">
                  <AlertCircle className="mr-1 h-3 w-3" />
                  Disconnected
                </Badge>
              )}
            </div>
            {account && (
              <p className="text-xs text-muted-foreground font-mono mt-1">
                {account.slice(0, 10)}...{account.slice(-8)}
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      {isConnected ? (
        <div className="grid gap-6 md:grid-cols-2">
          {/* Send Payment */}
          <Card>
            <CardHeader>
              <CardTitle>Send Payment</CardTitle>
              <CardDescription>
                Send a payment to any address across chains
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="recipient">Recipient Address</Label>
                <Input
                  id="recipient"
                  placeholder="0x..."
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Amount (PC)</Label>
                <Input
                  id="amount"
                  type="number"
                  step="0.01"
                  placeholder="0.01"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <Button
                onClick={handleSendPayment}
                disabled={!recipient || !amount || isLoading}
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Payment
                  </>
                )}
              </Button>

              {txResult && (
                <div className="mt-4 p-4 bg-green-50 dark:bg-green-950 rounded-lg space-y-2">
                  <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
                    <CheckCircle className="h-4 w-4" />
                    <span className="font-medium">Transaction Successful!</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono break-all">
                    {txResult.hash}
                  </p>
                  <a
                    href={txResult.explorerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
                  >
                    View in Explorer
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Batch Payment Demo */}
          <Card>
            <CardHeader>
              <CardTitle>Batch Payment Demo</CardTitle>
              <CardDescription>
                Test batch payment functionality with demo addresses
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex-1">
                    <p className="text-sm font-medium">Employee 1</p>
                    <p className="text-xs text-muted-foreground font-mono">
                      0x1234...7890
                    </p>
                  </div>
                  <Badge variant="secondary">0.01 PC</Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex-1">
                    <p className="text-sm font-medium">Employee 2</p>
                    <p className="text-xs text-muted-foreground font-mono">
                      0x0987...4321
                    </p>
                  </div>
                  <Badge variant="secondary">0.02 PC</Badge>
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Total Amount</span>
                <span className="text-lg font-bold">0.03 PC</span>
              </div>

              <Button
                onClick={handleBatchDemo}
                disabled={isLoading}
                className="w-full"
                variant="outline"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Batch Payment
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                This will send 2 separate transactions to demo addresses
              </p>
            </CardContent>
          </Card>
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Connect Your Wallet</CardTitle>
            <CardDescription>
              Connect from any chain to get started with universal payroll processing
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-center justify-center py-8 space-y-4">
              <Wallet className="h-16 w-16 text-muted-foreground" />
              <p className="text-center text-muted-foreground max-w-md">
                Push Chain UI Kit enables seamless wallet connections from Ethereum,
                Solana, and other blockchains. Click the button above to connect.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline">Ethereum</Badge>
                <Badge variant="outline">Solana</Badge>
                <Badge variant="outline">Polygon</Badge>
                <Badge variant="outline">Base</Badge>
                <Badge variant="outline">Arbitrum</Badge>
                <Badge variant="outline">Optimism</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Integration Info */}
      <Card>
        <CardHeader>
          <CardTitle>About Push Chain Integration</CardTitle>
          <CardDescription>
            How universal wallet support works in NairaRolls
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                What's Enabled
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1 ml-6 list-disc">
                <li>Connect from any supported blockchain</li>
                <li>Universal Executor Account (UEA) abstraction</li>
                <li>Cross-chain payment processing</li>
                <li>Email & social login options</li>
                <li>Seamless wallet switching</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2">
                <Zap className="h-4 w-4 text-blue-600" />
                Integration Details
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1 ml-6 list-disc">
                <li>Package: @pushchain/ui-kit</li>
                <li>Provider: PushUniversalWalletProvider</li>
                <li>Hook: usePushChainPayroll</li>
                <li>Network: Push Chain Testnet</li>
                <li>Setup time: &lt; 5 minutes</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
