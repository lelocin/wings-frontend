import React from 'react';
import VenueItem from './VenueItem';

const VenueList = ({ venues, darkMode }) => {
  return (
    <div className={`venue-list ${darkMode ? 'dark' : ''}`}>
      <h2>All Venues</h2>
      <div className="venue-grid">
        {venues.map((venue) => (
          <VenueItem
            key={venue.id}
            {...venue}
            darkMode={darkMode}
            // Do not pass the photo prop for all venues
          />
        ))}
      </div>
    </div>
  );
};

export default VenueList;
