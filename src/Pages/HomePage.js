import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Bahadir Omer Cakmak</span>
        </h1>
        <p className="h-sub-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          arcu et finibus bibendum. Maecenas scelerisque varius sodales. Morbi
          dapibus ultricies velit, eu scelerisque nisi molestie eget. Vestibulum
          ante ipsum.
        </p>
        <div className="icons">
          <a className="icon-holder" href="https://github.com/bomercakmak" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="icon gh"/>
          </a>
          <a className="icon-holder" href="https://www.linkedin.com/in/bahadir-omer-cakmak-4b4036204/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="icon lk"/>
          </a>
          <Link className="icon-holder" href="https://wa.me/+48517220852" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} className="icon wh"/>
          </Link>
          <Link className="icon-holder" href="https://www.facebook.com/profile.php?id=100007726066142" target="_blank">
            <FontAwesomeIcon icon={faFacebook} className="icon fb"/>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
