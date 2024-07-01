import React from "react";
import { RightSidebar } from "../../layout/rightSidebar/RightSidebar";
import { Content } from "../../layout/content/Content";

const Home: React.FC = () => {
  return (
    <main className="c-home">
      <Content />
      <RightSidebar />
    </main>
  );
};

export { Home };
