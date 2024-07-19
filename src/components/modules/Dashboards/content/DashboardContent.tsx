import React from "react";
import { Outlet} from "react-router-dom";
import "./DashboardContent.css";

const DashboardContent: React.FC = () => {
  return (
    <main className="c-dashboard__container">
      <Outlet />      
    </main>
  );
};

export { DashboardContent };
