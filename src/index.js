import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, connect } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import "./index.css";
import App from "./App";
import "tachyons";
import { searchRobots } from "./reducers";

const store = createStore(searchRobots);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
