import React from "react";
import { useNavigate } from "react-router-dom";
import "./TopNavbar.css";
import { useSidebarContext } from "@state/context/SidebarToggleContext";
import { useThemeContext } from "@state/context/ThemeContext";
import { THEMES_AVAILABLE } from "@domain/contexts/theme/Theme";
import { LogoDark, LogoDarkSmall, LogoLight, LogoLightSmall } from "@img/logos";
import { BarsIcon, BellIcon, DarkThemeIcon, LightThemeIcon } from "@icons/svg/FontAwesome";

const TopNavbar: React.FC = () => {
  const navigateToPage = useNavigate();
  const { theme, toggleTheme } = useThemeContext();
  const { isSidebarCollapsed, setSidebarToggle } = useSidebarContext();

  const handleToogleTheme = () => {
    toggleTheme();
  };

  const setLogo = () => {
    if (isSidebarCollapsed) {
      if (theme.getTheme() === THEMES_AVAILABLE.DARK_THEME) {
        return LogoDarkSmall;
      } else {
        return LogoLightSmall;
      }
    } else {
      if (theme.getTheme() === THEMES_AVAILABLE.DARK_THEME) {
        return LogoDark;
      } else {
        return LogoLight;
      }
    }
  };

  return (
    <header className="c-topnavbar">
      <div className="c-topnavbar__container">
        <div className="c-topnavbar__left-content">
          <a onClick={() => navigateToPage("/")}>
            <img src={setLogo()} />
          </a>
          <a onClick={setSidebarToggle}>
            <BarsIcon className="c-topnavbar__bars-icon" />
          </a>
        </div>
        <div className="c-topnavbar__right-content">
          <a onClick={handleToogleTheme}>
            {theme.getTheme() == THEMES_AVAILABLE.DARK_THEME ? (
              <LightThemeIcon className="c-topnavbar__icon" />
            ) : (
              <DarkThemeIcon className="c-topnavbar__icon" />
            )}
          </a>
          <div>
            <BellIcon className="c-topnavbar__icon" />
          </div>
          <div>
            <a
              onClick={() => navigateToPage("/")}
              className="c-topnavbar__item"
            >
              Home
            </a>
          </div>
          <div>
            <a
              onClick={() => navigateToPage("/dashboard/index")}
              className="c-topnavbar__item"
            >
              Dashboard
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export { TopNavbar };
