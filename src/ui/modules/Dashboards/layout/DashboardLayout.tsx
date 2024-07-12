import React from "react";
import { Outlet} from "react-router-dom";
import "./DashboardLayout.css";

const DashboardLayout: React.FC = () => {
  return (
    <main className="c-dashboard__container">
      <Outlet />      
    </main>
  );
};

export { DashboardLayout };
