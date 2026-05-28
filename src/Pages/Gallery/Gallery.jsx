import "./Gallery.css";

import bg1 from "../../assets/bg1.jpeg";

import ta1 from "../../assets/ta1.jpeg";
import ta2 from "../../assets/ta2.jpeg";

import mg1 from "../../assets/mg1.jpeg";
import mg2 from "../../assets/mg2.jpeg";

import ga1 from "../../assets/GA1.jpeg";
import ga2 from "../../assets/GA2.jpeg";

import bc from "../../assets/BC.jpeg";
import bc2 from "../../assets/BC2.jpeg";
import bc3 from "../../assets/BC3.jpeg";
import bc4 from "../../assets/BC4.jpeg";
import bc5 from "../../assets/BC5.jpeg";
import bc6 from "../../assets/BC6.jpeg";
import bc7 from "../../assets/BC7.jpeg";
import bc8 from "../../assets/BC8.jpeg";
import bc9 from "../../assets/BC9.jpeg";

import us1 from "../../assets/US1.jpeg";
import us2 from "../../assets/US2.jpeg";
import us3 from "../../assets/US3.jpeg";
import us4 from "../../assets/US4.jpeg";
import us5 from "../../assets/US5.jpeg";
import us6 from "../../assets/US6.jpeg";
import us7 from "../../assets/US7.jpeg";

import ua1 from "../../assets/UA1.jpeg";
import ua2 from "../../assets/UA2.jpeg";
import ua3 from "../../assets/UA3.jpeg";
import ua4 from "../../assets/UA4.jpeg";
import ua5 from "../../assets/UA5.jpeg";

import ui1 from "../../assets/UI1.jpeg";
import ui2 from "../../assets/UI2.jpeg";
import ui3 from "../../assets/UI3.jpeg";
import ui4 from "../../assets/UI4.jpeg";

import bsf1 from "../../assets/BSF1.jpeg";
import bsf2 from "../../assets/BSF2.jpeg";
import bsf3 from "../../assets/BSF3.jpeg";

import bi1 from "../../assets/BI1.jpeg";
import bi2 from "../../assets/BI2.jpeg";

import bt1 from "../../assets/BT1.jpeg";
import bt2 from "../../assets/BT2.jpeg";

import av1 from "../../assets/AV1.jpeg";
import av2 from "../../assets/AV2.jpeg";
import av3 from "../../assets/AV3.jpeg";
import av4 from "../../assets/AV4.jpeg";
import av5 from "../../assets/AV5.jpeg";

import as1 from "../../assets/AS1.jpeg";
import as2 from "../../assets/AS2.jpeg";
import as3 from "../../assets/AS3.jpeg";
import as4 from "../../assets/AS4.jpeg";

import mm1 from "../../assets/MM1.jpeg";

import mgs1 from "../../assets/MGS1.jpeg";
import mgs2 from "../../assets/MGS2.jpeg";
import mgs3 from "../../assets/MGS3.jpeg";
import mgs4 from "../../assets/MGS4.jpeg";
import mgs5 from "../../assets/MGS5.jpeg";
import mgs6 from "../../assets/MGS6.jpeg";

import mi1 from "../../assets/MI1.jpeg";
import mi2 from "../../assets/MI2.jpeg";

import avista from "../../assets/avista.png";
import shores from "../../assets/balmain shores.png";
import cove from "../../assets/cove.png";
import union from "../../assets/union.png";
import garden from "../../assets/garden.png";

import { LuGrid2X2 } from "react-icons/lu";
import { useState } from "react";

/* ─────────────────────────────────────────
   Hero Card — left: name+address, right: image
───────────────────────────────────────── */
function HeroCard({ projectLabel, name, address, heroImage }) {
  return (
    <div className="sng-hero-card">
      {/* LEFT */}
      <div className="sng-hero-left">
        <span className="sng-project-label">Project:</span>
        <span className="sng-hero-name">{name}</span>
        {address && (
          <span className="sng-hero-address">
            {address.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i !== address.split("\n").length - 1 && <br />}
              </span>
            ))}
          </span>
        )}
      </div>

      {/* RIGHT */}
      <div className="sng-hero-right">
        <img src={heroImage} alt={name} className="sng-hero-img" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Sub-section title (Topiary trees, Mowing…)
───────────────────────────────────────── */
function SubTitle({ text }) {
  return <div className="sng-sub-title">{text}</div>;
}

