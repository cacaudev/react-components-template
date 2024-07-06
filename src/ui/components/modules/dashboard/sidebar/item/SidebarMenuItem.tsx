import React, { useEffect, useState } from "react";
import './SidebarMenuItem.css';

interface Props {
  icon: React.ReactNode;
  isActive?: boolean;
  title: string;
  link?: string;
  itemClickedCallback(itemTitle: string): void;
}

const SidebarMenuItem: React.FC<Props> = (props: Props) => {
  const isValid = (value: any) =>
    value != null && value != undefined && value != "";

  useEffect(() => {
    if (!isValid(props.icon)) {
      throw new Error("SidebarMenuItem: icon component required");
    }
    if (!isValid(props.title)) {
      throw new Error("SidebarMenuItem: title required");
    }
  }, [props]);

  const handleClick = (e: any, itemTitle: string) => {
    console.log("menu item clicked ", itemTitle);

    e.preventDefault();
    props.itemClickedCallback(itemTitle);
  };

  return (
    <li
      className={`c-sidebar__nav-item ${isValid(props.isActive) && "c-sidebar-item--is-active"} `}
      onClick={(e) => handleClick(e, props.title)}
    >
      <a
        href={`${isValid(props.link) ? props.link : ""}`}
        className="c-sidebar__nav-link"
      >
        {props.icon}
        <span className="c-sidebar-item__title">{props.title}</span>
      </a>
    </li>
  );
};

export { SidebarMenuItem };
