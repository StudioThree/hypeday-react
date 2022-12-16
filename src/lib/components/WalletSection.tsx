import { useMemo, useState } from "react";
import type { EvmChains, SectionProps } from "../types";
import Section from "./Section";
import { getErrorMessage } from "../helpers";
import RequiredIndicator from "./RequiredIndicator";
import useEvmWallet from "../hooks/useEvmWallet";
import useUserContext from "../context/user.context";

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
  logger,
}: SectionProps) {
  const [error, setError] = useState("");
  const { walletAddr } = useUserContext();
  const { evmConnect, evmLoading, evmElement } = useEvmWallet(appId);

  const info = useMemo(() => {
    if (!projectData?.wallet) return [];

    const { wallet } = projectData;

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
  }, [projectData]);

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

    logger?.info("HypeDayReact: Wallet connected", "hype03", {
      address: walletAddr,
      chain: projectData.chain,
    });
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
        errorMessage={error}
      />
      {evmElement}
    </>
  );
}
