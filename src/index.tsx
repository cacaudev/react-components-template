import React from "react";
import ReactDOM from "react-dom/client";
import "@styles/Main.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SidebarToggleProvider } from "@state/context/SidebarToggleContext";
import { ThemeProvider } from "@state/context/ThemeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
    <SidebarToggleProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SidebarToggleProvider>
    </ThemeProvider>
  </React.StrictMode>
);
