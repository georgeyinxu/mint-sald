"use client";

import {
  ConnectWallet,
  useAddress,
  useNetworkMismatch,
  useNetwork,
  ChainId,
} from "@thirdweb-dev/react";
import { useEffect } from "react";
import MintCard from "./components/MintCard";

export default function Home() {
  const address = useAddress();
  const isMismatched = useNetworkMismatch();
  const [, switchNetwork] = useNetwork(); // Switch to desired chain

  useEffect(() => {
    // Check if the user is connected to the wrong network
    if (isMismatched) {
      // Prompt their wallet to switch networks
      switchNetwork(ChainId.Mumbai); // the chain you want here
    }
  }, [address]); // This above block gets run every time "address" changes (e.g. when the user connects)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {address ? <MintCard /> : <ConnectWallet />}
    </main>
  );
}
