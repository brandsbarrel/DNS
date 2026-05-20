import "./HowItWorks.css";
import { MapPin } from "lucide-react";
import how_img from "../../assets/how_img.jpeg";
import how_it_works from "../../assets/how_it_works.jpeg";

const areas = [
  "Ryde",
  "Meadowbank",
  "Gladesville",
  "Parramatta",
  "Inner West",
  "Hills District",
  "Northern Suburbs",
];

export default function HowItWorks() {
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
              <div className="areaTag" key={index}>
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