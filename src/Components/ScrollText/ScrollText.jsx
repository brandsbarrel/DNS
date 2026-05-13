import React from 'react'
import "./ScrollText.css"
import { Link } from 'react-router-dom'

const ScrollText = () => {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };

    return (
        <>
            <div className='scroll-text'>
                <Link to="/book-online" onClick={() => { handleClick() }} className='scroll-quote .btn-primary'>
                    Get A Quote
                </Link>
                <div className='text-box'>
                    <p>
                        Welcome to SNG Maintenance Services
                        <br></br>
                        SNG Maintenance Services is dedicated to delivering reliable and high-quality landscaping and property maintenance solutions across Sydney and surrounding suburbs. Our services include garden care, lawn maintenance, high-pressure cleaning, and complete property upkeep for residential, strata, and commercial properties.
                        <br></br>
                        With more than a decade of industry experience, we have proudly designed, improved, and maintained outdoor spaces for a wide range of developments throughout Sydney. Our team focuses on creating gardens that are both visually appealing and practical, helping properties look their best all year round.
                        <br></br>
                        Over the years, we have expanded our services to include irrigation systems, drip-line watering solutions, water blasting, excavation works, and general property maintenance. Our equipment and expertise allow us to complete projects efficiently, from installing essential service lines to constructing retaining walls, tiered gardens, and raised garden beds.
                        <br></br>
                        At SNG Maintenance Services, we take pride in providing dependable workmanship, attention to detail, and professional service tailored to each property’s needs.
                    </p>
                </div>
                {/* <marquee className="scroll-text-content" >Safe • Secure • Conveniently Located • Affordable • 24/7 Access • Fully Fenced • Monitored Facility</marquee> */}
            </div>
        </>
    )
}

export default ScrollText