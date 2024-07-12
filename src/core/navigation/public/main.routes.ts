import { Route } from "../types/Route";

const MainRoutes: Route[] = [
  new Route( {
    name: "home",
    path: "/",
    isProtected: false,
    description: "App Home Complete Page",
  }),
]

export default MainRoutes;
