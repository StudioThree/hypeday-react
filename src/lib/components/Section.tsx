interface SectionProps {
  title: string;
  buttonDisabled?: boolean;
  rightText?: string;
  onClick: () => void;
  info: (JSX.Element | string)[];
}

export default function Section({
  title,
  rightText,
  buttonDisabled = false,
  onClick,
  info,
}: SectionProps) {
  return (
    <section className="hypeday-section">
      <header className="hypeday-section-header">
        <h3 className="hypeday-h3">{title}</h3>
        {rightText ? (
          <span className="hypeday-info">{rightText}</span>
        ) : (
          <button
            className="hypeday-button"
            onClick={onClick}
            disabled={buttonDisabled}
            title={buttonDisabled ? "Please login first" : undefined}
          >
            Connect
          </button>
        )}
      </header>
      {info.map((el, i) => (
        <span key={i} className="hypeday-info">
          {el}
        </span>
      ))}
    </section>
  );
}
