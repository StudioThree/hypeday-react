import React from "react";
import type { GetProjectResponse } from "../types";

const OpenResponseSection = React.forwardRef(function OpenResponseSection(
  {
    projectData,
  }: {
    projectData?: GetProjectResponse;
  },
  ref: React.Ref<HTMLInputElement>
) {
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
        ref={ref}
      />
    </section>
  );
});

export default OpenResponseSection;
