import { useEffect, useState } from "react";
import type { GetProjectResponse } from "../types";
import DiscordSection from "./components/DiscordSection";
import EmailSection from "./components/EmailSection";
import OpenResponseSection from "./components/OpenResponseSection";
import TwitterSection from "./components/TwitterSection";
import WalletSection from "./components/WalletSection";
import classes from "./style.module.css";

interface HypeDayReactProps {
  projectId: string;
  userId: string;
}

export default function HypeDayReact({ projectId, userId }: HypeDayReactProps) {
  const [projectData, setProjectData] = useState<GetProjectResponse>();

  useEffect(() => {
    if (!projectId) return;

    fetch(
      `https://apitest.hype.day/getProject?projectid=${projectId}&userid=${userId}`
    )
      .then((response) => response.json())
      .then((data) => setProjectData(data));
  }, []);

  const handleRegister = () => {
    if (projectData?.userInfo?.registered) return;

    console.log("register button clicked");
  };

  return (
    <div className={classes.wrapper}>
      <WalletSection projectData={projectData} />
      <TwitterSection projectData={projectData} />
      <DiscordSection projectData={projectData} />
      <EmailSection projectData={projectData} />
      <OpenResponseSection projectData={projectData} />

      <button className={classes.registerButton} onClick={handleRegister}>
        {projectData?.userInfo?.registered
          ? "Registered! 🎉"
          : "Click to Register"}
      </button>
    </div>
  );
}