/* ─────────────────────────────────────────
   Image pair / single row
───────────────────────────────────────── */
function ImageRow({ images, alt }) {
  return (
    <div className="sng-card">
      {images.map((img, i) => (
        <img key={i} src={img} alt={alt} className="sng-image" />
      ))}
    </div>
  );
}

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("all");

  /* ── PROJECTS DATA ── */
  const projects = [
    /* ── BALMAIN SHORES ── */
    {
      id: "shores",
      category: "shores",
      hero: {
        name: "Balmainshores Site",
        address: "Corner of Victoria Road and\nTerry Street Rozelle",
        image: bg1,
      },
      sections: [
        {
          title: "Topiary trees is an art:",
          rows: [[ta2, ta1]],
        },
        {
          title: "Mowing:",
          rows: [[mg2, mg1]],
        },
        {
          title: "Granular and liquid fertilising:",
          rows: [[ga1, ga2]],
        },
        {
          title: "Balmainshores site: Stage 3 Foreshore water front area",
          rows: [[bsf1, bsf2], [bsf3]],
        },
        {
          title: "Balmainshores site: Stage 3 — Irrigation repairs",
          rows: [[bi1, bi2]],
        },
        {
          title: "Balmainshores site: Stage 3 Turf Restoration",
          rows: [[bt1, bt2]],
        },
      ],
    },

    /* ── BALMAIN COVE ── */
    {
      id: "cove",
      category: "cove",
      hero: {
        name: "Balmain Cove:",
        address: "Foreshore water front area",
        image: bc,
      },
      sections: [
        {
          title: null,
          rows: [[bc2, bc3]],
        },
        {
          title: "Balmain Cove site",
          rows: [[bc9, bc4], [bc5, bc6], [bc7, bc8]],
        },
      ],
    },

    /* ── BALMAIN UNION ── */
    {
      id: "union",
      category: "union",
      hero: {
        name: "Union Site",
        address: "",
        image: us1,
      },
      sections: [
        {
          title: null,
          rows: [[us2, us3], [us4, us5], [us6, us7]],
        },
        {
          title: "Union site: Application of soft fall mulch and application of mulch to garden beds",
          rows: [[ua1, ua2], [ua3, ua4], [ua5]],
        },
        {
          title: "Union site: Irrigation repairs",
          rows: [[ui1, ui2], [ui3, ui4]],
        },
      ],
    },

    /* ── AVISTA ── */
    {
      id: "avista",
      category: "avista",
      hero: {
        name: "Avista Site",
        address: "",
        image: av1,
      },
      sections: [
        {
          title: null,
          rows: [[av2, av3], [av4, av5]],
        },
        {
          title: "Avista site: Application of mulch to garden areas",
          rows: [[as1, as2], [as3, as4]],
        },
      ],
    },

    /* ── MARSFIELD GARDENS ── */
    {
      id: "marsfield",
      category: "marsfield",
      hero: {
        name: "Marsfield Gardens Site",
        address: "Mowing Epping Road",
        image: mm1,
      },
      sections: [
        {
          title: null,
          rows: [[mgs1, mgs2], [mgs3, mgs4], [mgs5, mgs6]],
        },
        {
          title: "Marsfield Gardens Site: Irrigation repairs",
          rows: [[mi1, mi2]],
        },
      ],
    },
  ];

  const filtered =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <div className="sng-page">

      {/* NAV */}
      <nav className="sng-nav">
        <div className="sng-logo">
          <div className="sng-logo-top">
            SN<span>G</span>
          </div>
          <div className="sng-logo-sub">— MAINTENANCE —</div>
        </div>
        <div className="sng-hamburger">
          <span />
          <span />
          <span />
        </div>
      </nav>

      {/* CONTENT */}
      <div className="sng-content">

        <h1 className="sng-gallery-title">
          GA<span className="galley__ll">LL</span>ERY
        </h1>

        <div className="sng-title-underline" />

        <p className="sng-subtitle">
          Explore our recent maintenance projects.
          <br />
          Quality work, every time.
        </p>

        {/* FILTER BAR */}
        <div className="sng-filter-bar">
          <button
            className={`sng-filter-btn ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            <div className="sng-filter-icon"><LuGrid2X2 /></div>
            <span>All Projects</span>
          </button>

          <button
            className={`sng-filter-btn ${activeTab === "shores" ? "active" : ""}`}
            onClick={() => setActiveTab("shores")}
          >
            <div className="sng-filter-icon"><img src={shores} alt="" /></div>
            <span>Balmain Shores</span>
          </button>

          <button
            className={`sng-filter-btn ${activeTab === "cove" ? "active" : ""}`}
            onClick={() => setActiveTab("cove")}
          >
            <div className="sng-filter-icon"><img src={cove} alt="" /></div>
            <span>Balmain Cove</span>
          </button>

          <button
            className={`sng-filter-btn ${activeTab === "union" ? "active" : ""}`}
            onClick={() => setActiveTab("union")}
          >
            <div className="sng-filter-icon"><img src={union} alt="" /></div>
            <span>Balmain Union</span>
          </button>

          <button
            className={`sng-filter-btn ${activeTab === "avista" ? "active" : ""}`}
            onClick={() => setActiveTab("avista")}
          >
            <div className="sng-filter-icon"><img src={avista} alt="" /></div>
            <span>Avista</span>
          </button>

          <button
            className={`sng-filter-btn ${activeTab === "marsfield" ? "active" : ""}`}
            onClick={() => setActiveTab("marsfield")}
          >
            <div className="sng-filter-icon"><img src={garden} alt="" /></div>
            <span>Marsfield Gardens</span>
          </button>
        </div>

        {/* PROJECTS */}
        {filtered.map((project) => (
          <div className="sng-project" key={project.id}>

            {/* HERO CARD */}
            <HeroCard
              name={project.hero.name}
              address={project.hero.address}
              heroImage={project.hero.image}
            />

            {/* SECTIONS */}
            {project.sections.map((section, si) => (
              <div className="sng-section" key={si}>
                {section.title && <SubTitle text={section.title} />}
                {section.rows.map((row, ri) => (
                  <ImageRow
                    key={ri}
                    images={row}
                    alt={project.hero.name}
                  />
                ))}
              </div>
            ))}

          </div>
        ))}

      </div>
    </div>
  );
}