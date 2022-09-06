import classes from "./../style.module.css";

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
    <section className={classes.reqSection}>
      <header>
        <h3>{title}</h3>
        {rightText ? (
          <span className={classes.sectionInfo}>{rightText}</span>
        ) : (
          <button
            className={classes.hypeButton}
            onClick={onClick}
            disabled={buttonDisabled}
            title={buttonDisabled ? "Please login first" : undefined}
          >
            Connect
          </button>
        )}
      </header>
      {info.map((el, i) => (
        <span key={i} className={classes.sectionInfo}>
          {el}
        </span>
      ))}
    </section>
  );
}
