import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useContentful from '../../../contentful/useContentful';
import '../../styles.css';

const Services = () => {
    const navigate = useNavigate();
    const { getBelieveIndiaServices } = useContentful();
    const [services, setServices] = useState([]);

    useEffect(() => {
        getBelieveIndiaServices().then(setServices);
    }, [getBelieveIndiaServices]);

    const handleLearnMore = (serviceId) => {
        navigate(`/service/${serviceId}`);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
                    <div className="max-w-3xl mx-auto space-y-4">
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Believe India is a social enterprise, set up for supporting and up-scaling of various grass root level initiatives in Skill Development, Health and Livelihoods sectors.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            The team works closely with rural and urban social ventures to help them scale up their projects, draw out business plans, embark into new markets, training of trainers, capacity building of producer & self help groups, marketing, design and product development support to name a few services.
                        </p>
                    </div>
                </div>

                {/* Services List */}
                <div className="space-y-6">
                    {services.map((service) => (
                        <div key={service.id} className="service-card">
                            <img src={service.image} alt={service.title} />
                            <div className="content">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <button onClick={() => handleLearnMore(service.id)}>
                                    Learn More
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {services.length === 0 && (
                    <div className="text-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                        <p className="text-gray-600">Loading services...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Services;