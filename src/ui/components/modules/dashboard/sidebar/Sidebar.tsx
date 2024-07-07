import React, { useState } from "react";
import "./Sidebar.css";
import { useSidebarContext } from "@state/context/SidebarToggleContext";
import { SidebarMenuTop } from "./menuTop/SidebarMenuTop";
import { Home, Analytics, CRM, Projects} from "@icons/svg";
import { SidebarMenuBottom } from "./menuBottom/SidebarMenuBottom";

const menuItems: {
  title: string;
  icon: React.ReactNode;
  link: string;
}[] = [
  {
    title: "Dashboard",
    icon: <Home className="c-sidebar-item__icon" />,
    link: "",
  },
  {
    title: "Analytics",
    icon: <Analytics className="c-sidebar-item__icon" />,
    link: "",
  },
  {
    title: "CRM",
    icon: <CRM className="c-sidebar-item__icon" />,
    link: "",
  },
  {
    title: "Projects",
    icon: <Projects className="c-sidebar-item__icon" />,
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
