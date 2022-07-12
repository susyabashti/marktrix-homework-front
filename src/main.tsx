import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "@layouts/Home";
import "@styles/index.css";
import { Provider } from "react-redux";
import { appStore } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <Home />
    </Provider>
  </React.StrictMode>
);
