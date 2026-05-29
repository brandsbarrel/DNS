import "./Services.css";
import { useState, useEffect } from "react";

import image1 from "../../assets/servicies1.jpeg";
import image2 from "../../assets/services2.jpeg";
import image3 from "../../assets/service3.jpeg";
import Ss from "../../assets/Ss.jpeg";
import ServiceCard2 from "../../Components/ServiceCard2/ServiceCard2";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import SuburbsCard from "../../Components/SuburbsCard/SuburbsCard"

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
                <ServiceCard2 />
                <SuburbsCard />
                <div className="sc2-gallery-wrap">
                    <img src={Ss} alt="SNG Maintenance Gallery" className="sc2-gallery-img" />
                </div>
            </section>
        </>
    );
}
