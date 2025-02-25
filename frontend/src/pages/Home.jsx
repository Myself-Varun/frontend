import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Faq from "../components/faq";
import Planner from "../components/planner"; // Import Planner
import Footer from "../components/footer"; // Import Footer

export default function Home() {
  return (
    <div className="home-container">
      {/* Navbar at the top */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
      {}
      <Faq />

      {/* Planner Section */}
      <Planner /> 

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}
