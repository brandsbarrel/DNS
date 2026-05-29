import React from 'react'
import Hero from "../../Components/Hero/Hero"
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs"
import ServiceCard from '../../Components/ServiceCard/ServiceCard'
import HowItWorks from '../../Components/HowItWorks/HowItWorks'
import home_bottom from "../../assets/home_bottom.jpeg"
import "./Home.css"

const Home = () => {
    return (
        <>
            <Hero />
            <ServiceCard />
            <WhyChooseUs />
            <HowItWorks />
            <img className="home__bottom__img" src={home_bottom} ></img>
        </>
    )
}

export default Home
