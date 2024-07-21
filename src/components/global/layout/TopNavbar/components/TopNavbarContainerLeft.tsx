import React from "react";
import { TopNavbarLogo } from "./TopNavbarLogo";
import { TopNavbarSidebarButton } from "./TopNavbarSidebarManager";

const TopNavbarContainerLeft: React.FC = () => {
  return (
    <div className="c-topnavbar__left-content">
      <TopNavbarLogo />
      <TopNavbarSidebarButton />
    </div>
  );
};

export { TopNavbarContainerLeft };
