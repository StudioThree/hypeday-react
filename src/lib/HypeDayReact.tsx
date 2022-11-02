import { useCallback, useEffect, useRef, useState } from "react";
import type { GetProjectResponse, Logger } from "./types";
import DiscordSection from "./components/DiscordSection";
import OpenResponseSection from "./components/OpenResponseSection";
import SignupAccessSection from "./components/SignupAccessSection";
import TwitterSection from "./components/TwitterSection";
import WalletSection from "./components/WalletSection";
import { getProject, setAuthorizationHeader } from "./api";
import "./style.css";
import RegisterButton from "./components/RegisterButton";
import useRegistrationTimeContext, {
  RegistrationTimeProvider,
} from "./context/RegistrationTime.context";
import HypeDayLink from "./components/HypeDayLink";

interface HypeDayReactProps {
  appId: string;
  projectId: string;
  logger?: Logger;
  userToken?: string;
}

function HypeDayReact({
  appId,
  projectId,
  userToken,
  logger,
}: HypeDayReactProps) {
  const [projectData, setProjectData] = useState<GetProjectResponse>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { setData } = useRegistrationTimeContext();

  const fetchProjectData = useCallback(async () => {
    if (!projectId || !appId) {
      console.error("HypeDayReact: projectId and appId props are required.");
      return;
    }

    setIsLoading(true);
    setError("");
    getProject({ appId, projectId })
      .then((data) => {
        setProjectData(data);
        setData(data);
      })
      .catch((err) => {
        logger?.error(
          "HypeDayReact: Error fetching project data",
          "hype01",
          err
        );
        console.error("HypeDayReact: Error fetching project data", err);
        setError(
          err.message || "Something went wrong. Please check your connection."
        );
      })
      .finally(() => setIsLoading(false));
  }, [appId, setData, projectId, logger]);

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
      <SignupAccessSection />
      <WalletSection
        projectData={projectData}
        appId={appId}
        hasUser={!!userToken}
        logger={logger}
      />
      <TwitterSection
        projectData={projectData}
        appId={appId}
        hasUser={!!userToken}
        logger={logger}
      />
      <DiscordSection
        projectData={projectData}
        appId={appId}
        hasUser={!!userToken}
        logger={logger}
      />
      <OpenResponseSection projectData={projectData} ref={inputRef} />
      <RegisterButton
        projectData={projectData}
        appId={appId}
        hasUser={!!userToken}
        logger={logger}
        inputRef={inputRef}
      />
      <HypeDayLink projectData={projectData} />
    </div>
  );
}

export default function WrappedHypeDayReact(props: HypeDayReactProps) {
  return (
    <RegistrationTimeProvider>
      <HypeDayReact {...props} />
    </RegistrationTimeProvider>
  );
}
