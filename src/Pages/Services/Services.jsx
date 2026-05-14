import "./Services.css";
import { useState, useEffect } from "react";

import image1 from "../../assets/servicies1.jpeg";
import image2 from "../../assets/services2.jpeg";
import image3 from "../../assets/service3.jpeg";
import InfoSection from "../../Components/InfoSection/InfoSection";

export default function Services() {

    const slides = [
        {
            type: "image",
            src: image1,
            title: "Clean. Green. Professionally Maintained.",
            duration: 8000
        },
        {
            type: "image",
            src: image2,
            title: "Outdoor Spaces Designed To Impress",
            duration: 8000
        },
        {
            type: "image",
            src: image3,
            title: "From Garden Care To Complete Property Maintenance",
            duration: 8000
        }
    ];

    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(true);

    // Smooth transition
    useEffect(() => {

        const timeout = setTimeout(() => {

            setFade(false);

            setTimeout(() => {
                setCurrent((prev) =>
                    prev === slides.length - 1 ? 0 : prev + 1
                );

                setFade(true);

            }, 600);

        }, slides[current].duration);

        return () => clearTimeout(timeout);

    }, [current]);

    return (
        <>
            <section className="hero">

                {/* <div className="container hero__content">
                    <div className="hero__text">

                        <h1 className={`hero__title ${fade ? "show" : "hide"}`}>
                            {slides[current].title}
                        </h1>

                    </div>
                </div>

                {/* Background Media */}
                {/* <div className="hero__bg">

                    {slides[current].type === "image" ? (
                        <div
                            className={`hero__bg-image ${fade ? "show" : "hide"}`}
                            style={{
                                backgroundImage: `url(${slides[current].src})`
                            }}
                        />
                    ) : (
                        <video
                            className={`hero__bg-video ${fade ? "show" : "hide"}`}
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src={slides[current].src} type="video/mp4" />
                        </video>
                    )}

                </div> */}

                {/* Dots */}
                {/* <div className="hero__dots">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`hero__dot ${current === index ? "active" : ""}`}
                            onClick={() => setCurrent(index)}
                        />
                    ))}
                </div> */}
                <InfoSection />
            </section>
        </>
    );
}