import React from "react";
import ReactDOM from "react-dom/client";
import "../src/static/css/main.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SidebarToggleProvider } from "./infra/controllers/context/SidebarToggleContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SidebarToggleProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SidebarToggleProvider>
  </React.StrictMode>
);
