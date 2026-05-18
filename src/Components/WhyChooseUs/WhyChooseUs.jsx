import "./WhyChooseUs.css";
import {
    FaUserTie,
    FaMedal,
    FaTag,
    FaShieldAlt,
} from "react-icons/fa";

const features = [
    {
        icon: <FaUserTie />,
        title: "Experienced & Reliable Team",
        desc: "Skilled professionals with years of experience you can rely on.",
    },
    {
        icon: <FaMedal />,
        title: "High-Quality Workmanship",
        desc: "We take pride in delivering top-quality results on every job.",
    },
    {
        icon: <FaTag />,
        title: "Affordable & Competitive Pricing",
        desc: "Great value services that fit your budget without compromise.",
    },
    {
        icon: <FaShieldAlt />,
        title: "Fully Insured & Professional Service",
        desc: "We are fully insured and committed to providing safe, professional service.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="whyChooseUs">
            <div className="whyChooseUs__container">

                <header className="whyChooseUs__header">
                    <div className="whyChooseUs__header-line">
                        <span className="whyChooseUs__line-bar" />
                        <h2 className="whyChooseUs__title">Why choose us?</h2>
                        <span className="whyChooseUs__line-bar" />
                    </div>
                </header>

                <div className="whyChooseUs__grid">
                    {features.map((item, index) => (
                        <div
                            className={`whyChooseUs__card ${index % 2 === 0 ? "light" : "dark"}`}
                            key={index}
                        >
                            {/* Dot grid */}
                            <div className="whyChooseUs__dots" />

                            {/* Circle icon */}
                            <div className="whyChooseUs__icon-wrap">
                                <div className="whyChooseUs__icon">
                                    {item.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="whyChooseUs__content">
                                <h3 className="whyChooseUs__card-title">{item.title}</h3>
                                <div className="whyChooseUs__red-line" />
                                <p className="whyChooseUs__card-desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}