import React, { useState, useEffect } from "react";

const Timer = ({ initialSeconds = 10, onComplete }) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    if (secondsLeft <= 0) {
      onComplete?.();
      return;
    }

    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft, onComplete]);

  // Format seconds with leading zero
  const formatTime = (seconds) => {
    return seconds.toString().padStart(2, "0");
  };

  return (
    <div className="text-3xl font-semibold">{formatTime(secondsLeft)}</div>
  );
};

export default Timer;
