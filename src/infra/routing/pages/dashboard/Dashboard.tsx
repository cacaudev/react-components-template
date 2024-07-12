import React from "react";
import { DashboardSidebar } from "@modules/Sidebar/Sidebar";
import { DashboardLayout } from "@modules/Dashboards/layout/DashboardLayout";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <main className={`c-dashboard`}>
      <DashboardSidebar />
      <DashboardLayout />
    </main>
  );
};

export { Dashboard };
