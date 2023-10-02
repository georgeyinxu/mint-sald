"use client";

import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import MintCard from "./components/MintCard";

export default function Home() {
  const address = useAddress();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {address ? <MintCard /> : <ConnectWallet />}
    </main>
  );
}
