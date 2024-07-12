import React, { useState } from "react";
import "./Sidebar.css";
import { useSidebarContext } from "@state/context/SidebarToggleContext";

import { SidebarMenuTop } from "./menuTop/SidebarMenuTop";
import { SidebarMenuBottom } from "./menuBottom/SidebarMenuBottom";
import {
  AnalyticsIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CRMIcon,
  HomeIcon,
  ProjectsIcon,
} from "@icons/svg/FontAwesome";

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
  const [active, setActive] = useState("Dashboard");
  const { isSidebarCollapsed, setSidebarToggle } = useSidebarContext();

  const handleSidebar = () => {
    setSidebarToggle();
  };
  const handleNavItemActive = (nameNavItem: string) => {
    setActive(nameNavItem);
  };

  return (
    <aside className={"c-sidebar"}>
      <div className="c-sidebar__header">
        <a onClick={handleSidebar}>
          {isSidebarCollapsed ? (
            <ChevronRightIcon className="c-sidebar__toggle-button" />
          ) : (
            <ChevronLeftIcon className="c-sidebar__toggle-button" />
          )}
        </a>
      </div>
      <div className="c-sidebar__menu">
        <SidebarMenuTop menuItems={menuItems} />
        <SidebarMenuBottom />
      </div>
    </aside>
  );
};

export { DashboardSidebar };
