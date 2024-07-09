import React from "react";
import { SidebarMenuItem } from "../item/SidebarMenuItem";
import { DarkTheme, LightTheme, Logout } from "@icons/svg";
import "./SidebarMenuBottom.css";
import { useThemeContext } from "@state/context/ThemeContext";
import { Theme, THEMES_AVAILABLE } from "@domain/contexts/support/theme/Theme";

const SidebarMenuBottom: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext();

  const getThemeTitle = (): string => {
    const aTheme = new Theme();
    aTheme.setTheme(theme);
    return aTheme.getThemeName();
  }

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
          theme == THEMES_AVAILABLE.DARK_THEME ? (
            <LightTheme className="c-sidebar-item__icon" />
          ) : (
            <DarkTheme className="c-sidebar-item__icon" />
          )
        }
        title={getThemeTitle()}
        itemClickedCallback={handleToogleTheme}
      />
      <SidebarMenuItem
        icon={<Logout className="c-sidebar-item__icon" />}
        title={"Logout"}
        itemClickedCallback={handleLogout}
      />
    </ul>
  );
};

export { SidebarMenuBottom };
