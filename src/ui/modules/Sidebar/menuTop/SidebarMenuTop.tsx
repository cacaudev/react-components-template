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
  const [activeItem, setActiveItem] = useState(props.menuItems[0].title);

  const handleItemSelection = (item: { title: string; link?: string }) => {
    console.log("item ", item);
    
    setActiveItem(item.title);
    if (item.link) {
      console.log("has link... redirecting to ", item.link);
      
      navigateToPage(item.link);
    } else {
      console.log("has no link");
      
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
