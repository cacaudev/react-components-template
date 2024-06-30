import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="l-page__header">
      <div className="l-page__header__logo">
      <Link to="/">Home</Link>
      </div>
      <div className="l-page__header__right-container">       
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </header>
  );
};

export { Navbar };
