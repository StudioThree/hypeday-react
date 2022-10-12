import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { Base58 } from "@ethersproject/basex";
import { useEffect, useMemo, useRef, useState } from "react";
import { addWallet, verifyWallet } from "../api";
import type { GetProjectResponse } from "../types";
import Section from "./Section";
import { SolanaWrapper } from "./SolanaWrapper";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { shortenWalletAddress } from "../helpers";

const chainToCurrency = {
  ethereum: "ETH",
  solana: "SOL",
  polygon: "MATIC",
  avalanche: "AVAX",
  flow: "FLOW",
};

function WalletSection({
  projectData,
  appId,
  hasUser,
}: {
  projectData?: GetProjectResponse;
  appId: string;
  hasUser: boolean;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [walletAddr, setWalletAddr] = useState("");
  const { setVisible } = useWalletModal();
  const { connected, publicKey, signMessage, disconnect } = useWallet();
  const isLoggingIn = useRef(false);

  const info = useMemo(() => {
    if (!projectData?.wallet) return [];

    const { wallet } = projectData;
    setWalletAddr(
      projectData.userInfo?.walletAddress
        ? shortenWalletAddress(projectData.userInfo.walletAddress)
        : ""
    );
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
        </>
      );
      infoArray.push(balanceRq);
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
        </>
      );
      infoArray.push(nftRq);
    }

    return infoArray;
  }, [projectData]);

  useEffect(() => {
    async function loginWithSolana() {
      if (
        projectData?.userInfo?.walletAddress ||
        !connected ||
        !publicKey ||
        !signMessage ||
        isLoggingIn.current
      ) {
        return;
      }

      try {
        isLoggingIn.current = true;
        setIsLoading(true);

        const address = publicKey.toBase58();

        const { nonce } = await addWallet({ appId, address });

        const encodedMessage = new TextEncoder().encode(nonce);
        const signedMessage = Base58.encode(await signMessage(encodedMessage));

        await verifyWallet({
          address,
          signature: signedMessage,
          appId,
        });

        setWalletAddr(shortenWalletAddress(publicKey.toString()));
      } catch (err) {
        disconnect();
        if (
          (err as Error).message !== "User rejected the request." &&
          (err as Error).name !== WalletNotConnectedError.name
        )
          console.error("error", err);
        // TODO: show error message
      } finally {
        setIsLoading(false);

        isLoggingIn.current = false;
      }
    }

    loginWithSolana();
  }, [
    appId,
    projectData,
    setIsLoading,
    connected,
    publicKey,
    signMessage,
    disconnect,
  ]);

  if (projectData?.wallet?.required === false) return null;

  return (
    <Section
      title="Wallet"
      onClick={() => {
        if (walletAddr) return;
        setVisible(true);
      }}
      info={info}
      isLoading={isLoading}
      rightText={walletAddr}
      buttonDisabled={!hasUser}
    />
  );
}

export default function WalletSectionWrapper({
  projectData,
  appId,
  hasUser,
}: {
  projectData?: GetProjectResponse;
  appId: string;
  hasUser: boolean;
}) {
  return (
    <SolanaWrapper>
      <WalletSection
        projectData={projectData}
        appId={appId}
        hasUser={hasUser}
      />
    </SolanaWrapper>
  );
}
