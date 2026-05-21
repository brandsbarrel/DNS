import "./Gallery.css";
import bg1 from "../../assets/bg1.jpeg";
import bg2 from "../../assets/bg2.jpeg";
import ta1 from "../../assets/ta1.jpeg";
import ta2 from "../../assets/ta2.jpeg";
import mg1 from "../../assets/mg1.jpeg"
import mg2 from "../../assets/mg2.jpeg"

export default function Gallery() {
  const projects = [
    {
      id: 1,
      site: "Balmainshores Site:",
      location: "Corner of Victoria Road and\nTerry Street Rozelle",
      image: [bg1, bg2],
    },
    {
      id: 2,
      site: "Balmain Shores site:",
      location:
        "topiary trees is a art",
      image: [
        ta1,ta2
      ],
    },
    {
      id: 3,
      site: "Balmain Shores site:",
      location: "",
      image: [
        mg1,mg2
      ],
    },
  ];

  return (
    <div className="sng-page">
      {/* Nav */}
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

      {/* Main Content */}
      <div className="sng-content">
        <h1 className="sng-gallery-title">GALLERY</h1>
        <div className="sng-title-underline"></div>

        <p className="sng-subtitle">
          Explore our recent maintenance projects.
          <br />
          Quality work, every time.
        </p>

        {projects.map((project) => (
          <div className="sng-project" key={project.id}>
            <div className="sng-project-title">
              {project.site}
              <br />

              {project.location
                .split("\n")
                .map((line, i) => (
                  <span key={i}>
                    {line}
                    {i !== project.location.split("\n").length - 1 && <br />}
                  </span>
                ))}
            </div>

            <div className="sng-card">
              {project.image.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={project.site}
                  className="sng-image"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}