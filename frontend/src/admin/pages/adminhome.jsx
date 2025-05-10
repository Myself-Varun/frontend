import React from "react";
import Navbar from "../components/navbar";
import About from "../components/about";
import Team from "../components/team";
import Footer from "../components/footer";

export default function AdminHome() {
  return (
    <div className="admin-home-container">
      {/* Navbar at the top */}
      <Navbar />

      <div className="admin-main-content">
        {/* Sidebar for navigation */}
        <About />

        <div>
            <Team/>
        </div>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}
