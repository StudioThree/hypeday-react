/// <reference types="react" />
import { EvmChains } from "../types";
export default function useEvmWallet(appId: string): {
    evmConnect: (chain?: EvmChains) => void | Promise<{
        error: unknown;
    } | null | undefined>;
    evmLoading: boolean;
    evmElement: JSX.Element;
};
