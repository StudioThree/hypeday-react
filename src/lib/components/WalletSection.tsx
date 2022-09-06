import type { GetProjectResponse } from "../types";
import Section from "./Section";

const chainToCurrency = {
  ethereum: "ETH",
  solana: "SOL",
  polygon: "MATIC",
  avalanche: "AVAX",
  flow: "FLOW",
};

export default function WalletSection({
  projectData,
}: {
  projectData?: GetProjectResponse;
}) {
  if (!projectData?.wallet) return null;

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
            chainToCurrency[projectData.chain as keyof typeof chainToCurrency] +
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

  return (
    <Section
      title="Wallet"
      onClick={() => console.log("wallet button clicked")}
      info={infoArray}
      rightText=" "
    />
  );
}
