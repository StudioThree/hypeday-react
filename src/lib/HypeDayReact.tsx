import { useEffect, useState } from "react";
import type { JsonRpcSigner } from "@ethersproject/providers";
import type { GetProjectResponse } from "./types";
import DiscordSection from "./components/DiscordSection";
import OpenResponseSection from "./components/OpenResponseSection";
import SignupAccessSection from "./components/SignupAccessSection";
import TwitterSection from "./components/TwitterSection";
import WalletSection from "./components/WalletSection";
import { getProject } from "./api";
import "./style.css";

interface HypeDayReactProps {
  appId: string;
  projectId: string;
  userId?: string;
  signer?: JsonRpcSigner;
}

export default function HypeDayReact({
  appId,
  projectId,
  userId,
  signer,
}: HypeDayReactProps) {
  const [projectData, setProjectData] = useState<GetProjectResponse>();

  useEffect(() => {
    if (!projectId) return;

    getProject({ appId, projectId, userId }).then((data) =>
      setProjectData(data)
    );
  }, [appId, projectId, userId]);

  const handleRegister = () => {
    if (projectData?.userInfo?.registered) return;

    if (signer) {
      // const address = await signer.getAddress();
      // generate a message to sign
      // const { nonce } = await api.addWallet({ chain, address })
      // const signature = await signer.signMessage(nonce);
      // send signature with register request
      // in order to not keep token or cookie
    }

    console.log("register button clicked");
  };

  return (
    <div className="hypeday-wrapper">
      <SignupAccessSection projectData={projectData} />
      <WalletSection projectData={projectData} />
      <TwitterSection projectData={projectData} appId={appId} userId={userId} />
      <DiscordSection projectData={projectData} appId={appId} userId={userId} />
      <OpenResponseSection projectData={projectData} />

      <button className="hypeday-register-button" onClick={handleRegister}>
        {!projectData && "Loading..."}
        {projectData && projectData?.userInfo?.registered && "Registered"}
        {projectData && !projectData.userInfo?.registered && "Register"}
      </button>
    </div>
  );
}
