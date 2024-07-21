import { useThemeContext } from "@state/context/ThemeContext";
import AppRoutes from "./infra/routes/routes";
import { TopNavbar } from "./components/global/layout/TopNavbar/TopNavbar";
import { ScreenManager } from "@state/hooks/screen/ScreenManager";

function App() {
  const { theme } = useThemeContext();
  const { isTablet } = ScreenManager();
  
  return (
    <div className={`App ${theme.getThemeValue()}`}>
      <div
        className={`l-page 
          ${isTablet ? "l-tablet-screen" : ""}`}
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
