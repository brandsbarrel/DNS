import "./Footer.css";
import home_footerLogo from "../../assets/SNG_red.png"
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
  FaGlobe,
  FaChevronRight,
} from "react-icons/fa";

import { HiOutlineMail } from "react-icons/hi";
import { FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="home_footer">

      {/* TOP CONTACT SECTION */}

      <div className="home_footerTop">

        <h2>Get In Touch!</h2>

        <div className="home_footerLine"></div>

        <p>
          We’re here to help with all your maintenance needs.
        </p>

        <div className="home_contactWrap">

          <div className="home_contactCard">

            <div className="home_contactIcon">
              <FaPhoneAlt />
            </div>

            <div className="home_contactInfo">
              <h3>Call Us</h3>
              <span>0407 460 010</span>
            </div>

          </div>

          <div className="home_contactDivider"></div>

          <div className="home_contactCard">

            <div className="home_contactIcon">
              <FiMapPin />
            </div>

            <div className="home_contactInfo">
              <h3>Our Location</h3>
              <span>
                U33-94/116 Culloden Rd,
                <br />
                Marsfield NSW 2122
              </span>
            </div>

          </div>

          <div className="home_contactDivider"></div>

          <div className="home_contactCard">

            <div className="home_contactIcon">
              <HiOutlineMail />
            </div>

            <div className="home_contactInfo">
              <h3>Email Us</h3>
              <span>Send mail</span>
            </div>

          </div>

        </div>

      </div>

      {/* MIDDLE SECTION */}

      <div className="home_footerMiddle">

        {/* LEFT */}

        <div className="home_footerBox">

          <img
            src={home_footerLogo}
            alt="logo"
            className="home_footerLogo"
          />

          <p>
            Proudly servicing homes and
            businesses across Sydney.
          </p>

          <p>
            Reliable. Professional.
            Exceptional results.
          </p>

        </div>

        {/* CENTER */}

        <div className="home_footerBox home_linksBox">

          <h3>Quick Links</h3>

          <div className="home_smallLine"></div>

          <ul>

            <li>
              <FaChevronRight />
              <a href="/">Home</a>
            </li>

            <li>
              <FaChevronRight />
              <a href="/">About Company</a>
            </li>

            <li>
              <FaChevronRight />
              <a href="/">Services</a>
            </li>

            <li>
              <FaChevronRight />
              <a href="/">Gallery</a>
            </li>

            <li>
              <FaChevronRight />
              <a href="/">Testimonials</a>
            </li>

            <li>
              <FaChevronRight />
              <a href="/">Contact Us</a>
            </li>

          </ul>

        </div>

        {/* RIGHT */}

        <div className="home_footerBox">

          <h3>Follow Us</h3>

          <div className="home_smallLine"></div>

          <div className="home_socialIcons">

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

          <div className="home_domainBox">

            <FaGlobe />

            <span>dns-cjqy.onrender.com</span>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="home_footerBottom">

        <p>
          © 2026 SNG Maintenance. All rights reserved.
        </p>

        <div className="home_bottomLinks">

          <span>Reliable</span>

          <span>Professional</span>

          <span>Exceptional Results</span>

        </div>

      </div>

    </footer>
  );
}