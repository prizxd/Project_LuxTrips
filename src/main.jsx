import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./stylesDefault/index.scss";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig.js";
initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
