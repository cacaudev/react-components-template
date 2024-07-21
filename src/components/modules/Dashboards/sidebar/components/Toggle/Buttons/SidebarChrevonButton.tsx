import React from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@icons/svg/FontAwesome";
import { ISidebarToggleButton } from "./ISidebarToggleButton";

/**
 * Responsible for rendering sidebar toggle button
 */
const SidebarChrevonButton: React.FC<ISidebarToggleButton> = ({
  open = false,
  onChange,
}) => {
  return (
    <div className="c-sidebar__header">
      <a onClick={() => onChange()}>
        {open ? (
          <ChevronRightIcon className="c-sidebar__toggle-button" />
        ) : (
          <ChevronLeftIcon className="c-sidebar__toggle-button" />
        )}
      </a>
    </div>
  );
};

export { SidebarChrevonButton };