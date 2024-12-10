import React from 'react';
import './Footer.css'; 
import logo from '../logoto.png';

const Footer = ({ showHowItWorks, setShowHowItWorks }) => {
  const handleSupportEmailClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const email = "support@wingsofsound.com";
    window.location.href = `mailto:${email}`;
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Wings of Sound Logo" className="footer-logo" />
        <p>© {new Date().getFullYear()} Wings of Sound. All rights reserved.</p>
        <p>
          Contact us at: 
          <a
            href="#"
            onClick={handleSupportEmailClick} // Use a click handler
          >
            support@wingsofsound.com
          </a>
        </p>
        
        {/* Add the "How it works" link */}
        <button
          onClick={() => setShowHowItWorks(!showHowItWorks)} // Toggle visibility
          className="how-it-works-button"
        >
          How Does Matching Work?
        </button>
      </div>
    </footer>
  );
};

export default Footer;
