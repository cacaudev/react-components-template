import React from "react";
import { useSelector } from "react-redux";
import { DashboardSidebar } from "@modules/Dashboards/sidebar/components/Sidebar";
import { DashboardContent } from "@modules/Dashboards/content/DashboardContent";
import "./DashboardLayout.css";
import { RootState } from "@state/redux/store";

const DashboardLayout: React.FC = () => {
  const isSidebarCollapsed = useSelector((state: RootState) => state.sidebar.isSidebarCollapsed);
  return (
    <main className={`c-dashboard ${isSidebarCollapsed ? "l-sidebar--collapsed" : "l-sidebar--open"}`}>
      <DashboardSidebar />
      <DashboardContent />
    </main>
  );
};

export { DashboardLayout };
