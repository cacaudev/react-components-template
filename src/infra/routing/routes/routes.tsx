import { AnalyticsContent } from "@modules/Dashboards/Analytics/AnalyticsContent";
import { CRMContent } from "@modules/Dashboards/CRM/CrmContent";
import { DefaultDashboardContent } from "@modules/Dashboards/DefaultPanel/DefaultDashboardContent";
import { ProjectsContent } from "@modules/Dashboards/Projects/ProjectsContent";
import { Dashboard } from "@pages/dashboard/Dashboard";
import { Home } from "@pages/home/Home";
import { Routes, Route } from "react-router-dom";
import { RoutesInformation } from "../../../core/navigation";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        index
        path={`${RoutesInformation.getRoute('HOME').path}`}
        element={<Home />}
      />
      <Route path={`${RoutesInformation.getRoute('HOME').path}`} element={<Dashboard />}>
        {/**
         * Has outlet component to render child component on place
         * selected from parent component
         * */}
        <Route index path={`${RoutesInformation.getRoute('HOME').path}`} element={<DefaultDashboardContent />} />
        <Route path={`${RoutesInformation.getRoute('HOME').path}`} element={<AnalyticsContent />} />
        <Route path={`${RoutesInformation.getRoute('HOME').path}`} element={<CRMContent />} />
        <Route path={`${RoutesInformation.getRoute('HOME').path}`} element={<ProjectsContent />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
