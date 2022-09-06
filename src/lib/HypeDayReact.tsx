import { useEffect, useState } from "react";
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
}

export default function HypeDayReact({
  appId,
  projectId,
  userId,
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
        {projectData?.userInfo?.registered
          ? "Registered! 🎉"
          : "Click to Register"}
      </button>
    </div>
  );
}
