import React from "react";
import "../stylesheets/banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      {/* Overlay */}
      <div className="banner-overlay"></div>

      {/* Content */}
      <div className="banner-content">
        <h2>Your Banner Title</h2>
        <p>This is a sample banner text. Customize it as needed.</p>
      </div>
      
      {/* Button */}
      <div className="banner-button">
        <button>Click Me</button>
      </div>
    </div>
  );
};

export default Banner; // ✅ Ensure this line exists
