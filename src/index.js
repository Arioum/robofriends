import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, connect } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import "./index.css";
import App from "./App";
import "tachyons";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
