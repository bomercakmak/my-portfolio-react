import React from "react";
import about from "../img/about.jpg";
function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am <span>Bahadir Omer Cakmak</span>
        </h4>
        <p className="about-text">
          Web Developer with 2 years of experience. Focused on expanding
          knowledge and abilities in website design, programming and quality
          assurance. Computer Engineering student. Especially specialized in Web
          Technologies Engineering such as HTML5, CSS, Bootstrap, JavaScript,
          React, Redux, Firebase. Excellent communication and organizational
          abilities with resourceful approach to solving diverse problems.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Hobbies</p>
            <p>Address</p>
          </div>
          <div className="right-section">
            <p>: Bahadir Omer Cakmak</p>
            <p>: 21</p>
            <p>: Turkish</p>
            <p>: Turkish, English, German, Azerbaijani</p>
            <p>: Table Tennis, Play Chess, Hiking</p>
            <p>: Bonn Germany</p>
          </div>
        </div>
        <button className="button" >Download My CV</button>
      </div>
    </div>
  );
}

export default ImageSection;
