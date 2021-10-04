import React, { useEffect, useState } from "react";
import "./clock.css";

export const Clock = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const renderClock = () => {
    return (
      <span>
        {hours} h {minutes} min {seconds} sec
      </span>
    );
  };

  useEffect(() => {
    setInterval(() => {
      setSeconds((seconds) => {
        if (seconds === 59) {
          setSeconds(0);
          return seconds;
        }
        return seconds + 1;
      });
    }, 1000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setMinutes((minutes) => {
        if (minutes === 60) {
          setMinutes(0);
          return minutes;
        }
        return minutes + 1;
      });
    }, 60000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setHours((hours) => {
        return hours + 1;
      });
    }, 3600000);
  }, []);

  return <div>{renderClock()}</div>;
};
