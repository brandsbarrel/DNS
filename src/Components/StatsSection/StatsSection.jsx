import "./StatsSection.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function StatsSection() {
  const stats = [
    { number: 800, title: "Happy Clients" },
    { number: 300, title: "Works" },
    { number: 250, title: "Irrigation" },
    { number: 400, title: "Garden Care" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-wrapper">
        {stats.map((item, index) => (
          <div className="stat-item" key={index}>
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

            <p>{item.title}</p>

            <div className="green-line"></div>
          </div>
        ))}
      </div>
    </section>
  );
}