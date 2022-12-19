import { GetProjectResponse } from "../types";

export default function Footer({
  projectData,
}: {
  projectData?: GetProjectResponse;
}) {
  return (
    <div
      style={{
        fontSize: "0.8em",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        paddingTop: 12,
      }}
    >
      <span>
        <a
          href="https://hype-day.notion.site/Terms-of-Service-fb34231cd00143fe891b7ea9136e74d3"
          target="_blank"
          rel="noreferrer"
          className="hypeday-a-text-decoration-none"
        >
          ToS
        </a>{" "}
        &{" "}
        <a
          href="https://hype-day.notion.site/Privacy-Notice-c7e648566d564eb4831ef741768bec3b"
          target="_blank"
          rel="noreferrer"
          className="hypeday-a-text-decoration-none"
        >
          Privacy Policy
        </a>
      </span>
      {projectData?.showLink ? (
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
      ) : null}
    </div>
  );
}
