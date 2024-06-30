import React from "react";
import { RightSidebar } from "../../layout/content/RightSidebar";
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
