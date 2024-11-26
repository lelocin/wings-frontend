// Filter.js
import React from 'react';
import './Filter.css';

const Filter = ({ city, setCity, style, setStyle, capacity, setCapacity, keywords, setKeywords, handleFilter, handleShowAll }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleFilter();
  };

  return (
    <div className="filter">
      <form onSubmit={handleSubmit} className="sentence-filter">
        <p className="filter-sentence">
          I'm looking for a{' '}
          <input
            type="text"
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            placeholder="bar, theater, jazz club..."
            className="inline-input"
          />{' '}
          with a{' '}
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="cozy, modern, trendy..."
            className="inline-input"
          />{' '}
          vibe in{' '}
          <select 
            value={city} 
            onChange={(e) => setCity(e.target.value)}
            className="inline-select"
          >
            <option value="">choose a city</option>
            <option value="Manhattan">Manhattan</option>
            <option value="Brooklyn">Brooklyn</option>
          </select>{' '}
          that holds{' '}
          <input
            type="number"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            placeholder="100"
            className="inline-input-number"
          />{' '}
          people.
        </p>
        <div className="filter-actions">
          <button type="submit" className="search-button">Find Venues</button>
          <span 
            onClick={handleShowAll} 
            className="inline-link"
            style={{ cursor: 'pointer', color: '#2196F3', display: 'block', marginTop: '10px' }}
          >
            Show all venues
          </span>
        </div>
      </form>
    </div>
  );
};

export default Filter;
