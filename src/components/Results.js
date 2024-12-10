import React from 'react';
import VenueItem from './VenueItem';

const ResultsSection = ({ results, darkMode }) => {

    let emailSent = false;

    const onSendEmail = (email, venueName) => {
        if(emailSent) return;
        emailSent = true;

        const subject = `Inquiry about ${venueName}`;
        const body = `Hello, I'm interested in booking ${venueName} for an upcoming event. Please let us know how to proceed. Thank you!`;
    
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        setTimeout(() => {
            emailSent=false;
        },1000);
    };

    return (
        <div className={`results-section ${darkMode ? 'dark' : ''}`}>
            <h2>Search Results</h2>
            <div className="results-list">
                {results.map((venue) => (
                    <VenueItem
                        key={venue.id}
                        {...venue}
                        darkMode={darkMode}
                        photo={venue.photo} // Pass the photo prop for search results
                        onSendEmail = {onSendEmail}
                    />
                ))}
            </div>
        </div>
    );
};

export default ResultsSection;

