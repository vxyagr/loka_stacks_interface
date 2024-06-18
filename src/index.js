import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './styles/index.scss';
import "antd/dist/reset.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
