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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57297.029496971685!2d7.065555461847617!3d50.717420436204556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bee19f7ccbda49%3A0x86dbf8c6685c9617!2sBonn%2C%20Almanya!5e0!3m2!1str!2spl!4v1649064616989!5m2!1str!2spl"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem icon={phone} text1={"+49 176 62798451"} title="Phone" />
          <ContactItem
            icon={email}
            text1={"bahadir0646@gmail.com"}
            title="Email"
          />
          <ContactItem
            icon={location}
            text1={"Bonn, Germany"}
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
    </div>
  );
}

export default ContactPage;
