import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@state/redux/store";
import { toggleSidebar } from "../../state/SidebarSlice";
import { SidebarBarsButton } from "./Buttons/SidebarBarsButton";
import { SidebarChrevonButton } from "./Buttons/SidebarChrevonButton";

interface ISidebarToggleManagerProps {
  buttonComponent: "bars" | "chevron";
}

/**
 * Responsible for:
 * sidebar toggle state and logic
 */
const SidebarToggleManager: React.FC<ISidebarToggleManagerProps> = ({
  buttonComponent,
}) => {
  const isSidebarCollapsed = useSelector(
    (state: RootState) => state.sidebar.isSidebarCollapsed
  );
  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <>
      {buttonComponent === "bars" && (
        <SidebarBarsButton
          open={!isSidebarCollapsed}
          onChange={handleSidebar}
        />
      )}
      {buttonComponent === "chevron" && (
        <SidebarChrevonButton
          open={!isSidebarCollapsed}
          onChange={handleSidebar}
        />
      )}
    </>
  );
};

export { SidebarToggleManager };
