import "./StatsSection.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import gardencare from "../../assets/stats-gardenCare.jpeg";
import Happyclient from "../../assets/stats-happyClients.jpeg";
import checklist from "../../assets/stats_checklist.jpeg";
import sprinkler from "../../assets/StatsSprinkler.jpeg";

import gardencare_img from "../../assets/stats-gardenCare-img.jpeg";
import Happyclient_img from "../../assets/stats-happyClients-img.jpeg";
import checklist_img from "../../assets/stats_checklist-img.jpeg";
import sprinkler_img from "../../assets/StatsSprinkler-img.jpeg";

export default function StatsSection() {

  const stats = [
    {
      number: 800,
      title: "Happy Clients",
      desc: "Proudly serving homes and businesses across Sydney.",
      icon: Happyclient,
      image: Happyclient_img,
    },

    {
      number: 300,
      title: "Works",
      desc: "Successfully completed projects of all sizes.",
      icon: checklist,
      image: checklist_img,
    },

    {
      number: 250,
      title: "Irrigation",
      desc: "Efficient systems designed for healthy, lush landscapes.",
      icon: sprinkler,
      image: sprinkler_img,
    },

    {
      number: 400,
      title: "Garden Care",
      desc: "Ongoing care to keep your garden thriving.",
      icon: gardencare,
      image: gardencare_img,
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-container">

        {stats.map((item, index) => (

          <div className="stats-card" key={index}>

            {/* LEFT ICON */}
            <div className="stats-icon-wrap">

              <div className="stats-icon">

                <img
                  src={item.icon}
                  alt={item.title}
                />

              </div>

            </div>

            {/* CENTER CONTENT */}
            <div className="stats-content">

              <h2>
                {inView ? (
                  <CountUp
                    start={0}
                    end={item.number}
                    duration={2.5}
                  />
                ) : (
                  0
                )}
                +
              </h2>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <div className="stats-line"></div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="stats-image">

              <img
                src={item.image}
                alt={item.title}
              />

            </div>

          </div>

        ))}

      </div>
    </section>
  );
}