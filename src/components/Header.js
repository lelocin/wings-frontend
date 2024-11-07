import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1>Wings of Sound</h1>
      <div class="main-image">
        <img src="https://media.timeout.com/images/102182623/image.jpg" alt="main-image" />
      </div>
      <div className="about">
        <h2>About Wings of Sounds</h2>
        <p>We help artists soar by finding them the perfect venue.</p>
      </div>
    </header>
  );
};

export default Header;