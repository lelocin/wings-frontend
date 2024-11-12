// VenueItem.js
import React from 'react';

const VenueItem = ({
  venueName,
  name,
  city,
  zipCode,
  zipcode,
  capacityStanding,  // Dummy data: standing capacity
  capacitySeating,   // Dummy data: seating capacity
  capacity,          // Actual data: combined capacity
  style,
  keywords,
  matchScore,        // Specific to dummy data
  phone,
  email,
  website,
}) => {
  return (
    <div className="result-item"> {/* Apply consistent styling */}
      <h3>{venueName || name}</h3>
      {matchScore && <h4>Match Score: {matchScore}</h4>}
      <p>City: {city}</p>
      <p>ZIP Code: {zipCode || zipcode}</p>

      {/* Conditional rendering for capacities */}
      {capacityStanding && capacitySeating ? (
        <>
          <p>Capacity (Standing): {capacityStanding}</p>
          <p>Capacity (Seating): {capacitySeating}</p>
        </>
      ) : (
        <p>Capacity: {capacity}</p>
      )}

      <p>Style: {style}</p>
      <p>Keywords: {keywords}</p>
      {website && <a href={website} target="_blank" rel="noopener noreferrer">Link to website</a>}
      <p>Call: {phone}</p>
      {email && <p>Email: <a href={`mailto:${email}`}>{email}</a></p>}
    </div>
  );
};

export default VenueItem;
