import { useState, useEffect } from "react";
import "../stylesheets/Hero.css"; 

// Importing images
import K1 from "../assets/K1.jpeg";
import K2 from "../assets/K2.jpeg";
import K3 from "../assets/K3.jpeg";
import K4 from "../assets/K4.jpeg";
import K5 from "../assets/K5.jpeg";
import K6 from "../assets/K6.jpeg";
import K7 from "../assets/K7.jpeg";
import K8 from "../assets/K8.jpeg";

import H1 from "../assets/H1.jpeg";
import H2 from "../assets/H2.jpeg";
import H3 from "../assets/H3.jpeg";
import H4 from "../assets/H4.jpeg";
import H5 from "../assets/H5.jpeg";
import H6 from "../assets/H6.jpeg";
import H7 from "../assets/H7.jpeg";
import H8 from "../assets/H8.jpeg";

import B1 from "../assets/B1.jpeg";
import B2 from "../assets/B2.jpeg";
import B3 from "../assets/B3.jpeg";
import B4 from "../assets/B4.jpeg";
import B5 from "../assets/B5.jpeg";
import B6 from "../assets/B6.jpeg";
import B7 from "../assets/B7.jpeg";
import B8 from "../assets/B8.jpeg";

import T1 from "../assets/T1.jpeg";
import T2 from "../assets/T2.jpeg";
import T3 from "../assets/T3.jpeg";
import T4 from "../assets/T4.jpeg";
import T5 from "../assets/T5.jpeg";
import T6 from "../assets/T6.jpeg";
import T7 from "../assets/T7.jpeg";
import T8 from "../assets/T8.jpeg";

// Array of images
const allImages = [
  K1, K2, K3, K4, K5, K6, K7, K8,
  H1, H2, H3, H4, H5, H6, H7, H8,
  B1, B2, B3, B4, B5, B6, B7, B8,
  T1, T2, T3, T4, T5, T6, T7, T8
];

const ROWS = 4;
const COLUMNS = 8;

export default function Hero() {
  const [grid, setGrid] = useState([]);

  // Initialize the grid with random images
  useEffect(() => {
    let initialGrid = [];
    let shuffledImages = [...allImages].sort(() => Math.random() - 0.5);
    for (let row = 0; row < ROWS; row++) {
      initialGrid[row] = [];
      for (let col = 0; col < COLUMNS; col++) {
        initialGrid[row][col] = shuffledImages.pop();
      }
    }
    setGrid(initialGrid);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGrid((prevGrid) => {
        let newGrid = prevGrid.map(row => [...row]); // Clone grid
        
        // Pick two random positions
        let row1 = Math.floor(Math.random() * ROWS);
        let col1 = Math.floor(Math.random() * COLUMNS);
        let row2, col2;

        do {
          row2 = Math.floor(Math.random() * ROWS);
          col2 = Math.floor(Math.random() * COLUMNS);
        } while (row1 === row2 && col1 === col2); // Ensure different positions

        // Swap images
        let temp = newGrid[row1][col1];
        newGrid[row1][col1] = newGrid[row2][col2];
        newGrid[row2][col2] = temp;

        return newGrid;
      });
    }, 2000); // Slower swap every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      {/* Slideshow container */}
      <div className="slideshow">
        {grid.flat().map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index + 1}`} className="slide move-animation" />
        ))}
      </div>

      {/* Semi-transparent overlay */}
      <div className="overlay"></div>

      {/* Centered content */}
      <div className="content">
        {/* Logo */}
        <img src="/logo.png" alt="StreamSphere Logo" className="logo" />

        {/* Text */}
        <h1 className="title">The Best Streaming Experience</h1>
        <p className="subtitle">
          StreamSphere is your ultimate destination for watching your favorite 
          movies and shows on demand, anytime, anywhere. Enjoy a vast selection 
          of content, from the latest blockbusters to classic hits and popular 
          TV shows. Create personalized watchlists and experience entertainment 
          like never before.
        </p>

        {/* Call-to-Action Button */}
        <button className="cta-button">Start Watching Now</button>
      </div>
    </div>
  );
}
