import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/App.scss";
import App from "./App";
import ThemeSelector from "./components/ThemeSelector";
//import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
