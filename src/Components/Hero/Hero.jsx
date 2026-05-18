import "./Hero.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import image1 from "../../assets/4.jpeg";
import image2 from "../../assets/6.jpeg";
import Hero_image from "../../assets/Hero_image.jpeg";

const slides = [
    {
        src: Hero_image,
        title: "Professional",
        titleRed: "Property",
        titleEnd: "Maintenance Services",
    },
    {
        src: image1,
        title: "Quality",
        titleRed: "Garden",
        titleEnd: "& Lawn Care",
    },
    {
        src: image2,
        title: "Trusted",
        titleRed: "Home",
        titleEnd: "Maintenance Experts",
    },
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

    const slide = slides[current];

    return (
        <section className="hero">

            {/* ── DESKTOP: full-screen image behind everything ── */}
            <img
                src={slide.src}
                alt=""
                className={`hero__img ${fade ? "is-visible" : "is-hidden"}`}
            />

            <div className="hero__overlay" />

            <div className={`hero__content hero__content--desktop ${fade ? "is-visible" : "is-hidden"}`}>
                <h1 className="hero__title">
                    <span className="black">{slide.title} </span>
                    <span className="red">{slide.titleRed}</span>
                    <br />
                    <span className="black">{slide.titleEnd}</span>
                </h1>
                <div className="hero__divider" />
                <p className="hero__sub">{slide.sub}</p>
                <Link to="/contact" className="hero__btn">
                    GET A FREE QUOTE ›
                </Link>
            </div>

            {/* ── MOBILE/TABLET: stacked layout ── */}
            <div className="hero__mobile-layout">
                {/* 1. Text */}
                <div className={`hero__content hero__content--mobile ${fade ? "is-visible" : "is-hidden"}`}>
                    <h1 className="hero__title">
                        <span className="black">{slide.title} </span>
                        <span className="red">{slide.titleRed}</span>
                        <br />
                        <span className="black">{slide.titleEnd}</span>
                    </h1>
                    <div className="hero__divider" />
                    <p className="hero__sub">{slide.sub}</p>
                </div>

                {/* 2. Image */}
                <div className={`hero__img-wrapper ${fade ? "is-visible" : "is-hidden"}`}>
                    <img
                        src={slide.src}
                        alt=""
                        className="hero__img--mobile"
                    />
                </div>

                {/* 3. Button */}
                <div className={`hero__btn-wrapper ${fade ? "is-visible" : "is-hidden"}`}>
                    <Link to="/contact" className="hero__btn hero__btn--full">
                        GET A FREE QUOTE ›
                    </Link>
                </div>
            </div>

            {/* Dots — visible on all screens */}
            <div className="hero__dots">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        className={`hero__dot ${i === current ? "active" : ""}`}
                        onClick={() => { setFade(false); setTimeout(() => { setCurrent(i); setFade(true); }, 350); }}
                        aria-label={`Slide ${i + 1}`}
                    />
                ))}
            </div>

        </section>
    );
}