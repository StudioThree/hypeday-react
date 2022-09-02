import { useEffect, useState } from "react";
import DiscordSection from "./components/DiscordSection";
import EmailSection from "./components/EmailSection";
import OpenResponseSection from "./components/OpenResponseSection";
import TwitterSection from "./components/TwitterSection";
import WalletSection from "./components/WalletSection";
import classes from "./style.module.css";

interface HypeDayReactProps {
  projectId: string;
}

export default function HypeDayReact({ projectId }: HypeDayReactProps) {
  const [projectData, setProjectData] = useState({});

  useEffect(() => {
    if (!projectId) return;

    fetch(`https://apitest.hype.day/getProject?projectid=${projectId}`)
      .then((response) => response.json())
      .then((data) => setProjectData(data));
  }, []);

  return (
    <div className={classes.wrapper}>
      <WalletSection projectData={projectData} />
      <TwitterSection projectData={projectData} />
      <DiscordSection projectData={projectData} />
      <EmailSection projectData={projectData} />
      <OpenResponseSection projectData={projectData} />

      <button className={`${classes.hypeButton} ${classes.registerButton}`}>
        Click to Register
      </button>
    </div>
  );
}
