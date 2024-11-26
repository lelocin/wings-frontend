import React from 'react';
import './VenueItem.css';

const VenueItem = ({ name, city, zipcode, phone, email, capacity, style, keywords, inquiry_url, match_score, darkMode, photo }) => {
  // Calculate the score level for dynamic coloring
  const scoreLevel = match_score >= 80 ? 'high' : match_score >= 50 ? 'medium' : 'low';

  return (
    <div className={`venue-item ${darkMode ? 'dark' : ''}`} style={{ backgroundImage: `url(data:image/jpeg;base64,${photo})` }}>
      <div className="venue-content">
        <div className="venue-details">
          <h3>{name}</h3>
          <p>City: {city}</p>
          <p>ZIP Code: {zipcode}</p>
          <p>Phone: {phone ? phone : "N/A"}</p>
          <p>Email: {email ? email : "N/A"}</p>
          <p>Capacity: {capacity}</p>
          <p>Style: {style}</p>
          <p>Keywords: {keywords}</p>
          <p>
            URL:{' '}
            {inquiry_url ? (
              <a href={inquiry_url} target="_blank" rel="noopener noreferrer" className="venue-link">
                {inquiry_url}
              </a>
            ) : (
              'N/A'
            )}
          </p>
        </div>

        {/* Only show match score circle if match_score is defined */}
        {match_score !== undefined && (
          <div className="match-score-circle" data-score={scoreLevel}>
            <span>{Math.round(match_score)}%</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default VenueItem;
