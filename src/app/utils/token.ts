import tokenAbi from "@/app/abi/TokenABI.json";
import { ethers } from "ethers";

const mintSALD = async (
  amount: number,
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (!process.env.NEXT_PUBLIC_SALD_ADDR) {
    console.error("Please set your NEXT_PUBLIC_SALD_ADDR in .env.local");
    return;
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const tokenContract = new ethers.Contract(
    process.env.NEXT_PUBLIC_SALD_ADDR,
    tokenAbi,
    signer
  );

  try {
    await tokenContract.mint(
      signer.getAddress(),
      ethers.utils.parseUnits(amount.toString(), 18)
    );
  } catch (error) {
    console.error(error);
  } finally {
    setCompleted(true);
  }
};

export { mintSALD };
