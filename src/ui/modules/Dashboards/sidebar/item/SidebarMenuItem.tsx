import React, { useEffect } from "react";
import "./SidebarMenuItem.css";
import { CustomValidator } from "@domain/utils/CustomValidator";

interface ISidebarItemProps {
  icon: React.ReactNode;
  isActive?: boolean;
  title: string;
  link?: string;
  itemClickedCallback(item:  {
    title: string;
    link?: string;
  }): void;
}

const SidebarMenuItem: React.FC<ISidebarItemProps> = (props: ISidebarItemProps) => {
  useEffect(() => {
    if (!CustomValidator.isValueValid(props.icon)) {
      throw new Error("SidebarMenuItem: icon component required");
    }
    if (!CustomValidator.isStringValid(props.title)) {
      throw new Error("SidebarMenuItem: title required");
    }
  }, [props]);

  const handleClick = (e: any, item: {
    title: string;
    link?: string;
  }) => {
    e.preventDefault();
    props.itemClickedCallback(item);
  };

  return (
    <li
      className={`c-sidebar__item ${props.isActive ? "c-sidebar-item--is-active" : ""}`}
      onClick={(e) => handleClick(e, props)}
    >
      <div className="c-sidebar__item__content">
        <div>{props.icon}</div>
        <span className="c-sidebar-item__title">{props.title}</span>
      </div>
    </li>
  );
};

export { SidebarMenuItem };
