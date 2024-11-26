import React from 'react';
import VenueItem from './VenueItem';

const ResultsSection = ({ results, darkMode }) => {
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
                    />
                ))}
            </div>
        </div>
    );
};

export default ResultsSection;

