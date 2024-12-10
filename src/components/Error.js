import React, {useState, useEffect} from 'react';
import './Error.css';

const Error = ( {onClose} ) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onClose, 1000); // Call onClose after fade animation
        }, 2000); // Show error for 2 seconds

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`error-message ${!isVisible ? 'fade-out' : ''}`}>
            <p>Error: Search unsuccessful. Please try again!</p>
        </div>
    );
}

export default Error;