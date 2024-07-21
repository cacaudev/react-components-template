import React, { useState } from "react";
import "./SidebarMenuTop.css";
import { useNavigate } from "react-router-dom";
import {
  HomeIcon,
  AnalyticsIcon,
  CRMIcon,
  ProjectsIcon,
} from "@icons/svg/FontAwesome";
import { MenuItemProps, SidebarItemList } from "./SidebarItemList";
import { ScreenManager } from "@state/hooks/screen/ScreenManager";
import { toggleSidebar } from "../../state/SidebarSlice";
import { useDispatch } from "react-redux";

const menuItems: MenuItemProps[] = [
  {
    title: "Dashboard",
    icon: <HomeIcon className="c-sidebar-item__icon" />,
    link: "index",
  },
  {
    title: "Analytics",
    icon: <AnalyticsIcon className="c-sidebar-item__icon" />,
    link: "analytics",
  },
  {
    title: "CRM",
    icon: <CRMIcon className="c-sidebar-item__icon" />,
    link: "crm",
  },
  {
    title: "Projects",
    icon: <ProjectsIcon className="c-sidebar-item__icon" />,
    link: "projects",
  },
];

const SidebarMenuTop: React.FC = () => {
  const navigateToPage = useNavigate();
  const dispatch = useDispatch();

  const [activeItem, setActiveItem] = useState(menuItems[0].title);
  const { isTablet } = ScreenManager();

  const shouldCloseSidebarAfterClickingItem = () => isTablet;
  const closeSidebar = () => {
    dispatch(toggleSidebar());
  };

  const handleItemSelection = (item: { title: string; link?: string }) => {
    setActiveItem(item.title);
    if (item.link) {
      navigateToPage(item.link);
      if (shouldCloseSidebarAfterClickingItem()) {
        closeSidebar();
      }
    }
  };

  return (
    <SidebarItemList
      menuItems={menuItems}
      activeItem={activeItem}
      onChangeActive={handleItemSelection}
    />
  );
};

export { SidebarMenuTop };
