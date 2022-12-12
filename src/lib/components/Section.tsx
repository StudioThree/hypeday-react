interface SectionProps {
  title: string;
  buttonDisabled?: boolean;
  rightText?: string;
  onClick: () => void;
  info: (JSX.Element | string)[];
  isLoading?: boolean;
  showButton?: boolean;
  errorMessage?: string;
  style?: React.CSSProperties;
}

export default function Section({
  title,
  rightText,
  buttonDisabled = false,
  onClick,
  info,
  isLoading = false,
  showButton = true,
  errorMessage,
  style,
}: SectionProps) {
  return (
    <section className="hypeday-section" style={style}>
      <header className="hypeday-section-header">
        <h3 className="hypeday-h3">{title}</h3>
        {showButton && (
          <button
            className="hypeday-button"
            onClick={onClick}
            disabled={isLoading || buttonDisabled}
            title={buttonDisabled ? "Please login first" : undefined}
          >
            {isLoading && (
              <div className="hypeday-spinner hypeday-btn-spinner" />
            )}
            <span style={{ visibility: isLoading ? "hidden" : "initial" }}>
              {rightText || "Connect"}
            </span>
          </button>
        )}
      </header>
      {!!errorMessage && <span className="hypeday-error">{errorMessage}</span>}
      {info.map((el, i) => (
        <span key={i} className="hypeday-info">
          {el}
        </span>
      ))}
    </section>
  );
}
