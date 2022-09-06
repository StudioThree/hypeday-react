import type { GetProjectResponse } from "../types";

export default function OpenResponseSection({
  projectData,
}: {
  projectData?: GetProjectResponse;
}) {
  if (!projectData?.customfield?.enabled) return null;

  const { customfield } = projectData;

  return (
    <section className="hypeday-section">
      <header className="hypeday-section-header">
        <h3 className="hypeday-h3">Open Response</h3>
      </header>
      <span className="hypeday-info">{customfield.labels[0]}</span>
      <input
        className="hypeday-input"
        type="text"
        placeholder={customfield.labels[0]}
      />
    </section>
  );
}
