import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster as SonnerToaster } from "sonner";
import { Toaster } from '@/components/ui/toaster'
import { PushChainProvider } from '@/components/providers/PushChainProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NairaRolls - Universal Web3 Payroll',
  description: 'Enterprise payroll management powered by Push Chain - Connect from any blockchain',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <PushChainProvider>
          <SonnerToaster />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </PushChainProvider>
      </body>
    </html>
  );
}
