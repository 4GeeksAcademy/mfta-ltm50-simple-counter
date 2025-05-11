import React from "react";
import Card from "./Card";

const SecondsCounter = ({ seconds, isRunning, isCountdown, toggleCountdown, stopCounter, startCounter, resetCounter}) => {
  const digits = seconds.toString().padStart(6, 0).split("");

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
        {isCountdown ? "Countdown" : "Count Up"}
      </h2>

      {/* COUNTER */}
      <div className="d-flex gap-2">
        <Card digit={<i className="fa-regular fa-clock"></i>} />
        {digits?.map((digit, index) => (
          <Card digit={digit} key={index} />
        ))}
      </div>

      
      {/* BONUS */}
      <div className="d-flex gap-2 mt-5">
              <button className="btn btn-outline-success" onClick={toggleCountdown}>
                {isCountdown ? "Switch to Count Up" : "Switch to Countdown"}
              </button>
              <button 
                onClick={isRunning ? stopCounter : startCounter} 
                className={`btn ${isRunning ? "btn-outline-warning" : "btn-outline-success"}`}
              >
                {isRunning ? "Pause" : "Resume"}
              </button>
              <button onClick={resetCounter} className="btn btn-outline-danger">Reset</button>
            </div>
    </div>
  );
};

export default SecondsCounter;
