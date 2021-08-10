import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./comp/App/App";
import vhCheck from "vh-check";
require("dotenv").config();
vhCheck();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
