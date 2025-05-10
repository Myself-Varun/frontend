import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import varunImage from "../assets/profiles.png";
import "../stylesheet/teama.css";

const teamMembers = [
  {
    name: "Varun",
    role: "Full Stack Developer",
    description: "Built the core architecture of StreamSphere using React and Spring Boot.",
    image: varunImage,
  },
  {
    name: "Alice",
    role: "UI/UX Designer",
    description: "Designed a seamless and user-friendly experience for the platform.",
    image: "/images/alice.jpg",
  },
  {
    name: "Bob",
    role: "Backend Developer",
    description: "Developed APIs and optimized video streaming performance.",
    image: "/images/bob.jpg",
  },
  {
    name: "Charlie",
    role: "Machine Learning Engineer",
    description: "Implemented AI-driven recommendations for video content.",
    image: "/images/charlie.jpg",
  },
];

const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="team">
      <h2 className="team__title">Meet Our Team</h2>
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} className="team__slide">
            <img src={member.image} alt={member.name} className="team__image" />
            <h3 className="team__name">{member.name}</h3>
            <p className="team__role">{member.role}</p>
            <p className="team__description">{member.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Team;
