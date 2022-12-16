import { useCallback, useRef, useState } from "react";
import { IProviderOptions } from "web3modal";
import {
  addWallet,
  loginWithWallet,
  verifyWallet,
  verifyWalletLogin,
} from "../api";
import HypeModal from "../components/HypeModal";
import useUserContext from "../context/user.context";
import { isMobile } from "../helpers";
import { EvmChains } from "../types";

const rpcByChain: { [key in EvmChains]: { rpc: string; chainId: string } } = {
  ethereum: {
    chainId: "1",
    rpc: "https://rpc.builder0x69.io",
  },
  polygon: {
    chainId: "137",
    rpc: "https://polygon-rpc.com",
  },
  avalanche: {
    chainId: "43114",
    rpc: "https://api.avax.network/ext/bc/C/rpc",
  },
  klaytn: {
    chainId: "8217",
    rpc: "https://klaytn04.fandom.finance",
  },
};

export default function useEvmWallet(appId: string) {
  const [loading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const chainRef = useRef<EvmChains>("ethereum");
  const { shouldLogin, setUserToken, fetchProjectData } = useUserContext();

  const connect = useCallback(
    async (chain: EvmChains = "ethereum") => {
      try {
        setIsLoading(true);
        const [
          { default: Web3Modal },
          { default: WalletConnectProvider },
          { default: CoinbaseWalletSDK },
          { Web3Provider },
        ] = await Promise.all([
          import("web3modal"),
          import("@walletconnect/web3-provider/dist/cjs/index"),
          import("@coinbase/wallet-sdk"),
          import("@ethersproject/providers"),
        ]);

        const providerOptions: IProviderOptions = {
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              rpc: {
                [rpcByChain[chain].chainId]: rpcByChain[chain].rpc,
              },
            },
          },
          coinbasewallet: {
            package: CoinbaseWalletSDK,
            options: {
              appName: "Hype.Day",
              rpc: rpcByChain[chain].rpc,
              chainId: rpcByChain[chain].chainId,
              darkMode: false,
            },
          },
        };

        const web3Modal = new Web3Modal({
          cacheProvider: false,
          providerOptions,
        });

        const instance = await web3Modal.connect();
        const provider = new Web3Provider(instance);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const { nonce } = await (shouldLogin
          ? loginWithWallet({ appId, chain, address })
          : addWallet({ appId, chain, address }));
        const signature = await signer.signMessage(nonce);

        if (shouldLogin) {
          const { token } = await verifyWalletLogin({
            appId,
            chain,
            address,
            signature,
          });

          setUserToken(token);
        } else {
          await verifyWallet({
            address,
            signature,
            chain,
            appId,
          });
        }

        fetchProjectData();
      } catch (err: unknown) {
        if (err === "Modal closed by user") return null;
        if (
          err instanceof Error &&
          ([
            "User Rejected",
            "User closed modal",
            "MetaMask Personal Message Signature: User denied message signature.",
            "MetaMask Message Signature: User denied message signature.",
            "Modal closed by user",
            "User denied account authorization",
          ].includes(err.message ?? err) ||
            err.message.includes("user rejected signing"))
        ) {
          return {
            error: new Error(
              "You need to accept signature request to connect your wallet."
            ),
          };
        }

        console.error(err);
        return { error: err };
      } finally {
        setIsLoading(false);
      }
    },
    [appId, shouldLogin, setUserToken, fetchProjectData]
  );

  const checkIsMobile = useCallback(
    (chain: EvmChains = "ethereum") => {
      if (isMobile()) {
        chainRef.current = chain;
        return setIsModalOpen(true);
      }
      return connect(chain);
    },
    [connect]
  );

  const element = (
    <HypeModal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
    >
      <p className="hypeday-modal-p">
        MetaMask mobile app users, please select WalletConnect in the next step.
        If it doesn&apos;t connect on your first try, please come back to this
        page and try connecting again. It sometimes takes couple tries to
        connect successfully.
      </p>
      <button
        className="hypeday-button hypeday-modal-button"
        onClick={() => {
          setIsModalOpen(false);
          return connect(chainRef.current);
        }}
      >
        Ok
      </button>
    </HypeModal>
  );

  return {
    evmConnect: checkIsMobile,
    evmLoading: loading,
    evmElement: element,
  };
}
