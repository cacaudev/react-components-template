import React, { useState } from "react";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { HomeIcon } from "@assets/icons/svg/Home";
import { AnalyticsIcon } from "@assets/icons/svg/Analytics";
import { CRMIcon } from "@assets/icons/svg/CRM";
import { LogoutIcon } from "@assets/icons/svg/Logout";
import { ProjectsIcon } from "@assets/icons/svg/Projects";
import { ThemeIcon } from "@assets/icons/svg/Theme";

const SidebarMenu: React.FC = () => {
  return (
    <div className="c-sidebar__menu">
      <ul className="c-sidebar__container top">
        <SidebarMenuItem
          icon={<HomeIcon />}
          isActive={true}
          title={"Dashboard"}
          link=""
        />
        <SidebarMenuItem
          icon={<AnalyticsIcon />}
          isActive={false}
          title={"Analytics"}
          link="#"
        />
        <SidebarMenuItem
          icon={<CRMIcon />}
          isActive={false}
          title={"CRM"}
          link="#"
        />
        <SidebarMenuItem
          icon={<ProjectsIcon />}
          isActive={false}
          title={"Projects"}
          link="#"
        />
      </ul>
      <ul className="c-sidebar__container">
        <SidebarMenuItem
          icon={<ThemeIcon />}
          isActive={false}
          title={"Change Theme"}
          link="#"
        />
        <SidebarMenuItem
          icon={<LogoutIcon />}
          isActive={false}
          title={"Logout"}
          link="#"
        />
      </ul>
    </div>
  );
};

export { SidebarMenu };
