import React, { useContext, useState, useEffect, useRef } from "react";
import "./NavBar.css";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const NavBar = ({ setFromSearch }) => {
  const { getTotalCartAmount, searchQuery, setSearchQuery } =
    useContext(StoreContext);

  const [showSearch, setShowSearch] = useState(false);
  const [navLink, setNavLink] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const searchRef = useRef(null);

  // ✅ Responsive check
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // ✅ Detect click outside search input
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };

    if (showSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearch]);

  const toggleMobileMenu = () => setIsMobileMenuOpen((v) => !v);

  const handleNavClick = (link) => {
    setNavLink(link);
    setIsMobileMenuOpen(false);
    setShowSearch(false);
  };

  // ✅ Enter press handler → scroll trigger
  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      setFromSearch(true); // 👈 only search ke waqt flag true hoga
      const section = document.getElementById("food-display");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setShowSearch(false);
    }
  };

  return (
    <div className="navbar sides-gap">
      <div className="navbar-container">
        <Link
          to="/"
          onClick={() => handleNavClick("home")}
          className={navLink === "home" ? "active" : ""}
        >
          <h1 className="logo">
            Food<span>.Express</span>
          </h1>
        </Link>

        {/* Mobile search bar - always visible on mobile */}
        {isMobile && (
          <div className="mobile-search-container" ref={searchRef}>
            <div className="search-input-wrapper">
              <FiSearch size={18} className="search-icon-inside" />
              <input
                type="text"
                className="search-input mobile-search-input"
                placeholder="Search food..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleEnterPress}
              />
            </div>
          </div>
        )}

        {/* Mobile menu toggle button */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Sidebar (mobile) / inline (desktop) nav */}
        <div
          className={`nav-links-container ${isMobileMenuOpen ? "active" : ""}`}
        >
          <ul className="nav-links">
            <li>
              <Link
                to="/"
                onClick={() => handleNavClick("home")}
                className={navLink === "home" ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#explore-menu"
                onClick={() => handleNavClick("menu")}
                className={navLink === "menu" ? "active" : ""}
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#app-download"
                onClick={() => handleNavClick("mobile-app")}
                className={navLink === "mobile-app" ? "active" : ""}
              >
                Mobile-app
              </a>
            </li>
            <li>
              <a
                href="#footer"
                onClick={() => handleNavClick("contact-us")}
                className={navLink === "contact-us" ? "active" : ""}
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Mobile cart + login */}
          <div className="mobile-nav-icons">
            <div
              onClick={() => handleNavClick("cart")}
              className={
                navLink === "cart"
                  ? "active-cart navbar-cart-icon"
                  : " navbar-cart-icon"
              }
            >
              <Link to="/cart" className="cart-icon">
                <FiShoppingCart size={22} />
              </Link>
              <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
            </div>
            <Link to="/login">
              <Button>sign in</Button>
            </Link>
          </div>
        </div>

        {/* Desktop right section */}
        <div className="nav-right" ref={searchRef}>
          {showSearch ? (
            <input
              type="text"
              className="search-input"
              placeholder="Search food..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleEnterPress}
              autoFocus
            />
          ) : (
            <FiSearch
              size={20}
              onClick={() => setShowSearch(true)}
              style={{ cursor: "pointer" }}
            />
          )}
          <div
            onClick={() => handleNavClick("cart")}
            className={
              navLink === "cart"
                ? "active-cart navbar-cart-icon"
                : " navbar-cart-icon"
            }
          >
            <Link to="/cart" className="cart-icon">
              <FiShoppingCart size={22} />
            </Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </div>
          <Link to="/login">
            <Button>sign in</Button>
          </Link>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default NavBar;