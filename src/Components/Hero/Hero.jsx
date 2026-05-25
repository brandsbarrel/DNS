import "./Hero.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import image1 from "../../assets/4.jpeg";
import image2 from "../../assets/6.jpeg";
import Hero_image from "../../assets/Hero_image.jpeg";
import Hero_image_s from "../../assets/Hero_image_s.jpeg";

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
        <>
            {/* ── 1. SLIDER ONLY ── */}
            <section className="hero">

                <img
                    src={slide.src}
                    alt=""
                    className={`hero__img ${fade ? "is-visible" : "is-hidden"}`}
                />
                <div className="hero__overlay" />

                {/* Desktop content */}
                <div className={`hero__content hero__content--desktop ${fade ? "is-visible" : "is-hidden"}`}>
                    <h1 className="hero__title">
                        <span className="black">{slide.title} </span>
                        <span className="red">{slide.titleRed}</span>
                        <span className="black">{slide.titleEnd}</span>
                    </h1>
                    <div className="hero__divider" />
                </div>

                {/* Mobile content */}
                <div className="hero__mobile-layout">
                    <div className={`hero__content hero__content--mobile ${fade ? "is-visible" : "is-hidden"}`}>
                        <h1 className="hero__title">
                            <span className="black">{slide.title} </span>
                            <br/>
                            <span className="red">{slide.titleRed}</span>
                            <br/>
                            <span className="black">{slide.titleEnd}</span>
                        </h1>
                        <div className="hero__divider" />
                    </div>

                    <div className={`hero__img-wrapper ${fade ? "is-visible" : "is-hidden"}`}>
                        <img src={slide.src} alt="" className="hero__img--mobile" />
                    </div>
                </div>

            </section>
            
            {/* ── 3. GET FREE QUOTE BUTTON — sabse neeche ── */}
            <div className="hero__btn-wrapper_1">
                <Link to="/contact" className="hero__btn_1 hero__btn--full">
                    GET A FREE QUOTE ›
                </Link>
            </div>

            {/* ── 2. IMAGE — slider ke baad, button se pehle ── */}
            <div className="hero__middle-image">
                <img src={Hero_image_s} alt="Service highlight" />
            </div>

        </>
    );
}