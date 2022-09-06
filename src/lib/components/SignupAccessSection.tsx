import { useEffect, useState } from "react";
import type { GetProjectResponse } from "../types";
import DateCountdown from "./DateCountdown";

function SectionBase({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <section className="hypeday-section">
      <header className="hypeday-section-header">
        <h3 className="hypeday-h3">{title}</h3>
      </header>
      <span className="hypeday-info">{children}</span>
    </section>
  );
}

export default function SignupAccessSection({
  projectData,
}: {
  projectData?: GetProjectResponse;
}) {
  const [isRegistrationNotYetStarted, setIsRegistrationNotYetStarted] =
    useState<boolean>();

  const isRegistrationClosed =
    projectData?.signupAccess?.isEndDateRequired &&
    projectData?.signupAccess?.endDate &&
    new Date(projectData?.signupAccess?.endDate).getTime() < Date.now();

  useEffect(() => {
    if (projectData?.signupAccess?.isStartDateRequired) {
      setIsRegistrationNotYetStarted(
        !!(
          projectData?.signupAccess?.isStartDateRequired &&
          projectData?.signupAccess?.startDate &&
          new Date(projectData?.signupAccess?.startDate).getTime() > Date.now()
        )
      );
    }
  }, [projectData]);

  useEffect(() => {
    if (isRegistrationNotYetStarted && projectData?.signupAccess?.startDate) {
      const id = setTimeout(
        () => setIsRegistrationNotYetStarted(false),
        new Date(projectData?.signupAccess?.startDate).getTime() - Date.now()
      );

      return () => clearTimeout(id);
    }
  }, [isRegistrationNotYetStarted, projectData?.signupAccess?.startDate]);

  if (isRegistrationClosed && projectData.signupAccess?.endDate) {
    return (
      <SectionBase title="Registration is closed">
        Registration is closed on{" "}
        {new Date(projectData.signupAccess?.endDate)?.toUTCString()}. Thank you
        for your interest.
      </SectionBase>
    );
  }

  if (isRegistrationNotYetStarted && projectData?.signupAccess?.startDate) {
    return (
      <SectionBase title="Registration starts in:">
        <DateCountdown
          dateString={projectData?.signupAccess?.startDate}
          message="Registration is open."
        />
      </SectionBase>
    );
  }

  if (
    !isRegistrationClosed &&
    !isRegistrationNotYetStarted &&
    projectData?.signupAccess?.isEndDateRequired &&
    projectData?.signupAccess?.endDate
  ) {
    return (
      <SectionBase title="Registration ends in:">
        <DateCountdown
          dateString={projectData?.signupAccess?.endDate}
          message="Registration is closed."
        />
      </SectionBase>
    );
  }

  return null;
}
