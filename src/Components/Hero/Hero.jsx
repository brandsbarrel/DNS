import "./Hero.css";
import { useState, useEffect } from "react";

import image1 from "../../assets/4.jpeg";
import image2 from "../../assets/6.jpeg";
import video1 from "../../assets/hero-vdo.mp4";

export default function Hero() {

    // Slides with image/video + title + duration
    const slides = [
        {
            type: "video",
            src: video1,
            title: "A Beautiful Garden Starts Here!",
            duration: 12000 // 8 sec
        },
        {
            type: "image",
            src: image1,
            title: "With Years of Experience, We Keep Gardens Looking Their Best",
            duration: 4000
        },
        {
            type: "image",
            src: image2,
            title: "Providing Quality Garden Services at Affordable Prices",
            duration: 4000
        }
    ];

    const [current, setCurrent] = useState(0);

    // Auto slide with custom timing
    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrent((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, slides[current].duration);

        return () => clearTimeout(timeout);
    }, [current]);

    return (
        <section className="hero">

            <div className="container hero__content">
                <div className="hero__text">

                    <h1 className="hero__title">
                        {slides[current].title}
                    </h1>

                </div>
            </div>

            {/* Background Media */}
            <div className="hero__bg">

                {slides[current].type === "image" ? (
                    <div
                        className="hero__bg-image"
                        style={{
                            backgroundImage: `url(${slides[current].src})`
                        }}
                    />
                ) : (
                    <video
                        className="hero__bg-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={slides[current].src} type="video/mp4" />
                    </video>
                )}

            </div>

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