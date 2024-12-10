//venueList.js

import React from 'react';
import VenueItem from './VenueItem';

const VenueList = ({ venues, darkMode }) => {
  const onSendEmail = (email, venueName) => {
    const subject = `Inquiry about ${venueName}`;
    const body = `Hello, I'm interested in booking ${venueName} for an upcoming event. Please let us know how to proceed. Thank you!`;
   
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className={`venue-list ${darkMode ? 'dark' : ''}`}>
      <h2>All Venues</h2>
      <div className="venue-grid">
        {venues.map((venue,index) => (
          <VenueItem
            key={venue.id || index} // unique key
            {...venue}
            darkMode={darkMode}
            // Do not pass the photo prop for all venues
            onSendEmail={onSendEmail} // pass as prop
          />
        ))}
      </div>
    </div>
  );
};

export default VenueList;
