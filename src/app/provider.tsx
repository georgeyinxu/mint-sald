"use client";

import React from "react";
import {
  metamaskWallet,
  ThirdwebProvider,
  walletConnect,
} from "@thirdweb-dev/react";
import { Mumbai } from "@thirdweb-dev/chains";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider
      supportedChains={[Mumbai]}
      clientId="c39b8ec1e949b0b1fa56a439cb8f311c"
      supportedWallets={[metamaskWallet(), walletConnect()]}
    >
      {children}
    </ThirdwebProvider>
  );
}
