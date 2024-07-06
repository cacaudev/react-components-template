import React, { useEffect, useState } from "react";

interface Props {
  icon: React.ReactNode;
  isActive?: boolean;
  title: string;
  link?: string;
}

const SidebarMenuItem: React.FC<Props> = (props: Props) => {
  const isValid = (value: any) =>
    value != null && value != undefined && value != "";
  useEffect(() => {
    if (!props.icon) {
      throw new Error("SidebarMenuItem: icon component required");
    }
    if (!props.title || props.title === "") {
      throw new Error("SidebarMenuItem: title required");
    }
  }, []);
  return (
    <li
      className={`c-sidebar__nav-item ${props.isActive && "c-sidebar-item--is-active"} `}
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
