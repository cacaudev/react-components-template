import React from "react";
import { DashboardSidebar } from "../../modules/dashboard/sidebar/Sidebar";
import { DashboardContent } from "../../modules/dashboard/content/DashboardContent";
import "./Dashboard.css"

const Dashboard: React.FC = () => {
  return (
    <main className="c-dashboard">
       <DashboardSidebar />
       <DashboardContent />
    </main>
  );
};

export { Dashboard };
