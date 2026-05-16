import "./Hero.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import image1 from "../../assets/4.jpeg";
import image2 from "../../assets/6.jpeg";
import Hero_image from "../../assets/Hero_image.jpeg";

const slides = [
    {
        src: Hero_image,
        title: "A Beautiful Garden Starts Here!",
    },
    {
        src: image1,
        title: "With Years of Experience, We Keep Gardens Looking Their Best",
    },
    {
        src: image2,
        title: "Providing Quality Garden Services at Affordable Prices",
    }
];

const SLIDE_DURATION = 4000;

export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, SLIDE_DURATION);
        return () => clearTimeout(timeout);
    }, [current]);

    return (
        <section className="hero">

            <div className="hero__bg">
                <div
                    className="hero__bg-image"
                    style={{ backgroundImage: `url(${slides[current].src})` }}
                />
            </div>

            <div className="hero__content">
                <div className="hero__text">
                    <h1 className="hero__title">
                        {slides[current].title}
                    </h1>
                    <div className="hero__actions">
                        <Link to="/contact" className="hero__cta-btn">
                            GET A QUOTE
                        </Link>
                    </div>
                </div>
            </div>

            <div className="hero__dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`hero__dot ${current === index ? "active" : ""}`}
                        onClick={() => setCurrent(index)}
                    />
                ))}
            </div>

        </section>
    );
}