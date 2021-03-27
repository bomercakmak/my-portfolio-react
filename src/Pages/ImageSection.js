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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          arcu et finibus bibendum. Maecenas scelerisque varius sodales. Morbi
          dapibus ultricies velit, eu scelerisque nisi molestie eget.
        </p>
        <div className="about-details">
         
        </div>
      </div>
    </div>
  );
}

export default ImageSection;
