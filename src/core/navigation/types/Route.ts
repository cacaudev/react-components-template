interface IRoute {
  name: string;
  path: string;
  isProtected: boolean;
  description?: string;
  hasNestedRoutes?: boolean;
}

class Route {
  name = "";
  path = "";
  isProtected = false;
  description = "";
  hasNestedRoutes = false;

  constructor(route: Partial<IRoute>) {
    Object.assign(this, route);
  }
}
export { Route };
