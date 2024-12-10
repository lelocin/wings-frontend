//App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Information from './components/Information'
import Filter from './components/Filter';
import ResultsSection from './components/Results';
import VenueList from './components/VenueList';
import LoadingScreen from './components/LoadingScreen';
import Footer from './components/Footer';
import Error from './components/Error';

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
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

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
    setIsLoading(true);
    try {
      const response = await fetch(`https://wings-backend-498263212500.us-central1.run.app/venues/search?city=${encodeURIComponent(city)}&style=${encodeURIComponent(style)}&capacity=${encodeURIComponent(capacity)}&keywords=${encodeURIComponent(keywords)}`);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      setResults(data);
      setShowResults(true);
      setShowAllVenues(false);
    } catch (error) {
      console.error("Error fetching venues:", error);
      setShowError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAllVenues = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://wings-backend-498263212500.us-central1.run.app/venues/");
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  
      const data = await response.json();
      setVenues(data);
      setShowAllVenues(true);
      setShowResults(false);
    } catch (error) {
      console.error("Error fetching all venues:", error);
      setShowError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      {loading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      {showError && <Error onClose={() => setShowError(false)} />}
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
        isLoading={isLoading}
      />
      {showResults && 
        <ResultsSection results={results} darkMode={darkMode} />
      }
      {showAllVenues && 
        <VenueList venues={venues} darkMode={darkMode}/>
      }
      <Footer />
    </div>
  );
};

export default App;
