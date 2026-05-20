import "./HowItWorks.css";
import { MapPin } from "lucide-react";
import how_img from "../../assets/how_img.jpeg";
import how_it_works from "../../assets/how_it_works.jpeg";
import { useNavigate } from "react-router-dom";

const areas = [
  "Ryde",
  "Meadowbank",
  "Gladesville",
  "Parramatta",
  "Inner West",
  "Hills District",
  "Northern Suburbs",
];


const handleClick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
};

export default function HowItWorks() {
  const navigate = useNavigate();

  return (
    <>
      <section className="works_steps1">
        <img className="how_it_works_img" src={how_it_works} alt="How it works" />
        <button className="How_quote_btn how__btn--full">GET A FREE QUOTE</button>
      </section>

      <section className="how-img">
        <img src={how_img} alt="Our work" />
      </section>

      <section className="works_steps2">
        <div className="areas_back">
          <div className="headingWrap">
            <span className="headingLine" />
            <h2><span>AREAS</span> WE SERVICE</h2>
            <span className="headingLine" />
          </div>

          <p className="subheading">
            Proudly servicing Sydney and surrounding suburbs.
          </p>

          <div className="areaGrid">
            {areas.map((area, index) => (
              <div className="areaTag" onClick={() => { navigate("/suburb-details"), handleClick() }} key={index}>
                <MapPin size={20} />
                <span className="vertical" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}