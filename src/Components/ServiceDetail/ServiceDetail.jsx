import { useEffect, useRef } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import "./ServiceDetail.css";

// ── Property Maintenance Images ──
import PropertyMaintenance1 from "../../assets/PropertyMaintenance1.jpeg";
import PropertyMaintenance2 from "../../assets/PropertyMaintenance2.jpeg";
import PropertyMaintenance3 from "../../assets/PropertyMaintenance3.jpeg";

// ── Mowing Images ──
import Mowing1 from "../../assets/Mowing1.jpeg";
import Mowing2 from "../../assets/Mowing2.jpeg";

import sd_prm_hero from "../../assets/sd-prm.jpeg";
import sd_mowing_hero from "../../assets/sd-mowing.jpeg";

import sd_soft_lanscape_hero from "../../assets/sd-soft_landscaping-hero.jpeg";
import sd_soft_lanscape1 from "../../assets/soft_landscaping1.jpeg";
import sd_soft_lanscape2 from "../../assets/soft_landscaping2.jpeg";
import sd_soft_lanscape3 from "../../assets/soft_landscaping3.jpeg";

import sd_sgm_hero from "../../assets/sd-sgm-hero.jpeg";
import sd_sgm1 from "../../assets/sd-sgm1.jpeg";
import sd_sgm2 from "../../assets/sd-sgm2.jpeg";
import sd_sgm3 from "../../assets/sd-sgm3.jpeg";

import sd_pc_hero from "../../assets/sd-pressureCleaning-hero.jpeg";
import sd_pc1 from "../../assets/sd-pc1.jpeg";

import sd_fertilising_hero from "../../assets/sd-fertilising-hero.jpeg";
import sd_fertilising1 from "../../assets/sd-fertilising1.jpeg";
import sd_fertilising3 from "../../assets/sd-fertilising3.jpeg";

import sd_irrigation_hero from "../../assets/sd-irrigation-hero.jpeg";
import sd_irrigation1 from "../../assets/sd-irrigation-1.jpeg";

import sd_bark_blowing_hero from "../../assets/sd_bark_blowing_hero.jpeg";
import sd_bark_blowing1 from "../../assets/sd_bark_blowing1.jpeg";
import sd_bark_blowing2 from "../../assets/sd_bark_blowing2.jpeg";

import sd_spray_treatments_hero from "../../assets/sd-spray-treatment-hero.jpeg";
import sd_spray_treatments1 from "../../assets/sd-spray-treatment1.jpeg"
import sd_spray_treatments2 from "../../assets/sd-spray-treatment2.jpeg"
import service_detail_bottom from "../../assets/service_detail_bottom.jpeg";

// ─────────────────────────────────────────────────────────────────
// Baaki services ki images aane par yahan import karo:
// import SoftFall1 from "../../assets/SoftFall1.jpeg";
// import PressureCleaning1 from "../../assets/PressureCleaning1.jpeg";
// ... etc
// Phir neeche SERVICES object mein src: SoftFall1 kar do
// ─────────────────────────────────────────────────────────────────

