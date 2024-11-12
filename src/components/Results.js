// Results.js
import React from 'react';
import VenueItem from './VenueItem';

const ResultsSection = ({ results }) => {
  return (
    <section className="results-section">
      {results.map((result, index) => (
        <VenueItem key={index} {...result} />
      ))}
    </section>
  );
};

export default ResultsSection;
