import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Title from "../Components/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
function ContactPage() {
  return (
    <div>
      <div className="title">
        <Title title={"Contact"} span={"Contact"} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.3543850417!2d20.921112620236702!3d52.23306532087844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sVar%C5%9Fova%2C%20Polonya!5e0!3m2!1str!2sde!4v1631288236562!5m2!1str!2sde"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem icon={phone} text1={"+48 517 220 852"} title="Phone" />
          <ContactItem
            icon={email}
            text1={"bahadir0646@gmail.com"}
            title="Email"
          />
          <ContactItem
            icon={location}
            text1={"Warsaw, Poland"}
            title="Address"
          />
        </div>
      </div>
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
          href="https://wa.me/+48517220852"
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
    </div>
  );
}

export default ContactPage;
