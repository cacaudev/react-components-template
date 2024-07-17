import React, { useState } from "react";
import "./SidebarMenuTop.css";
import { useNavigate } from "react-router-dom";
import { SidebarMenuItem } from "../item/SidebarMenuItem";

interface ISidebarMenuProps {
  menuItems: {
    title: string;
    icon: React.ReactNode;
    link: string;
  }[];
}

const SidebarMenuTop: React.FC<ISidebarMenuProps> = (
  props: ISidebarMenuProps
) => {
  const navigateToPage = useNavigate();
  const [activeItem, setActiveItem] = useState(props.menuItems[0].title);

  const handleItemSelection = (item: { title: string; link?: string }) => {    
    setActiveItem(item.title);
    if (item.link) {      
      navigateToPage(item.link);
    }
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
