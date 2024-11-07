import React from 'react';

const ResultsSection = ({ results }) => {
  return (
    <section className="results-section">
      {results.map((result, index) => (
        <ResultItem key={index} {...result} />
      ))}
    </section>
  );
};

const ResultItem = ({
  venueName,
  city,
  zipCode,
  capacityStanding,
  capacitySeating,
  style,
  keywords,
  matchScore,
  phone,
  email,
  website,
}) => {
  return (
    <div className="result-item">
      <h3>{venueName}</h3>
      <h3>Match Score: {matchScore}</h3>
      <p>City: {city} </p> 
      <p>Zip Code: {zipCode}</p>
      <p>Capacity (Standing): {capacityStanding}</p>
      <p>Capacity (Seating): {capacitySeating}</p>
      <p>Style: {style}</p>
      <p>Keywords: {keywords}</p>
      <a href={website} target="_blank" rel="noopener noreferrer">Link to website</a>
      <p>Call: {phone}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default ResultsSection;
