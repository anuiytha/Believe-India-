import React, { useState, useEffect } from 'react';
import './home.css';
import useContentful from '../contentful/useContentful';
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faRocket, faHandHoldingHeart, faUsers, faRecycle, faBalanceScale, faBullhorn, faNetworkWired, faStore, faChild } from "@fortawesome/free-solid-svg-icons";

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
    const { getCarouselImages } = useContentful();
    const { getBelieveIndiaIntro } = useContentful();
    const [biIntros, setBiIntros] = useState([]);

    useEffect(() => {
        getCarouselImages().then((data) => {
            console.log("Fetched Carousel Images:", data);
            setSlides(data);
        }).catch(error => {
            console.error("Error fetching carousel images:", error);
        });
        getBelieveIndiaIntro().then((data) => {
            console.log("Fetched Bi Intros:", data);
            setBiIntros(data);
        }).catch(error => {
            console.error("Error fetching bi intros:", error);
        });
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
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
                                    <div className="slide-background" style={{ backgroundImage: `url(${slide.imageUrl})` }}>
                                        <div className="slide-overlay">
                                            <div className="slide-content">

                                                <p className="slide-description">{slide.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Loading carousel images...</p>
                    )}

                    {/* Navigation Arrows */}
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
                </div>
            </section>

            {/* Main Content Grid */}
            <div className="home-main-grid">
                {/* Left Column: Logo and Mission */}
                <div className="home-left-col">
                    <div className="logo-section">
                        <img src="/bilogo.jpg" alt="Believe India Logo" className="logo" />
                        <h1 className="tagline">Be the Change</h1>
                    </div>
                    <div className="mission-box-img-style">
                        <h2>MISSION</h2>
                        <p>
                            The mission is to promote and strengthen Fair Trade and empowering practices and concepts among all the stakeholders including producers, intermediary organizations and consumers globally in designing, production, marketing and development with missionary zeal.
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





