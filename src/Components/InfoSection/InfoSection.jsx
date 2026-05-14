import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import Property_Maintenance_Second from "../../assets/Property_Maintenance_Second.jpeg"
import mowing_Second from "../../assets/mowing_Second.jpeg"

const services = [
  {
    name: "Property Maintenance",
    icon: <img className="icon-image" src={prm} alt="" />,
    img: Property_Maintenance_Second,
    slug: "property-maintenance",
  },
  {
    name: "Mowing",
    icon: <img className="icon-image" src={mowing} alt="" />,
    img: mowing_Second,
    slug: "mowing",
  },
  {
    name: "Soft Fall Landscaping",
    icon: <img className="icon-image" src={sfl} alt="" />,
    slug: "soft-fall-landscaping",
  },
  {
    name: "Strata Garden Maintenance",
    icon: <img className="icon-image" src={sgm} alt="" />,
    slug: "strata-garden-maintenance",
  },
  {
    name: "Pressure Cleaning",
    icon: <img className="icon-image" src={pressure_cleaning} alt="" />,
    slug: "pressure-cleaning",
  },
  {
    name: "Fertilising",
    icon: <img className="icon-image" src={fertilising} alt="" />,
    slug: "fertilising",
  },
  {
    name: "Irrigation",
    icon: <img className="icon-image" src={irrigation} alt="" />,
    slug: "irrigation",
  },
  {
    name: "Bark Blowing",
    icon: <img className="icon-image" src={barkBlowing} alt="" />,
    slug: "bark-blowing",
  },
  {
    name: "Spray Treatments",
    icon: <img className="icon-image" src={spary_t} alt="" />,
    slug: "spray-treatments",
  },
];

export default function InfoSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

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
            <div className="info_cards" key={service.name}>
              <div
                className="info__card"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <div className="info__icon">{service.icon}</div>
                <p className="info__name">{service.name}</p>
              </div>

              {service.img && (
                <div className="service-image">
                  <img src={service.img} alt={service.name} />
                </div>
              )}

              <button
                className="service-arrow-btn"
                onClick={() => navigate(`/services/${service.slug}`)}
                aria-label={`View ${service.name} details`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}