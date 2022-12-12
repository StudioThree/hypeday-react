import { useRef, useState } from "react";
import { addNewEmail, verifyNewEmail } from "../api";
import useUserContext from "../context/user.context";
import { getErrorMessage } from "../helpers";
import { Logger } from "../types";
import HypeModal from "./HypeModal";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  setError: (error: string) => void;
  appId: string;
  logger?: Logger;
}

export default function EmailModal({
  isOpen,
  onClose,
  setError,
  appId,
  logger,
}: EmailModalProps) {
  const { email: userEmail, setEmail: setUserEmail } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<"one" | "two">("one");
  const emailRef = useRef("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = e.currentTarget.email.value;
    const emailPermission = e.currentTarget.emailPermission.checked;

    if (!email) return;

    if (userEmail === email) {
      return onClose();
    }

    emailRef.current = email;

    try {
      setIsLoading(true);
      await addNewEmail({ appId, email, emailPermission });
      logger?.info(
        "HypeDayReact: User requested email verification",
        "hype09",
        {
          email,
        }
      );
      setStep("two");
    } catch (err: unknown) {
      logger?.error(
        "HypeDayReact: Error requesting email verification",
        "hype10",
        { email }
      );
      console.error(err);
      setError(getErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  const handleOTPSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const otp = e.currentTarget.otp.value;

    if (!emailRef.current) return;

    try {
      setIsLoading(true);
      await verifyNewEmail({ appId, email: emailRef.current, otp });
      setUserEmail(emailRef.current);
      setStep("one");
      onClose();
      logger?.info("HypeDayReact: User verified email address", "hype11", {
        email: emailRef.current,
      });
    } catch (err: unknown) {
      logger?.error("HypeDayReact: Error verifying email address", "hype12", {
        email: emailRef.current,
      });
      console.error(err);
      setError(getErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <HypeModal
      isOpen={isOpen}
      onRequestClose={onClose}
      title={
        step === "one" ? "Enter Your Email Address" : "Enter Verification Code"
      }
    >
      <form onSubmit={step === "one" ? handleSubmit : handleOTPSubmit}>
        {step === "one" ? (
          <>
            <input
              className="hypeday-input"
              type="email"
              name="email"
              placeholder="Your Email Address"
              disabled={isLoading}
              defaultValue={userEmail ?? ""}
            />

            <div style={{ marginTop: "16px" }}>
              <input
                type="checkbox"
                id="emailPermission"
                name="emailPermission"
                defaultChecked={true}
                disabled={isLoading}
              />
              <label
                htmlFor="emailPermission"
                className="hypeday-info"
                style={{ display: "inline-block", marginLeft: "8px" }}
              >
                Send me high quality projects
              </label>
            </div>
          </>
        ) : (
          <>
            <p>
              Please check your inbox and spam folder to verify your email
              address.
            </p>
            <input
              name="otp"
              className="hypeday-input"
              type="input"
              pattern="[0-9]{6}"
              maxLength={6}
              placeholder="6 Digit OTP Code"
              disabled={isLoading}
            />
          </>
        )}

        <footer style={{ display: "flex", flexDirection: "row" }}>
          <button
            type="submit"
            className="hypeday-button hypeday-modal-button"
            disabled={isLoading}
            style={{ display: "flex" }}
          >
            {isLoading && (
              <div className="hypeday-spinner hypeday-btn-spinner" />
            )}
            <span style={{ visibility: isLoading ? "hidden" : "initial" }}>
              {step === "one" ? "Request Verification Code" : "Verify"}
            </span>
          </button>
          <button
            className="hypeday-button hypeday-modal-button hypeday-modal-button-gray"
            onClick={step === "one" ? onClose : () => setStep("one")}
          >
            {step === "one" ? "Cancel" : "Go Back"}
          </button>
        </footer>
      </form>
    </HypeModal>
  );
}
