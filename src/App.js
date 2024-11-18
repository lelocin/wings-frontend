// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Filter from './components/Filter';
import ResultsSection from './components/Results';
import VenueList from './components/VenueList';

const App = () => {
  const [city, setCity] = useState('');
  const [style, setStyle] = useState('');
  const [capacity, setCapacity] = useState('');
  const [keywords, setKeywords] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState([]);
  const [venues, setVenues] = useState([]);
  const [showAllVenues, setShowAllVenues] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Toggle dark mode class on body element
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const fetchVenues = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8001/venues/search?city=${encodeURIComponent(city)}&style=${encodeURIComponent(style)}&capacity=${encodeURIComponent(capacity)}&keywords=${encodeURIComponent(keywords)}`);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      setResults(data);
      setShowResults(true);
      setShowAllVenues(false);
    } catch (error) {
      console.error("Error fetching venues:", error);
    }
  };

  const fetchAllVenues = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8001/venues/");
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  
      const data = await response.json();
      setVenues(data);
      setShowAllVenues(true);
      setShowResults(false);
    } catch (error) {
      console.error("Error fetching all venues:", error);
    }
  };

  return (
    <div className="App">
      <Header />
      <button onClick={toggleDarkMode} className="toggle-dark-mode">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <Filter
        city={city} setCity={setCity}
        style={style} setStyle={setStyle}
        capacity={capacity} setCapacity={setCapacity}
        keywords={keywords} setKeywords={setKeywords}
        handleFilter={fetchVenues}
      />
      <button onClick={fetchAllVenues} className="show-all-button">Show All Venues</button>
      {showResults && <ResultsSection results={results} />}
      {showAllVenues && <VenueList venues={venues} />}
      {!showResults && !showAllVenues && <p>No results to display.</p>}
    </div>
  );
};

export default App;
