import React from 'react';
import '../../styles.css';

const Completed = () => {
    return (
        <div className="completed-page">
            <div className="work-in-progress-container">
                <div className="work-in-progress-image">
                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Background circle */}
                        <circle cx="100" cy="100" r="90" fill="#f8f9fa" stroke="#e9ecef" strokeWidth="2" />

                        {/* Construction elements */}
                        <rect x="60" y="80" width="80" height="40" fill="#6c757d" rx="4" />
                        <rect x="70" y="90" width="60" height="20" fill="#495057" rx="2" />

                        {/* Progress bar */}
                        <rect x="40" y="140" width="120" height="8" fill="#e9ecef" rx="4" />
                        <rect x="40" y="140" width="80" height="8" fill="#007bff" rx="4" />

                        {/* Tools */}
                        <rect x="30" y="160" width="4" height="20" fill="#6c757d" rx="2" />
                        <rect x="32" y="160" width="20" height="4" fill="#6c757d" rx="2" />

                        <rect x="170" y="160" width="4" height="20" fill="#6c757d" rx="2" />
                        <rect x="150" y="160" width="20" height="4" fill="#6c757d" rx="2" />

                        {/* Animated dots */}
                        <circle cx="70" cy="50" r="4" fill="#007bff">
                            <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="100" cy="50" r="4" fill="#007bff">
                            <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
                        </circle>
                        <circle cx="130" cy="50" r="4" fill="#007bff">
                            <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" begin="1s" />
                        </circle>
                    </svg>
                </div>
                <h1 className="work-in-progress-title">Work in Progress</h1>
                <p className="work-in-progress-text">
                    We're currently building something amazing for you.
                    This page is under construction and will be available soon!
                </p>
                <div className="progress-indicator">
                    <div className="progress-bar">
                        <div className="progress-fill"></div>
                    </div>
                    <span className="progress-text">Loading amazing content...</span>
                </div>
            </div>
        </div>
    );
};

export default Completed;