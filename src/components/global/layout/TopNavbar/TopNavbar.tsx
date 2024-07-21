import React from "react";
import "./TopNavbar.css";
import { TopNavbarContainerLeft } from "./components/TopNavbarContainerLeft";
import { TopNavbarContainerRight } from "./components/TopNavbarContainerRight";

const TopNavbar: React.FC = () => {
  return (
    <header className="c-topnavbar">
      <div className="c-topnavbar__container">
        <TopNavbarContainerLeft />
        <TopNavbarContainerRight />
      </div>
    </header>
  );
};

export { TopNavbar };
