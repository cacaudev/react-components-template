import React, { useState } from "react";
import "./Sidebar.css";
import { useSidebarContext } from "@state/context/SidebarToggleContext";
import { SidebarMenuTop } from "./menuTop/SidebarMenuTop";
import { HomeIcon } from "@assets/icons/svg/Home";
import { AnalyticsIcon } from "@assets/icons/svg/Analytics";
import { CRMIcon } from "@assets/icons/svg/CRM";
import { ProjectsIcon } from "@assets/icons/svg/Projects";
import { SidebarMenuBottom } from "./menuBottom/SidebarMenuBottom";

const menuItems: {
  title: string;
  icon: React.ReactNode;
  link: string;
}[] = [
  {
    title: "Dashboard",
    icon: <HomeIcon />,
    link: "",
  },
  {
    title: "Analytics",
    icon: <AnalyticsIcon />,
    link: "",
  },
  {
    title: "CRM",
    icon: <CRMIcon />,
    link: "",
  },
  {
    title: "Projects",
    icon: <ProjectsIcon />,
    link: "",
  },
];

const DashboardSidebar: React.FC = () => {
  const [active, setActive] = useState("Dashboard");
  const { setSidebarToggle } = useSidebarContext();

  const handleSidebar = () => {
    setSidebarToggle();
  };
  const handleNavItemActive = (nameNavItem: string) => {
    setActive(nameNavItem);
  };

  return (
    <aside className={"c-sidebar"}>
      <div className="c-sidebar__header">
        <button onClick={handleSidebar}>Toggle</button>
      </div>
      <div className="c-sidebar__menu">
        <SidebarMenuTop menuItems={menuItems} />
        <SidebarMenuBottom />
      </div>
    </aside>
  );
};

export { DashboardSidebar };
