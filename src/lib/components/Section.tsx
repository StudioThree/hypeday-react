import classes from "./../style.module.css";

interface SectionProps {
  title: string;
  buttonLabel?: string;
  onClick: () => void;
  info: (JSX.Element | string)[];
}

export default function Section({
  title,
  buttonLabel = "Connect",
  onClick,
  info,
}: SectionProps) {
  return (
    <section className={classes.reqSection}>
      <header>
        <h3>{title}</h3>
        <button className={classes.hypeButton} onClick={onClick}>
          {buttonLabel}
        </button>
      </header>
      {info.map((el, i) => (
        <span key={i} className={classes.sectionInfo}>
          {el}
        </span>
      ))}
    </section>
  );
}
