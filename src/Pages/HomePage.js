import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Typical from "react-typical";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span>
            <Typical
              loop={Infinity}
              steps={[
                "Bahadir Omer Cakmak",
                2000,
                "Full Stack Web Developer",
                2000,
                "Software Engineer",
                2000,
              ]}
            />
          </span>
        </h1>
        <p className="h-sub-text">
          I am a Full Stack Engineer with more than 3 years of experience. I
          frequently use popular web technologies including, but not limited to
          HTML5, CSS, Bootstrap, JavaScript, TypeScript, PHP, Node.js,
          Express.js, React, Redux, Next.js, MongoDB, Firebase.
        </p>
        <div className="icons">
          <a
            className="icon-holder"
            href="https://github.com/bomercakmak"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>
          <a
            className="icon-holder"
            href="https://www.linkedin.com/in/bahadir-omer-cakmak-4b4036204/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon lk" />
          </a>

          <a
            className="icon-holder"
            href="https://wa.me/+4917662798451"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="icon wh" />
          </a>
          <a
            className="icon-holder"
            href="https://www.facebook.com/profile.php?id=100007726066142"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
