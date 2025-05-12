import React from "react";
import ReactDOM from "react-dom/client";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css'
import "../styles/index.css";

// components
import SecondsCounter from "./components/SecondsCounter";
import CountDownControllers from "./components/CountDownControllers";

let seconds = 0;
let isRunning = true;
let isCountdown = false;

function toggleCountdown() {
  isCountdown = !isCountdown;
  renderCounter();
};

function stopCounter() {
  isRunning = false;
  renderCounter();
};

function startCounter() {
  isRunning = true;
};

function resetCounter() {
  seconds = 0;
  isCountdown = false;
  isRunning = true;
};

function startCountdown({ countdownSeconds }) {
  seconds = countdownSeconds;
  isCountdown = true;
  isRunning = true;
  renderCounter();
}

// Function to render the component
const renderCounter = () => {
  counterContainerRoot.render(
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


// Create a root element for the countdown display and buttons
const counterContainer = document.getElementById("counter-container");
const counterContainerRoot = ReactDOM.createRoot(counterContainer);
// Create a root element for the countdown controllers
const inputContainer = document.getElementById("input-container");
const inputContainerRoot = ReactDOM.createRoot(inputContainer);


// Initial renders
renderCounter();

inputContainerRoot.render(
  <React.StrictMode>
    <CountDownControllers startCountdown={startCountdown}/>
  </React.StrictMode>
);


// Start the counter update loop
updateCounter();