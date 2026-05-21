import React, { useEffect } from 'react'
import AOS from "aos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HelmetProvider } from 'react-helmet-async';
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home/Home'
import ContactUs from './Pages/ContactUs/ContactUs';
import BookOnline from './Pages/BookOnline/BookOnline';
import TermsAndConditions from './Components/TermsAndConditions/TermsAndConditions';
import Services from './Pages/Services/Services';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';
import AboutUs from './Pages/AboutUs/AboutUs';
import SuburbDetail from './Components/SuburbDetail/SuburbDetail';

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <HelmetProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='services/' element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/about-company" element={<AboutUs />} />
              <Route path='/suburb-details' element={<SuburbDetail />} />
              <Route path= '/gallery' element={<AboutUs/>} />
            </Route>
          </Routes>
        </Router>
      </HelmetProvider>
    </>
  )
}

export default App