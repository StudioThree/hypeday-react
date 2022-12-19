import { memo, useEffect, useRef } from "react";
import type { HypeDayReactProps } from "./types";
import DiscordSection from "./components/DiscordSection";
import OpenResponseSection from "./components/OpenResponseSection";
import SignupAccessSection from "./components/SignupAccessSection";
import TwitterSection from "./components/TwitterSection";
import WalletSection from "./components/WalletSection";
import "./style.css";
import RegisterButton from "./components/RegisterButton";
import { RegistrationTimeProvider } from "./context/RegistrationTime.context";
import Footer from "./components/Footer";
import useUserContext, { UserProvider } from "./context/user.context";
import EmailSection from "./components/EmailSection";

function HypeDayReact({ appId, logger }: HypeDayReactProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { project, isProjectLoading, projectError, fetchProjectData } =
    useUserContext();

  if (isProjectLoading) {
    return (
      <div
        className="hypeday-wrapper"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="hypeday-spinner" />
      </div>
    );
  }

  if (projectError || !project) {
    return (
      <div className="hypeday-wrapper">
        <span className="hypeday-error">{projectError}</span>
        <button className="hypeday-button" onClick={fetchProjectData}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="hypeday-wrapper">
      <SignupAccessSection />
      <WalletSection projectData={project} appId={appId} logger={logger} />
      <EmailSection projectData={project} appId={appId} logger={logger} />
      <TwitterSection projectData={project} appId={appId} logger={logger} />
      <DiscordSection projectData={project} appId={appId} logger={logger} />
      <OpenResponseSection projectData={project} ref={inputRef} />
      <RegisterButton
        projectData={project}
        appId={appId}
        logger={logger}
        inputRef={inputRef}
      />
      <Footer projectData={project} />
    </div>
  );
}

export default memo(function HypeDayReactWrapper(props: HypeDayReactProps) {
  useEffect(() => {
    if (
      !props.projectId ||
      !props.appId ||
      typeof props.projectId !== "string" ||
      typeof props.appId !== "string"
    ) {
      throw new Error(
        "HypeDayReact: projectId and appId props are required and they must be strings."
      );
    }

    if (!props.userToken && !props.apiKey) {
      throw new Error(
        "HypeDayReact: You must provide a user token or an API key."
      );
    }

    if (props.userToken && props.apiKey) {
      throw new Error(
        "HypeDayReact: You can't provide both a user token and an API key."
      );
    }
  }, [props.projectId, props.appId, props.userToken, props.apiKey]);

  return (
    <RegistrationTimeProvider>
      <UserProvider {...props}>
        <HypeDayReact {...props} />
      </UserProvider>
    </RegistrationTimeProvider>
  );
});
