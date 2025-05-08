import React from "react";
import Card from "./Card";

const SecondsCounter = ({ seconds}) => {
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
        Countdown
      </h2>

      {/* COUNTER */}
      <div className="d-flex gap-2">
        <Card digit={<i className="fa-regular fa-clock"></i>} />
        {digits?.map((digit, index) => (
          <Card digit={digit} key={index} />
        ))}
      </div>

      
      {/* BONUS */}
      {/* Para implementar las funcionalidades de los bonus se necesita trabajar con variables de estado (en vez del renderizado recurrente con un setinterval)  */}
    </div>
  );
};

export default SecondsCounter;
