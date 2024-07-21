import React from "react";
import { useNavigate } from "react-router-dom";

type TopNavbarItemProps = {
  pageName: string;
  pageUrl: string;
};

const TopNavbarItem: React.FC<TopNavbarItemProps> = ({ pageName, pageUrl }) => {
  const navigateToPage = useNavigate();

  return (
    <a onClick={() => navigateToPage(pageUrl)} className="c-topnavbar__item">
      {pageName}
    </a>
  );
};

export { TopNavbarItem };
