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
          I am a web developer with 2 years of experience. I am focused on
          expanding my knowledge and abilities in website design, programming
          and quality assurance. Computer Engineering student. Specialized in
          Web Technologies Engineering such as HTML5, CSS3, Bootstrap,
          JavaScript, Node.js, React, Redux, Next.js, Firebase. Excellent
          communication and organizational abilities with resourceful approach
          to solving diverse problems.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name: Bahadir Omer Cakmak</p>
            <p>Age: 21</p>
            <p>Nationality: Turkish</p>
            <p>Languages: Turkish, English, German, Azerbaijani</p>
            <p>Hobbies: Table Tennis, Play Chess, Hiking</p>
            <p>Address: Bonn, Germany</p>
          </div>
          {/* <div className="right-section">
            <p>: Bahadir Omer Cakmak</p>
            <p>: 21</p>
            <p>: Turkish</p>
            <p>: Turkish, English, German, Azerbaijani</p>
            <p>: Table Tennis, Play Chess, Hiking</p>
            <p>: Bonn Germany</p>
          </div> */}
        </div>
        <a href={cv} download="CV-Bahadir-Omer-Cakmak">
          <button className="button">Download My CV</button>
        </a>
      </div>
    </div>
  );
}

export default ImageSection;
