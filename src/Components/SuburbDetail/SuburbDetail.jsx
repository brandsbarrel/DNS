import { useState } from "react";
import "./SuburbDetail.css";

const services = [
  {
    icon: "🏠",
    title: "Property Maintenance",
    desc: "We keep your property in top condition with quality and care — from general repairs to full interior and exterior upkeep.",
  },
  {
    icon: "🌿",
    title: "Mowing & Lawn Care",
    desc: "Regular lawn mowing, edge trimming, and weed control to keep your grass neat, healthy, and always looking its best.",
  },
  {
    icon: "🛝",
    title: "Soft Fall Landscaping",
    desc: "Safe, durable soft fall solutions for play areas using playground mulch, rubber bark, and wood chips that meet compliance standards.",
  },
  {
    icon: "🌳",
    title: "Strata Garden Maintenance",
    desc: "We maintain common garden areas for strata properties — including plant health checks, pruning, and seasonal clean-ups.",
  },
  {
    icon: "💧",
    title: "Pressure Cleaning",
    desc: "High-pressure cleaning that blasts away dirt, grime, and buildup from driveways, pathways, patios, courtyards, and exterior surfaces.",
  },
  {
    icon: "🌱",
    title: "Fertilising",
    desc: "Nourishing your lawn and plants for stronger, greener growth using both organic and synthetic fertilisation options.",
  },
  {
    icon: "🚿",
    title: "Irrigation",
    desc: "Efficient watering solutions including sprinkler system installation, drip irrigation systems, and full system maintenance and repairs.",
  },
  {
    icon: "🍂",
    title: "Bark Blowing",
    desc: "Evenly spread bark to enhance the look and health of your garden beds — including delivery, spreading, and full bed preparation.",
  },
  {
    icon: "🌾",
    title: "Spray Treatments",
    desc: "Targeted spray solutions to protect your outdoor spaces — weed spray treatments, pest and disease control using safe, effective products.",
  },
];

const suburbs = [
  "Ryde",
  "Meadowbank",
  "Gladesville",
  "Parramatta",
  "Inner West",
  "Hills District",
  "Northern Suburbs",
];

export default function SuburbDetail({ suburb = "Ryde" }) {
  const [activeService, setActiveService] = useState(null);

  return (
    <div className="sd-page">
      {/* ── Intro ── */}
      <section className="sd-intro section">
        <div className="container">
          <div className="sd-intro__grid">
            <div className="sd-intro__text">
              <h2 className="section-title">
                Your Local Maintenance Experts in {suburb}
              </h2>
              <p>
                SNG Maintenance Services is dedicated to delivering reliable,
                high-quality landscaping and property maintenance solutions
                across {suburb} and surrounding Sydney suburbs. Our services
                cover everything from garden care and lawn maintenance to
                high-pressure cleaning and complete property upkeep — for
                residential, strata, and commercial properties.
              </p>
              <p>
                With more than a decade of industry experience, we have proudly
                designed, improved, and maintained outdoor spaces for a wide
                range of developments throughout Sydney. Our team focuses on
                creating gardens that are visually appealing and practical,
                helping properties look their best all year round.
              </p>
              <p>
                Over the years, we have expanded our services in {suburb} to
                include irrigation systems, drip-line watering solutions, water
                blasting, excavation works, and general property maintenance.
                Our equipment and expertise allow us to complete projects
                efficiently — from installing essential service lines to
                constructing retaining walls, tiered gardens, and raised garden
                beds.
              </p>
            </div>
            <div className="sd-intro__stats">
              {[
                { num: "10+", label: "Years of Experience" },
                { num: "500+", label: "Properties Maintained" },
                { num: "100%", label: "Fully Insured" },
                { num: "7", label: "Service Areas" },
              ].map((s) => (
                <div className="sd-stat" key={s.label}>
                  <span className="sd-stat__num">{s.num}</span>
                  <span className="sd-stat__label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="sd-services section">
        <div className="container">
          <span className="sd-label" style={{ display: "block", textAlign: "center", marginBottom: 8 }}>
            What We Do in {suburb}
          </span>
          <h2 className="section-title">
            All Services Available in{" "}
            <span className="sd-accent-text">{suburb}</span>
          </h2>
          <p className="section-sub" style={{ textAlign: "center", margin: "0 auto 48px" }}>
            Reliable. Professional. Always here for you.
          </p>
          <div className="sd-services__grid">
            {services.map((svc, i) => (
              <div
                className={`sd-card${activeService === i ? " sd-card--active" : ""}`}
                key={svc.title}
                onClick={() => setActiveService(activeService === i ? null : i)}
              >
                <div className="sd-card__icon">{svc.icon}</div>
                <div className="sd-card__body">
                  <h3 className="sd-card__title">{svc.title}</h3>
                  <p className="sd-card__desc">{svc.desc}</p>
                </div>
                <span className="sd-card__arrow">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="sd-why section">
        <div className="container">
          <span className="sd-label" style={{ display: "block", textAlign: "center", marginBottom: 8 }}>
            Why SNG
          </span>
          <h2 className="section-title">Why {suburb} Residents Choose Us</h2>
          <div className="sd-why__grid">
            {[
              {
                icon: "👷",
                title: "Experienced & Reliable Team",
                desc: "Skilled professionals with years of experience you can rely on for every job in " + suburb + ".",
              },
              {
                icon: "🏆",
                title: "High-Quality Workmanship",
                desc: "We take pride in delivering top-quality results on every project, no matter the size.",
              },
              {
                icon: "💰",
                title: "Affordable & Competitive Pricing",
                desc: "Great value services that fit your budget without any compromise on quality.",
              },
              {
                icon: "🛡️",
                title: "Fully Insured & Professional",
                desc: "We are fully insured and committed to providing safe, professional service across " + suburb + ".",
              },
            ].map((w) => (
              <div className="sd-why__card" key={w.title}>
                <div className="sd-why__icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="sd-how section">
        <div className="container">
          <span className="sd-label" style={{ display: "block", textAlign: "center", marginBottom: 8 }}>
            Simple Process
          </span>
          <h2 className="section-title">
            How It <span className="sd-accent-text">Works</span>
          </h2>
          <p className="section-sub" style={{ textAlign: "center", margin: "0 auto 56px" }}>
            Simple process, great results.
          </p>
          <div className="sd-how__steps">
            {[
              {
                num: "01",
                title: "Request a Quote",
                desc:
                  "Send us a message or call us to describe your needs in " +
                  suburb +
                  ". We'll get back to you promptly.",
              },
              {
                num: "02",
                title: "Receive a Clear Proposal",
                desc: "You'll receive a detailed proposal with transparent pricing — no hidden fees, no surprises.",
              },
              {
                num: "03",
                title: "We Get the Job Done",
                desc: "Our team gets to work and delivers exceptional results you'll be proud of.",
              },
            ].map((step) => (
              <div className="sd-step" key={step.num}>
                <div className="sd-step__num">{step.num}</div>
                <h3 className="sd-step__title">{step.title}</h3>
                <p className="sd-step__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sd-cta section">
        <div className="container">
          <div className="sd-cta__box">
            <h2>Ready to Transform Your {suburb} Property?</h2>
            <p>
              Contact SNG Maintenance Services today for a free quote. Our team
              is ready to help you maintain and improve your outdoor spaces in{" "}
              {suburb} and across Sydney.
            </p>
            <button className="btn-primary sd-cta__btn">
              Get a Free Quote
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}