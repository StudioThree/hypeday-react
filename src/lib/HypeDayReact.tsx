import { useCallback, useEffect, useRef, useState } from "react";
import type { GetProjectResponse } from "./types";
import DiscordSection from "./components/DiscordSection";
import OpenResponseSection from "./components/OpenResponseSection";
import SignupAccessSection from "./components/SignupAccessSection";
import TwitterSection from "./components/TwitterSection";
import WalletSection from "./components/WalletSection";
import { getProject, setAuthorizationHeader } from "./api";
import "./style.css";
import RegisterButton from "./components/RegisterButton";

interface HypeDayReactProps {
  appId: string;
  projectId: string;
  userToken?: string;
}

export default function HypeDayReact({
  appId,
  projectId,
  userToken,
}: HypeDayReactProps) {
  const [projectData, setProjectData] = useState<GetProjectResponse>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const fetchProjectData = useCallback(async () => {
    if (!projectId || !appId) {
      console.error("HypeDayReact: projectId and appId props are required.");
      return;
    }

    setIsLoading(true);
    setError("");
    getProject({ appId, projectId })
      .then((data) => setProjectData(data))
      .catch((err) => {
        console.error("HypeDayReact: Error fetching project data", err);
        setError(
          err.message || "Something went wrong. Please check your connection."
        );
      })
      .finally(() => setIsLoading(false));
  }, [appId, projectId]);

  useEffect(() => {
    setAuthorizationHeader(userToken);
  }, [userToken]);

  useEffect(() => {
    fetchProjectData();
  }, [fetchProjectData]);

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

  if (error) {
    return (
      <div className="hypeday-wrapper">
        <span className="hypeday-error">{error}</span>
        <button className="hypeday-button" onClick={fetchProjectData}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="hypeday-wrapper">
      <SignupAccessSection projectData={projectData} />
      <WalletSection
        projectData={projectData}
        appId={appId}
        hasUser={!!userToken}
      />
      <TwitterSection
        projectData={projectData}
        appId={appId}
        hasUser={!!userToken}
      />
      <DiscordSection
        projectData={projectData}
        appId={appId}
        hasUser={!!userToken}
      />
      <OpenResponseSection projectData={projectData} ref={inputRef} />
      <RegisterButton
        projectData={projectData}
        appId={appId}
        hasUser={!!userToken}
        inputRef={inputRef}
      />
      <div
        style={{
          fontSize: "0.8em",
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          paddingTop: 12,
        }}
      >
        <span>
          Powered by{" "}
          <a
            href="https://hype.day"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            Hype.Day
          </a>
        </span>
      </div>
    </div>
  );
}
