import React from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheet/navbara.css";
import logo from "../assets/image.png";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="bar">
      {/* Logo Section */}
      <div className="logo" onClick={() => navigate("/home")}>
        <img src={logo} alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div className="nav">
        <button onClick={() => navigate("/adminpage")}>Home</button>
        <button onClick={() => navigate("/admin")}>Upload</button>
        <button onClick={() => navigate("/list")}>List</button>
      </div>
    </div>
  );
}
