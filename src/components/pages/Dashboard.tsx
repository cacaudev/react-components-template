import React from "react";
import {
  SidebarToggleProvider,
} from "@state/context/SidebarToggleContext";
import { DashboardLayout } from "../modules/Dashboards/layout/DashboardLayout";

const Dashboard: React.FC = () => {
  return (
    <SidebarToggleProvider>
      <DashboardLayout />
    </SidebarToggleProvider>
  );
};

export { Dashboard };
