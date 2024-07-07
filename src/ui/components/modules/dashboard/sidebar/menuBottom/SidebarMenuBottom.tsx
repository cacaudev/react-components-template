import React from "react";
import { SidebarMenuItem } from "../item/SidebarMenuItem";
import { Logout, Theme } from "@icons/svg";
import "./SidebarMenuBottom.css";
import { useThemeContext } from "@state/context/ThemeContext";
import { ThemeManager } from "@domain/style/ThemeManager";

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
        icon={<Theme className="c-sidebar-item__icon" />}
        title={ThemeManager.getThemeName(theme)}
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
