import React from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/navbar.css";
import logo from "../assets/image.png";
import { FaUser, FaArrowRight } from "react-icons/fa"; // ✅ Import icons

export default function Navbar() {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="bars">
      {/* Logo Section */}
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div className="nav">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/movies&shows")}>Movies & Shows</button>
        <button onClick={() => navigate("/support")}>Support</button>
        <button onClick={() => navigate("/subscriptions")}>Subscriptions</button>
      </div>

      {/* Icons */}
      <div className="auth-icons">
        <FaUser
          className="icon"
          onClick={() => navigate("/register")}
          title="Register"
        />
        <FaArrowRight
          className="icons"
          onClick={() => navigate("/login")}
          title="Login"
        />
      </div>
    </div>
  );
}
