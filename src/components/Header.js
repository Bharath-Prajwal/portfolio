// Header.js
import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header">
      <nav id="navid">
        <h1>👨‍💻</h1>
        <div id="headdivid">
          <a href="#body" className="head">Home</a>
          <a href="#about" className="head">About</a>
          <a href="#projects" className="head">Projects</a>
          <a href="#contact" className="head">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;


