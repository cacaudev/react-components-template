import { useSidebarContext } from "@state/context/SidebarToggleContext";
import useResponsiveWidth from "@state/hooks/WindowDimensionsHook";
import { useThemeContext } from "@state/context/ThemeContext";
import AppRoutes from "./infra/routing/routes/routes";
import { TopNavbar } from "@global/layout/topNavbar/TopNavbar";

function App() {
  const { isSidebarCollapsed } = useSidebarContext();
  const { theme } = useThemeContext();
// TODO: Context to check if page is dashboard
  return (
    <div className={`App ${theme.getThemeValue()}`}>
      <div
        className={`l-page 
          ${useResponsiveWidth() < 768 ? "l-tablet-screen" : ""} 
          ${isSidebarCollapsed ? "l-sidebar--collapsed" : "l-sidebar--open"}`}
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
