import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "@styles/Main.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@state/context/ThemeContext";
import { store } from "@state/redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
