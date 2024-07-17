import { AnalyticsContent } from "@modules/Dashboards/pages/Analytics/AnalyticsContent";
import { CRMContent } from "@modules/Dashboards/pages/CRM/CrmContent";
import { DefaultDashboardContent } from "@modules/Dashboards/pages/DefaultPanel/DefaultDashboardContent";
import { ProjectsContent } from "@modules/Dashboards/pages/Projects/ProjectsContent";
import { RoutesInformation } from "@navigation/index";
import ROUTES_AVAILABLE from "@navigation/types/EnumRoutes";
import { Dashboard } from "@pages/Dashboard";
import { Home } from "@pages/Home";
import { Routes, Route } from "react-router-dom";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        index
        path={`${RoutesInformation.getRoute(ROUTES_AVAILABLE.HOME).path}`}
        element={<Home />}
      />
      <Route
        path={`${RoutesInformation.getRoute(ROUTES_AVAILABLE.DASHBOARD).path}`}
        element={<Dashboard />}
      >
        {/**
         * Has outlet component to render child component on place
         * selected from parent component
         * */}
        <Route
          index
          path={`${RoutesInformation.getRoute(ROUTES_AVAILABLE.DASHBOARD_INDEX).path}`}
          element={<DefaultDashboardContent />}
        />
        <Route
          path={`${RoutesInformation.getRoute(ROUTES_AVAILABLE.ANALYTICS).path}`}
          element={<AnalyticsContent />}
        />
        <Route
          path={`${RoutesInformation.getRoute(ROUTES_AVAILABLE.CRM).path}`}
          element={<CRMContent />}
        />
        <Route
          path={`${RoutesInformation.getRoute(ROUTES_AVAILABLE.PROJECTS).path}`}
          element={<ProjectsContent />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
