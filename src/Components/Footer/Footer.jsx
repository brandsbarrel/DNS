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
import footerImg from "../../assets/Footer_image.jpeg";
import { Link } from "react-router-dom";


const handleClick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

export default function Footer() {
  return (
    <footer className="home_footer">

      {/* TOP CONTACT SECTION */}
      <div className="home_footerTop">

        <div className="home_footerTopLine"></div>

        <h2>Get In Touch!</h2>

        <div className="home_contactWrap">

          {/* CALL US — no frame */}
          <div className="home_contactCard home_contactCard--plain">
            <div className="home_contactIcon">
              <FaPhoneAlt />
            </div>
            <div className="home_contactInfo">
              <h3>Looking for Consultation.
                <br />Call Us.</h3>
              <span><a href="tel:0407460010">0407 460 010</a></span>
            </div>
          </div>

          {/* OUR LOCATION — no frame */}
          <div className="home_contactCard home_contactCard--plain">
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
            <li><FaChevronRight /><Link onClick={() => { handleClick() }} to="/">Home</Link></li>
            <li><FaChevronRight /><Link onClick={() => { handleClick() }} to="/about-company">About Company</Link></li>
            <li><FaChevronRight /><Link onClick={() => { handleClick() }} to="/services">Services</Link></li>
            <li><FaChevronRight /><Link onClick={() => { handleClick() }} to="/gallery">Gallery</Link></li>
            <li><FaChevronRight /><Link onClick={() => { handleClick() }} to="/testimonials">Testimonials</Link></li>
            <li><FaChevronRight /><Link onClick={() => { handleClick() }} to="/contact-us">Contact Us</Link></li>
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