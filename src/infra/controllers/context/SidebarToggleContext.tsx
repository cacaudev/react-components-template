import { createContext, useContext, useState } from "react";

interface ISidebarContext {
  sidebarToggle: boolean;
  setSidebarToggle: () => void;
}
interface Props {
  children: React.ReactNode;
}

const SidebarContext = createContext<ISidebarContext>({
  sidebarToggle: true,
  setSidebarToggle: () => {},
});

const SidebarToggleProvider: React.FC<Props> = ({ children }) => {
  const [sidebarToggle, setSidebarToggle] = useState(true);

  const handleToggle = () => {
    setSidebarToggle((prevState) => !prevState);
  };
  return (
    <SidebarContext.Provider
      value={{
        sidebarToggle: sidebarToggle,
        setSidebarToggle: handleToggle,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

const useSidebarContext = () => useContext(SidebarContext);

export { SidebarToggleProvider, useSidebarContext };
