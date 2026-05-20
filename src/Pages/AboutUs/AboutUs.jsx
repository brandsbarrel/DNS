import HeroSection from "../../Components/AboutCompany/HeroSection";
import WelcomeText from "../../Components/AboutCompany/WelcomeText";
import HowItWorks from "../../Components/HowItWorks/HowItWorks";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";

const AboutUs = () => {
    return (
        <>
            <HeroSection />
            <WelcomeText />
            <WhyChooseUs />
            <HowItWorks />
            <WhyChooseUs/>
        </>
    );
};

export default AboutUs;