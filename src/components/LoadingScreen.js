import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';
import logo from '../logoto.png';

const LoadingScreen = ({ onLoadComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            // Wait for fade animation to complete before calling onLoadComplete
            const completeTimer = setTimeout(onLoadComplete, 1000);
            return () => clearTimeout(completeTimer);
        }, 500);

        return () => clearTimeout(timer);
    }, [onLoadComplete]);

    return (
        <div className={`loading-screen ${!isVisible ? 'fade-out' : ''}`}>
            <img src={logo} alt="Loading..." className="loading-logo" />
        </div>
    );
};

export default LoadingScreen;