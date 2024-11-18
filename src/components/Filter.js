// Filter.js
import React from 'react';

const Filter = ({ city, setCity, style, setStyle, capacity, setCapacity, keywords, setKeywords, handleFilter }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleFilter();
  };

  return (
    <div className="filter">
      <h2>Search for a venue!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            City:
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="">Select</option>
              <option value="New York">New York</option>
              <option value="Brooklyn">Brooklyn</option>
              {/* Add more cities as needed */}
            </select>
          </label>
        </div>
        <div>
          <label>
            Style:
            <input
              type="text"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              placeholder="Style"
            />
          </label>
        </div>
        <div>
          <label>
            Capacity:
            <select value={capacity} onChange={(e) => setCapacity(e.target.value)}>
              <option value="">Select</option>
              <option value="0-200">0-200</option>
              <option value="200-400">200-400</option>
              <option value="400-600">400-600</option>
              <option value="600-800">600-800</option>
              <option value="800+">800+</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Keywords:
            <input
              type="text"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="Keywords"
            />
          </label>
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Filter;
