import React from "react";
import Navbar from "../components/navbar"; // Import Navbar
import Table from "../components/table"; // Import Table Component
import Planner from "../components/planner"; // Import Planner Component
import Banner from "../components/banner"; // Import Banner Component
import Footer from "../components/footer"; // Import Footer Component

export default function Subscription() {
  return (
    <div className="subscription-container">
      {/* Navbar at the top */}
      <Navbar />

      {/* Plan Comparison Table */}
      <Table />

      {/* Subscription Planner */}
      <Planner />

      {/* Banner Section */}
      <Banner />

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}
