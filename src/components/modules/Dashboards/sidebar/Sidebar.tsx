import React from "react";
import {
  HomeIcon,
} from "@icons/svg/FontAwesome";
import { SidebarMenuItem } from "./components/item/SidebarMenuItem";
import { SidebarMenuBottom } from "./components/menuBottom/SidebarMenuBottom";
import { SidebarMenuTop } from "./components/menuTop/SidebarMenuTop";
import "./Sidebar.css";
import { SidebarToggleManager } from "./components/Toggle/SidebarToggleManager";

const DashboardSidebar: React.FC = () => {
  return (
    <aside className={"c-sidebar"}>
      <SidebarToggleManager buttonComponent="chevron"/>
      <SidebarMenuItem
        icon={<HomeIcon className="c-sidebar-item__icon" />}
        title={"Home"}
        link={"../"}
        itemClickedCallback={() => {}}
        key={`sidebar-menu-home`}
      />
      <div className="c-sidebar__menu">
        <SidebarMenuTop />
        <SidebarMenuBottom />
      </div>
    </aside>
  );
};

export { DashboardSidebar };
