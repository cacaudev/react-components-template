import React from "react";
import { ThemeManager } from "@global/Theme/ThemeManager";
import { BellIcon } from "@icons/svg/FontAwesome";
import { TopNavbarItem } from "./TopNavbarItem";

const TopNavbarContainerRight: React.FC = () => {
  return (
    <div className="c-topnavbar__right-content">
      <ThemeManager />
      <div>
        <BellIcon className="c-topnavbar__icon" />
      </div>
      <div>
        <TopNavbarItem pageName="Home" pageUrl="/" />
      </div>
      <div>
        <TopNavbarItem pageName="Dashboard" pageUrl="/dashboard/index" />
      </div>
    </div>
  );
};

export { TopNavbarContainerRight };
