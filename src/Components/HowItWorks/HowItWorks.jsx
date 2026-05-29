import "./HowItWorks.css";
import { MapPin } from "lucide-react";
import how_img from "../../assets/how_img.jpeg";
import how_it_works from "../../assets/how_it_works.jpeg";
import { useLocation, useNavigate } from "react-router-dom";
import StatsSection from "../StatsSection/StatsSection";
import what_our_cus_say_home from "../../assets/what_our_cus_say.jpeg"
import what_our_cus_say_about from "../../assets/what_our_cus_say_about.jpeg"
import { Eye, ChevronRight } from "lucide-react";



const handleClick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

export default function HowItWorks() {
  const navigate = useNavigate();
  const location = useLocation();

  const isAbout = location.pathname === "/about-company";

  return (
    <>

      {/* How It Works image — sirf Home par */}
      {!isAbout && (
        <section className="works_steps1">
          <img className="how_it_works_img" src={how_it_works} alt="How it works" />
          <button className="How_quote_btn how__btn--full">Contact Us</button>
        </section>
      )}

      {/* We Love What We Do image */}
      {location.pathname!="/services"&&
      <section className="how-img">
        <img src={how_img} alt="Our work" />

        {/* Button — sirf About Company par */}
        {isAbout && (
          <button
            className="How_quote_btn how__btn--full"
            onClick={() => {
              navigate("/contact-us");
              handleClick();
            }}
          >
            Contact Us
          </button>
        )}
      </section>}

      {!["/services", "/about-company"].includes(location.pathname) && <StatsSection />}

        {location.pathname!=="/services"&&
      <section className="home_what_our_cus_say">
        
        {location.pathname === "/" && (
          <img className="how_it_works_img" src={what_our_cus_say_home} />
        )}
        {isAbout && (
          <img className="how_it_works_img" src={what_our_cus_say_about} />
        )}
        <button className="How_quote_btn how__btn--full">
          Read More Testimonials
        </button>
      </section>}

    </>
  );
}