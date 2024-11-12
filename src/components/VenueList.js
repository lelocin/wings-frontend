import React from 'react';

const VenueList = ({ venues }) => {
  // Check if venues is passed correctly
  console.log("Received venues:", venues);

  return (
    <div className="venue-list">
      {/* If venues is empty, display a message */}
      {venues.length === 0 ? (
        <p>No venues available.</p>
      ) : (
        // Map through the venues array and display each venue's details
        venues.map((venue, index) => (
          <div key={index} className="venue-card">
            <h3>{venue.venueName}</h3>
            <p>{venue.city}</p>
            <p>Seating Capacity: {venue.capacitySeating}</p>
            <p>Standing Capacity: {venue.capacityStanding}</p>
            <p>Style: {venue.style}</p>
            <p>Phone: {venue.phone}</p>
            <p>Email: <a href={`mailto:${venue.email}`}>{venue.email}</a></p>
            <p>Website: <a href={venue.website} target="_blank" rel="noopener noreferrer">{venue.website}</a></p>
          </div>
        ))
      )}
    </div>
  );
};

export default VenueList;

