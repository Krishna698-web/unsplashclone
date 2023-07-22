import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import PicsContext, { PicsContextProvider } from "./Context/PicsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PicsContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PicsContextProvider>
);
