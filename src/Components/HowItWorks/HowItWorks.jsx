import "./HowItWorks.css";
import { MapPin } from "lucide-react";
import how_img from "../../assets/how_img.jpeg";
import how_it_works from "../../assets/how_it_works.jpeg";
import { useLocation, useNavigate } from "react-router-dom";
import StatsSection from "../StatsSection/StatsSection";
import what_our_cus_say_home from "../../assets/what_our_cus_say.jpeg"
import what_our_cus_say_about from "../../assets/what_our_cus_say_about.jpeg"
import {Eye, ChevronRight } from "lucide-react";



const areas = [
  "Eastern suburbs", "Western Suburbs", "Northern Beaches", "North West"
];


const handleClick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
};

export default function HowItWorks() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <section className="works_steps1">
        <img className="how_it_works_img" src={how_it_works} alt="How it works" />
        <button className="How_quote_btn how__btn--full">GET A FREE QUOTE</button>
      </section>

      <section className="how-img">

        <img src={how_img} alt="Our work" />
      </section>
      <StatsSection />
      <section className="home_what_our_cus_say" >
        {location.pathname === "/" && <img className="how_it_works_img" src={what_our_cus_say_home} />}
        {location.pathname === "/about-company" && <img className="how_it_works_img" src={what_our_cus_say_about} />}
        <button className="How_quote_btn how__btn--full">Read More Testimonials</button>
      </section>
      <section className="works_steps2">
        <div className="areas_back">

          <div className="headingWrap">
            <span className="headingLine" />

            <h2>
              <span>AREAS</span> WE SERVICE
            </h2>

            <span className="headingLine" />
          </div>

          <p className="subheading">
            Proudly servicing Sydney and surrounding suburbs.
          </p>

          <div className="serviceGrid">
            {areas.map((area, index) => (
              <div
                className="serviceCard"
                key={index}
                onClick={() => {
                  navigate(
                    `/suburb-details/${area
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`
                  );

                  handleClick();
                }}
              >
                <div className="serviceIcon">
                  <MapPin />
                </div>

                <div className="serviceContent">
                  <h3>{area}</h3>

                  <div className="redLine"></div>

                  <p>
                    Including nearby suburbs and surrounding areas.
                  </p>

                  <button className="seeMoreBtn">
                    <Eye size={18} />

                    <span>SEE MORE</span>

                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}