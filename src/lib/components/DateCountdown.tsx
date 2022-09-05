import { useEffect, useState } from "react";

export default function DateCountdown({
  dateString,
  message,
}: {
  dateString: string;
  message: string;
}) {
  const [isPast, setIsPast] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countDownDate = new Date(dateString).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance <= 0) {
        clearInterval(interval);
        setIsPast(true);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        return;
      }

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);

    return () => clearInterval(interval);
  }, [dateString]);

  if (!isPast && !days && !hours && !minutes && !seconds) {
    return <span style={{ visibility: "hidden" }}>Calculating..</span>;
  }

  return isPast ? (
    <>{message}</>
  ) : (
    <>
      {days > 0 && `${days} days, `}
      {hours > 0 && `${hours} hours, `}
      {minutes > 0 && `${minutes} minutes, `}
      {seconds > 0 && `${seconds} seconds`}
    </>
  );
}
