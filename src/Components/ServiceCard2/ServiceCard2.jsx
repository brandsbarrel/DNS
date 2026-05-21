import { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./ServiceCard2.css";
import prm from "../../assets/prm.jpeg";
import mowing from "../../assets/mowing.jpeg";
import sfl from "../../assets/sfl.jpeg";
import sgm from "../../assets/sgm.jpeg";
import pressure_cleaning from "../../assets/pressure-cleaning.jpeg";
import fertilising from "../../assets/fertilising.jpeg";
import irrigation from "../../assets/irrigation.jpeg";
import barkBlowing from "../../assets/bark-blowing.jpeg";
import spary_t from "../../assets/sprat-treatment.jpeg";
import { UserContext } from "../../context/UserContext";

import blowing_Second from "../../assets/blowing_Second.jpeg";
import Fartilising_Second from "../../assets/Fartilising_Second.jpeg";
import irrigation_Second from "../../assets/irrigation_Second.jpeg";
import mowing_Second from "../../assets/mowing_Second.jpeg";
import pressure_cleaning1 from "../../assets/pressure_cleaning1.jpeg";
import Property_Maintenance_Second from "../../assets/Property_Maintenance_Second.jpeg";
import Soft_Fall_Landscaping from "../../assets/Soft_Fall_Landscaping.jpeg";
import spray_treatments_second from "../../assets/spray_treatments_second.jpeg";
import strata_garden_maintenance from "../../assets/strata_garden_maintenance.jpeg";

// ── Banner image ──
import serviceBanner from "../../assets/ServiceBanner.jpeg";

const services = [
    {
        name: "Property Maintenance",
        icon: <img className="sc2-icon-image" src={prm} alt="Property Maintenance" />,
        image: Property_Maintenance_Second,
        slug: "property-maintenance",
        desc: "We keep your property in top condition with quality and care.",
        points: ["General repairs & maintenance", "Painting & finishing", "Plumbing & electrical work"],
    },
    {
        name: "Mowing",
        icon: <img className="sc2-icon-image" src={mowing} alt="Mowing" />,
        image: mowing_Second,
        slug: "mowing",
        desc: "Keep your lawn neat, healthy, and always looking its best.",
        points: ["Lawn mowing", "Edge trimming", "Weed control"],
    },
    {
        name: "Soft Fall Landscaping",
        icon: <img className="sc2-icon-image" src={sfl} alt="Soft Fall Landscaping" />,
        image: Soft_Fall_Landscaping,
        slug: "soft-fall-landscaping",
        desc: "Safe, durable, and attractive soft fall solutions for play areas.",
        points: ["Playground mulch installation", "Rubber bark & wood chips", "Safe and compliant materials"],
    },
    {
        name: "Strata Garden Maintenance",
        icon: <img className="sc2-icon-image" src={sgm} alt="Strata Garden Maintenance" />,
        image: strata_garden_maintenance,
        slug: "strata-garden-maintenance",
        desc: "We maintain common areas to keep your strata gardens clean and welcoming.",
        points: ["Garden maintenance", "Plant health & pruning", "Seasonal clean-ups"],
    },
    {
        name: "Pressure Cleaning",
        icon: <img className="sc2-icon-image" src={pressure_cleaning} alt="Pressure Cleaning" />,
        image: pressure_cleaning1,
        slug: "pressure-cleaning",
        desc: "High-pressure cleaning that removes dirt, grime, and buildup.",
        points: ["Driveways & pathways", "Patios & courtyards", "Exterior surfaces"],
    },
    {
        name: "Fertilising",
        icon: <img className="sc2-icon-image" src={fertilising} alt="Fertilising" />,
        image: Fartilising_Second,
        slug: "fertilising",
        desc: "Nourishing your lawn and plants for stronger, greener growth.",
        points: ["Lawn fertilisation", "Organic & synthetic options", "Promotes healthy growth"],
    },
    {
        name: "Irrigation",
        icon: <img className="sc2-icon-image" src={irrigation} alt="Irrigation" />,
        image: irrigation_Second,
        slug: "irrigation",
        desc: "Efficient watering solutions to keep your landscape hydrated.",
        points: ["Sprinkler system installation", "Drip irrigation systems", "System maintenance & repairs"],
    },
    {
        name: "Bark Blowing",
        icon: <img className="sc2-icon-image" src={barkBlowing} alt="Bark Blowing" />,
        image: blowing_Second,
        slug: "bark-blowing",
        desc: "Evenly spread bark to enhance the look and health of your garden beds.",
        points: ["Bark delivery & spreading", "Garden bed preparation", "Neat, even coverage"],
    },
    {
        name: "Spray Treatments",
        icon: <img className="sc2-icon-image" src={spary_t} alt="Spray Treatments" />,
        image: spray_treatments_second,
        slug: "spray-treatments",
        desc: "Targeted spray solutions to protect and maintain your outdoor spaces.",
        points: ["Weed spray treatments", "Pest & disease control", "Safe & effective products"],
    },
];

export default function ServiceCard2() {
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
        <>
            {/* ── Service Banner (Top) ── */}
            <div className="sc2-banner-wrap">
                <img
                    src={serviceBanner}
                    alt="SNG Maintenance Banner"
                    className="sc2-banner-img"
                />
            </div>

            <section ref={ref} className={`sc2-section ${visible ? "sc2-show" : ""}`}>
                <div className="sc2-container">

                    {/* ── Heading (screenshot style) ── */}
                    <div className="sc2-header">
                        <div className="ServiceCard__header-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                            </svg>
                        </div>
                        <h2 className="sc2-heading">
                            SNG MAINTENANCE<br />
                            PROVIDES <span className="sc2-heading--red">SERVICES</span>
                        </h2>
                        <div className="sc2-heading-line"></div>
                        <p className="sc2-subheading">
                            We offer a wide range of maintenance solutions to keep your property looking its best all year round.
                        </p>
                    </div>

                    {/* ── Cards ── */}
                    <div className="sc2-grid">
                        {services.map((service, i) => (
                            <div
                                className="sc2-card"
                                key={service.name}
                                style={{ transitionDelay: `${i * 0.07}s` }}
                            >
                                {/* TOP: Small circular icon */}
                                <div className="sc2-icon-wrapper">
                                    <div className="sc2-icon-circle">
                                        {service.icon}
                                    </div>
                                </div>

                                {/* Service Name */}
                                <h3 className="sc2-name">{service.name}</h3>

                                {/* Service Image */}
                                <div className="sc2-image-wrap">
                                    <img
                                        src={service.image}
                                        alt={service.name}
                                        className="sc2-image"
                                    />
                                </div>

                                {/* More Info Button */}
                                <button
                                    className="sc2-more-btn"
                                    onClick={() => navigate(`/services/${service.slug}`)}
                                    aria-label={`More info about ${service.name}`}
                                >
                                    More Info
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}