import React, { useState } from "react";
import { SidebarMenuItem } from "../item/SidebarMenuItem";
import "./SidebarMenuTop.css";
import { useNavigate } from "react-router-dom";

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
  const [activeItem, setActiveItem] = useState(props.menuItems[1].title);

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
