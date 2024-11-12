// VenueList.js
import React from 'react';
import VenueItem from './VenueItem';

const VenueList = ({ venues }) => {
  return (
    <div className="results-section"> {/* Use the same class as ResultsSection */}
      {venues.length === 0 ? (
        <p>No venues available.</p>
      ) : (
        venues.map((venue, index) => (
          <VenueItem key={index} {...venue} />
        ))
      )}
    </div>
  );
};

export default VenueList;
