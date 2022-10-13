import { GlobalStyles } from "twin.macro";
import Home from "./Pages/Home";
import Tentang from "./Pages/Tentang";
import Faq from "./Pages/Faq";
import Events from "./Pages/Events";
import Partnership from "./Pages/Partnership";
import PageLayout from "./components/shared/PageLayout";
import BackToTop from "./components/BackToTop";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Pages/Products";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

function App() {
  const [scrollPosition, setScrollPositioni] = useState(0);

  const handleVisibleButtonToTop = () => {
    const position = window.pageYOffset;
    setScrollPositioni(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButtonToTop);
  }, []);

  return (
    <div className="relative">
      <div id="top"></div>
      <BrowserRouter>
        <GlobalStyles />
        <PageLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/products" element={<Products />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/events" element={<Events />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </PageLayout>
        <BackToTop position={scrollPosition} />
      </BrowserRouter>
    </div>
  );
}

export default App;
