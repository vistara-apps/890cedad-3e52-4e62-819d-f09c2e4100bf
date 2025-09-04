'use client';

import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import { Wallet } from '@coinbase/onchainkit/wallet';
import { Box, TrendingUp } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b border-purple-300/20 bg-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 max-w-screen-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-purple-600 rounded-lg">
              <Box className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">GrowthHackerAI</h1>
              <p className="text-purple-200 text-sm">AI-Powered Ad Variations</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 text-white">
            <a href="#" className="hover:text-purple-200 transition-colors">Home</a>
            <a href="#" className="hover:text-purple-200 transition-colors">Features</a>
            <a href="#" className="hover:text-purple-200 transition-colors">Pricing</a>
            <a href="#" className="hover:text-purple-200 transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <Wallet>
              <ConnectWallet />
            </Wallet>
          </div>
        </div>
      </div>
    </header>
  );
}
