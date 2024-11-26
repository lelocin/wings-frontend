import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <header className="hero">
      <div 
        className="hero-image"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      >
        <img src="https://media.timeout.com/images/102182623/image.jpg" alt="NYC venue" />
      </div>
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <h1>Wings of Sound</h1>
        <p className="tagline">Take your music to new heights by finding the perfect NYC venue.</p>
      </div>
      <div className={`scroll-indicator ${isVisible ? 'visible' : ''}`} onClick={scrollToContent}>
        <span className="scroll-text">Try It Out</span>
        <div className="scroll-arrow"></div>
      </div>
    </header>
  );
};

export default Header;