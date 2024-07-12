
import { AnalyticsContent } from "@modules/Dashboards/Analytics/AnalyticsContent";
import { CRMContent } from "@modules/Dashboards/CRM/CrmContent";
import { DefaultDashboardContent } from "@modules/Dashboards/DefaultPanel/DefaultDashboardContent";
import { ProjectsContent } from "@modules/Dashboards/Projects/ProjectsContent";
import { Dashboard } from "@pages/dashboard/Dashboard";
import { Home } from "@pages/home/Home";
import { Routes, Route } from "react-router-dom";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />}>
        {/**
         * Has outlet component to render child component on place
         * selected from parent component
         * */}
        <Route index path="index" element={<DefaultDashboardContent />} />
        <Route path="analytics" element={<AnalyticsContent />} />
        <Route path="crm" element={<CRMContent />} />
        <Route path="projects" element={<ProjectsContent />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
