import React, { useState, useEffect } from 'react';
import './home.css';
import useContentful from '../../../backend/contentful/useContentful';


const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slides, setSlides] = useState([]); // Store fetched slides
    const { getCarouselImages } = useContentful(); // Access Contentful fetch function
    const { getBelieveIndiaIntro } = useContentful();
    const [biIntros, setBiIntros] = useState([]);

    useEffect(() => {
        getCarouselImages().then((data) => {
            console.log("Fetched Carousel Images:", data); // Debugging
            setSlides(data); // Update state with Contentful data
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
        }, 5000); // Auto-advance every 5 seconds

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
                                                <h2 className="slide-title">{slide.title}</h2>
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
            <section className="bi-intros-section">
                <h2> dream.believe.do</h2>
                <div className="bi-intros-container">
                    {biIntros && biIntros.length > 0 ? (
                        biIntros.map((intro, index) => (
                            <div key={index} className="bi-intro">
                                <h2 className="bi-intro-title">{intro.name}</h2>
                                <p className="bi-intro-description">{intro.description}</p>
                            </div>
                        ))
                    ) : (
                        <p>Loading intros...</p>
                    )}
                </div>
            </section>

        </div>
    );
};

export default Home;





