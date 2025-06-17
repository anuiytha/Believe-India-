import React from 'react';

const SimpleHome = () => {
    return (
        <div style={{
            padding: '40px',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
            minHeight: '100vh',
            backgroundColor: '#f8f9fa'
        }}>
            <h1 style={{ color: '#333', marginBottom: '30px' }}>
                Welcome to Believe India
            </h1>
            <p style={{ color: '#666', fontSize: '18px', marginBottom: '20px' }}>
                Empowering dreams, building futures
            </p>
            <div style={{
                marginTop: '40px',
                padding: '30px',
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
                <h2 style={{ color: '#007bff', marginBottom: '20px' }}>
                    dream.believe.do
                </h2>
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                    <div style={{ margin: '10px', padding: '20px', backgroundColor: '#e3f2fd', borderRadius: '8px', minWidth: '200px' }}>
                        <h3 style={{ color: '#1976d2' }}>Dream</h3>
                        <p>We believe in the power of dreams and aspirations.</p>
                    </div>
                    <div style={{ margin: '10px', padding: '20px', backgroundColor: '#f3e5f5', borderRadius: '8px', minWidth: '200px' }}>
                        <h3 style={{ color: '#7b1fa2' }}>Believe</h3>
                        <p>Faith in oneself and the collective potential of our community.</p>
                    </div>
                    <div style={{ margin: '10px', padding: '20px', backgroundColor: '#e8f5e8', borderRadius: '8px', minWidth: '200px' }}>
                        <h3 style={{ color: '#388e3c' }}>Do</h3>
                        <p>Taking action to turn dreams into reality.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimpleHome; 