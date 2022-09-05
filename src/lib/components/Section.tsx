import classes from "./../style.module.css";

interface SectionProps {
  title: string;
  showButton?: boolean;
  buttonLabel?: string;
  onClick: () => void;
  info: (JSX.Element | string)[];
}

export default function Section({
  title,
  showButton = true,
  buttonLabel,
  onClick,
  info,
}: SectionProps) {
  return (
    <section className={classes.reqSection}>
      <header>
        <h3>{title}</h3>
        {showButton && (
          <button
            className={classes.hypeButton}
            onClick={onClick}
            disabled={!!buttonLabel}
          >
            {buttonLabel || "Connect"}
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
