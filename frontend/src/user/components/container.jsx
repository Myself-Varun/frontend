import React, { useRef, useState } from "react";
import "../stylesheets/MovieCategoryContainer.css";

// Reduced to 10 categories
const categories = Array.from({ length: 10 }, (_, index) => ({
  name: `Category ${index + 1}`,
  image: "https://via.placeholder.com/150"
}));

const MovieCategoryContainer = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(categories.length / itemsPerSlide);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const newIndex = Math.max(0, currentIndex - 1);
      setCurrentIndex(newIndex);
      scrollRef.current.scrollBy({ left: -300 * itemsPerSlide, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const newIndex = Math.min(totalSlides - 1, currentIndex + 1);
      setCurrentIndex(newIndex);
      scrollRef.current.scrollBy({ left: 300 * itemsPerSlide, behavior: "smooth" });
    }
  };

  return (
    <div className="category-container">
      <div className="top-controls">
        <button className="scroll-button left" onClick={scrollLeft}>❮</button>
        <div className="indicator-container">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <span key={i} className={`indicator ${i === currentIndex ? "active" : ""}`}></span>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>❯</button>
      </div>
      <h2 className="title">Explore our wide variety of categories</h2>
      <p className="subtitle">
        Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new.
      </p>
      <div className="scroll-wrapper">
        <div className="category-list" ref={scrollRef}>
          {categories.map((category, index) => (
            <div key={index} className="category-item">
              <img src={category.image} alt={category.name} className="category-image" />
              <div className="category-info">
                <span className="category-name">{category.name}</span>
                <span className="arrow">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCategoryContainer;
