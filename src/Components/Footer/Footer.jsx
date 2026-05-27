import "./Footer.css";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
  FaChevronRight,
} from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="home_footer">

      {/* TOP CONTACT SECTION */}
      <div className="home_footerTop">

        <div className="home_footerTopLine"></div>

        <h2>Get In Touch!</h2>

        <div className="home_footerTopLine"></div>

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

        </div>

      </div>

      {/* MIDDLE SECTION */}
      <div className="home_footerMiddle">

        {/* QUICK LINKS */}
        <div className="home_footerBox home_linksBox">
          <h3>Quick Links</h3>
          <div className="home_smallLine"></div>
          <ul>
            <li><FaChevronRight /><a href="/">Home</a></li>
            <li><FaChevronRight /><a href="/">About Company</a></li>
            <li><FaChevronRight /><a href="/">Services</a></li>
            <li><FaChevronRight /><a href="/">Gallery</a></li>
            <li><FaChevronRight /><a href="/">Testimonials</a></li>
            <li><FaChevronRight /><a href="/">Contact Us</a></li>
          </ul>
        </div>

        {/* FOLLOW US */}
        <div className="home_footerBox">
          <h3>Follow Us</h3>
          <div className="home_smallLine"></div>
          <div className="home_socialIcons">
            <a href="/"><FaFacebookF /></a>
            <a href="/"><FaInstagram /></a>
            <a href="/"><FaPinterestP /></a>
            <a href="/"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="home_footerBottom">
        <p>© 2026 SNG Maintenance. All rights reserved.</p>
        <div className="home_bottomLinks">
          <span>Reliable</span>
          <span>Professional</span>
          <span>Exceptional Results</span>
        </div>
      </div>

    </footer>
  );
}