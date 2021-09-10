import React from "react";
import about from "../img/about.jpg";
import cv from "../cv/CV.pdf";
function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          Hi, I am <span>Bahadir Omer Cakmak</span>
        </h4>
        <p className="about-text">
          Innovation and problem solving has always been a great passion of
          mine, since my childhood. As I was growing up, the technology
          surrounding me was fascinating. This fascination ignited the spark and
          I became enthusiastic with coding from an early age. Software
          Engineering was a never-ending puzzle that I was passionately engaged
          in solving. Writing innovative code to solve my daily problems,
          automating stuff, and creating value become an obsession that I
          started to accept, and love. I believe in the power of programming to
          transform and improve the lives of people around the world.
        </p>
        <p className="about-text">
          I was looking for a place to sharpen my programming skills, build a
          theoretical background for practical purposes, and get involved in the
          programming community. The strong faith that I had in programming led
          me to pursue a degree in computer engineering. While doing so, I have
          acquired a good understanding of various programming languages, web
          technologies, higher mathematics, and algorithms.
        </p>
        <p className="about-text">
          In order to practice and reinforce my theoretical knowledge, I got
          involved with fruitful internships in various countries and cultures.
          These internships have enabled me to strengthen my web development
          skills and opened up my horizon. I spent most of my summer time
          improving myself while enjoying accompany of senior engineers and
          developers through internships. Additionally, contributing to open
          source projects across the world made me gain invaluable experience.
        </p>
        <p className="about-text">
          Today, with more than 3 years of professional experience, I create
          beautiful, interactive, efficient and innovative web applications in a
          timely manner.
        </p>
        {/* <div className="about-details">
          <div className="left-section">
            <p>Full Name: Bahadir Omer Cakmak</p>
            <p>Age: 21</p>
            <p>Nationality: Turkish</p>
            <p>Languages: Turkish, English, German, Azerbaijani</p>
            <p>Hobbies: Table Tennis, Play Chess, Hiking</p>
            <p>Address: Bonn, Germany</p>
          </div>
        </div> */}
        <a href={cv} download="CV-Bahadir-Omer-Cakmak">
          <button className="button">Download My CV</button>
        </a>
      </div>
    </div>
  );
}

export default ImageSection;
