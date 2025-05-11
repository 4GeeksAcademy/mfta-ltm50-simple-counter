import React from "react";
import ReactDOM from "react-dom/client";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css'
import "../styles/index.css";

// components
import SecondsCounter from "./components/SecondsCounter";

let seconds = 0;
let isRunning = true;
let isCountdown = false;

const toggleCountdown = () => {
  isCountdown = !isCountdown;
  renderCounter();
};

const stopCounter = () => {
  isRunning = false;
  renderCounter();
};

const startCounter = () => {
  isRunning = true;
};

const resetCounter = () => {
  seconds = 0;
  isCountdown = false;
  isRunning = true;
};

// Function to render the component
const renderCounter = () => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <SecondsCounter 
      seconds={seconds} 
      isRunning={isRunning} 
      isCountdown={isCountdown} 
      toggleCountdown={toggleCountdown} 
      startCounter={startCounter} 
      stopCounter={stopCounter} 
      resetCounter={resetCounter} 
      />
    </React.StrictMode>
  );
};

// Function to update the counter every second
const updateCounter = () => {
  setInterval(() => {
    if (isRunning && !isCountdown) {
      renderCounter();
      seconds++;
    }
    if (isRunning && isCountdown) {
      renderCounter();
      seconds--;
      if (seconds < 0) {
        seconds = 0;
        isRunning = false;
        renderCounter();
        alert("Countdown finished! Resetting to count up.");
        resetCounter();
      }
    }
  }, 1000);
};

// Initial render
renderCounter();
// Start the counter
updateCounter();
