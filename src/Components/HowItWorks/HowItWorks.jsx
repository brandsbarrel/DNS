import "./HowItWorks.css";
import { MapPin } from "lucide-react";
import how_img from "../../assets/how_img.jpeg";
import how_it_works from "../../assets/how_it_works.jpeg";
import { useLocation, useNavigate } from "react-router-dom";
import StatsSection from "../StatsSection/StatsSection";
import what_our_cus_say_home from "../../assets/what_our_cus_say.jpeg"
import what_our_cus_say_about from "../../assets/what_our_cus_say_about.jpeg"
import { Eye, ChevronRight } from "lucide-react";
import EasternS from "../../assets/EasternSububrs.jpeg";
import WesternS from "../../assets/WesternSuburbs.jpeg";
import NorthernB from "../../assets/NorthernBeaches.jpeg";
import NorthW from "../../assets/NorthWest.jpeg";


const areas = [
  {
    name: "Eastern suburbs",
    icon: EasternS,
    text: "Including Bondi, Randwick, Coogee and surrounding areas."
  },
  {
    name: "Western Suburbs",
    icon: WesternS,
    text: "Including Parramatta, Penrith, Blacktown and surrounding areas."
  },
  {
    name: "Northern Beaches",
    icon: NorthernB,
    text: "Including Manly, Dee Why, Mona Vale and surrounding areas."
  },
  {
    name: "North West",
    icon: NorthW,
    text: "Including Castle Hill, Rouse Hill, Kellyville and surrounding areas."
  }
];


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

      {location.pathname!=="/services"&&<StatsSection/>}

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

      <section className="works_steps2">
        <div className="areas_back">

          <div className="headingWrap">
            <span className="headingLine" />
            <h2>
              <span>AREAS</span> <br></br>WE SERVICE
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
                    `/suburb-details/${area.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`
                  );
                  handleClick();
                }}
              >

                {/* TOP ROW */}
                <div className="serviceCard__content__icon_text">
                  <div className="serviceIcon">
                    <img src={area.icon} alt={area.name} />
                  </div>
                  <div className="serviceContent">
                    <h3>{area.name}</h3>
                    <div className="redLine"></div>
                    <p>{area.text}</p>
                  </div>
                </div>

                {/* BOTTOM ROW */}
                <div className="serviceBtnWrap">
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