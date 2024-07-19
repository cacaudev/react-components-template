import React from "react";
import "./SidebarMenuBottom.css";
import { useThemeContext } from "@state/context/ThemeContext";
import { THEMES_AVAILABLE } from "@domain/contexts/theme/Theme";
import { LightThemeIcon, DarkThemeIcon, LogoutIcon } from "@icons/svg/FontAwesome";
import { SidebarMenuItem } from "../item/SidebarMenuItem";

const SidebarMenuBottom: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext();

  const handleToogleTheme = () => {
    toggleTheme();
  };

  const handleLogout = () => {
    console.log("handle logout");
  };

  return (
    <ul className="c-sidebar__container">
      <SidebarMenuItem
        icon={
          theme.getTheme() === THEMES_AVAILABLE.DARK_THEME ? (
            <LightThemeIcon className="c-sidebar-item__icon" />
          ) : (
            <DarkThemeIcon className="c-sidebar-item__icon" />
          )
        }
        title={theme.getThemeName()}
        itemClickedCallback={handleToogleTheme}
      />
      <SidebarMenuItem
        icon={<LogoutIcon className="c-sidebar-item__icon" />}
        title={"Logout"}
        itemClickedCallback={handleLogout}
      />
    </ul>
  );
};

export { SidebarMenuBottom };
