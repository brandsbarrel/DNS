import "./Footer.css";

import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";

import { HiOutlineMail } from "react-icons/hi";
import { FiMap } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>Get In Touch!</h2>

        <div className="contact-item">
          <FaPhoneAlt className="icon" />
          <span>0407 460 010</span>
        </div>

        <div className="contact-item">
          <FiMap className="icon" />
          <span>
            U33-94/116 Culloden Rd, Marsfield NSW 2122
          </span>
        </div>

        <div className="contact-item">
          <HiOutlineMail className="icon" />
          <span>Send mail</span>
        </div>

        <div className="social-icons">

          <a href="/">
            <FaFacebookF />
          </a>

          <a href="/">
            <FaInstagram />
          </a>

          <a href="/">
            <FaPinterestP />
          </a>

          <a href="/">
            <FaLinkedinIn />
          </a>

        </div>

      </div>

    </footer>
  );
}