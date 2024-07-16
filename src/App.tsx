import { useSidebarContext } from "@state/context/SidebarToggleContext";
import useResponsiveWidth from "@state/hooks/WindowDimensionsHook";
import { useThemeContext } from "@state/context/ThemeContext";
import AppRoutes from "./infra/routing/routes/routes";
import { TopNavbar } from "@global/layout/topNavbar/TopNavbar";

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
          <AppRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
