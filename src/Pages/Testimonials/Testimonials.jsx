import "./Testimonials.css";

import testiHero from "../../assets/Testi_Hero.jpeg";
import testi2 from "../../assets/Testi2.jpeg";
import testi3 from "../../assets/Testi3.jpeg";
import testi4 from "../../assets/Testi4.jpeg";
import testi5 from "../../assets/Testi5.jpeg";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import how_it_works from "../../assets/how_it_works.jpeg";
import testi6 from "../../assets/Testi6.jpeg"
import { Link } from "react-router-dom";


const handleClick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

export default function Testimonials() {

    const testimonials = [testi2, testi3, testi4];

    return (
        <div className="testi-page">

            {/* NAV */}
            <nav className="sng-nav">
                <div className="sng-logo">
                    <div className="sng-logo-top">
                        SN<span>G</span>
                    </div>
                    <div className="sng-logo-sub">
                        — MAINTENANCE —
                    </div>
                </div>
                {/* 3 lines (hamburger) removed */}
            </nav>

            {/* CONTENT */}
            <div className="testi-content">

                {/* HERO */}
                <img
                    src={testiHero}
                    alt="Testimonials Hero"
                    className="testi-hero"
                />

                {/* HEADING - 2 lines */}
                <div className="testi-heading">
                    <h1>Trusted by Clients,</h1>
                    <h1><span>Proven by Results</span></h1>
                </div>

                <div className="testi-underline" />

                <p className="testi-subtitle">
                    We're grateful for the trust our clients place in us. Here's what some of
                    them have to say about working with SNG Maintenance.
                </p>

                {/* TESTIMONIAL IMAGES */}
                {testimonials.map((img, index) => (
                    <div className="testi-item" key={index}>
                        <img
                            src={img}
                            alt={`Testimonial ${index + 1}`}
                            className="testi-img"
                        />
                    </div>
                ))}

                {/* CTA BANNER */}
                <div className="testi-cta">
                    <img
                        src={testi5}
                        alt="CTA"
                        className="testi-cta-img1"
                    />
                    <Link to="/contact-us" onClick={() => { handleClick() }} className="testi-cta-btn">
                        Get a Free Quote →
                    </Link>
                    <img
                        src={testi6}
                        alt="CTA"
                        className="testi-cta-img2"
                    />
                </div>

            </div>
            <WhyChooseUs />
            <section className="works_steps1">
                <img className="how_it_works_img" src={how_it_works} alt="How it works" />
                <Link to="/contact-us" onClick={() => { handleClick() }} className="How_quote_btn how__btn--full">GET A FREE QUOTE</Link>
            </section>
        </div>
    );
}