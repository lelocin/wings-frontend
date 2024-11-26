// Results.js
import React from 'react';
import VenueItem from './VenueItem';

const ResultsSection = ({ results }) => {
  return (
    <section className="results-section">
      {results.slice(0,10).map((result, index) => (
        <VenueItem key={index} {...result} />
      ))}
    </section>
  );
};

export default ResultsSection;
