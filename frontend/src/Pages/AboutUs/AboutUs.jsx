import HeroSection from "../../Components/AboutCompany/HeroSection";
import WelcomeText from "../../Components/AboutCompany/WelcomeText";
import HowItWorks from "../../Components/HowItWorks/HowItWorks";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import SuburbsCard from "../../Components/SuburbsCard/SuburbsCard"
import Footer_image from "../../assets/Footer_image.jpeg"

const AboutUs = () => {
    return (
        <>
            <HeroSection />
            <WelcomeText />
            {/* <WhyChooseUs /> */}
            <HowItWorks />
            <SuburbsCard />
            {/* ── Gallery Image — page ke end mein ── */}
            <div className="sc2-gallery-wrap">
                <img src={Footer_image} alt="SNG Maintenance Gallery" className="sc2-gallery-img" />
            </div>
        </>
    );
};

export default AboutUs;