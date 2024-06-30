import { Route, Routes } from "react-router-dom";
import { Navbar } from "./ui/components/layout/header/Header";
import { Home } from "./ui/components/views/home/Home";
import { Footer } from "./ui/components/layout/footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="l-page">
        <Navbar />
        <div className="l-page__content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
