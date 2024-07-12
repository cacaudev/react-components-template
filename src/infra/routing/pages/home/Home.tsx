import React from "react";
import { RightSidebar } from "@modules/Home/rightSidebar/RightSidebar";
import { Content } from "@modules/Home/content/Content";
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
