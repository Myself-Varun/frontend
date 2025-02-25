import "../stylesheets/navbar.css";
import logo from "../assets/image.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
 

  return (
    <div className="bar">
      {/* Logo Section */}
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div className="nav">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/movies")}>Movies & Shows</button>
        <button onClick={() => navigate("/support")}>Support</button>
        <button onClick={() => navigate("/subscriptions")}>Subscriptions</button>
      </div>

      {/* Search & Notifications */}
      <div className="sn">
        <button className="search-icon">🔍</button>
        <button className="notification">🔔</button>
      </div>
    </div>
  );
}
