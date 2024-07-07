import React from "react";
import { Link } from "react-router-dom";
import "./TopNavbar.css";
import { useSidebarContext } from "@state/context/SidebarToggleContext";
import { useThemeContext } from "@state/context/ThemeContext";
import { THEMES_AVAILABLE } from "@domain/style/ThemeManager";
import { Bell } from "@icons/svg";

const TopNavbar: React.FC = () => {
  const { theme } = useThemeContext();
  const { setSidebarToggle } = useSidebarContext();

  return (
    <header className="c-topnavbar">
      <div className="c-topnavbar__container">
        <div className="c-topnavbar__left-content">
          <Link to="/">
            <div>
              <img
                src={
                  theme == THEMES_AVAILABLE.DARK_THEME
                    ? "logo-dark.png"
                    : "logo.png"
                }
              />
            </div>
          </Link>
          <a onClick={setSidebarToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="c-topnavbar__bars-icon"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </a>
        </div>
        <div className="c-topnavbar__right-content">
          <div>
            <Bell className="c-topnavbar__icon" />
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

export default TopNavbar;
