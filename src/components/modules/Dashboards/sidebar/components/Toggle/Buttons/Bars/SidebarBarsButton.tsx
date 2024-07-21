import React from "react";
import { BarsIcon } from "@icons/svg/FontAwesome";
import { ISidebarToggleButton } from "../ISidebarToggleButton";
import './SidebarBarsButton.css';

/**
 * Responsible for rendering sidebar toggle button
 */
const SidebarBarsButton: React.FC<ISidebarToggleButton> = ({
  onChange,
}) => {
  return (
    <a onClick={() => onChange()}>
      <BarsIcon className="c-topnavbar__icon bars" />
    </a>
  );
};

export { SidebarBarsButton };
