import React from "react";
import { DashboardNavbar } from "../../modules/dashboard/navbar/DashboardNavbar";
import { DashboardContent } from "../../modules/dashboard/content/DashboardContent";
import "./Dashboard.css"

const Dashboard: React.FC = () => {
  return (
    <main className="c-dashboard">
       <DashboardNavbar />
       <DashboardContent />
    </main>
  );
};

export { Dashboard };
