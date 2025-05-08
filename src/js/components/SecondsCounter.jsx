import React, { useEffect, useState } from "react";
import Card from "./Card";

const SecondsCounter = () => {
  const [seconds, setSeconds] = useState(0);
  const digits = seconds.toString().padStart(6, "0").split("");
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isActive) {
        return;
      }
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }
  , [isActive, setSeconds]);


  return (
    <div className="bg-dark text-white d-flex flex-column min-vh-100 justify-content-start align-items-center text-center p-4">
      <h1
        className="text-center mt-5 display-1 fw-medium"
        style={{ color: "#a855f7" }}
      >
        Seconds Counter
      </h1>
      <h2
        className="text-center fs-1 fw-light fst-italic mb-5"
        style={{ color: "#16a34a" }}
      >
        Countdown
      </h2>

      {/* COUNTER */}
      <div className="d-flex gap-2">
        <Card digit={<i className="fa-regular fa-clock"></i>} />
        {digits?.map((digit, index) => (
          <Card digit={digit} key={index} />
        ))}
      </div>

      
      {/* BONUSES */}
      <div className="d-flex gap-2 mt-5">
        <button
          className="btn btn-primary"
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? "Pause" : "Resume"}
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            setSeconds(0);
            setIsActive(true);
          }}
        >
          Reset
        </button>
      </div>

    </div>
  );
};

export default SecondsCounter;
