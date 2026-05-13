import { useEffect, useRef, useState } from "react";
import "./InfoSection.css";

const services = [
  {
    name: "Property Maintenance",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Person silhouette with leaf blower */}
        <circle cx="22" cy="9" r="5" fill="#5cb85c"/>
        <rect x="19" y="14" width="6" height="14" rx="3" fill="#5cb85c"/>
        <rect x="19" y="26" width="5" height="10" rx="2" fill="#5cb85c" transform="rotate(10 19 26)"/>
        <rect x="21" y="26" width="5" height="10" rx="2" fill="#5cb85c" transform="rotate(-10 21 26)"/>
        {/* Blower arm */}
        <rect x="25" y="20" width="14" height="4" rx="2" fill="#5cb85c" transform="rotate(-15 25 20)"/>
        {/* Blower nozzle */}
        <rect x="36" y="14" width="8" height="5" rx="2" fill="#5cb85c" transform="rotate(-15 36 14)"/>
        {/* Wind lines */}
        <path d="M46 16 Q52 14 50 10" stroke="#5cb85c" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
        <path d="M47 20 Q54 19 53 15" stroke="#5cb85c" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
        {/* Ground */}
        <line x1="8" y1="50" x2="56" y2="50" stroke="#5cb85c" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Leaves on ground */}
        <ellipse cx="40" cy="48" rx="6" ry="3" fill="#5cb85c" opacity="0.5"/>
        <ellipse cx="50" cy="49" rx="4" ry="2" fill="#5cb85c" opacity="0.4"/>
      </svg>
    ),
  },
  {
    name: "Mowing",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Person */}
        <circle cx="20" cy="9" r="5" fill="#5cb85c"/>
        <rect x="17" y="14" width="6" height="14" rx="3" fill="#5cb85c"/>
        <rect x="17" y="26" width="5" height="10" rx="2" fill="#5cb85c" transform="rotate(8 17 26)"/>
        <rect x="19" y="26" width="5" height="10" rx="2" fill="#5cb85c" transform="rotate(-8 19 26)"/>
        {/* Handle bars */}
        <line x1="23" y1="22" x2="38" y2="30" stroke="#5cb85c" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="38" y1="28" x2="38" y2="36" stroke="#5cb85c" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Mower body */}
        <rect x="28" y="36" width="22" height="10" rx="3" fill="#5cb85c"/>
        {/* Wheels */}
        <circle cx="32" cy="48" r="4" stroke="#5cb85c" strokeWidth="2.5" fill="white"/>
        <circle cx="46" cy="48" r="4" stroke="#5cb85c" strokeWidth="2.5" fill="white"/>
        {/* Grass blades */}
        <line x1="10" y1="50" x2="10" y2="42" stroke="#5cb85c" strokeWidth="2" strokeLinecap="round"/>
        <line x1="15" y1="50" x2="15" y2="40" stroke="#5cb85c" strokeWidth="2" strokeLinecap="round"/>
        <line x1="20" y1="50" x2="20" y2="43" stroke="#5cb85c" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Soft Fall Landscaping",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Large flower */}
        <circle cx="32" cy="20" r="4" fill="#5cb85c"/>
        {[0,45,90,135,180,225,270,315].map((deg, i) => (
          <ellipse
            key={i}
            cx={32 + 8 * Math.cos((deg * Math.PI) / 180)}
            cy={20 + 8 * Math.sin((deg * Math.PI) / 180)}
            rx="3.5" ry="2"
            fill="#5cb85c"
            opacity="0.75"
            transform={`rotate(${deg} ${32 + 8 * Math.cos((deg * Math.PI) / 180)} ${20 + 8 * Math.sin((deg * Math.PI) / 180)})`}
          />
        ))}
        {/* Stem */}
        <line x1="32" y1="28" x2="32" y2="44" stroke="#5cb85c" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Leaves on stem */}
        <path d="M32 36 Q40 32 38 28" fill="#5cb85c" opacity="0.7"/>
        <path d="M32 38 Q24 34 26 30" fill="#5cb85c" opacity="0.7"/>
        {/* Small plants left */}
        <line x1="14" y1="50" x2="14" y2="36" stroke="#5cb85c" strokeWidth="2" strokeLinecap="round"/>
        <ellipse cx="14" cy="34" rx="5" ry="3" fill="#5cb85c" opacity="0.6"/>
        {/* Small plants right */}
        <line x1="50" y1="50" x2="50" y2="38" stroke="#5cb85c" strokeWidth="2" strokeLinecap="round"/>
        <ellipse cx="50" cy="36" rx="5" ry="3" fill="#5cb85c" opacity="0.6"/>
        {/* Ground line */}
        <line x1="8" y1="50" x2="56" y2="50" stroke="#5cb85c" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Strata Garden Maintenance",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Building blocks */}
        <rect x="10" y="28" width="16" height="22" rx="2" stroke="#5cb85c" strokeWidth="2" fill="none"/>
        <rect x="30" y="20" width="16" height="30" rx="2" stroke="#5cb85c" strokeWidth="2" fill="none"/>
        {/* Windows */}
        <rect x="13" y="32" width="4" height="4" rx="1" fill="#5cb85c" opacity="0.5"/>
        <rect x="19" y="32" width="4" height="4" rx="1" fill="#5cb85c" opacity="0.5"/>
        <rect x="33" y="24" width="4" height="4" rx="1" fill="#5cb85c" opacity="0.5"/>
        <rect x="39" y="24" width="4" height="4" rx="1" fill="#5cb85c" opacity="0.5"/>
        <rect x="33" y="32" width="4" height="4" rx="1" fill="#5cb85c" opacity="0.5"/>
        <rect x="39" y="32" width="4" height="4" rx="1" fill="#5cb85c" opacity="0.5"/>
        {/* Garden / shrub */}
        <ellipse cx="18" cy="28" rx="8" ry="5" fill="#5cb85c" opacity="0.7"/>
        <ellipse cx="14" cy="27" rx="5" ry="4" fill="#5cb85c"/>
        <ellipse cx="22" cy="27" rx="5" ry="4" fill="#5cb85c"/>
        {/* Ground */}
        <line x1="6" y1="50" x2="58" y2="50" stroke="#5cb85c" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Pressure Cleaning",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Machine body */}
        <rect x="8" y="22" width="20" height="26" rx="4" fill="#5cb85c"/>
        <rect x="11" y="26" width="14" height="8" rx="2" fill="white" opacity="0.3"/>
        {/* Hose */}
        <path d="M28 32 Q38 28 42 32" fill="none" stroke="#5cb85c" strokeWidth="3" strokeLinecap="round"/>
        {/* Wand */}
        <line x1="42" y1="32" x2="54" y2="44" stroke="#5cb85c" strokeWidth="3" strokeLinecap="round"/>
        {/* Water spray */}
        <line x1="54" y1="44" x2="58" y2="40" stroke="#5cb85c" strokeWidth="1.8" strokeLinecap="round" opacity="0.8"/>
        <line x1="54" y1="44" x2="59" y2="44" stroke="#5cb85c" strokeWidth="1.8" strokeLinecap="round" opacity="0.6"/>
        <line x1="54" y1="44" x2="58" y2="48" stroke="#5cb85c" strokeWidth="1.8" strokeLinecap="round" opacity="0.7"/>
        <line x1="54" y1="44" x2="57" y2="41" stroke="#5cb85c" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <line x1="54" y1="44" x2="57" y2="47" stroke="#5cb85c" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        {/* Wheels */}
        <circle cx="14" cy="50" r="4" stroke="#5cb85c" strokeWidth="2" fill="white"/>
        <circle cx="24" cy="50" r="4" stroke="#5cb85c" strokeWidth="2" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Fertilising",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Bag */}
        <path d="M16 20 Q16 14 32 14 Q48 14 48 20 L50 50 Q50 54 32 54 Q14 54 14 50 Z" fill="#5cb85c" opacity="0.2" stroke="#5cb85c" strokeWidth="2"/>
        {/* Bag tie */}
        <path d="M22 14 Q32 10 42 14" fill="none" stroke="#5cb85c" strokeWidth="2.5" strokeLinecap="round"/>
        {/* NPK label dots */}
        <circle cx="26" cy="34" r="3" fill="#5cb85c"/>
        <circle cx="32" cy="34" r="3" fill="#5cb85c"/>
        <circle cx="38" cy="34" r="3" fill="#5cb85c"/>
        <circle cx="29" cy="42" r="3" fill="#5cb85c"/>
        <circle cx="35" cy="42" r="3" fill="#5cb85c"/>
        {/* Granule sprinkle */}
        <circle cx="52" cy="28" r="2" fill="#5cb85c" opacity="0.7"/>
        <circle cx="56" cy="34" r="1.5" fill="#5cb85c" opacity="0.6"/>
        <circle cx="54" cy="40" r="2" fill="#5cb85c" opacity="0.5"/>
        <circle cx="58" cy="26" r="1.5" fill="#5cb85c" opacity="0.4"/>
      </svg>
    ),
  },
  {
    name: "Irrigation",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Sprinkler head */}
        <rect x="28" y="36" width="8" height="14" rx="3" fill="#5cb85c"/>
        <rect x="24" y="34" width="16" height="5" rx="2" fill="#5cb85c"/>
        {/* Water arcs */}
        <path d="M32 34 Q18 22 10 28" fill="none" stroke="#5cb85c" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M32 34 Q32 16 32 10" fill="none" stroke="#5cb85c" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M32 34 Q46 22 54 28" fill="none" stroke="#5cb85c" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Water droplets at arc ends */}
        <circle cx="10" cy="29" r="2.5" fill="#5cb85c" opacity="0.7"/>
        <circle cx="32" cy="10" r="2.5" fill="#5cb85c" opacity="0.7"/>
        <circle cx="54" cy="29" r="2.5" fill="#5cb85c" opacity="0.7"/>
        {/* Ground */}
        <line x1="8" y1="50" x2="56" y2="50" stroke="#5cb85c" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Grass hints */}
        <line x1="12" y1="50" x2="10" y2="44" stroke="#5cb85c" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="20" y1="50" x2="18" y2="43" stroke="#5cb85c" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="44" y1="50" x2="46" y2="43" stroke="#5cb85c" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="52" y1="50" x2="54" y2="44" stroke="#5cb85c" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Bark Blowing",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Truck body */}
        <rect x="6" y="28" width="34" height="18" rx="3" fill="#5cb85c"/>
        {/* Cab */}
        <rect x="36" y="32" width="16" height="14" rx="3" fill="#5cb85c"/>
        {/* Window */}
        <rect x="39" y="34" width="10" height="7" rx="2" fill="white" opacity="0.35"/>
        {/* Wheels */}
        <circle cx="16" cy="48" r="5" stroke="#5cb85c" strokeWidth="2.5" fill="white"/>
        <circle cx="16" cy="48" r="2" fill="#5cb85c"/>
        <circle cx="42" cy="48" r="5" stroke="#5cb85c" strokeWidth="2.5" fill="white"/>
        <circle cx="42" cy="48" r="2" fill="#5cb85c"/>
        {/* Blower hose arc */}
        <path d="M6 30 Q2 20 10 14" fill="none" stroke="#5cb85c" strokeWidth="3" strokeLinecap="round"/>
        {/* Bark pieces flying */}
        <ellipse cx="12" cy="10" rx="4" ry="2" fill="#5cb85c" opacity="0.7" transform="rotate(-20 12 10)"/>
        <ellipse cx="20" cy="6" rx="3.5" ry="2" fill="#5cb85c" opacity="0.6" transform="rotate(10 20 6)"/>
        <ellipse cx="28" cy="10" rx="3" ry="1.8" fill="#5cb85c" opacity="0.5" transform="rotate(-10 28 10)"/>
        <ellipse cx="6" cy="16" rx="3" ry="1.5" fill="#5cb85c" opacity="0.4" transform="rotate(15 6 16)"/>
      </svg>
    ),
  },
  {
    name: "Spray Treatments",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Backpack sprayer */}
        <rect x="18" y="16" width="16" height="28" rx="4" fill="#5cb85c" opacity="0.85"/>
        {/* Tank highlight */}
        <rect x="21" y="20" width="10" height="6" rx="2" fill="white" opacity="0.3"/>
        {/* Pump handle */}
        <line x1="26" y1="14" x2="26" y2="8" stroke="#5cb85c" strokeWidth="3" strokeLinecap="round"/>
        <line x1="22" y1="8" x2="30" y2="8" stroke="#5cb85c" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Hose */}
        <path d="M34 36 Q42 36 44 30" fill="none" stroke="#5cb85c" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Wand */}
        <line x1="44" y1="30" x2="54" y2="22" stroke="#5cb85c" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Spray mist */}
        <circle cx="56" cy="18" r="2" fill="#5cb85c" opacity="0.6"/>
        <circle cx="60" cy="16" r="1.5" fill="#5cb85c" opacity="0.5"/>
        <circle cx="58" cy="22" r="1.5" fill="#5cb85c" opacity="0.5"/>
        <circle cx="62" cy="20" r="1" fill="#5cb85c" opacity="0.4"/>
        <circle cx="56" cy="14" r="1" fill="#5cb85c" opacity="0.4"/>
        {/* Strap */}
        <path d="M18 20 Q12 28 18 36" fill="none" stroke="#5cb85c" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
        {/* Ground */}
        <line x1="8" y1="52" x2="56" y2="52" stroke="#5cb85c" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function InfoSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <section ref={ref} className={`info ${visible ? "show" : ""}`}>
      <div className="info__container">
        <h2 className="info__heading">
          Our company provides the following services:
        </h2>
        <div className="info__grid">
          {services.map((service, i) => (
            <div
              className="info__card"
              key={service.name}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="info__icon">{service.icon}</div>
              <p className="info__name">{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}