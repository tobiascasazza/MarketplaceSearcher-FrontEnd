import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "../src/styles/index.css";
import App from "./App";
import configureStore from "./redux/store";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
      <App store={store}/>
  </React.StrictMode>,
  document.getElementById("root")
);
