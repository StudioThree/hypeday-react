import { useEffect, useState } from "react";
import { register } from "../api";
import { DISCORD_CLEAR_CODES, TWITTER_CLEAR_CODES } from "../constants";
import useRegistrationTimeContext, {
  RegistrationStatus,
} from "../context/RegistrationTime.context";
import useUserContext from "../context/user.context";
import { getErrorMessage } from "../helpers";
import type { SectionProps } from "../types";

const buttonTextByStatus = {
  [RegistrationStatus.willOpen]: "Registration opening soon",
  [RegistrationStatus.alwaysOpen]: "Register",
  [RegistrationStatus.willClose]: "Register",
  [RegistrationStatus.closed]: "Registration is closed",
};

export default function RegisterButton({
  projectData,
  appId,
  inputRef,
  logger,
}: SectionProps & { inputRef: React.RefObject<HTMLInputElement> }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const { status } = useRegistrationTimeContext();
  const {
    twitterData,
    discordData,
    setTwitterData,
    setDiscordData,
    shouldLogin,
  } = useUserContext();

  useEffect(() => {
    setIsRegistered(!!projectData?.userInfo?.registered);
  }, [projectData]);

  const handleRegister = async () => {
    if (!appId || shouldLogin || !projectData?.id || isRegistered) return;

    try {
      setError("");
      setIsLoading(true);
      const { error } = await register({
        appId,
        projectId: projectData.id,
        customField: inputRef?.current?.value || "",
      });

      if (error) {
        console.error("Register error", error);
        logger?.error("HypeDayReact: Error registering user", "hype06", error);

        if (TWITTER_CLEAR_CODES.includes(error.code)) {
          setTwitterData(undefined);
        }

        if (DISCORD_CLEAR_CODES.includes(error.code)) {
          setDiscordData(undefined);
        }

        return setError(error.message);
      }

      setIsRegistered(true);
      logger?.info("HypeDayReact: User registered", "hype07", {
        projectId: projectData?.id,
        chain: projectData?.chain,
      });
    } catch (err) {
      console.error(err);
      logger?.error("HypeDayReact: Error registering user", "hype08", err);
      setError(getErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  const isButtonDisabled =
    isLoading ||
    status === RegistrationStatus.closed ||
    status === RegistrationStatus.willOpen ||
    shouldLogin ||
    (projectData?.discord?.enabled && !discordData?.username) ||
    (projectData?.discord2?.enabled && !discordData?.username) ||
    (projectData?.twitter?.enabled && !twitterData?.username);

  return (
    <>
      <button
        className="hypeday-register-button"
        onClick={handleRegister}
        disabled={isButtonDisabled}
      >
        {isLoading && <div className="hypeday-spinner hypeday-btn-spinner" />}
        <span style={{ visibility: isLoading ? "hidden" : "initial" }}>
          {isRegistered ? "Registered! 🎉" : buttonTextByStatus[status]}
        </span>
      </button>
      {!!error && <span className="hypeday-register-error">{error}</span>}
    </>
  );
}
