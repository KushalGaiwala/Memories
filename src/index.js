import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import store from "./store";
import App from "./App";

import "./index.css";

const index = createRoot(document.getElementById("root"));
index.render(
  <Provider store={store}>
    <App />
  </Provider>
);
