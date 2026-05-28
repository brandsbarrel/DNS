import React from 'react'
import Hero from "../../Components/Hero/Hero"
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs"
import ServiceCard from '../../Components/ServiceCard/ServiceCard'
import HowItWorks from '../../Components/HowItWorks/HowItWorks'


const Home = () => {
    return (
        <>
            <Hero />
            <ServiceCard />
            <WhyChooseUs />
            <HowItWorks />
        </>
    )
}

export default Home
