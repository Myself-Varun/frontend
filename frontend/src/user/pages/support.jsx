import React from "react";
import Navbar from "../components/navbar"; // Import Navbar
import QnA from "../components/qna"; // Import QnA Component
import Faq from "../components/faq"; // Import FAQ Component
import Banner from "../components/banner"; // Import Banner Component
import Footer from "../components/footer"; // Import Footer Component

export default function Support() {
  return (
    <div className="support-container">
      {/* Navbar at the top */}
      <Navbar />

      {/* Q&A Section */}
      <QnA />

      {/* FAQ Section */}
      <Faq />

      {/* Banner Section */}
      <Banner />

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}
