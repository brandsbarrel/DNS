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

import avista from "../../assets/avista.png"
import shores from "../../assets/balmain shores.png"
import cove from "../../assets/cove.png";
import union from "../../assets/union.png";
import garden from "../../assets/garden.png";

import {
  LuGrid2X2,
  LuBuilding2,
  LuTreePine
} from "react-icons/lu";

import { PiPlantLight } from "react-icons/pi";

import { useState } from "react";

export default function Gallery() {

  const [activeTab, setActiveTab] = useState("all");
  const projects = [
    {
      id: 1,
      site: "Balmainshores Site:",
      location: "Corner of Victoria Road and\nTerry Street Rozelle",
      image: [bg1],
      showLabel: true,
      align: "center",
      category: "shores",
    },

    {
      id: 2,
      site: "Topiary trees is an art:",
      location: "",
      image: [ta2, ta1],
      showLabel: false,
      align: "left",
      category: "shores",
    },

    {
      id: 3,
      site: "Mowing:",
      location: "",
      image: [mg2, mg1],
      showLabel: false,
      align: "left",
      category: "shores",
    },

    {
      id: 4,
      site: "Granular and liquid fertilising:",
      location: "",
      image: [ga1, ga2],
      showLabel: false,
      align: "left",
      category: "shores",
    },

    {
      id: 5,
      site: "Balmain Cove:",
      location: "Foreshore water front area",
      image: [],
      imageSingle: bc,
      imagePairs: [[bc2, bc3]],
      showLabel: true,
      align: "center",
      category: "cove",
    },

    {
      id: 6,
      site: "Balmain Cove site",
      location: "",
      image: [],
      imageSingle: null,
      imagePairs: [[bc9, bc4], [bc5, bc6], [bc7, bc8]],
      showLabel: false,
      align: "left",
      category: "cove",
    },

    {
      id: 7,
      site: "Union site",
      location: "",
      image: [],
      imageSingle: null,
      imagePairs: [[us1, us2], [us3, us4], [us5, us6], [us7]],
      showLabel: false,
      align: "left",
      category: "union"
    },

    {
      id: 8,
      site: "Union site: Application of soft fall mulch and application of mulch to garden beds",
      location: "",
      image: [],
      imageSingle: null,
      imagePairs: [[ua1, ua2], [ua3, ua4], [ua5]],
      showLabel: false,
      align: "left",
      category: "union"
    },

    {
      id: 9,
      site: "Union site: Irrigation repairs",
      location: "",
      image: [],
      imageSingle: null,
      imagePairs: [[ui1, ui2], [ui3, ui4]],
      showLabel: false,
      align: "left",
      category: "union"
    },

    {
      id: 10,
      site: "Balmainshores site: Stage 3 Foreshore water front area",
      location: "",
      image: [],
      imageSingle: null,
      imagePairs: [[bsf1, bsf2], [bsf3]],
      showLabel: false,
      align: "left",
      category: "shores",
    },

    {
      id: 11,
      site: "Balmainshores site: Stage 3 - irrigation repairs",
      location: "",
      image: [],
      imageSingle: null,
      imagePairs: [[bi1, bi2]],
      showLabel: false,
      align: "left",
      category: "shores",
    },

    {
      id: 12,
      site: "Balmainshores site: Stage 3 Turf Restoration",
      location: "",
      image: [],
      imageSingle: null,
      imagePairs: [[bt1, bt2]],
      showLabel: false,
      align: "left",
      category: "shores",
    },

    {
      id: 13,
      site: "Avista site",
      location: "",
      image: [],
      imageSingle: null,
      imagePairs: [[av1, av2], [av3, av4], [av5]],
      showLabel: false,
      align: "left",
      category: "avista",
    },

    {
      id: 14,
      site: "Avista site: Application of mulch to garden areas",
      location: "",
      image: [],
      imageSingle: null,
      imagePairs: [[as1, as2], [as3, as4]],
      showLabel: false,
      align: "left",
      category: "avista",
    },

    {
      id: 15,
      site: "Marsfield Gardens Site: Mowing Epping Road",
      location: "",
      image: [],
      imageSingle: mm1,
      imagePairs: [],
      showLabel: true,
      align: "center",
      category: "marsfield"
    },

    {
      id: 16,
      site: "Marsfield Gardens Site",
      location: "",
      image: [],
      imageSingle: null,
      imagePairs: [[mgs1, mgs2], [mgs3, mgs4], [mgs5, mgs6]],
      showLabel: false,
      align: "left",
      category: "marsfield"
    },

    {
      id: 17,
      site: "Marsfield Gardens Site Irrigation repairs",
      location: "",
      image: [],
      imageSingle: null,
      imagePairs: [[mi1, mi2]],
      showLabel: false,
      align: "left",
      category: "marsfield",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter(
        project => project.category === activeTab
      );

  return (
    <div className="sng-page">

      {/* NAV */}
      <nav className="sng-nav">
        <div className="sng-logo">
          <div className="sng-logo-top">
            SN<span>G</span>
          </div>

          <div className="sng-logo-sub">
            — MAINTENANCE —
          </div>
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

        <div className="sng-filter-bar">

          <button
            className={`sng-filter-btn ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            <div className="sng-filter-icon"><LuGrid2X2/></div>
            <span>All Projects</span>
          </button>

          <button
            className={`sng-filter-btn ${activeTab === "shores" ? "active" : ""}`}
            onClick={() => setActiveTab("shores")}
          >
            <div className="sng-filter-icon"><img src={shores} /></div>
            <span>Balmain Shores</span>
          </button>

          <button
            className={`sng-filter-btn ${activeTab === "cove" ? "active" : ""}`}
            onClick={() => setActiveTab("cove")}
          >
            <div className="sng-filter-icon"><img src={cove} /></div>
            <span>Balmain cove</span>
          </button>

          <button
            className={`sng-filter-btn ${activeTab === "union" ? "active" : ""}`}
            onClick={() => setActiveTab("union")}
          >
            <div className="sng-filter-icon"><img src={union} /></div>
            <span>Balmain Union</span>
          </button>

          <button
            className={`sng-filter-btn ${activeTab === "avista" ? "active" : ""}`}
            onClick={() => setActiveTab("avista")}
          >
            <div className="sng-filter-icon"><img src={avista} /></div>
            <span>Avista</span>
          </button>

          <button
            className={`sng-filter-btn ${activeTab === "marsfield" ? "active" : ""}`}
            onClick={() => setActiveTab("marsfield")}
          >
            <div className="sng-filter-icon"><img src={garden} /></div>
            <span>Marsfield Gardens</span>
          </button>

        </div>

        {filteredProjects.map((project) => (
          <div
            className="sng-project"
            key={project.id}
          >
            <div
              className="sng-project-title"
              style={{ textAlign: project.align }}
            >
              {project.showLabel && (
                <span className="sng-project-label">Project: </span>
              )}

              {project.site}

              {project.location && (
                <>
                  <br />

                  {project.location
                    .split("\n")
                    .map((line, i) => (
                      <span key={i}>
                        {line}

                        {i !==
                          project.location.split("\n").length - 1 && (
                            <br />
                          )}
                      </span>
                    ))}
                </>
              )}
            </div>

            <div className="sng-card">
              {project.image.map(
                (img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={project.site}
                    className="sng-image"
                  />
                )
              )}
            </div>

            {project.imagePairs && (
              <>
                {project.imageSingle && (
                  <div className="sng-card" style={{ marginBottom: "15px" }}>
                    <img
                      src={project.imageSingle}
                      alt={project.site}
                      className="sng-image"
                    />
                  </div>
                )}

                {project.imagePairs.map((pair, pairIndex) => (
                  <div
                    className="sng-card"
                    key={pairIndex}
                    style={{ marginBottom: "15px" }}
                  >
                    {pair.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={project.site}
                        className="sng-image"
                      />
                    ))}
                  </div>
                ))}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}