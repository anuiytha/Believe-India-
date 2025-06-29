import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { client } from '../../sanityio/sanityClient';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [navItems, setNavItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNavbarData = async () => {
            try {
                const query = `*[_type == "navbar"][0] {
                    links[] {
                        label,
                        url,
                        subcategories[] {
                            label,
                            url
                        }
                    }
                }`;

                const data = await client.fetch(query);
                console.log("Fetched Navbar Data:", data);

                if (data && data.links) {
                    const processedNavItems = data.links.map(item => ({
                        name: item.label,
                        path: item.url || '#',
                        hasDropdown: item.subcategories && item.subcategories.length > 0,
                        dropdownItems: item.subcategories ? item.subcategories.map(sub => ({
                            name: sub.label,
                            path: sub.url
                        })) : []
                    }));
                    setNavItems(processedNavItems);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching navbar data:", error);
                setLoading(false);
            }
        };

        fetchNavbarData();
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = (dropdownName) => {
        setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    };

    const closeDropdown = () => {
        setActiveDropdown(null);
    };

    if (loading) {
        return (
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo">
                        <Link to="/">
                            <img
                                src="./bilogo.jpg"
                                alt="Believe India Logo"
                                className="logo-image"
                            />
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/">
                        <img
                            src="./bilogo.jpg"
                            alt="Believe India Logo"
                            className="logo-image"
                        />
                    </Link>
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
                        <div key={item.name} className="nav-item-container">
                            {item.hasDropdown ? (
                                <div className="dropdown-container">
                                    <Link
                                        to={item.path}
                                        className={`nav-link dropdown-toggle ${activeDropdown === item.name ? 'active' : ''}`}
                                        onMouseEnter={() => setActiveDropdown(item.name)}
                                    >
                                        {item.name}
                                        <span className="dropdown-arrow">▼</span>
                                    </Link>
                                    <div
                                        className={`dropdown-menu ${activeDropdown === item.name ? 'active' : ''}`}
                                        onMouseLeave={closeDropdown}
                                    >
                                        {item.dropdownItems.map((dropdownItem) => (
                                            <Link
                                                key={dropdownItem.name}
                                                to={dropdownItem.path}
                                                className="dropdown-item"
                                                onClick={() => {
                                                    setIsMenuOpen(false);
                                                    closeDropdown();
                                                }}
                                            >
                                                {dropdownItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    to={item.path}
                                    className="nav-link"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            )}
                        </div>
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