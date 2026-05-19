import "./HowItWorks.css";
import {
  FileText,
  CalendarDays,
  DollarSign,
  ThumbsUp,
  MapPin
} from "lucide-react";

export default function HowItWorks() {

  const steps = [
    {
      no: "1",
      icon: <FileText />,
      title: "Request a Quote",
      desc: "Send us a message or call us for a free quote."
    },
    {
      no: "2",
      icon: <CalendarDays />,
      title: "We Inspect Your Property",
      desc: "We visit your property or discuss the scope of work."
    },
    {
      no: "3",
      icon: <DollarSign />,
      title: "Receive a Fixed Price",
      desc: "You'll receive a clear and transparent quote."
    },
    {
      no: "4",
      icon: <ThumbsUp />,
      title: "Enjoy a Maintained Property",
      desc: "We get the job done and you enjoy the results."
    }
  ];

  const areas = [
    "Ryde",
    "Meadowbank",
    "Gladesville",
    "Parramatta",
    "Inner West",
    "Hills District",
    "Northern Suburbs"
  ];

  return (
    <>
    <section className="works_steps1">

      <div className="container">

        {/* Heading */}

        <div className="headingWrap">

          <span className="headingLine"></span>

          <h2>
            HOW <span>IT</span> WORKS
          </h2>

          <span className="headingLine"></span>

        </div>

        <p className="subheading">
          Simple process, great results.
        </p>


        {/* Steps */}

        <div className="stepsGrid">

          {steps.map((step,index)=>(

            <div className="stepCard" key={index}>

              <div className="circleArea">

                <div className="stepNo">
                  {step.no}
                </div>

                <svg
                className="curve"
                viewBox="0 0 100 100"
                >

                <path
                d="M15,70 A35,35 0 1,1 85,70"
                fill="none"
                stroke={index%2===0 ? "#d80000":"#000"}
                strokeWidth="3"
                />

                </svg>

                <div className="circle">

                  {step.icon}

                </div>

              </div>

              <h3>{step.title}</h3>

              <div className="miniLine"></div>

              <p>{step.desc}</p>

            </div>

          ))}

        </div>
        </div>
        </section>

        <section className="works_steps2">

        {/* Areas */}

          <div className="areas_back">
        <div className="headingWrap">

          <span className="headingLine"></span>

          <h2>
            <span>AREAS</span> WE SERVICE
          </h2>

          <span className="headingLine"></span>

        </div>

        <p className="subheading">
          Proudly servicing Sydney and surrounding suburbs.
        </p>


        <div className="areaGrid">

          {areas.map((area,index)=>(

            <div className="areaTag" key={index}>

              <MapPin size={20}/>

              <span className="vertical"></span>

              {area}

            </div>

          ))}

        </div>
          </div>

    </section>
    </>
  );
}