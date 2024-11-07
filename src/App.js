import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Filter from './components/Filter';
import Results from './components/Results';

const App = () => {
  const [seatingCapacity, setSeatingCapacity] = useState('');
  const [standingCapacity, setStandingCapacity] = useState('');
  const [city, setCity] = useState('');
  const [style, setStyle] = useState('');
  const [keywords, setKeywords] = useState('');

  const handleFilter = (e) => {
    e.preventDefault();
  };

  const results = [
    {
    },
  ];

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
      <Results results={results} />
    </div>
  );
};

export default App;
