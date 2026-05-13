import { useEffect, useRef, useState } from "react";
import "./InfoSection.css";
import prm from "../../assets/prm.jpeg"
import mowing from "../../assets/mowing.jpeg"
import sfl from "../../assets/sfl.jpeg"
import sgm from "../../assets/sgm.jpeg"
import pressure_cleaning from "../../assets/pressure-cleaning.jpeg"
import fertilising from "../../assets/fertilising.jpeg"
import irrigation from "../../assets/irrigation.jpeg"
import barkBlowing from "../../assets/bark-blowing.jpeg"
import spary_t from "../../assets/sprat-treatment.jpeg"



const services = [
  {
    name: "Property Maintenance",
    icon: <img className="icon-image" src={prm} alt="" />,
  },
  {
    name: "Mowing",
    icon:<img className="icon-image" src={mowing} alt="" />,
  },
  {
    name: "Soft Fall Landscaping",
    icon:<img className="icon-image" src={sfl}alt="" />
  },
  {
    name: "Strata Garden Maintenance",
    icon: <img className="icon-image" src={sgm} alt="" />,
  },
  {
    name: "Pressure Cleaning",
    icon: <img className="icon-image" src={pressure_cleaning} alt="" />,
  },
  {
    name: "Fertilising",
    icon:<img className="icon-image" src={fertilising} alt="" />,
  },
  {
    name: "Irrigation",
    icon: <img className="icon-image" src={irrigation} alt="" />,
  },
  {
    name: "Bark Blowing",
    icon:<img className="icon-image" src={barkBlowing} alt="" />,
  },
  {
    name: "Spray Treatments",
    icon: <img className="icon-image" src={spary_t} alt="" />,
  },
];

export default function InfoSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <section ref={ref} className={`info ${visible ? "show" : ""}`}>
      <div className="info__container">
        <h2 className="info__heading">
          Our company provides the following services:
        </h2>
        <div className="info__grid">
          {services.map((service, i) => (
            <div
              className="info__card"
              key={service.name}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="info__icon">{service.icon}</div>
              <p className="info__name">{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}