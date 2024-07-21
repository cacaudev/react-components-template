import React from "react";
import "./SidebarMenuBottom.css";
import { LogoutIcon } from "@icons/svg/FontAwesome";
import { SidebarMenuItem } from "../item/SidebarMenuItem";

const SidebarMenuBottom: React.FC = () => {
  const handleLogout = () => {
    console.log("handle logout");
  };

  return (
    <ul className="c-sidebar__container">
      <SidebarMenuItem
        icon={<LogoutIcon className="c-sidebar-item__icon" />}
        title={"Logout"}
        itemClickedCallback={handleLogout}
      />
    </ul>
  );
};

export { SidebarMenuBottom };
