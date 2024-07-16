import React from "react";
import './Home.css';
import { Content } from "@modules/home/content/Content";
import { RightSidebar } from "@modules/home/rightSidebar/RightSidebar";

const Home: React.FC = () => {
  return (
    <main className="c-home">
      <Content />
      <RightSidebar />
    </main>
  );
};

export { Home };
