import React, { useState } from "react";
import { SidebarMenuItem } from "../item/SidebarMenuItem";
import { LogoutIcon } from "@assets/icons/svg/Logout";
import { ThemeIcon } from "@assets/icons/svg/Theme";
import "./SidebarMenuBottom.css";

const SidebarMenuBottom: React.FC = () => {
  const handleToogleTheme = () => {};

  const handleLogout = () => {};

  const handleItemSelection = (itemTitle: string) => {
    if (itemTitle == "Change Theme") {
      handleToogleTheme();
    } else if (itemTitle == "Logout") {
      handleLogout();
    }
  };

  return (
    <ul className="c-sidebar__container">
      <SidebarMenuItem
        icon={<ThemeIcon />}
        title={"Change Theme"}
        itemClickedCallback={handleItemSelection}
      />
      <SidebarMenuItem
        icon={<LogoutIcon />}
        title={"Logout"}
        itemClickedCallback={handleItemSelection}
      />
    </ul>
  );
};

export { SidebarMenuBottom };
