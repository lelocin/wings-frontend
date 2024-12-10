// VenueItem.js
import React, { useState, useEffect } from 'react';
import './VenueItem.css';

const VenueItem = ({ name, city, zipcode, phone, email, capacity, style, keywords, inquiry_url, match_score, darkMode, photo, onSendEmail }) => {
  // Calculate the score level for dynamic coloring
  const scoreLevel = match_score >= 80 ? 'high' : match_score >= 50 ? 'medium' : 'low';

  const [audio, setAudio] = useState(null);
  
  // Array of audio file paths
  const audioFiles = ['/audio/indie.mp3', '/audio/rock.mp3', '/audio/jazz.mp3'];
  
  // Function to get random audio file
  const getRandomAudio = () => {
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    return new Audio(audioFiles[randomIndex]);
  };

  const handleMouseEnter = () => {
    console.log('Mouse enter triggered'); // Debug log
    const newAudio = getRandomAudio();
    console.log('Audio created:', newAudio); // Debug log
    setAudio(newAudio);
    newAudio.play()
    .then(() => console.log('Audio playing successfully')) // Debug log
    .catch(error => console.error("Audio playback failed:", error));
  };

  const handleMouseLeave = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  // Cleanup function to handle component unmounting
  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [audio]);

  return (
    <div className={`venue-item ${darkMode ? 'dark' : ''}`} style={{ backgroundImage: `url(data:image/jpeg;base64,${photo})` }}>
      <div className="venue-content">
      <div className="venue-details">
        <h2>{name}</h2>
        <p>City: {city}</p>
        <p>ZIP Code: {zipcode}</p>
        <p>Capacity: {capacity}</p>
        <p>Style: {style}</p>
        <p>Phone: {phone ? phone : "N/A"}</p>
        <p>Email: {email ? email : "N/A"}</p>
        {email && (
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onSendEmail(email,name)
          }} //call function passed as prop
          className = "send-email-button"
        >
          Send Email
        </button>
        )}
        <p>
        {inquiry_url && (
            <button
              className="inquiry-button"
              onClick={() => {
                window.open(inquiry_url, '_blank');
              }}
            >
              Go to Inquiry Form
            </button>
  )}
        </p>
        </div>

        {/* Only show match score circle if match_score is defined */}
        {match_score !== undefined && (
          <div className="match-score-circle" data-score={scoreLevel}>
            <span>{Math.round(match_score)}%</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default VenueItem;
