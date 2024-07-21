import React from "react";
import {
  AnalyticsIcon,
  CRMIcon,
  HomeIcon,
  ProjectsIcon,
} from "@icons/svg/FontAwesome";
import { SidebarMenuItem } from "./item/SidebarMenuItem";
import { SidebarMenuBottom } from "./menuBottom/SidebarMenuBottom";
import { SidebarMenuTop } from "./menuTop/SidebarMenuTop";
import "./Sidebar.css";
import { SidebarToggleManager } from "./Toggle/SidebarToggleManager";

const menuItems: {
  title: string;
  icon: React.ReactNode;
  link: string;
}[] = [
  {
    title: "Dashboard",
    icon: <HomeIcon className="c-sidebar-item__icon" />,
    link: "index",
  },
  {
    title: "Analytics",
    icon: <AnalyticsIcon className="c-sidebar-item__icon" />,
    link: "analytics",
  },
  {
    title: "CRM",
    icon: <CRMIcon className="c-sidebar-item__icon" />,
    link: "crm",
  },
  {
    title: "Projects",
    icon: <ProjectsIcon className="c-sidebar-item__icon" />,
    link: "projects",
  },
];

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
        <SidebarMenuTop menuItems={menuItems} />
        <SidebarMenuBottom />
      </div>
    </aside>
  );
};

export { DashboardSidebar };
