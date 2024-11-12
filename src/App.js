import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Filter from './components/Filter';
import ResultsSection from './components/Results';
import VenueList from './components/VenueList';

const App = () => {
  const [seatingCapacity, setSeatingCapacity] = useState('');
  const [standingCapacity, setStandingCapacity] = useState('');
  const [city, setCity] = useState('');
  const [style, setStyle] = useState('');
  const [keywords, setKeywords] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState([]);
  const [venues, setVenues] = useState([]);
  const [showAllVenues, setShowAllVenues] = useState(false);

  // Dummy data for fetchVenues (user-selected filters)
  const fetchVenues = () => {
    const dummyResults = [
      {
        venueName: "Blue Note Jazz Club",
        city: "New York",
        zipCode: "10001",
        capacityStanding: 500,
        capacitySeating: 200,
        style: "Jazz Club",
        keywords: "intimate, cozy",
        matchScore: 95,
        phone: "(212) 555-0123",
        email: "venue@example.com",
        website: "https://example.com"
      },
      {
        venueName: "Brooklyn Steel",
        city: "Brooklyn",
        zipCode: "11201",
        capacityStanding: 300,
        capacitySeating: 150,
        style: "Rock Venue",
        keywords: "industrial, spacious",
        matchScore: 85,
        phone: "(718) 555-0123",
        email: "venue2@example.com",
        website: "https://example2.com"
      }
    ];

    setResults(dummyResults); // Set results to dummy data
    setShowResults(true); // Show Results section
    setShowAllVenues(false); // Hide All Venues section if previously displayed
  };

  // Fetch all venues from the backend (actual data)
  const fetchAllVenues = async () => {
    console.log("Show All Venues button clicked");  // Log to confirm function call
    try {
      const response = await fetch("http://127.0.0.1:8001/venues/");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Fetched all venues:", data);  // Log data to verify it is fetched correctly
      setVenues(data); // Set venues state with real data from the backend
      setShowAllVenues(true); // Show All Venues section
      setShowResults(false); // Hide Results section if previously displayed
    } catch (error) {
      console.error("Error fetching all venues:", error);
      setVenues([]); // Clear venues state in case of an error
    }
  };
  

  return (
    <div className="App">
      <Header />
      <Filter
        seatingCapacity={seatingCapacity}
        setSeatingCapacity={setSeatingCapacity}
        standingCapacity={standingCapacity}
        setStandingCapacity={setStandingCapacity}
        city={city}
        setCity={setCity}
        style={style}
        setStyle={setStyle}
        keywords={keywords}
        setKeywords={setKeywords}
        handleFilter={fetchVenues}  // Using fetchVenues for filtered results
      />

      {/* Show All Venues Button */}
      <button onClick={fetchAllVenues} className="show-all-button">Show All Venues</button>

      {/* Display Results (Dummy Data) or All Venues (Backend Data) */}
      {showResults && <ResultsSection results={results} />}
      {showAllVenues && <VenueList venues={venues} />}

      {/* Fallback Message */}
      {!showResults && !showAllVenues && (
        <p>No results to display. Use the filters or click "Show All Venues" to view data.</p>
      )}
    </div>
  );
};

export default App;
