import { CustomValidator } from "@domain/utils/CustomValidator";
import DashboardRoutes from "./protected/dashboard.routes";
import MainRoutes from "./public/main.routes";
import { Route } from "./types/Route";
import ROUTES_AVAILABLE from "./types/EnumRoutes";

class RoutesInformation {
  static ROUTES: Route[] = [...MainRoutes, ...DashboardRoutes];

  static getRoute(routeName: ROUTES_AVAILABLE): Route {
    if (!CustomValidator.isStringValid(routeName)) {
      throw new Error("Route name must be valid.");
    }
    const routeFound = RoutesInformation.ROUTES.filter(
      (route: Route) =>
        route.name === routeName
    );
    if (!routeFound || routeFound.length === 0) {
      throw new Error("Route not found.");
    }
    if (!routeFound || routeFound.length > 1) {
      throw new Error("Route name is duplicated. Please remove one.");
    }
    return routeFound[0];
  }
}
export { RoutesInformation };
