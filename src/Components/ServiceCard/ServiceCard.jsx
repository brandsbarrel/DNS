import { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./ServiceCard.css";
import prm from "../../assets/prm.jpeg";
import mowing from "../../assets/mowing.jpeg";
import sfl from "../../assets/sfl.jpeg";
import sgm from "../../assets/sgm.jpeg";
import pressure_cleaning from "../../assets/pressure-cleaning.jpeg";
import fertilising from "../../assets/fertilising.jpeg";
import irrigation from "../../assets/irrigation.jpeg";
import barkBlowing from "../../assets/bark-blowing.jpeg";
import spary_t from "../../assets/sprat-treatment.jpeg";
import Hero_image_s from "../../assets/Hero_image_s.jpeg";
import { UserContext } from "../../context/UserContext";
import turf_management from "../../assets/turfManagement.jpeg"

const services = [
  {
    name: "Property Maintenance",
    icon: <img className="icon-image" src={prm} alt="" />,
    slug: "property-maintenance",
    desc: "We keep your property in top condition with quality and care.",

    points: ["Garden & Landscape maintenance", "General repair", "Lawn mowing & edging"],
  },
  {
    name: "Mowing",
    icon: <img className="icon-image" src={mowing} alt="" />,
    slug: "mowing",
    desc: "Keep your lawn neat, healthy, and always looking its best.",
    points: ["Lawn mowing", "Edge trimming", "Weed control"],
  },
  {
    name: "Turf Management",
    icon: <img className="icon-image" src={turf_management} alt="" />,
    slug: "turf-management",
    desc: "Professional Turf Care & Solutions",
    points: ["Turf fertilising and treatment", "Lawn repair and patch improvement", "Seasonal turf maintenance"],
  },
  {
    name: "Soft Fall Landscaping",
    icon: <img className="icon-image" src={sfl} alt="" />,
    slug: "soft-fall-landscaping",
    desc: "Safe, durable, and attractive soft fall solutions for play areas.",

    points: ["Playground mulch installation", "Custom landscaping solutions", "Safe and compliant materials"],
  },
  {
    name: "Strata Garden Maintenance",
    icon: <img className="icon-image" src={sgm} alt="" />,
    slug: "strata-garden-maintenance",
    desc: "We maintain common areas to keep your strata gardens clean and welcoming.",
    points: ["Garden maintenance", "Plant health & pruning", "Seasonal clean-ups"],
  },
  {
    name: "Pressure Cleaning",
    icon: <img className="icon-image" src={pressure_cleaning} alt="" />,
    slug: "pressure-cleaning",
    desc: "High-pressure cleaning that removes dirt, grime, and buildup.",
    points: ["Driveways & pathways", "Patios & courtyards", "Exterior surfaces"],
  },
  {
    name: "Fertilising",
    icon: <img className="icon-image" src={fertilising} alt="" />,
    slug: "fertilising",
    desc: "Nourishing your lawn and plants for stronger, greener growth.",
    points: ["Lawn fertilisation", "Organic & synthetic options", "Promotes healthy growth"],
  },
  {
    name: "Irrigation",
    icon: <img className="icon-image" src={irrigation} alt="" />,
    slug: "irrigation",
    desc: "Efficient watering solutions to keep your landscape hydrated.",
    points: ["Sprinkler system installation", "Drip irrigation systems", "System maintenance & repairs"],
  },
  {
    name: "Bark Blowing",
    icon: <img className="icon-image" src={barkBlowing} alt="" />,
    slug: "bark-blowing",
    desc: "Evenly spread bark to enhance the look and health of your garden beds.",
    points: ["Bark delivery & spreading", "Garden bed preparation", "Neat, even coverage"],
  },
  {
    name: "Spray Treatments",
    icon: <img className="icon-image" src={spary_t} alt="" />,
    slug: "spray-treatments",
    desc: "Targeted spray solutions to protect and maintain your outdoor spaces.",
    points: ["Weed spray treatments", "Pest & disease control", "Safe & effective products"],
  },
];

/* Green filled checkmark — matches image exactly */
function GreenCheck() {
  return (
    <svg
      className="ServiceCard__check"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
               10-4.48 10-10S17.52 2 12 2zm-2 14.5
               l-4.5-4.5 1.41-1.41L10 13.67l7.09-7.09
               1.41 1.41L10 16.5z" />
    </svg>
  );
}

export default function ServiceCard() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

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
    <section ref={ref} className={`ServiceCard ${visible ? "show" : ""}`}>
      <div className="ServiceCard__container">

        {/* ── Heading ── */}
        <div className="ServiceCard__header">
          <div className="ServiceCard__header-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </div>
          <h2 className="ServiceCard__heading">
            SNG Maintenance provides the following{" "}
            <span className="ServiceCard__heading--red">services:</span>
          </h2>
          <p className="ServiceCard__subheading">Reliable. Professional. Always here for you.</p>
        </div>

        {/* ── Cards ── */}
        <div className="ServiceCard__grid">
          {services.map((service, i) => (
            <div
              className="ServiceCard__card"
              key={service.name}
              style={{ transitionDelay: `${i * 0.07}s` }}
              onClick={() => navigate(`/services/${service.slug}`)}
            >
              {/* Left: circular icon on sage-green background */}
              <div className="ServiceCard__icon-wrap">
                <div className="ServiceCard__icon">
                  {service.icon}
                </div>
              </div>

              {/* Right: content */}
              <div className="ServiceCard__body">
                <div className="ServiceCard__dots-grid" />
                {/* Name with red underline */}
                <h3 className="ServiceCard__name">{service.name}</h3>
                <p className="ServiceCard__desc">{service.desc}</p>
                <ul className="ServiceCard__points">
                  {service.points.map((pt) => (
                    <li key={pt}>
                      <GreenCheck />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hero__middle-image">
        <div className="home_beforeAfter">

          <p className="home_smallTitle">
            QUALITY WORK
          </p>

          <h2>
            BEFORE & AFTER
          </h2>

          <div className="home_line"></div>

        </div>
        <img src={Hero_image_s} alt="Service highlight" />
      </div>
    </section>
  );
}
