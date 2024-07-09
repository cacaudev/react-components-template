import { Route, Routes } from "react-router-dom";
import { TopNavbar } from "@global/layout/topNavbar/TopNavbar";

import { useSidebarContext } from "@state/context/SidebarToggleContext";
import useResponsiveWidth from "@state/hooks/WindowDimensionsHook";
import { useThemeContext } from "@state/context/ThemeContext";

import { Home } from "@pages/home/Home";
import { Dashboard } from "@pages/dashboard/Dashboard";

function App() {
  const { isSidebarCollapsed } = useSidebarContext();
  const { theme } = useThemeContext();

  return (
    <div className={`App ${theme.getThemeValue()}`}>
      <div
        className={`l-page 
          ${isSidebarCollapsed ? "c-sidebar--collapsed" : "c-sidebar--open"} 
          ${useResponsiveWidth() < 768 ? "hide-sidebar" : ""}`}
      >
        <TopNavbar />
        <div className="l-page__content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
