import { useNavigate } from "react-router-dom";
import "./HeroSection.css";
import heroImg from "../../assets/hero-vdo.mp4";

export default function HeroSlider() {
  const navigate = useNavigate();

  return (
    <section className="About_Hero">

      {/* MOBILE ONLY TOP TEXT */}
      <div className="About_Hero__top">
        <h1 className="About_Hero__heading">
          Your Best Garden <br />
          Starts Here!
        </h1>
      </div>

      {/* VIDEO SECTION */}
      <div className="About_Hero__media-wrap">

        <video
          className="About_Hero__media"
          src={heroImg}
          poster=""
          autoPlay
          muted
          loop
          playsInline
        />

        {/* DESKTOP OVERLAY TEXT */}
        <div className="About_Hero__overlay">
          <h1 className="About_Hero__heading">
            Your Best Garden
            <br />
            Starts Here!
          </h1>
        </div>

      </div>

      {/* BOTTOM BUTTON */}
      <div className="About_Hero__bottom">
        <button
          className="About_Hero__cta"
          onClick={() => navigate("/contact")}
        >
          GET A FREE QUOTE
        </button>
      </div>

    </section>
  );
}