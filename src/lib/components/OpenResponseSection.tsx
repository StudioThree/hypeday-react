import type { GetProjectResponse } from "../types";
import classes from "./../style.module.css";

export default function OpenResponseSection({
  projectData,
}: {
  projectData?: GetProjectResponse;
}) {
  if (!projectData?.customfield?.enabled) return null;

  const { customfield } = projectData;

  return (
    <section className={classes.reqSection}>
      <header>
        <h3>Open Response</h3>
      </header>
      <span className={classes.sectionInfo}>{customfield.labels[0]}</span>
      <input
        className={classes.responseInput}
        type="text"
        placeholder={customfield.labels[0]}
      />
    </section>
  );
}
