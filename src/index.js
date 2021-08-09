import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./comp/App/App";
require("dotenv").config();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
