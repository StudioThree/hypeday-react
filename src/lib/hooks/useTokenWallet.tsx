import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { HypeJWTPayload, SupportedChains } from "../types";

export default function useTokenWallet(token: string, chain: SupportedChains) {
  const [walletAddress, setWalletAddress] = useState(
    jwtDecode<HypeJWTPayload>(token).wallets?.[chain]
  );

  useEffect(() => {
    if (!token) {
      setWalletAddress(undefined);
    }

    setWalletAddress(jwtDecode<HypeJWTPayload>(token).wallets?.[chain]);
  }, [token, chain]);

  return walletAddress;
}
