import React from "react";

export default function CountDown() {
  const [days, setDays] = React.useState("");
  const [hours, setHours] = React.useState("");
  const [minutes, setMinutes] = React.useState("");
  const [seconds, setSeconds] = React.useState("");

  const currentYear = new Date().getFullYear();
  const newYearTime = new Date(`July 17 ${currentYear} 00:00:00`);
  const currentTime = new Date();

  const updateCountDowntime = () => {
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
    setDays(d);
    setHours(h < 10 ? "0" + h : h);
    setMinutes(m < 10 ? "0" + m : m);
    setSeconds(s < 10 ? "0" + s : s);
  };

  React.useEffect(() => {
    if (newYearTime < currentTime) {
      setDays('0');
      setHours('0');
      setMinutes("0");
      setSeconds("0");
    } else {
      setInterval(updateCountDowntime, 1000);
    }
  }, [currentTime]);

  return (
    <div className="count-down">
      <ul>
        <li>
          <p className="count">{days}</p>
          <span>Days</span>
        </li>
        <li>
          <p className="count">{hours}</p>
          <span>Hours</span>
        </li>
        <li>
          <p className="count">{minutes}</p>
          <span>Minutes</span>
        </li>
        <li>
          <p className="count">{seconds}</p>
          <span>Seconds</span>
        </li>
      </ul>
    </div>
  );
}
