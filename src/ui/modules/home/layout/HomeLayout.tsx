import React from "react";
import './HomeLayout.css';
import { Content } from "../content/Content";
import { RightSidebar } from "../sidebar/RightSidebar";

const HomeLayout: React.FC = () => {
  return (
    <main className="c-home">
      <Content />
      <RightSidebar />
    </main>
  );
};

export { HomeLayout };