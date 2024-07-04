import { Route, Routes } from "react-router-dom";
import Navbar from "./ui/components/layout/navbar/Navbar";
import { Home } from "./ui/components/views/home/Home";
import { Footer } from "./ui/components/layout/footer/Footer";
import { Dashboard } from "./ui/components/views/dashboard/Dashboard";
import { useSidebarContext } from "./infra/controllers/context/SidebarToggleContext";
import useResponsiveWidth from "./infra/hooks/WindowDimensionsHook";

function App() {
  const { isSidebarCollapsed } = useSidebarContext();
  return (
    <div className="App">
      <div
        className={`l-page ${isSidebarCollapsed ? "c-nav-collapsed" : ""} ${useResponsiveWidth() < 768 ? 'is-tablet' : ''}`}
      >
        <Navbar />
        <div className="l-page__content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
