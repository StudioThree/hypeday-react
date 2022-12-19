import { useState } from "react";
import useUserContext from "../context/user.context";
import type { SectionProps } from "../types";
import Section from "./Section";
import EmailModal from "./EmailModal";

export default function EmailSection({
  projectData,
  appId,
  logger,
}: SectionProps) {
  const [error, setError] = useState("");
  const { email } = useUserContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!projectData?.email?.isEmailRequired) return null;

  return (
    <>
      <Section
        title="Email"
        onClick={() => setIsModalOpen(true)}
        style={{ marginBottom: 0 }}
        info={[]}
        rightText={email || "Verify"}
        errorMessage={error}
      />
      <EmailModal
        appId={appId}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        setError={setError}
        logger={logger}
      />
    </>
  );
}
