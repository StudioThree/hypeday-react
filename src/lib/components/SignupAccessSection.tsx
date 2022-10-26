import useRegistrationTimeContext, {
  RegistrationStatus,
} from "../context/RegistrationTime.context";
import DateCountdown from "./DateCountdown";

function SectionBase({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <section className="hypeday-section">
      <header className="hypeday-section-header">
        <h3 className="hypeday-h3">{title}</h3>
      </header>
      <span className="hypeday-info">{children}</span>
    </section>
  );
}

export default function SignupAccessSection() {
  const { status, dateString } = useRegistrationTimeContext();

  if (status === RegistrationStatus.closed) {
    return (
      <SectionBase title="Registration is closed">
        Registration is closed on{" "}
        {new Date(dateString as string)?.toUTCString()}. Thank you for your
        interest.
      </SectionBase>
    );
  }

  if (status === RegistrationStatus.willOpen) {
    return (
      <SectionBase title="Registration starts in:">
        <DateCountdown
          dateString={dateString as string}
          message="Registration is open."
        />
      </SectionBase>
    );
  }

  if (status === RegistrationStatus.willClose) {
    return (
      <SectionBase title="Registration ends in:">
        <DateCountdown
          dateString={dateString as string}
          message="Registration is closed."
        />
      </SectionBase>
    );
  }

  return null;
}
