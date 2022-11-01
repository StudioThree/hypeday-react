import { GetProjectResponse } from "../types";

export default function HypeDayLink({
  projectData,
}: {
  projectData?: GetProjectResponse;
}) {
  if (!projectData?.showLink) {
    return null;
  }

  return (
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
          className="hypeday-a-text-decoration-none"
        >
          Hype.Day
        </a>
      </span>
    </div>
  );
}
