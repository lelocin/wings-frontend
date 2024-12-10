// Footer.js
import React from 'react';
import './Footer.css'; 

const Footer = () => {
    const handleSupportEmailClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const email = "support@wingsofsound.com";
        window.location.href = `mailto:${email}`;
    };

    return (
    <footer className="footer">
      <div className="footer-content">
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
      </div>
    </footer>
  );
};

export default Footer;
