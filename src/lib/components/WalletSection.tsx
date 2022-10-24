import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { Base58 } from "@ethersproject/basex";
import { useEffect, useMemo, useRef, useState } from "react";
import ReactModal from "react-modal";
import { addWallet, verifyWallet } from "../api";
import type { SectionProps } from "../types";
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

function WalletSection({ projectData, appId, hasUser, logger }: SectionProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileModalVisible, setIsMobileModalVisible] = useState(false);
  const [walletAddr, setWalletAddr] = useState("");
  const { setVisible } = useWalletModal();
  const { connected, publicKey, signMessage, disconnect } = useWallet();
  const isLoggingIn = useRef(false);
  const isButtonClicked = useRef(false);

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
        !isButtonClicked.current ||
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
        logger?.info("HypeDayReact: Wallet connected", "hype03", {
          address: publicKey.toString(),
          projectId: projectData?.id,
          chain: projectData?.chain,
        });
      } catch (err) {
        disconnect();
        if (
          (err as Error).message !== "User rejected the request." &&
          (err as Error).name !== WalletNotConnectedError.name
        ) {
          console.error("error", err);
          logger?.error("HypeDayReact: Error connecting wallet", "hype02", err);
          // TODO: show error message
        }
      } finally {
        setIsLoading(false);

        isLoggingIn.current = false;
        isButtonClicked.current = false;
      }
    }

    loginWithSolana();
  }, [
    logger,
    appId,
    projectData,
    setIsLoading,
    connected,
    publicKey,
    signMessage,
    disconnect,
  ]);

  const login = () => {
    if (walletAddr) return;
    setVisible(true);
    isButtonClicked.current = true;
  };

  const checkIsMobile = () => {
    const isMobile =
      Math.min(window.screen.width, window.screen.height) < 768 ||
      navigator.userAgent.indexOf("Mobi") > -1;
    const urlParams = new URLSearchParams(window.location.search);
    const phantomApp = urlParams.get("phantomApp");

    if (isMobile && !phantomApp) {
      return setIsMobileModalVisible(true);
    }
    login();
  };

  const openSolanaDeeplink = async () => {
    try {
      const params = new URLSearchParams();
      params.append("phantomApp", "1");
      params.append("ref", "hypeday");
      const phantomLink =
        "https://phantom.app/ul/browse/" +
        encodeURIComponent(window.location.href + "?" + params.toString());
      window.open(phantomLink, "_blank");
    } catch (err: unknown) {
      console.error(err);
    }
  };

  if (projectData?.wallet?.required === false) return null;

  return (
    <>
      <ReactModal
        appElement={document.body as HTMLElement}
        isOpen={isMobileModalVisible}
        onRequestClose={() => setIsMobileModalVisible(false)}
        contentLabel={"Open in Phantom Mobile App Modal"}
        overlayClassName={"hypeday-modal-overlay"}
        className={"hypeday-modal-content"}
      >
        <h3 className="hypeday-h3">Open in Phantom Mobile App?</h3>
        <div
          className="hypeday-modal-close"
          onClick={() => setIsMobileModalVisible(false)}
        >
          &times;
        </div>
        <button
          className="hypeday-button hypeday-modal-button"
          onClick={openSolanaDeeplink}
        >
          Yes
        </button>
        <button
          className="hypeday-button hypeday-modal-button"
          onClick={() => {
            setIsMobileModalVisible(false);
            login();
          }}
        >
          Other ways to connect
        </button>
      </ReactModal>
      <Section
        title="Wallet"
        onClick={checkIsMobile}
        info={info}
        isLoading={isLoading}
        rightText={walletAddr}
        buttonDisabled={!hasUser}
      />
    </>
  );
}

export default function WalletSectionWrapper({
  projectData,
  appId,
  hasUser,
  logger,
}: SectionProps) {
  return (
    <SolanaWrapper>
      <WalletSection
        projectData={projectData}
        appId={appId}
        hasUser={hasUser}
        logger={logger}
      />
    </SolanaWrapper>
  );
}
