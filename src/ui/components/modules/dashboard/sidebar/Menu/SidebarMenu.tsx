import React, { useState } from "react";
import { SidebarMenuItem } from "../item/SidebarMenuItem";
import { LogoutIcon } from "@assets/icons/svg/Logout";
import { ThemeIcon } from "@assets/icons/svg/Theme";
import './SidebarMenu.css';

interface Props {
  menuItems: {
    title: string;
    icon: React.ReactNode;
    link: string;
  }[];
}

const SidebarMenu: React.FC<Props> = (props: Props) => {
  const [activeItem, setActiveItem] = useState(props.menuItems[0].title);

  const handleItemSelection = (itemTitle: string) => {
    // TODO: remove buttons that are not views links
    const titles = props.menuItems.map((item) => item.title);
    if (titles.includes(itemTitle)) {
      setActiveItem(itemTitle);
    }
  };

  return (
    <div className="c-sidebar__menu">
      <ul className="c-sidebar__container top">
        {props.menuItems.map((item) => (
          <SidebarMenuItem
            icon={item.icon}
            isActive={activeItem === item.title}
            title={item.title}
            link={item.link}
            itemClickedCallback={handleItemSelection}
          />
        ))}
      </ul>
      <ul className="c-sidebar__container">
        <SidebarMenuItem
          icon={<ThemeIcon />}
          title={"Change Theme"}
          itemClickedCallback={handleItemSelection}
        />
        <SidebarMenuItem
          icon={<LogoutIcon />}
          title={"Logout"}
          itemClickedCallback={handleItemSelection}
        />
      </ul>
    </div>
  );
};

export { SidebarMenu };
