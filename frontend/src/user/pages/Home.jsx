import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Faq from "../components/faq";
import Planner from "../components/planner"; // Import Planner
import Footer from "../components/footer"; // Import Footer
import DeviceSupport from "../components/devicesupport";
import MovieCategoryContainer from "../components/container";
import Banner from "../components/banner";

export default function Home() {
  return (
    <div className="home-container">
      {/* Navbar at the top */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Movie Category Section */}
      <div>
        <MovieCategoryContainer />
      </div>

      {/* Device Support Section */}
      <DeviceSupport />

      {/* FAQ Section */}
      <Faq />

      {/* Planner Section */}
      <Planner />

      {/* Banner Section */}
      <Banner />

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}
