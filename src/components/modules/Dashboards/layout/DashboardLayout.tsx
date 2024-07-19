import React from "react";
import { DashboardSidebar } from "@modules/Dashboards/sidebar/Sidebar";
import { DashboardContent } from "@modules/Dashboards/content/DashboardContent";
import "./DashboardLayout.css";
import {
  useSidebarContext,
} from "@state/context/SidebarToggleContext";

const DashboardLayout: React.FC = () => {
  const { isSidebarCollapsed } = useSidebarContext();
  return (
    <main className={`c-dashboard ${isSidebarCollapsed ? "l-sidebar--collapsed" : "l-sidebar--open"}`}>
      <DashboardSidebar />
      <DashboardContent />
    </main>
  );
};

export { DashboardLayout };
