import React from 'react';

const TestPage = () => {
    return (
        <div style={{
            padding: '20px',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f0f0f0',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <h1 style={{ color: '#333', marginBottom: '20px' }}>
                🎉 Test Page Working!
            </h1>
            <p style={{ color: '#666', fontSize: '18px' }}>
                If you can see this, React is working correctly.
            </p>
            <div style={{
                marginTop: '20px',
                padding: '15px',
                backgroundColor: '#e8f5e8',
                borderRadius: '8px',
                border: '2px solid #4caf50'
            }}>
                <p style={{ margin: '0', color: '#2e7d32' }}>
                    ✅ React Router is working<br />
                    ✅ Components are rendering<br />
                    ✅ No critical errors detected
                </p>
            </div>
        </div>
    );
};

export default TestPage; 