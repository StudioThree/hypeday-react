import { useEffect, useMemo, useState } from "react";
import type { EvmChains, SectionProps } from "../types";
import Section from "./Section";
import { getErrorMessage, shortenWalletAddress } from "../helpers";
import useTokenWallet from "../hooks/useTokenWallet";
import RequiredIndicator from "./RequiredIndicator";
import useEvmWallet from "../hooks/useEvmWallet";

const chainToCurrency = {
  ethereum: "ETH",
  solana: "SOL",
  polygon: "MATIC",
  avalanche: "AVAX",
  flow: "FLOW",
};

export default function WalletSection({
  projectData,
  appId,
  hasUser,
  token,
  logger,
}: SectionProps & { token: string }) {
  const [error, setError] = useState("");
  const [walletAddr, setWalletAddr] = useState("");
  const tokenWallet = useTokenWallet(token, projectData.chain);
  const { evmConnect, evmLoading, evmElement } = useEvmWallet(appId);

  useEffect(() => {
    setWalletAddr(shortenWalletAddress(tokenWallet));
  }, [tokenWallet]);

  const info = useMemo(() => {
    if (!projectData?.wallet) return [];

    const { wallet } = projectData;

    // If there is a wallet in the token, use that
    if (!tokenWallet && projectData.userInfo?.walletAddress) {
      setWalletAddr(shortenWalletAddress(projectData.userInfo?.walletAddress));
    }

    const infoArray = [];

    if (wallet?.isBalanceRequired) {
      const balanceRq = (
        <>
          Have at least
          <strong>
            {" " +
              wallet.balance +
              " " +
              chainToCurrency[
                projectData.chain as keyof typeof chainToCurrency
              ] +
              " "}
          </strong>
          in your wallet
          <RequiredIndicator required={!wallet.isBalanceOptional} />
        </>
      );
      infoArray.push(balanceRq);
    }

    if (wallet?.isTokenRequired) {
      const tokenReq = (
        <>
          Have at least{" "}
          <strong>
            <a href={wallet.token?.url} target="_blank" rel="noreferrer">
              {wallet.token?.balance} {wallet.token?.symbol}
            </a>
          </strong>{" "}
          in your wallet
          <RequiredIndicator required={!wallet.isTokenOptional} />
        </>
      );
      infoArray.push(tokenReq);
    }

    if (wallet?.isNftRequired) {
      const { nftCollection } = wallet;
      const nftRq = (
        <>
          Hold an NFT from{" "}
          <strong>
            <a href={nftCollection?.url} target="_blank" rel="noreferrer">
              {nftCollection?.name}
            </a>
          </strong>
          <RequiredIndicator required={!wallet.isNftOptional} />
        </>
      );
      infoArray.push(nftRq);
    }

    return infoArray;
  }, [projectData, tokenWallet]);

  const handleConnect = async () => {
    setError("");
    const result = await evmConnect(projectData.chain as EvmChains);

    if (result?.error) {
      logger?.error(
        "HypeDayReact: Error connecting wallet",
        "hype02",
        result.error
      );
      setError(getErrorMessage(result.error));
    }

    if (result?.address) {
      logger?.info("HypeDayReact: Wallet connected", "hype03", {
        address: result.address,
        chain: projectData.chain,
      });
      setWalletAddr(shortenWalletAddress(result.address));
    }
  };

  if (projectData?.wallet?.required === false) return null;

  return (
    <>
      <Section
        title="Wallet"
        onClick={handleConnect}
        info={info}
        isLoading={evmLoading}
        rightText={walletAddr}
        buttonDisabled={!hasUser}
        errorMessage={error}
      />
      {evmElement}
    </>
  );
}
