import React from "react";
import { useLocation } from "react-router-dom";
import { SidebarToggleManager } from "@modules/Dashboards/sidebar/components/Toggle/SidebarToggleManager";
import { RoutesInformation } from "@navigation/index";
import ROUTES_AVAILABLE from "@navigation/types/EnumRoutes";

const TopNavbarSidebarButton: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  /**
   * Only show button if is in dashboard route
   * @returns 
   */
  const canShowButton = (): boolean =>
    pathname.includes(
      RoutesInformation.getRoute(ROUTES_AVAILABLE.DASHBOARD).path
    );

  return (
    <>{canShowButton() && <SidebarToggleManager buttonComponent="bars" />}</>
  );
};

export { TopNavbarSidebarButton };
