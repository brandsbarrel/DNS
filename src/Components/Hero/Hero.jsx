import "./Hero.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import image1 from "../../assets/5.jpeg";
import image2 from "../../assets/4.jpeg";
import image3 from "../../assets/6.jpeg";

export default function Hero() {

    // Slides with image + title only
    const slides = [
        {
            image: image1,
            title: "A Beautiful Garden Starts Here!"
        },
        {
            image: image2,
            title: "With Years of Experience, We Keep Gardens Looking Their Best"
        },
        {
            image: image3,
            title: "Providing Quality Garden Services at Affordable Prices"
        }
    ];

    const [current, setCurrent] = useState(0);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    // Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero">

            <div className="container hero__content">
                <div className="hero__text">

                    <h1 className="hero__title">
                        {slides[current].title}
                    </h1>


                </div>
            </div>

            {/* Background Slider */}
            <div
                className="hero__bg"
                style={{
                    backgroundImage: `url(${slides[current].image})`
                }}
            />

            {/* Dots */}
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