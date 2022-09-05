import type { GetProjectResponse } from "../../types";
import Section from "./Section";

export default function EmailSection({
  projectData,
}: {
  projectData?: GetProjectResponse;
}) {
  if (!projectData?.email?.isEmailRequired) return null;

  const { userInfo } = projectData;

  return (
    <Section
      title="Email"
      onClick={() => console.log("email button clicked")}
      info={["Have a verified email address"]}
      buttonLabel={userInfo?.email}
    />
  );
}
