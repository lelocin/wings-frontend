import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Information from './components/Information';
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
  const [showHowItWorks, setShowHowItWorks] = useState(false); // Control visibility of "How it works"

  const handleLoadComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const fetchVenues = async () => {
    // Hide "How it works" explanation when a search is triggered
    setShowHowItWorks(false); 

    setIsLoading(true);
    setShowResults(false);
    setResults([]);
    try {
      const response = await fetch(
        `https://wings-backend-498263212500.us-central1.run.app/venues/search?city=${encodeURIComponent(city)}&style=${encodeURIComponent(style)}&capacity=${encodeURIComponent(capacity)}&keywords=${encodeURIComponent(keywords)}`
      );
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
    // Hide "How it works" explanation when showing all venues
    setShowHowItWorks(false);

    setIsLoading(true);
    setShowAllVenues(false);
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
      
      {/* Conditionally render the "How it works" explanation or results */}
      {showHowItWorks ? (
        <div className="how-it-works">
          <h1>How Do We Calculate Match Scores?</h1>
          <p>
            Our venue matching system works by analyzing various factors to find venues
            that best match the user's input. Here's how the algorithm works:
          </p>
          <ul>
            <li><strong>City Matching:</strong> The system checks if the venue's city matches the user's requested city.</li>
            <li><strong>Capacity Matching:</strong> It compares the venue's capacity with the user's desired range, scoring higher for closer matches.</li>
            <li><strong>Style Matching:</strong> The system compares the venue's style with the user's input, even matching partial style terms.</li>
            <li><strong>Keyword Matching:</strong> It also checks if the keywords in the venue's description overlap with the user's input, giving higher scores for exact matches and partial matches.</li>
          </ul>
          <p>
            The final match score is a weighted combination of these factors, ensuring the best possible match for your event. Please reach out to us with any feedback so we can keep improving our algorithm.
          </p>
        </div>
      ) : (
        <>
          {showResults && <ResultsSection results={results} darkMode={darkMode} />}
          {showAllVenues && <VenueList venues={venues} darkMode={darkMode} />}
        </>
      )}

      <Footer showHowItWorks={showHowItWorks} setShowHowItWorks={setShowHowItWorks} />
    </div>
  );
};

export default App;
