import React from 'react'
import Hero from "../../Components/Hero/Hero"
// import WelcomeText from "../../Components/WelcomeText/WelcomeText"
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs"
import ServiceCard from '../../Components/ServiceCard/ServiceCard'
import HowItWorks from '../../Components/HowItWorks/HowItWorks'


const Home = () => {
    return (
        <>
            <Hero />
            {/* <WelcomeText /> */}
            <ServiceCard />
            <WhyChooseUs />
            <HowItWorks />
        </>
    )
}

export default Home
