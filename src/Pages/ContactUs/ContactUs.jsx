import { useState } from "react";
import "./ContactUs.css";
import contactUs from "../../assets/contactus.jpeg"
import gallaryImage from "../../assets/gallary_image.jpeg"
export default function ContactUs() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [status, setStatus] = useState(null); // null | "loading" | "success" | "error"

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            // ─── API CONNECT HERE ───────────────────────────
            // Replace the URL and body with your API details
            const response = await fetch("https://your-api-endpoint.com/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            // ────────────────────────────────────────────────

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus("error");
        }
    };

    return (
        <div className="contact-page">

            {/* NAV */}
            <nav className="sng-nav">
                <div className="sng-logo">
                    <div className="sng-logo-top">SN<span>G</span></div>
                    <div className="sng-logo-sub">— MAINTENANCE —</div>
                </div>
            </nav>

            {/* HEADING */}
            <div className="contact-heading">
                <h1>Contact <span>Us</span></h1>
                <div className="contact-underline" />
                <div className="contact__img__container">
                <img className="contact__img" src={contactUs} />
                </div>            
            </div>

            {/* CONTACT CARDS */}
            <div className="contact-cards">

                {/* PHONE */}
                <div className="contact-card">
                    <div className="contact-icon-box">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28">
                            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2z"/>
                        </svg>
                    </div>
                    <div className="contact-card-content">
                        <h2 className="contact-card-label">LOOKING FOR CONSULTATION.</h2>
                        <p className="contact-card-value">
                            <a href="tel:0407460010" className="contact-link">0407 460 010</a>
                        </p>
                    </div>
                </div>

                {/* EMAIL */}
                <div className="contact-card">
                    <div className="contact-icon-box">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28">
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                    </div>
                    <div className="contact-card-content">
                        <h2 className="contact-card-label">EMAIL US</h2>
                        <p className="contact-card-value">
                            <a href="mailto:info@sngmaintenance.com.au" className="contact-link">
                                info@sngmaintenance.com.au
                            </a>
                        </p>
                    </div>
                </div>

                {/* ADDRESS */}
                <div className="contact-card">
                    <div className="contact-icon-box">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                        </svg>
                    </div>
                    <div className="contact-card-content">
                        <h2 className="contact-card-label">VISIT OUR LOCATION.</h2>
                        <p className="contact-card-value">
                            U33-94/116 Culloden Rd,<br />
                            Marsfield NSW 2122
                        </p>
                    </div>
                </div>

            </div>

            {/* GALLERY IMAGE */}
            <div className="contact-gallery">
                <img className="contact-gallery-img" src={gallaryImage} alt="Gallery" />
            </div>

            {/* CONTACT FORM */}
            <div className="contact-form-section">
                <h2 className="contact-form-title">Send Us a <span>Message</span></h2>
                <div className="contact-form-underline" />

                <form className="contact-form" onSubmit={handleSubmit} noValidate>

                    <div className="form-row">
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your E-Mail"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Enter your message here..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* STATUS MESSAGES */}
                    {status === "success" && (
                        <p className="form-status success">✓ Message sent successfully!</p>
                    )}
                    {status === "error" && (
                        <p className="form-status error">✗ Something went wrong. Please try again.</p>
                    )}

                    <button
                        className="contact-submit-btn"
                        type="submit"
                        disabled={status === "loading"}
                    >
                        {status === "loading" ? "Sending..." : "Send Message →"}
                    </button>

                </form>
            </div>

        </div>
    );
}