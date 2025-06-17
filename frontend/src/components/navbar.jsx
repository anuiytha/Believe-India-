import React, { useState, useEffect } from 'react';
import './navbar.css';
import useContentful from '../../../backend/contentful/useContentful';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false); // This would typically come from your auth context
    const [biLogo, setBiLogo] = useState(null);
    const { getBIHomePage } = useContentful();

    useEffect(() => {
        getBIHomePage().then((data) => {
            console.log("Fetched BIHomePage Data:", data); // Debugging
            setBiLogo(data);
        });
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Initiatives', path: '/initiatives' },
        { name: 'Idea Bank', path: '/idea-bank' },
        { name: 'Partners', path: '/partners' },
        { name: 'Contact Us', path: '/contact' }
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="/">
                        <img
                            src={biLogo?.biLogoImage?.fields?.file?.url ? `https:${biLogo.biLogoImage.fields.file.url}` : './bilogo.jpg'}
                            alt={biLogo?.biLogoImage?.fields?.title || "Believe India Logo"}
                            className="logo-image"
                        />


                    </a>
                </div>

                {/* Mobile menu button */}
                <button
                    className={`mobile-menu-button ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Navigation links */}
                <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.path}
                            className="nav-link"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Sign in section */}
                <div className="navbar-auth">
                    {isSignedIn ? (
                        <div className="user-profile">
                            <img
                                src="https://via.placeholder.com/32"
                                alt="User profile"
                                className="user-avatar"
                            />
                            <span className="user-name">John Doe</span>
                        </div>
                    ) : (
                        <button
                            className="sign-in-button"
                            onClick={() => setIsSignedIn(true)} // This would typically open a sign-in modal
                        >
                            Sign In
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;