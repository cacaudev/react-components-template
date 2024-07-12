import { Route } from "../types/Route";

const DashboardRoutes: Route[] = [
  new Route({
    name: "dashboard",
    path: "dashboard/index",
    isProtected: true,
    description: "Dashboard Main Partial Page",
    hasNestedRoutes: true,
  }),
  new Route({
    name: "analytics",
    path: "dashboard/analytics",
    isProtected: true,
    description: "Analytics Partial Page",
  }),
  new Route({
    name: "crm",
    path: "dashboard/crm",
    isProtected: true,
    description: "CRM Partial Page",
  }),
  new Route({
    name: "projects",
    path: "dashboard/projects",
    isProtected: true,
    description: "Projects Partial Page",
  }),
];

export default DashboardRoutes;
