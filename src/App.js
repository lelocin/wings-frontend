// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Information from './components/Information'
import Filter from './components/Filter';
import ResultsSection from './components/Results';
import VenueList from './components/VenueList';
import LoadingScreen from './components/LoadingScreen';

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
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = () => {
    setLoading(false);
  };

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
      {loading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      <Header />
      <button 
        onClick={toggleDarkMode} 
        className="dark-mode-toggle"
        aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
      </button>
      <Information />
      <Filter
        city={city} setCity={setCity}
        style={style} setStyle={setStyle}
        capacity={capacity} setCapacity={setCapacity}
        keywords={keywords} setKeywords={setKeywords}
        handleFilter={fetchVenues}
        handleShowAll={fetchAllVenues}
      />
      {showResults && <ResultsSection results={results} />}
      {showAllVenues && <VenueList venues={venues} />}
    </div>
  );
};

export default App;