const SERVICES = {
    "property-maintenance": {
        badge: "Our Services",
        title: "Property Maintenance Services",
        heroSubtitle:
            "Reliable, professional maintenance that keeps every property clean, safe, and perfectly presented.",
        intro: `At SNG Maintenance, we take pride in delivering high-quality property maintenance services with attention to detail, reliability, and professionalism. From residential complexes and commercial properties to landscaped outdoor areas, our team is committed to keeping every space clean, safe, and perfectly maintained.\n\nWe understand that a well-maintained property creates a lasting impression. That's why we provide tailored maintenance solutions designed to enhance the appearance, value, and functionality of your property all year round.`,
        images: [
            { src: PropertyMaintenance1 },
            { src: PropertyMaintenance2 },
            { src: PropertyMaintenance3 },
        ],
        servicesList: [
            "Garden & landscape maintenance",
            "Lawn mowing & edging",
            "Pressure cleaning",
            "Hedging & pruning",
            "Irrigation maintenance",
            "Soft fall installation & repairs",
            "Weed control & spray treatments",
            "Mulching & bark blowing",
            "General property upkeep",
            "Strata & commercial maintenance",
        ],
        whyList: [
            "Professional and experienced team",
            "Reliable and punctual service",
            "Attention to detail on every project",
            "High-quality workmanship",
            "Modern equipment and efficient solutions",
            "Tailored maintenance plans for every property",
        ],
        tagline: "SNG Maintenance — Keeping Properties Looking Their Best.",
    },

    "mowing": {
        badge: "Our Services",
        title: "Professional Lawn Mowing Services",
        heroSubtitle:
            "Clean, precise lawn care that keeps your property neat, healthy, and beautifully presented year-round.",
        intro: `At SNG Maintenance, we provide professional lawn mowing services designed to keep your property looking neat, healthy, and well-presented all year round. Our experienced team takes pride in delivering clean, precise results with attention to every detail.\n\nWe understand that a perfectly maintained lawn creates a strong first impression for homes, strata properties, commercial spaces, and outdoor areas. Using reliable equipment and professional techniques, we ensure every lawn is cut evenly, edged neatly, and left looking fresh and immaculate.`,
        images: [
            { src: Mowing1 },
            { src: Mowing2 },
        ],
        servicesList: [
            "Regular lawn mowing",
            "Lawn edging & trimming",
            "Grass clipping removal",
            "Strata & commercial mowing",
            "Residential lawn maintenance",
            "Large property mowing",
            "Seasonal lawn care",
        ],
        whyList: [
            "Reliable and punctual team",
            "High-quality workmanship",
            "Professional equipment",
            "Clean and tidy results every visit",
            "Tailored maintenance schedules",
            "Friendly and experienced service",
        ],
        tagline: "SNG Maintenance — Professional Lawn Care You Can Rely On.",
    },

    "soft-fall-landscaping": {
        badge: "Our Services",
        title: "Soft Fall Landscaping Services",
        heroSubtitle:
            "Safe, compliant soft fall surfaces professionally installed for playgrounds and outdoor areas.",
        intro: `At SNG Maintenance, we specialise in professional soft fall landscaping solutions designed to create safe, attractive, and compliant outdoor spaces. Whether it's a playground, park, or recreational area, our team delivers expert installation with a focus on safety and aesthetics.\n\nWe use high-quality materials and proven techniques to ensure every soft fall surface meets safety standards while enhancing the visual appeal of your outdoor space.`,
        images: [
            { src: sd_soft_lanscape1 },
            { src: sd_soft_lanscape2 },
            // { src: sd_soft_lanscape3 },
        ],
        servicesList: [
            "Soft fall installation",
            "Soft fall repairs & maintenance",
            "Wood chip & bark installation",
            "Playground safety compliance",
            "Commercial & strata soft fall",
            "Custom landscaping solutions",
        ],
        whyList: [
            "Safety-first approach on every job",
            "Compliant with Australian safety standards",
            "Experienced installation team",
            "High-quality materials used",
            "Clean and efficient service",
            "Competitive and transparent pricing",
        ],
        tagline: "SNG Maintenance — Safe Spaces, Beautifully Maintained.",
    },

    "strata-garden-maintenance": {
        badge: "Our Services",
        title: "Strata Garden Maintenance",
        heroSubtitle:
            "Consistent, professional garden care tailored for strata and multi-residential properties.",
        intro: `At SNG Maintenance, we understand the unique requirements of strata garden maintenance. We work closely with strata managers and property committees to deliver reliable, scheduled garden care that keeps shared outdoor spaces looking their very best throughout the year.\n\nOur team is experienced in maintaining common area gardens, ensuring residents enjoy beautiful, well-kept outdoor environments that add value to the property.`,
        images: [
            { src: sd_sgm1 },
            { src: sd_sgm2 },
            { src: sd_sgm3 },
        ],
        servicesList: [
            "Scheduled garden maintenance visits",
            "Lawn mowing & edging",
            "Garden bed maintenance",
            "Hedge & shrub trimming",
            "Weed control & treatment",
            "Seasonal planting & care",
            "Irrigation system maintenance",
            "General grounds upkeep",
        ],
        whyList: [
            "Experienced in strata environments",
            "Reliable scheduled service visits",
            "Professional and courteous team",
            "Consistent high-quality results",
            "Works with strata managers directly",
            "Fully insured and reliable",
        ],
        tagline: "SNG Maintenance — Expert Care for Strata Communities.",
    },

    "pressure-cleaning": {
        badge: "Our Services",
        title: "Professional Pressure Cleaning",
        heroSubtitle:
            "Powerful, thorough pressure cleaning to restore surfaces to their original condition.",
        intro: `At SNG Maintenance, we deliver professional pressure cleaning services that remove dirt, grime, mould, and stains from a wide range of surfaces. From driveways and pathways to building facades and outdoor areas, our high-pressure equipment and experienced team restore surfaces to a clean, fresh condition.\n\nPressure cleaning not only improves the appearance of your property but also helps protect surfaces from long-term damage caused by built-up grime and mould.`,
        images: [
            {
                src: sd_pc1,
                className: "large"
            },
        ],
        servicesList: [
            "Driveway & pathway pressure cleaning",
            "Building & wall washing",
            "Patio & deck cleaning",
            "Carpark pressure cleaning",
            "Strata common area washing",
            "Graffiti removal",
            "Pool surrounds & outdoor areas",
        ],
        whyList: [
            "High-powered professional equipment",
            "Safe for all surface types",
            "Experienced and careful team",
            "Fast and efficient service",
            "Removes tough stains and mould",
            "Residential and commercial service",
        ],
        tagline: "SNG Maintenance — Clean Surfaces, Fresh Impressions.",

    },

    "fertilising": {
        badge: "Our Services",
        title: "Professional Fertilising Services",
        heroSubtitle:
            "Targeted fertilising programs to promote lush, healthy lawns and thriving gardens.",
        intro: `At SNG Maintenance, we provide professional fertilising services designed to nourish your lawn and garden, promoting healthy growth, vibrant colour, and long-term vitality. Our team selects the right fertiliser products and application methods based on your specific soil type, grass variety, and garden needs.\n\nRegular fertilising is essential for maintaining a lush, green lawn and healthy garden beds. Our tailored fertilising programs ensure your outdoor spaces receive the nutrients they need throughout every season.`,
        images: [
            { src: sd_fertilising1 },
            { src: sd_fertilising3 },
        ],
        servicesList: [
            "Lawn fertilising treatments",
            "Garden bed fertilising",
            "Seasonal fertilising programs",
            "Slow-release fertiliser application",
            "Soil health assessment",
            "Commercial & strata fertilising",
            "Post-treatment care advice",
        ],
        whyList: [
            "Correct products for every lawn type",
            "Seasonal and targeted applications",
            "Experienced horticulture knowledge",
            "Safe and effective treatments",
            "Noticeable results guaranteed",
            "Tailored programs for your property",
        ],
        tagline: "SNG Maintenance — Healthy Lawns, Happy Properties.",
    },

    "irrigation": {
        badge: "Our Services",
        title: "Irrigation Services",
        heroSubtitle:
            "Smart irrigation solutions to keep your lawns and gardens green with minimal water waste.",
        intro: `At SNG Maintenance, we design, install, and maintain professional irrigation systems that deliver the right amount of water to your lawns and gardens efficiently and reliably. A well-designed irrigation system saves water, reduces manual effort, and ensures your outdoor spaces stay green and healthy even in dry seasons.\n\nOur experienced team works with residential, commercial, and strata properties to provide tailored irrigation solutions that fit your landscape and budget.`,
        images: [
            {
                src: sd_irrigation1,
                className: "large"
            }
        ],
        servicesList: [
            "Irrigation system design & installation",
            "Drip irrigation systems",
            "Sprinkler system setup",
            "Timer & controller programming",
            "System repairs & troubleshooting",
            "Seasonal adjustments",
            "Strata & commercial irrigation",
        ],
        whyList: [
            "Water-efficient system designs",
            "Expert installation team",
            "Reliable ongoing maintenance",
            "Tailored to your landscape",
            "Reduces water waste significantly",
            "Fast and professional repairs",
        ],
        tagline: "SNG Maintenance — Smarter Watering, Greener Results.",
    },

    "bark-blowing": {
        badge: "Our Services",
        title: "Bark Blowing Services",
        heroSubtitle:
            "Fast, efficient bark and mulch application for neat, weed-suppressing garden beds.",
        intro: `At SNG Maintenance, we provide professional bark blowing services that quickly and evenly apply mulch and bark to garden beds, tree surrounds, and landscaped areas. Bark blowing is a fast, efficient, and cost-effective method to improve the look of your gardens while suppressing weeds and retaining soil moisture.\n\nUsing specialised blower equipment, our team can cover large areas quickly with minimal disruption, making it ideal for strata, commercial, and large residential properties.`,
        images: [
            {
                src: sd_bark_blowing1,
                className: "large"
            },
            {
                src: sd_bark_blowing2,
                className:"large"
            }
        ],
        servicesList: [
            "Bark blowing for garden beds",
            "Mulch application & topping up",
            "Tree surround coverage",
            "Large area bark blowing",
            "Weed suppression mulching",
            "Strata & commercial bark blowing",
            "Decorative bark & mulch options",
        ],
        whyList: [
            "Fast coverage of large areas",
            "Specialised blower equipment",
            "Weed suppression benefits",
            "Improves garden appearance instantly",
            "Retains soil moisture naturally",
            "Minimal disruption to surroundings",
        ],
        tagline: "SNG Maintenance — Beautiful Gardens, Inside and Out.",
    },

    "spray-treatments": {
        badge: "Our Services",
        title: "Spray Treatments",
        heroSubtitle:
            "Targeted spray treatments for effective weed control and healthy, pest-free outdoor spaces.",
        intro: `At SNG Maintenance, we provide professional spray treatment services to effectively control weeds, pests, and unwanted vegetation across lawns, gardens, pathways, and outdoor areas. Our licensed team uses the right products and techniques to deliver safe, effective results while minimising any impact on surrounding plants and the environment.\n\nRegular spray treatments are a key part of maintaining a healthy, well-kept property. Whether you need routine weed control or targeted treatment for a specific issue, SNG Maintenance has the expertise to get the job done right.`,
        images: [
            { src: sd_spray_treatments1,
                className:"large"
             },
        ],
        servicesList: [
            "Weed spray treatments",
            "Lawn weed control",
            "Garden bed weed management",
            "Pathway & driveway weed control",
            "Pre-emergent weed treatments",
            "Pest control spray treatments",
            "Strata & commercial spray programs",
        ],
        whyList: [
            "Licensed and trained spray operators",
            "Safe and effective products used",
            "Minimal impact on surrounding plants",
            "Targeted and precise application",
            "Regular treatment programs available",
            "Residential and commercial service",
        ],
        tagline: "SNG Maintenance — Weed-Free, Worry-Free Properties.",
    },
};

