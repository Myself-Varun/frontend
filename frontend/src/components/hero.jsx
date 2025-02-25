import { useState, useEffect } from "react";
import "../stylesheets/Hero.CSS"; // Import the CSS file

const images = [
  
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      {/* Slideshow container */}
      <div className="slideshow">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>

      {/* Semi-transparent overlay */}
      <div className="overlay"></div>

      {/* Centered content */}
      <div className="content">
        {/* Logo */}
        <img src="/logo.png" alt="Logo" className="logo" />

        {/* Text */}
        <h1 className="title">The Best Streaming Experience</h1>
        <p className="subtitle">StreamSphere is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamSphere, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>

        {/* Button */}
        <button className="cta-button">Start Watching Now</button>
      </div>
    </div>
  );
}
