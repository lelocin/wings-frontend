import React, { useState } from 'react';

const Filter = () => {
  const [seatingCapacity, setSeatingCapacity] = useState('');
  const [standingCapacity, setStandingCapacity] = useState('');
  const [city, setCity] = useState('');
  const [venueStyle, setVenueStyle] = useState('');
  const [keywords, setKeywords] = useState('');

  const handleFilterSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="filter">
      <h2>Filter</h2>
      <form onSubmit={handleFilterSubmit}>
        <div className="dropdown-filters">
          <label>
            Capacity (Seating)
            <select value={seatingCapacity} onChange={(e) => setSeatingCapacity(e.target.value)}>
              <option value="">Select</option>
              <option value="0-200">0-200</option>
              <option value="200-400">200-400</option>
              <option value="400-600">400-600</option>
              <option value="600-800">600-800</option>
              <option value="800+">800+</option>
            </select>
          </label>

          <label>
            Capacity (Standing)
            <select value={standingCapacity} onChange={(e) => setStandingCapacity(e.target.value)}>
              <option value="">Select</option>
              <option value="0-300">0-300</option>
              <option value="300-600">300-600</option>
              <option value="600-900">600-900</option>
              <option value="900-1200">900-1200</option>
              <option value="1200+">1200+</option>
            </select>
          </label>

          <label>
            City
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="">Select</option>
              <option value="New York">New York</option>
              <option value="Brooklyn">Brooklyn</option>
            </select>
          </label>
        </div>

        <div className="text-filters">
          <label>
            Preferred venue style:
            <input
              type="text"
              value={venueStyle}
              onChange={(e) => setVenueStyle(e.target.value)}
              placeholder="(e.g. jazz club, bar)"
            />
          </label>

          <label>
            Other keywords:
            <input
              type="text"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="(e.g. cozy, intimate)"
            />
          </label>
        </div>

        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default Filter;

