import React from 'react'
import Hero from "../../Components/Hero/Hero"
// import WelcomeText from "../../Components/WelcomeText/WelcomeText"
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs"
import BannerCTA from "../../Components/BannerCTA/BannerCTA"
import Stats from "../../Components/Stats/Stats"
import FindUs from "../../Components/FindUs/FindUs"
import ServiceCard from '../../Components/ServiceCard/ServiceCard'


const Home = () => {
    return (
        <>
            <Hero />
            {/* <WelcomeText /> */}
            <ServiceCard/>
            <WhyChooseUs />
            <BannerCTA />
            <Stats />
            <FindUs />
        </>
    )
}

export default Home