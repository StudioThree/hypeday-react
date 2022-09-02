import classes from "./../style.module.css";

// @TODO: Properly type projectData
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function OpenResponseSection({ projectData }: any) {
  const { customfield } = projectData;

  if (!customfield?.enabled) return null;

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
