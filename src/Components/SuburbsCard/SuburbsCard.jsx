import { Eye, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./SuburbsCard.css";

import EasternS from "../../assets/EasternSububrs.jpeg";
import WesternS from "../../assets/WesternSuburbs.jpeg";
import NorthernB from "../../assets/NorthernBeaches.jpeg";
import NorthW from "../../assets/NorthWest.jpeg";

const areas = [
    {
        name: "Eastern suburbs",
        icon: EasternS,
        text: "Including Bondi, Randwick, Coogee and surrounding areas."
    },
    {
        name: "Western Suburbs",
        icon: WesternS,
        text: "Including Parramatta, Penrith, Blacktown and surrounding areas."
    },
    {
        name: "Northern Beaches",
        icon: NorthernB,
        text: "Including Manly, Dee Why, Mona Vale and surrounding areas."
    },
    {
        name: "North West",
        icon: NorthW,
        text: "Including Castle Hill, Rouse Hill, Kellyville and surrounding areas."
    }
];

const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function SuburbsCard() {
    const navigate = useNavigate();

    return (
        <section className="suburbs__section">
            <div className="suburbs__back">

                <div className="suburbs__headingWrap">
                    <span className="suburbs__headingLine" />
                    <h2>
                        <span>AREAS</span><br />WE SERVICE
                    </h2>
                    <span className="suburbs__headingLine" />
                </div>

                <p className="suburbs__subheading">
                    Proudly servicing Sydney and surrounding suburbs.
                </p>

                <div className="suburbsGrid">
                    {areas.map((area, index) => (
                        <div
                            className="suburbsCard"
                            key={index}
                            onClick={() => {
                                navigate(
                                    `/suburb-details/${area.name
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")}`
                                );
                                handleScrollTop();
                            }}
                        >
                            {/* TOP ROW */}
                            <div className="suburbsCard__iconText">
                                <div className="suburbsCard__icon">
                                    <img src={area.icon} alt={area.name} />
                                </div>
                                <div className="suburbsCard__content">
                                    <h3>{area.name}</h3>
                                    <div className="suburbsCard__redLine"></div>
                                    <p>{area.text}</p>
                                </div>
                            </div>

                            {/* BOTTOM ROW */}
                            <div className="suburbsCard__btnWrap">
                                <button className="suburbsCard__seeMoreBtn">
                                    <Eye size={18} />
                                    <span>SEE MORE</span>
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}