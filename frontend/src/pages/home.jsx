import React, { useState, useEffect } from 'react';
import './home.css';
import '../styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faRocket, faHandHoldingHeart, faUsers, faRecycle, faBalanceScale, faBullhorn, faNetworkWired, faStore, faChild } from "@fortawesome/free-solid-svg-icons";
import { client } from '../../sanityio/sanityClient';

const focusAreas = [
    { icon: faHandHoldingHeart, label: 'Capacity Building' },
    { icon: faUsers, label: 'Women Empowerment & Gender Equity' },
    { icon: faStore, label: 'Market Access' },
    { icon: faBalanceScale, label: 'Fair Trade Policy & Advocacy' },
    { icon: faRocket, label: 'Retail Branding' },
    { icon: faBullhorn, label: 'Fair Trade Promotion & Awareness' },
    { icon: faEye, label: 'Supply Chain' },
    { icon: faRecycle, label: 'Environment & Sustainability' },
    { icon: faChild, label: 'Fight Child labor' },
    { icon: faNetworkWired, label: 'Networks' },
];

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slides, setSlides] = useState([]);
    const [homeData, setHomeData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHomeData = async () => {
            try {
                const query = `*[_type == "home"][0] {
                    title,
                    biLogo,
                    "biLogoImage": biLogoImage.asset->url,
                    description,
                    carouselImages[] {
                        title,
                        description,
                        "image": image.asset->url
                    },
                    homepageContent[] {
                        title,
                        description,
                        "image": image.asset->url
                    }
                }`;

                const data = await client.fetch(query);
                console.log("Fetched Home Data:", data);

                console.log("Fetched Home Data:", data);

                // Set carousel slides from the fetched data
                if (data?.carouselImages) {
                    setSlides(data.carouselImages);
                }

                setLoading(false);
            } catch (error) {
                console.error("Error fetching home data:", error);
                setLoading(false);
            }
        };

        fetchHomeData();
    }, []);

    useEffect(() => {
        if (slides.length > 0) {
            const timer = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
            }, 5000);

            return () => clearInterval(timer);
        }
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    if (loading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                fontSize: '18px'
            }}>
                Loading...
            </div>
        );
    }

    return (
        <div>
            {/* Hero Section with Carousel */}
            <section className="hero-section">
                <div className="carousel-container">
                    {slides.length > 0 ? (
                        <div className="carousel">
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                                    style={{
                                        transform: `translateX(${(index - currentSlide) * 100}%)`
                                    }}
                                >
                                    <div className="slide-background" style={{ backgroundImage: `url(${slide.image})` }}>
                                        <div className="slide-overlay">
                                            <div className="slide-content">
                                                {slide.title && <h2 className="slide-title">{slide.title}</h2>}
                                                <p className="slide-description">{slide.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="carousel">
                            <div className="carousel-slide active">
                                <div className="slide-background" style={{ backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                                    <div className="slide-overlay">
                                        <div className="slide-content">
                                            <h2 className="slide-title">Welcome to Believe India</h2>
                                            <p className="slide-description">Empowering communities through fair trade and sustainable practices</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Navigation Arrows */}
                    {slides.length > 1 && (
                        <>
                            <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            {/* Dots Navigation */}
                            <div className="carousel-dots">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                                        onClick={() => goToSlide(index)}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* Main Content Grid */}
            <div className="home-main-grid">
                {/* Left Column: Logo and Mission */}
                <div className="home-left-col">
                    <div className="logo-section">
                        <img
                            src={homeData?.biLogoImage}
                            alt="Believe India Logo"
                            className="logo"
                        />
                        {/* <h1 className="tagline">{homeData?.biLogo || "Be the Change"}</h1> */}
                    </div>
                    <div className="mission-box-img-style">
                        {/* <h2>MISSION</h2> */}
                        <p>

                            {homeData.homepageContent.map((item, index) => (
                                <div key={index}>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                        </p>
                    </div>
                </div>
                {/* Right Column: Vision and Focus Areas */}
                <div className="home-right-col">
                    <div className="vision-box-img-style">
                        <h2>VISION</h2>
                        <p>
                            Believe India envisions to facilitate empowerment and sustainability of the grassroots producers, artisans and crafts persons through fairness and transparency in trade, alleviating poverty, ignorance and unemployment in India
                        </p>
                    </div>
                    <div className="focus-areas-img-style">
                        <div className="focus-areas-grid">
                            {focusAreas.map((area, idx) => (
                                <div className="focus-area-item" key={area.label}>
                                    <FontAwesomeIcon icon={area.icon} className="focus-area-icon" />
                                    <span>{area.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;





