import ROUTES_AVAILABLE from "@navigation/types/EnumRoutes";
import { Route } from "../types/Route";

const DashboardRoutes: Route[] = [
  new Route({
    name: ROUTES_AVAILABLE.DASHBOARD,
    path: "dashboard",
    isProtected: true,
    description: "Dashboard Main Page",
    hasNestedRoutes: true,
  }),
  new Route({
    name: ROUTES_AVAILABLE.DASHBOARD_INDEX,
    path: "index",
    isProtected: true,
    description: "Dashboard Partial Page",
    hasNestedRoutes: false,
  }),
  new Route({
    name: ROUTES_AVAILABLE.ANALYTICS,
    path: "analytics",
    isProtected: true,
    description: "Analytics Partial Page",
  }),
  new Route({
    name: ROUTES_AVAILABLE.CRM,
    path: "crm",
    isProtected: true,
    description: "CRM Partial Page",
  }),
  new Route({
    name: ROUTES_AVAILABLE.PROJECTS,
    path: "projects",
    isProtected: true,
    description: "Projects Partial Page",
  }),
];

export default DashboardRoutes;
