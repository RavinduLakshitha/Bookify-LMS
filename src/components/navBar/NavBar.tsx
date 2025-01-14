import React, { useState } from "react";
import LoginPopup from "../login/LoginPopup"; // Ensure correct import path
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsPopupOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token from localStorage
    setIsLoggedIn(false); // Update login state
    setIsMenuOpen(false);
  window.location.href = "/"; 
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
        Bookify
        </a>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/" className="nav-links">
              Home
            </a>
          </li>
          {isLoggedIn ? (
            <>
              <li className="nav-item">
                <a href="/dashboard" className="nav-links">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <button className="nav-links logout-button" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <button className="nav-links" onClick={() => setIsPopupOpen(true)}>
                Login
              </button>
            </li>
          )}
        </ul>
      </div>
      {isPopupOpen && (
        <LoginPopup
          onClose={() => setIsPopupOpen(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </nav>
  );
};

export default Navbar;
