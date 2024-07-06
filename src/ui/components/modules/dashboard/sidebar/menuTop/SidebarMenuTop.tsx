import React, { useState } from "react";
import { SidebarMenuItem } from "../item/SidebarMenuItem";
import { LogoutIcon } from "@assets/icons/svg/Logout";
import { ThemeIcon } from "@assets/icons/svg/Theme";
import "./SidebarMenuTop.css";

interface Props {
  menuItems: {
    title: string;
    icon: React.ReactNode;
    link: string;
  }[];
}

const SidebarMenuTop: React.FC<Props> = (props: Props) => {
  const [activeItem, setActiveItem] = useState(props.menuItems[0].title);

  const handleItemSelection = (itemTitle: string) => {
    setActiveItem(itemTitle);
  };

  return (
    <ul className="c-sidebar__container top">
      {props.menuItems.map((item, index) => (
        <SidebarMenuItem
          icon={item.icon}
          isActive={activeItem === item.title}
          title={item.title}
          link={item.link}
          itemClickedCallback={handleItemSelection}
          key={`sidebar-menu-${index}`}
        />
      ))}
    </ul>
  );
};

export { SidebarMenuTop };
