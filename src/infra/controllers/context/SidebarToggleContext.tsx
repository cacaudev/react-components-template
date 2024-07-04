import { createContext, useContext, useState } from "react";

interface ISidebarContext {
  isSidebarCollapsed: boolean;
  setSidebarToggle: () => void;
}
interface Props {
  children: React.ReactNode;
}

const SidebarContext = createContext<ISidebarContext>({
  isSidebarCollapsed: true,
  setSidebarToggle: () => {},
});

const SidebarToggleProvider: React.FC<Props> = ({ children }) => {
  const [isSidebarCollapsed, setSidebarToggle] = useState(true);

  const handleToggle = () => {
    setSidebarToggle((prevState) => !prevState);
  };
  return (
    <SidebarContext.Provider
      value={{
        isSidebarCollapsed: isSidebarCollapsed,
        setSidebarToggle: handleToggle,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

const useSidebarContext = () => useContext(SidebarContext);

export { SidebarToggleProvider, useSidebarContext };
