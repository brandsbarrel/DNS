import "./WelcomeText.css"
import about_our_mission from "../../assets/Abour_our_mission.jpeg"
const WelcomeText = () => {
    return (
        <>
            <div className="About_welcome_container">
                <div className="About_welcome_header" >Welcome to SNG Maintenance Services</div>
                <p className="About_welcome_text">Welcome to SNG Maintenance Services

                    SNG Maintenance Services is dedicated to delivering reliable and high-quality landscaping and property maintenance solutions across Sydney and surrounding suburbs. Our services include garden care, lawn maintenance, high-pressure cleaning, and complete property upkeep for residential, strata, and commercial properties.
                    <br></br>
                    With more than a decade of industry experience, we have proudly designed, improved, and maintained outdoor spaces for a wide range of developments throughout Sydney. Our team focuses on creating gardens that are both visually appealing and practical, helping properties look their best all year round.
                    <br></br>
                    Over the years, we have expanded our services to include irrigation systems, drip-line watering solutions, water blasting, excavation works, and general property maintenance. Our equipment and expertise allow us to complete projects efficiently, from installing essential service lines to constructing retaining walls, tiered gardens, and raised garden beds.
                    <br></br>
                    At SNG Maintenance Services, we take pride in providing dependable workmanship, attention to detail, and professional service tailored to each property’s needs.</p>
                    <br></br>
            <div className="About_our_mission">
                <div className="About_welcome_header">Our Mission</div>
                <p className="About_welcome_text">To create clean, beautiful, and well-maintained outdoor spaces that our clients are proud of</p>
                <br></br>
                <img className="About_mission_img" src={about_our_mission} />
            </div>
            <br></br>
            <div className="About_ba_gallery">
                <div className="About_welcome_header">Before & After Gallery</div>

            </div>

            </div>
        </>
    )
}

export default WelcomeText;