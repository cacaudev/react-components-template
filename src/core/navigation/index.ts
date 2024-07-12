import DashboardRoutes from "./protected/dashboard.routes";
import MainRoutes from "./public/main.routes";
import { Route } from "./types/Route";

class RoutesInformation {
  static ROUTES: any = [
    ...MainRoutes,
    ...DashboardRoutes,
  ];

  static getRoute(route: string): Route {
    return RoutesInformation.ROUTES[route];
  }
}
export { RoutesInformation };
