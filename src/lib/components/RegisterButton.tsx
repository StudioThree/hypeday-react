import { useEffect, useState } from "react";
import { register } from "../api";
import type { GetProjectResponse } from "../types";

export default function RegisterButton({
  projectData,
  appId,
  walletAddress,
  doesTokenExist,
  inputRef,
}: {
  projectData?: GetProjectResponse;
  appId: string;
  walletAddress?: string;
  doesTokenExist: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    setIsRegistered(!!projectData?.userInfo?.registered);
  }, [projectData]);

  const handleRegister = async () => {
    if (
      !appId ||
      (!walletAddress && !doesTokenExist) ||
      !projectData?.id ||
      isRegistered
    )
      return;

    try {
      setError("");
      setIsLoading(true);
      const { error } = await register({
        appId,
        wallet: walletAddress,
        chain: projectData.chain,
        projectId: projectData.id,
        customField: inputRef?.current?.value || "",
      });

      if (error) {
        console.error("Register error", error);
        return setError(error.message);
      }

      setIsRegistered(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const isButtonDisabled =
    isLoading ||
    (!walletAddress && !doesTokenExist) ||
    (projectData?.discord?.enabled &&
      !projectData?.userInfo?.discord?.username) ||
    (projectData?.discord2?.enabled &&
      !projectData?.userInfo?.discord?.username) ||
    (projectData?.twitter?.enabled &&
      !projectData?.userInfo?.twitter?.username);

  return (
    <>
      <button
        className="hypeday-register-button"
        onClick={handleRegister}
        disabled={isButtonDisabled}
      >
        {isLoading && <div className="hypeday-spinner hypeday-btn-spinner" />}
        <span style={{ visibility: isLoading ? "hidden" : "initial" }}>
          {isRegistered ? "Registered! 🎉" : "Register"}
        </span>
      </button>
      {!!error && <span className="hypeday-register-error">{error}</span>}
    </>
  );
}
