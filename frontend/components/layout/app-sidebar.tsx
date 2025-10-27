'use client'

import { Building2, CreditCard, DollarSign, History, Home, Settings, Users, CheckCircle, Wallet } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { useAppStore } from '@/lib/store'
import { useAccount } from "@/lib/thirdweb-hooks";
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useDisconnect, useActiveWallet } from "thirdweb/react";
import ConnectWallet from '../ConnectWallet';
import { useEffect, useState } from 'react';
import { getBasename } from "@superdevfavour/basename";
import { Address } from "viem";

const menuItems = [
  { title: 'Dashboard', url: '/dashboard', icon: Home },
  { title: 'Employees', url: '/employees', icon: Users },
  { title: 'Payments', url: '/payments', icon: DollarSign },
  { title: 'Approvals', url: '/approvals', icon: CheckCircle },
  { title: 'Transactions', url: '/transactions', icon: History },
  { title: 'Settings', url: '/settings', icon: Settings },
]

export function AppSidebar() {
  const pathname = usePathname();
  const { organization, user } = useAppStore();
  const { account, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const wallet = useActiveWallet();
  const [basename, setBasename] = useState<string | null>(null);
  const [isLoadingBasename, setIsLoadingBasename] = useState(false);

  // Fetch Basename for connected wallet
  useEffect(() => {
    const fetchBasename = async () => {
      if (!account?.address) {
        setBasename(null);
        return;
      }

      try {
        setIsLoadingBasename(true);
        const name = await getBasename(account.address as Address);
        setBasename(name || null);
      } catch (error) {
        console.log("No Basename found or error fetching:", error);
        setBasename(null);
      } finally {
        setIsLoadingBasename(false);
      }
    };

    fetchBasename();
  }, [account?.address]);

  // Format display name: Basename or shortened address
  const getDisplayName = () => {
    if (isLoadingBasename && account) {
      return "Loading...";
    }
    if (basename) {
      return basename;
    } else if (account?.address) {
      return `${account.address.slice(0, 6)}...${account.address.slice(-4)}`;
    }
  };

  return (
    <Sidebar>
      <SidebarHeader className="p-4 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Building2 className="h-8 w-8 text-primary" />
          <div>
            <h2 className="text-lg font-semibold text-white">Dizburza</h2>
            <p className="text-sm text-slate-400">
              {organization?.name || "No Organization"}
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 bg-slate-900 border-t border-slate-800">
        <div className="space-y-2">
          {isConnected ? (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Wallet className="h-4 w-4" />
                <span className="truncate">{getDisplayName()}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                onClick={() => wallet && disconnect(wallet)}
              >
                Disconnect
              </Button>
            </div>
          ) : (
            <div className="flex justify-center">
              <ConnectWallet />
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
