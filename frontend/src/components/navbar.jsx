import React, { useState, useEffect } from 'react';
import './navbar.css';
import useContentful from '../../contentful/useContentful';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false); // This would typically come from your auth context
    const [biLogo, setBiLogo] = useState(null);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const { getBIHomePage } = useContentful();
    const { getAboutDropdownlist } = useContentful();
    const [aboutDropdownList, setAboutDropdownList] = useState([]);
    useEffect(() => {
        getBIHomePage().then((data) => {
            console.log("Fetched BIHomePage Data:", data); // Debugging
            setBiLogo(data);
        });
        getAboutDropdownlist().then((data) => {
            console.log("Fetched About Dropdown List:", data); // Debugging
            setAboutDropdownList(data);
        });
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

    const navItems = [
        {
            name: 'Home',
            path: '/',
            hasDropdown: false
        },
        {
            name: 'About',
            path: '/about',
            hasDropdown: true,
            dropdownItems: aboutDropdownList.map(item => ({
                name: item.name,
                path: item.path
            }))
        },
        {
            name: 'Services',
            path: '/services',
            hasDropdown: true,
            dropdownItems: [
                { name: 'Consulting', path: '/services/consulting' },
                { name: 'Training Programs', path: '/services/training' },
                { name: 'Workshops', path: '/services/workshops' },
                { name: 'Mentorship', path: '/services/mentorship' },
                { name: 'Research & Development', path: '/services/research' }
            ]
        },
        // {
        //     name: 'Initiatives',
        //     path: '/projects',
        //     hasDropdown: true,
        //     dropdownItems: [
        //         { name: 'Current Projects', path: '/projects/current' },
        //         { name: 'Completed Projects', path: '/projects/completed' },
        //         { name: 'Upcoming Projects', path: '/projects/upcoming' },
        //         { name: 'Success Stories', path: '/projects/success-stories' }
        //     ]
        // },
        // {
        //     name: 'Idea Bank',
        //     path: '/idea-bank',
        //     hasDropdown: true,
        //     dropdownItems: [
        //         { name: 'Submit Idea', path: '/idea-bank/submit' },
        //         { name: 'Browse Ideas', path: '/idea-bank/browse' },
        //         { name: 'Featured Ideas', path: '/idea-bank/featured' },
        //         { name: 'Idea Guidelines', path: '/idea-bank/guidelines' }
        //     ]
        // },
        // {
        //     name: 'Partners',
        //     path: '/partners',
        //     hasDropdown: true,
        //     dropdownItems: [
        //         { name: 'Our Partners', path: '/partners/list' },
        //         { name: 'Become a Partner', path: '/partners/join' },
        //         { name: 'Partnership Programs', path: '/partners/programs' },
        //         { name: 'Partner Resources', path: '/partners/resources' }
        //     ]
        // },
        // {
        //     name: 'Contact Us',
        //     path: '/contact',
        //     hasDropdown: true,
        //     dropdownItems: [
        //         { name: 'Get in Touch', path: '/contact' },
        //         { name: 'Support', path: '/contact/support' },
        //         { name: 'Careers', path: '/contact/careers' },
        //         { name: 'Media Inquiries', path: '/contact/media' }
        //     ]
        // }
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
                        <div key={item.name} className="nav-item-container">
                            {item.hasDropdown ? (
                                <div className="dropdown-container">
                                    <button
                                        className={`nav-link dropdown-toggle ${activeDropdown === item.name ? 'active' : ''}`}
                                        onClick={() => toggleDropdown(item.name)}
                                        onMouseEnter={() => setActiveDropdown(item.name)}
                                    >
                                        {item.name}
                                        <span className="dropdown-arrow">▼</span>
                                    </button>
                                    <div
                                        className={`dropdown-menu ${activeDropdown === item.name ? 'active' : ''}`}
                                        onMouseLeave={closeDropdown}
                                    >
                                        {item.dropdownItems.map((dropdownItem) => (
                                            <a
                                                key={dropdownItem.name}
                                                href={dropdownItem.path}
                                                className="dropdown-item"
                                                onClick={() => {
                                                    setIsMenuOpen(false);
                                                    closeDropdown();
                                                }}
                                            >
                                                {dropdownItem.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <a
                                    href={item.path}
                                    className="nav-link"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
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