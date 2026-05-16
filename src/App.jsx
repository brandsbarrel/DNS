import React, { useEffect } from 'react'
import AOS from "aos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HelmetProvider } from 'react-helmet-async';
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home/Home'
import ContactUs from './Pages/ContactUs/ContactUs';
import BookOnline from './Pages/BookOnline/BookOnline';
import MyBooking from './Pages/MyBooking/MyBooking';
import MyBookingsDashboard from './Components/MyBookingsDashboard/MyBookingsDashboard';
import PaymentFailed from './Components/Paymentfailed/Paymentfailed';
import PaymentSuccess from './Components/Paymentsuccess/Paymentsuccess';
import TermsAndConditions from './Components/TermsAndConditions/TermsAndConditions';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import Services from './Pages/Services/Services';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';

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
              <Route path='services/' element={<Services/>} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              {/* <Route path='/my-booking' element={<MyBooking />} /> */}
              {/* <Route path='/my-booking-dashboard' element={<MyBookingsDashboard />} /> */}
              {/* <Route path='/book-online' element={<BookOnline />} /> */}
              {/* <Route path='/payment-failed' element={<PaymentFailed />} /> */}
              {/* <Route path='/payment-success' element={<PaymentSuccess />} /> */}
              {/* <Route path='/terms-and-conditions' element={<TermsAndConditions />} /> */}
              {/* <Route path='/forgot-password' element={<ForgotPassword />} /> */}
            </Route>
          </Routes>
        </Router>
      </HelmetProvider>
    </>
  )
}

export default App