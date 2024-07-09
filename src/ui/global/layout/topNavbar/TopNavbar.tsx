import React from "react";
import { Link } from "react-router-dom";
import "./TopNavbar.css";
import { useSidebarContext } from "@state/context/SidebarToggleContext";
import { useThemeContext } from "@state/context/ThemeContext";
import { Bell, Bars, DarkTheme, LightTheme } from "@icons/svg";
import { LogoLight, LogoDark, LogoLightSmall, LogoDarkSmall } from "@img/index";
import { THEMES_AVAILABLE } from "@domain/contexts/support/theme/Theme";

const TopNavbar: React.FC = () => {
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
  }

  return (
    <header className="c-topnavbar">
      <div className="c-topnavbar__container">
        <div className="c-topnavbar__left-content">
          <Link to="/">
            <div>
              <img src={setLogo()} />
            </div>
          </Link>
          <a onClick={setSidebarToggle}>
            <Bars className="c-topnavbar__bars-icon" />
          </a>
        </div>
        <div className="c-topnavbar__right-content">
          <a onClick={handleToogleTheme}>
            {theme.getTheme() == THEMES_AVAILABLE.DARK_THEME ? (
              <LightTheme className="c-topnavbar__icon" />
            ) : (
              <DarkTheme className="c-topnavbar__icon" />
            )}
          </a>
          <div>
            <Bell className="c-topnavbar__icon" />
          </div>
          <div>
            <Link to="/dashboard" className="c-topnavbar__item">
              Home
            </Link>
          </div>
          <div>
            <Link to="/dashboard" className="c-topnavbar__item">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export { TopNavbar };
