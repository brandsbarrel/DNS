import { useState } from "react";
import { useParams } from "react-router-dom";
import "./SuburbDetail.css";

// ─── Services ────────────────────────────────────────────────────────────────

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

const stats = [
  { num: "10+", label: "Years of Experience" },
  { num: "500+", label: "Properties Maintained" },
  { num: "100%", label: "Fully Insured" },
  { num: "7", label: "Service Areas" },
];

// ─── Slug → area data map ─────────────────────────────────────────────────────

const areaData = {
  "eastern-suburbs": {
    name: "Eastern Suburbs",
    p1: `The Eastern Suburbs is one of Sydney's most sought-after regions — a mix of beachside apartments, terraced homes, and high-end strata complexes from Bondi Beach to Randwick, Bronte to Clovelly. Properties here face a unique challenge: the salt-laden coastal air accelerates surface deterioration, stains sandstone, corrodes ironwork, and takes a toll on gardens year-round. SNG Maintenance Services understands these conditions and provides maintenance solutions specifically suited to the Eastern Suburbs' coastal environment.`,
    p2: `Our pressure cleaning services are in high demand across Bondi and Coogee, where salt spray leaves a visible film on driveways, pool surrounds, and outdoor entertaining areas. We use the right pressure and technique for each surface — sandstone, concrete, timber decking, and rendered walls — restoring them without causing damage. Our lawn and garden crews also work extensively across the unit complexes and strata buildings of Randwick and Kensington, keeping shared garden spaces tidy, healthy, and compliant with strata committee requirements.`,
    p3: `For residential properties throughout Maroubra, Bronte, and Waverley, we provide full garden maintenance programs including fertilising schedules suited to sandy coastal soils, irrigation systems designed to cope with the area's warm, dry summers, and soft fall installations for family homes with young children. Whether you manage a single beachside property or a multi-lot strata complex, SNG delivers consistent, professional results across the Eastern Suburbs every season.`,
  },
  "western-suburbs": {
    name: "Western Suburbs",
    p1: `The Western Suburbs span one of Sydney's largest and most diverse residential regions — from the unit-dense streets of Auburn and Merrylands to the large family blocks of Penrith, Blacktown, and Fairfield. With properties typically featuring bigger backyards, established trees, and wide frontages, maintenance needs here are more demanding than in inner Sydney. SNG Maintenance Services has been working across the Western Suburbs for over a decade, providing practical, no-nonsense property care suited to the scale and pace of life in the west.`,
    p2: `Lawn care is one of our most popular services across the Western Suburbs, where warm summers and clay-heavy soils create ongoing challenges for homeowners. We provide regular mowing, edge trimming, aeration, and fertilising programs tailored to the soil conditions found in suburbs like Liverpool, Campbelltown, and Parramatta. Our spray treatment teams also handle weed control across larger block sizes where manual management simply isn't practical — keeping front yards and back paddocks clear without damaging surrounding lawn or garden beds.`,
    p3: `For the growing number of new estates in Rouse Hill, Marsden Park, and the Penrith corridor, we offer full property setup and ongoing maintenance packages — from initial soft fall installation in family play areas to drip-line irrigation systems designed to keep new turf and garden beds established through the region's hot, dry summers. Our teams operate efficiently across the Western Suburbs, covering both established homes and newly built properties with the same standard of service.`,
  },
  "northern-beaches": {
    name: "Northern Beaches",
    p1: `The Northern Beaches stretches from Manly to Palm Beach — a peninsula defined by ocean frontage, native bushland, and some of Sydney's most distinctive residential properties. Homes here sit on cliff tops, back onto bush reserves, or front directly onto beach dunes, each presenting its own maintenance challenges. SNG Maintenance Services has extensive experience working across the Northern Beaches, from the densely developed streets of Dee Why and Brookvale to the private acreage properties of Avalon and Whale Beach.`,
    p2: `Coastal exposure is the defining factor for Northern Beaches garden maintenance. Salt wind, sandy soil, and strong UV all place stress on plants, lawns, and hard surfaces that simply don't apply to inland properties. Our teams select and maintain plant species that are proven performers in these conditions — natives, succulents, and salt-tolerant groundcovers that look good without constant intervention. We also manage pressure cleaning of the timber decks, sandstone paths, and boat ramp surrounds that are common throughout suburbs like Seaforth, Balgowlah, and Narrabeen.`,
    p3: `Irrigation is critical on the Northern Beaches, where sandy soils drain quickly and properties can go from lush to dry within days during summer. We design and install drip-line and pop-up irrigation systems suited to each property's layout — whether it's a compact cottage garden in Curl Curl or a sprawling native garden in Pittwater. Our bark blowing and garden bed preparation services are also popular across the area, helping homeowners maintain the natural bushland aesthetic that defines the Northern Beaches lifestyle.`,
  },
  "north-west": {
    name: "North West",
    p1: `Sydney's North West — encompassing the Hills District suburbs of Castle Hill, Baulkham Hills, Kellyville, Rouse Hill, and beyond — has seen significant residential growth over the past decade. New estates, townhouse developments, and established family homes on generous blocks all have different maintenance demands, and SNG Maintenance Services has built a strong presence across the region by delivering reliable, high-quality care for both new and long-standing properties.`,
    p2: `Large lawns are a hallmark of the North West, and our mowing and lawn care teams are set up specifically to handle them efficiently. We service everything from standard suburban blocks in Winston Hills to the expansive grounds of acreage properties in Glenhaven and Dural. Our fertilising and weed spray programs are designed around the red clay soils common throughout the Hills District — soils that compact easily, hold moisture unevenly, and require specific treatment to support healthy turf and garden growth.`,
    p3: `For the many new developments springing up across Rouse Hill, Box Hill, and the North West Growth Corridor, we offer comprehensive property setup and maintenance packages. This includes soft fall installation for playgrounds and childcare centres, irrigation system installation for newly laid turf, retaining wall construction for sloped blocks, and strata garden maintenance for the increasing number of townhouse and villa complexes in the area. We understand the fast pace of development in the North West and work to timelines that keep properties looking finished and well-maintained from day one.`,
  },
  "ryde": {
    name: "Ryde",
    p1: `The City of Ryde — covering suburbs like Meadowbank, Gladesville, West Ryde, and Eastwood — is one of Sydney's most densely populated inner-north areas, with a mix of apartment towers, strata complexes, and established family homes sitting side by side. This variety means property maintenance here requires a flexible approach: one week our crews are maintaining the shared gardens of a high-rise strata in Meadowbank, the next they're caring for a heritage-listed garden in Putney. SNG Maintenance Services knows Ryde well and delivers across the full range of property types found here.`,
    p2: `Strata garden maintenance is one of our most in-demand services in the Ryde area, where residential apartment and townhouse developments are concentrated along the Parramatta River corridor and around Ryde's main commercial centres. We work directly with strata managers and owners corporations to keep common areas — garden beds, lawns, pathways, and courtyards — looking well-maintained and safe throughout the year. Our teams are familiar with the access requirements and scheduling constraints that come with managing shared properties.`,
    p3: `For homeowners across West Ryde, Eastwood, and Gladesville, we offer regular lawn mowing, fertilising, pressure cleaning of driveways and entertaining areas, and full garden bed maintenance. Irrigation is increasingly popular in these suburbs as water-conscious homeowners look to maintain their gardens efficiently during Sydney's dry spells. We design and install systems suited to the block sizes and soil types found across Ryde, ensuring gardens stay healthy without wasting water.`,
  },
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function SuburbDetail() {
  const { slug } = useParams();
  const area = areaData[slug] ?? areaData["eastern-suburbs"];
  const [activeService, setActiveService] = useState(null);

  return (
    <div className="sd-page">
      {/* ── Intro ── */}
      <section className="sd-intro section">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 800, margin: "0 auto" }}>
            <h2 className="section-title">
              Your Local Maintenance Experts in {area.name}
            </h2>
            <p>{area.p1}</p>
            <p>{area.p2}</p>
            <p>{area.p3}</p>
          </div>
          <div className="sd-intro__stats" style={{ justifyContent: "center", marginTop: 48 }}>
            {stats.map((s) => (
              <div className="sd-stat" key={s.label} style={{ textAlign: "center" }}>
                <span className="sd-stat__num">{s.num}</span>
                <span className="sd-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="sd-services section">
        <div className="container">
          <span className="sd-label" style={{ display: "block", textAlign: "center", marginBottom: 8 }}>
            What We Do in {area.name}
          </span>
          <h2 className="section-title">
            All Services Available in{" "}
            <span className="sd-accent-text">{area.name}</span>
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
                style={{ textAlign: "center", alignItems: "center" }}
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
    </div>
  );
}