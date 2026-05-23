import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/SNG_red.png";
import { UserContext } from "../../context/UserContext";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { setUser } = useContext(UserContext);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const closeMenu = () => setMenuOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);

    return (
        <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>

            {/* Bottom Line */}
            {!scrolled && <div className="navbar__bottomLine"></div>}

            <nav className="container navbar__inner">

                <Link to="/" className="navbar__logo">
                    <img alt="SNG Logo" src={Logo} />
                </Link>

                <ul className={`navbar__links ${menuOpen ? "open" : ""}`}>
                    <li>
                        <Link
                            to="/"
                            onClick={() => {
                                closeMenu();
                                handleClick();
                                setUser("Home");
                            }}
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/about-company"
                            onClick={() => {
                                closeMenu();
                                handleClick();
                                setUser("About company");
                            }}
                        >
                            About company
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/services"
                            onClick={() => {
                                closeMenu();
                                handleClick();
                                setUser("Services");
                            }}
                        >
                            Services
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/gallery"
                            onClick={() => {
                                closeMenu();
                                handleClick();
                                setUser("Gallery");
                            }}
                        >
                            Gallery
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/testimonials"
                            onClick={() => {
                                closeMenu();
                                handleClick();
                                setUser("Testimonials");
                            }}
                        >
                            Testimonials
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/"
                            onClick={() => {
                                closeMenu();
                                handleClick();
                                setUser("Contact us");
                            }}
                        >
                            Contact us
                        </Link>
                    </li>
                </ul>

                <Link
                    to="/"
                    onClick={() => {
                        handleClick();
                        setUser("Check Availability");
                    }}
                    className="btn-primary navbar__cta"
                >
                    Check Availability
                </Link>

                <button
                    className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(prev => !prev)}
                    aria-label="Toggle Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </nav>
        </header>
    );
}