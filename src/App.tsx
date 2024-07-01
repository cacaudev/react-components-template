import { Route, Routes } from "react-router-dom";
import { Navbar } from "./ui/components/layout/header/Header";
import { Home } from "./ui/components/views/home/Home";
import { Footer } from "./ui/components/layout/footer/Footer";
import { Dashboard } from "./ui/components/views/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <div className="l-page">
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
