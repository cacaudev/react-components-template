import React, { useContext } from "react";
import { SidebarMenuItem } from "../item/SidebarMenuItem";
import { LogoutIcon } from "@assets/icons/svg/Logout";
import { ThemeIcon } from "@assets/icons/svg/Theme";
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
        icon={<ThemeIcon />}
        title={ThemeManager.getThemeName(theme)}
        itemClickedCallback={handleToogleTheme}
      />
      <SidebarMenuItem
        icon={<LogoutIcon />}
        title={"Logout"}
        itemClickedCallback={handleLogout}
      />
    </ul>
  );
};

export { SidebarMenuBottom };
