import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../stylesheets/Type.css";

export default function ContainerCarousel() {
  const totalContainers = 20;
  const itemsPerPage = 5;
  const [startIndex, setStartIndex] = useState(0);

  // Dummy data for 20 sub-containers
  const subContainers = Array.from({ length: totalContainers }, (_, index) => ({
    id: index + 1,
    content: `Item ${index + 1}`,
  }));

  // Handler to navigate left
  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - itemsPerPage));
  };

  // Handler to navigate right
  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(totalContainers - itemsPerPage, prevIndex + itemsPerPage)
    );
  };

  return (
    <div className="main-container">
      <h2 className="title">Sub-Container Carousel</h2>

      <div className="carousel">
        {/* Left Arrow */}
        <button onClick={handlePrev} disabled={startIndex === 0} className="arrow">
          <FaArrowLeft />
        </button>

        {/* Sub-Containers */}
        <div className="sub-container-wrapper">
          {subContainers.slice(startIndex, startIndex + itemsPerPage).map((item) => (
            <div key={item.id} className="sub-container">
              {item.content}
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={startIndex + itemsPerPage >= totalContainers}
          className="arrow"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
