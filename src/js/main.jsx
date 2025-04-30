import React from "react";
import ReactDOM from "react-dom/client";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css'
import "../styles/index.css";

// components
import SecondsCounter from "./components/SecondsCounter";

let count = 0;
let isCountDown = false;
setInterval(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <SecondsCounter seconds={count} isCountDown={isCountDown} />
    </React.StrictMode>
  );

  if (isCountDown && count > 0) {
    count--;
  } else if (isCountDown && count === 0) {
    isCountDown = false;
  } else if (!isCountDown) {
    count++;
  }
}, 1000);
