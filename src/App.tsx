import useResponsiveWidth from "@state/hooks/WindowDimensionsHook";
import { useThemeContext } from "@state/context/ThemeContext";
import AppRoutes from "./infra/routes/routes";
import { TopNavbar } from "./components/global/layout/TopNavbar/TopNavbar";

function App() {
  const { theme } = useThemeContext();
  return (
    <div className={`App ${theme.getThemeValue()}`}>
      <div
        className={`l-page 
          ${useResponsiveWidth() < 768 ? "l-tablet-screen" : ""}`}
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
