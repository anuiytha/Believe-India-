import { useState, useEffect } from 'react';

const useContentful = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getCarouselImages = async () => {
        setIsLoading(true);
        setError(null);

        try {
            // For now, return mock data to prevent the blank screen
            // You can replace this with actual Contentful API calls later
            const mockCarouselData = [
                {
                    title: "Welcome to Believe India",
                    description: "Empowering dreams, building futures",
                    imageUrl: "/public/bilogo.jpg"
                },
                {
                    title: "Innovation Hub",
                    description: "Where ideas come to life",
                    imageUrl: "/public/company-and-team-illustration-in-minimal-style-png.webp"
                }
            ];

            return mockCarouselData;
        } catch (err) {
            setError(err);
            console.error('Error fetching carousel images:', err);
            return [];
        } finally {
            setIsLoading(false);
        }
    };

    const getBelieveIndiaIntro = async () => {
        setIsLoading(true);
        setError(null);

        try {
            // Mock data for Believe India intros
            const mockIntroData = [
                {
                    name: "Dream",
                    description: "We believe in the power of dreams and aspirations."
                },
                {
                    name: "Believe",
                    description: "Faith in oneself and the collective potential of our community."
                },
                {
                    name: "Do",
                    description: "Taking action to turn dreams into reality."
                }
            ];

            return mockIntroData;
        } catch (err) {
            setError(err);
            console.error('Error fetching Believe India intros:', err);
            return [];
        } finally {
            setIsLoading(false);
        }
    };

    return {
        getCarouselImages,
        getBelieveIndiaIntro,
        isLoading,
        error
    };
};

export default useContentful; 