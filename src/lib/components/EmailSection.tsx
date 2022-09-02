import Section from "./Section";

// @TODO: Properly type projectData
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function EmailSection({ projectData }: any) {
  const { email } = projectData;

  if (!email?.isEmailRequired) return null;

  return (
    <Section
      title="Email"
      onClick={() => console.log("email button clicked")}
      info={["Have a verified email address"]}
    />
  );
}
