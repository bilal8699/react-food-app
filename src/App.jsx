import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";

const App = () => {
  const location = useLocation();

  // ✅ Search → highlight flag
  const [fromSearch, setFromSearch] = useState(false);

  // ✅ login page par NavBar & Footer hide
  const hideLayout = location.pathname === "/login";

  return (
    <div className="container">
      {!hideLayout && <NavBar setFromSearch={setFromSearch} />}

      <Routes>
        <Route path="/login" element={<LoginPopup />} />
        {/* ✅ pass fromSearch + setFromSearch to Home */}
        <Route path="/" element={<Home fromSearch={fromSearch} setFromSearch={setFromSearch} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>

      {!hideLayout && <Footer />}
    </div>
  );
};

export default App;
