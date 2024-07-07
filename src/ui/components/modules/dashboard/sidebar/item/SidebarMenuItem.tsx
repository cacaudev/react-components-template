import React, { useEffect } from "react";
import "./SidebarMenuItem.css";
import { CustomValidator } from "@domain/utils/CustomValidator";

interface Props {
  icon: React.ReactNode;
  isActive?: boolean;
  title: string;
  link?: string;
  itemClickedCallback(itemTitle: string): void;
}

const SidebarMenuItem: React.FC<Props> = (props: Props) => {
  useEffect(() => {
    if (!CustomValidator.isValueValid(props.icon)) {
      throw new Error("SidebarMenuItem: icon component required");
    }
    if (!CustomValidator.isStringValid(props.title)) {
      throw new Error("SidebarMenuItem: title required");
    }
  }, [props]);

  const handleClick = (e: any, itemTitle: string) => {
    e.preventDefault();
    props.itemClickedCallback(itemTitle);
  };

  return (
    <li
      className={`c-sidebar__nav-item ${props.isActive && "c-sidebar-item--is-active"} `}
      onClick={(e) => handleClick(e, props.title)}
    >
      <a
        href={`${CustomValidator.isValueValid(props.link) ? props.link : ""}`}
        className="c-sidebar__nav-link"
      >
        <div>{props.icon}</div>
        <span className="c-sidebar-item__title">{props.title}</span>
      </a>
    </li>
  );
};

export { SidebarMenuItem };
