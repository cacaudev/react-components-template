import React from "react";
import { RightSidebar } from "@modules/home/rightSidebar/RightSidebar";
import { Content } from "@modules/home/content/Content";
import './Home.css';

const Home: React.FC = () => {
  return (
    <main className="c-home">
      <Content />
      <RightSidebar />
    </main>
  );
};

export { Home };
