import ROUTES_AVAILABLE from "./EnumRoutes";

interface IRoute {
  name: ROUTES_AVAILABLE;
  path: string;
  isProtected: boolean;
  description?: string;
  hasNestedRoutes?: boolean;
}

class Route {
  name = ROUTES_AVAILABLE.HOME;
  path = "";
  isProtected = false;
  description = "";
  hasNestedRoutes = false;

  constructor(route: Partial<IRoute>) {
    Object.assign(this, route);
  }
}
export { Route };
