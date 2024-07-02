import React, { useState } from "react";
import "./DashboardNavbar.css";

const DashboardNavbar: React.FC = () => {
  const [closed, setClosed] = useState(false);
  const handleSidebar = () => {
    setClosed(!closed);
  };

  return (
    <div className={`c-navbar ${closed ? "closed" : ""}`}>
      <div className="c-navbar__header">
        <button onClick={handleSidebar}>{closed ? "Open" : "Close"}</button>
        <p>Back</p>
      </div>
      <div className="c-navbar__menu">
        <div className="c-navbar__top-container">
          <p>Dashboard</p>
          <p>Analytics</p>
        </div>
        <div className="c-navbar__bottom-container">
          <p>Change Theme</p>
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export { DashboardNavbar };
