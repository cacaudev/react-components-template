import React, { useState } from "react";
import "./Sidebar.css";
import { useSidebarContext } from "@state/context/SidebarToggleContext";
import { SidebarMenu } from "./Menu/SidebarMenu";

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
    <aside className={'c-sidebar'}>
      <div className="c-sidebar__header">
        <button onClick={handleSidebar}>Toggle</button>
      </div>
      <SidebarMenu />
    </aside>
  );
};

export { DashboardSidebar };
