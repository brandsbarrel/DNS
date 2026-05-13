import "./Features.css";
import {
    FaUserTie,
    FaMedal,
    FaTag,
    FaShieldAlt,
    FaSearchPlus,
    FaBolt,
} from "react-icons/fa";

const features = [
    { icon: <FaUserTie />,     title: "Experienced & Reliable Team" },
    { icon: <FaMedal />,       title: "High-Quality Workmanship" },
    { icon: <FaTag />,         title: "Affordable & Competitive Pricing" },
    { icon: <FaShieldAlt />,   title: "Fully Insured & Professional Service" },
    { icon: <FaSearchPlus />,  title: "Attention to Every Detail" },
    { icon: <FaBolt />,        title: "Fast & Reliable" },
];

export default function Features() {
    return (
        <section className="features">
            <div className="container">

                <header className="features__header">
                    <h2 className="features__title">Why choose us?</h2>
                </header>

                <div className="features__grid">
                    {features.map((item, index) => (
                        <div
                            className={`feature-tile ${index % 2 === 0 ? "light" : "dark"}`}
                            key={index}
                        >
                            <div className="tile-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}