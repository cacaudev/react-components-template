import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TopNavbar.css";
import { useThemeContext } from "@state/context/ThemeContext";
import { THEMES_AVAILABLE } from "@domain/contexts/theme/Theme";
import { LogoDark, LogoDarkSmall, LogoLight, LogoLightSmall } from "@img/logos";
import { BarsIcon, BellIcon } from "@icons/svg/FontAwesome";
import useResponsiveWidth from "@state/hooks/WindowDimensionsHook";
import { ThemeManager } from "@global/Theme/Switch/ThemeManager";
import { RootState } from "@state/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@modules/Dashboards/sidebar/state/SidebarSlice";

const TopNavbar: React.FC = () => {
  const navigateToPage = useNavigate();
  const dispatch = useDispatch();
  const { theme } = useThemeContext();

  const isScreenTablet: boolean = useResponsiveWidth() < 768;

  const handleSidebarToggle = () => {
    dispatch(toggleSidebar())
  }

  const setLogo = () => {
    if (isScreenTablet) {
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
          <a onClick={handleSidebarToggle}>
            <BarsIcon className="c-topnavbar__icon bars" />
          </a>
        </div>
        <div className="c-topnavbar__right-content">
          <ThemeManager />
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
