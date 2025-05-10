import React from "react";
import "../stylesheet/abouta.css";

const About = () => {
  return (
    <div className="about">
      <h1 className="about__title">About StreamSphere</h1>
      
      <section className="about__section">
        <h2 className="about__subtitle">Project Journey</h2>
        <p className="about__text">
          StreamSphere was born out of the need for a seamless and interactive video streaming platform. Our goal was to create a space where users could not only watch high-quality videos but also engage in real-time collaborative viewing experiences. We started by researching scalable backend solutions and efficient video encoding techniques.
        </p>
        <p className="about__text">
          As we progressed, we built a robust authentication system using Spring Boot and MySQL to ensure secure access control. The frontend was crafted with React to provide a responsive and user-friendly experience. Key features such as video categorization, top-rated content filtering, and watch-party functionality were integrated to enhance engagement and usability.
        </p>
      </section>
      
      <section className="about__section">
        <h2 className="about__subtitle">Challenges We Faced</h2>
        <ul className="about__list">
          <li>Optimizing video streaming to ensure minimal buffering and high-quality playback.</li>
          <li>Implementing secure user authentication with Spring Boot and MySQL.</li>
          <li>Managing large-scale video uploads and storage efficiently.</li>
          <li>Developing a real-time watch-party feature with synchronized playback.</li>
          <li>Ensuring seamless UI/UX while balancing performance and scalability.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
