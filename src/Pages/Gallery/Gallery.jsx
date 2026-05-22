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