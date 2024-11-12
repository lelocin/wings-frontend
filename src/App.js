import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Filter from './components/Filter';
import Results from './components/Results';
import VenueList from "./components/VenueList";

const App = () => {
  const [seatingCapacity, setSeatingCapacity] = useState('');
  const [standingCapacity, setStandingCapacity] = useState('');
  const [city, setCity] = useState('');
  const [style, setStyle] = useState('');
  const [keywords, setKeywords] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState([]);
  const [venues, setVenues] = useState([]);
  

  // function for fetching venues
  const fetchVenues = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/venues/");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Fetched venues:", data);  // Check this in the browser console
      setVenues(data); // Set venues state with the data
    } catch (error) {
      console.error("Error fetching venues:", error);
      setVenues([]); // Clear venues state in case of an error
    }
  };
  




  const handleFilter = (filterValues) => {
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

    setResults(dummyResults);
    setShowResults(true);
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
        handleFilter={handleFilter}
      />
      {showResults && <Results results={results} />}
      {venues && venues.length > 0 ? (
  <VenueList venues={venues} />
) : (
  <p>No venues found.</p>
)}
    </div>
  );
};

export default App;