/* ─────────────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────────────── */
export default function ServiceDetail() {
    const { slug } = useParams();
    const service = SERVICES[slug];
    const galleryRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (!galleryRef.current) return;
        const items = galleryRef.current.querySelectorAll(".sd-gallery__item");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );
        items.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [slug]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [slug]);

    if (!service) {
        return (
            <div className="sd-not-found">
                <p>Service not found.</p>
                <Link to="/" style={{ color: "#5cb85c", marginTop: 16, display: "inline-block" }}>
                    ← Back to Home
                </Link>
            </div>
        );
    }

    return (
        <>
            <section className="sd-hero-b">
                {location.pathname === "/services/mowing" && <img src={sd_mowing_hero} />}
                {location.pathname === "/services/property-maintenance" && <img src={sd_prm_hero} />}
                {location.pathname === "/services/soft-fall-landscaping" && <img src={sd_soft_lanscape_hero} />}
                {location.pathname === "/services/strata-garden-maintenance" && <img src={sd_sgm_hero} />}
                {location.pathname === "/services/pressure-cleaning" && <img src={sd_pc_hero} />}
                {location.pathname === "/services/fertilising" && <img src={sd_fertilising_hero} />}
                {location.pathname === "/services/irrigation" && <img src={sd_irrigation_hero} />}
                {location.pathname === "/services/bark-blowing" && <img src={sd_bark_blowing_hero} />}
                {location.pathname === "/services/spray-treatments" && <img src={sd_spray_treatments_hero} />}
            </section>

            <div className="sd-page">
                <div className="sd-container">

                    <section className="sd-intro-b">
                        {service.intro.split("\n\n").map((para, i, arr) => (
                            <p
                                key={i}
                                className="sd-intro__text"
                                style={{ marginBottom: i < arr.length - 1 ? "18px" : 0 }}
                            >
                                {para}
                            </p>
                        ))}
                    </section>

                    {/* ── 3 Images — src = imported image variable ── */}
                    {/* ── Images ── */}
                    <div className="sd-gallery" ref={galleryRef}>
                        {service.images.map((img, i) => (
                            <div
                                key={i}
                                className={
                                    img.className === "large"
                                        ? "sd-gallery__item_large"
                                        : "sd-gallery__item"
                                }
                            >
                                <img
                                    src={img.src}
                                    alt={img.caption}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="sd-services">
                        <h2 className="sd-services__heading">Our Services Include</h2>
                        <ul className="sd-services__list">
                            {service.servicesList.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="sd-cta-wrap">
                        <Link to="/contact" className="sd-cta-btn">
                            Get a Free Quote
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </Link>
                    </div>

                    

                </div>
                <img className="service_detail__bottom" src={service_detail_bottom}/>
            </div>
        </>
    );
}