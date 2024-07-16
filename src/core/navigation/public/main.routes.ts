import ROUTES_AVAILABLE from "@navigation/types/EnumRoutes";
import { Route } from "../types/Route";

const MainRoutes: Route[] = [
  new Route({
    name: ROUTES_AVAILABLE.HOME,
    path: "/",
    isProtected: false,
    description: "App Home Complete Page",
  }),
];

export default MainRoutes;
