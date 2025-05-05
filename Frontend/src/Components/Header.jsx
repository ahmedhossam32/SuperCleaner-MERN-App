import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/Logo.png";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="flex items-center px-0 py-2 bg-white shadow-md">
      <div className="flex items-center space-x-3 ml-0">
        <img src={logo} alt="Logo" className="w-14 h-14 ml-0" />
        <h1 className="text-2xl font-bold text-green-600">Super Cleaner</h1>
      </div>

      <nav className="flex items-center space-x-6 text-gray-700 font-medium px-5 ml-auto">
        <Link to="/" className="hover:text-green-600">
          Home
        </Link>
        <Link to="/about" className="hover:text-green-600">
          About Us
        </Link>
        <a href="#services" className="hover:text-green-600">
          Services
        </a>
        <Link to="/contact" className="hover:text-green-600">
          Contact Us
        </Link>
        <Link to="/booking" className="hover:text-green-600">
          Booking
        </Link>

        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="hover:text-red-600 text-red-600 font-medium"
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="hover:text-green-600">
            Login / Sign Up
          </Link>
        )}

        <a href="tel:+1234567890" className="hover:text-green-600">
          📞 Call +1 234 567 890
        </a>
      </nav>
    </header>
  );
}

export default Header;
