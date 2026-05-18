import { useNavigate } from "react-router-dom";
import "./HeroSection.css";
import heroImg from "../../assets/hero-vdo.mp4"; 

export default function HeroSlider() {
  const navigate = useNavigate();

  return (
    <section className="About_Hero">

      {/* ── Top CTA ── */}
      <div className="About_Hero__top">
        <h1 className="About_Hero__heading">
          Your Best Garden <br />Starts Here!
        </h1>
        {/* <button className="About_Hero__cta" onClick={() => navigate("/contact")}>
          GET A QUOTE
        </button> */}
      </div>

      {/* ── Media ── swap <img> for <video> if needed ── */}
      <div className="About_Hero__media-wrap">
        {/* <img
          className="About_Hero__media"
          src={heroImg}
          alt="SNG Maintenance garden property"
        /> */}

        {/* 👇 Uncomment this and remove the <img> above to use a video instead */}
        <video
          className="About_Hero__media"
          src={heroImg}       
          poster={heroImg}     
          autoPlay
          muted
          loop
          playsInline
        />
       
      </div>

      {/* ── Bottom CTA ── */}
      <div className="About_Hero__bottom">
        <button className="About_Hero__cta" onClick={() => navigate("/contact")}>
          GET A Free QUOTE
        </button>
      </div>

      

    </section>
  );
}