import "./Gallery.css";

import bg1 from "../../assets/bg1.jpeg";
import bg2 from "../../assets/bg2.jpeg";

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

export default function Gallery() {
  const projects = [
    {
      id: 1,
      site: "Balmainshores Site:",
      location: "Corner of Victoria Road and\nTerry Street Rozelle",
      image: [bg1],
      showLabel: true,
      align: "center",
    },

    {
      id: 2,
      site: "Topiary trees is an art:",
      location: "",
      image: [ta2, ta1],
      showLabel: false,
      align: "left",
    },

    {
      id: 3,
      site: "Mowing:",
      location: "",
      image: [mg2, mg1],
      showLabel: false,
      align: "left",
    },

    {
      id: 4,
      site: "Granular and liquid fertilising:",
      location: "",
      image: [ga1, ga2],
      showLabel: false,
      align: "left",
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
    },
  ];

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
          GALLERY
        </h1>

        <div className="sng-title-underline" />

        <p className="sng-subtitle">
          Explore our recent maintenance projects.
          <br />
          Quality work, every time.
        </p>

        {projects.map((project) => (
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