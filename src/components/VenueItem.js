// VenueItem.js
import React from 'react';
import './VenueItem.css';

const VenueItem = ({ name, city, zipcode, phone, capacity, style, keywords, match_score }) => {
  // Determine the score level for dynamic coloring
  const scoreLevel = match_score >= 80 ? 'high' : match_score >= 50 ? 'medium' : 'low';

  return (
    <div className="venue-item">
      <div className="venue-details">
        <h3>{name}</h3>
        <p>City: {city}</p>
        <p>ZIP Code: {zipcode}</p>
        <p>Phone: {phone}</p>
        <p>Capacity: {capacity}</p>
        <p>Style: {style}</p>
        <p>Keywords: {keywords}</p>
      </div>
      {match_score !== undefined && (
        <div className="match-score-circle" data-score={scoreLevel}>
          <span>{Math.round(match_score)}%</span>
        </div>
      )}
    </div>
  );
};

export default VenueItem;
