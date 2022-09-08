import { useCallback, useEffect, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const fetchProjectData = useCallback(async () => {
    if (!projectId || !appId) {
      console.error("HypeDayReact: projectId and appId props are required.");
      return;
    }

    setIsLoading(true);
    setHasError(false);
    getProject({ appId, projectId, userId })
      .then((data) => setProjectData(data))
      .catch((err) => {
        console.error("HypeDayReact: Error fetching project data", err);
        setHasError(true);
      })
      .finally(() => setIsLoading(false));
  }, [appId, projectId, userId]);

  useEffect(() => {
    fetchProjectData();
  }, [fetchProjectData]);

  const handleRegister = () => {
    if (projectData?.userInfo?.registered) return;

    setIsRegistering(true);
    setTimeout(() => setIsRegistering(false), 3000);
    console.log("register button clicked");
  };

  if (isLoading) {
    return (
      <div
        className="hypeday-wrapper"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="hypeday-spinner" />
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="hypeday-wrapper">
        <span className="hypeday-error">
          Something went wrong. Please check your connection.
        </span>
        <button className="hypeday-button" onClick={fetchProjectData}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="hypeday-wrapper">
      <SignupAccessSection projectData={projectData} />
      <WalletSection projectData={projectData} />
      <TwitterSection projectData={projectData} appId={appId} userId={userId} />
      <DiscordSection projectData={projectData} appId={appId} userId={userId} />
      <OpenResponseSection projectData={projectData} />

      <button
        className="hypeday-register-button"
        onClick={handleRegister}
        disabled={isRegistering}
      >
        {isRegistering && (
          <div className="hypeday-spinner hypeday-btn-spinner" />
        )}
        <span style={{ visibility: isRegistering ? "hidden" : "initial" }}>
          {projectData?.userInfo?.registered ? "Registered" : "Register"}
        </span>
      </button>
    </div>
  );
}
