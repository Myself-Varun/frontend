import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";  // Added this import
import "../stylesheets/Hero.css";

// Importing all 32 images
import K1 from "../assets/K1.jpeg";
import K2 from "../assets/K2.jpeg";
import K3 from "../assets/K3.jpeg";
import K4 from "../assets/K4.jpeg";
import K5 from "../assets/K5.jpeg";
import K6 from "../assets/K6.jpeg";
import K7 from "../assets/K7.jpeg";
import K8 from "../assets/K8.jpeg";

import B1 from "../assets/B1.jpeg";
import B2 from "../assets/B2.jpeg";
import B3 from "../assets/B3.jpeg";
import B4 from "../assets/B4.jpeg";
import B5 from "../assets/B5.jpeg";
import B6 from "../assets/B6.jpeg";
import B7 from "../assets/B7.jpeg";
import B8 from "../assets/B8.jpeg";

import H1 from "../assets/H1.jpeg";
import H2 from "../assets/H2.jpeg";
import H3 from "../assets/H3.jpeg";
import H4 from "../assets/H4.jpeg";
import H5 from "../assets/H5.jpeg";
import H6 from "../assets/H6.jpeg";
import H7 from "../assets/H7.jpeg";
import H8 from "../assets/H8.jpeg";

import T1 from "../assets/T1.jpeg";
import T2 from "../assets/T2.jpeg";
import T3 from "../assets/T3.jpeg";
import T4 from "../assets/T4.jpeg";
import T5 from "../assets/T5.jpeg";
import T6 from "../assets/T6.jpeg";
import T7 from "../assets/T7.jpeg";
import T8 from "../assets/T8.jpeg";

// Storing images in an array
const images = [
  K1, K2, K3, K4, K5, K6, K7, K8,
  B1, B2, B3, B4, B5, B6, B7, B8,
  H1, H2, H3, H4, H5, H6, H7, H8,
  T1, T2, T3, T4, T5, T6, T7, T8
];

const Hero = () => {
  const navigate = useNavigate();  // Correctly placed the hook here
  const [imageGrid, setImageGrid] = useState([]);

  useEffect(() => {
    // Shuffle images and create the initial grid
    let shuffledImages = shuffleArray(images);
    setImageGrid(chunkArray(shuffledImages, 8));

    const interval = setInterval(() => {
      setImageGrid((prevGrid) => {
        let newGrid = prevGrid.map(row => [...row]);

        let usedImages = new Set(newGrid.flat()); // Track already used images
        let availableImages = images.filter(img => !usedImages.has(img));

        if (availableImages.length === 0) return newGrid; // Prevent errors if all images are used

        // Select a random row and column
        const randomRow = Math.floor(Math.random() * 4);
        const randomCol = Math.floor(Math.random() * 8);

        // Replace the selected cell with a new unique image
        const newImage = availableImages[Math.floor(Math.random() * availableImages.length)];
        newGrid[randomRow][randomCol] = newImage;

        return newGrid;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Shuffle array function
  function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  // Chunk array into sub-arrays
  function chunkArray(array, chunkSize) {
    return Array.from({ length: Math.ceil(array.length / chunkSize) }, (_, i) =>
      array.slice(i * chunkSize, i * chunkSize + chunkSize)
    );
  }

  const handleClick = () => {
    navigate("/movies&shows"); // Corrected the route to '/movies&shows'
  };

  return (
    <div className="hero-container">
      {/* Background Grid */}
      <div className="grid-background">
        {imageGrid.map((row, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {row.map((src, colIndex) => (
              <div key={colIndex} className="image-container">
                <img src={src} alt={`Grid ${rowIndex}-${colIndex}`} className="grid-image" />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Semi-transparent overlay */}
      <div className="overlay"></div>

      {/* Centered content */}
      <div className="content">
        <h1 className="title">The Best Streaming Experience</h1>
        <p className="subtitle">
          StreamSphere is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamSphere, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.
        </p>
        <button className="cta-button" onClick={handleClick}>
          Start Watching Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
