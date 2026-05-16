import "./Hero.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import image1 from "../../assets/4.jpeg";
import image2 from "../../assets/6.jpeg";
import Hero_image from "../../assets/Hero_image.jpeg";

const slides = [
    {
        src: Hero_image,
    },
    {
        src: image1,
    },
    {
        src: image2,
    }
];

const SLIDE_DURATION = 5000;

export default function Hero() {
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFade(false);
            setTimeout(() => {
                setCurrent((prev) => (prev + 1) % slides.length);
                setFade(true);
            }, 350);
        }, SLIDE_DURATION);
        return () => clearTimeout(timeout);
    }, [current]);

    const goTo = (index) => {
        if (index === current) return;
        setFade(false);
        setTimeout(() => {
            setCurrent(index);
            setFade(true);
        }, 350);
    };

    const slide = slides[current];

    return (
        <section className="hero">

            {/* Full screen image */}
            <img
                src={slide.src}
                alt=""
                className={`hero__img ${fade ? "is-visible" : "is-hidden"}`}
            />

            {/* Green fade overlay */}
            <div className="hero__overlay" />

            {/* Text always on top */}
            <div className={`hero__content ${fade ? "is-visible" : "is-hidden"}`}>
                <h1 className="hero__title">
                    <span className="black">{slide.title} </span>
                    <span className="red">{slide.titleRed}</span>
                    <br />
                    <span className="black">{slide.titleEnd}</span>
                </h1>
                <div
                    className="hero__divider"
                    style={{ display: current === 0 ? "block" : "none" }}
                />
                <p className="hero__sub">{slide.sub}</p>
                <Link
                    to="/contact"
                    className={`hero__btn ${current === 0 ? "" : "hero__btn--hidden"}`}
                >
                    GET A FREE QUOTE ›
                </Link>
            </div>

            {/* Dots */}
            <div className="hero__dots">
                {slides.map((_, i) => (
                    <span
                        key={i}
                        className={`hero__dot ${current === i ? "active" : ""}`}
                        onClick={() => goTo(i)}
                    />
                ))}
            </div>

        </section>
    );
}