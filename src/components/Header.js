import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Handle login logic here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Handle logout logic here
    setIsLoggedIn(false);
  };

  return (
    <header>
      <div className="logo">
        <div className="logo-icon"></div>
        <img src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/logo.png" width="50px" alt="BookAI Logo" />
        BookAI
      </div>
      <nav>
        <a href="#features">Features</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#roadmap">Roadmap</a>
        <a href="/api">API</a>
        <a href="/api#pricing">Price</a>
        <a href="/api#pricing">Models</a>
        {isLoggedIn ? (
          <>
            <a href="#" id="profile-button">Profile</a>
            <a href="#" id="logout-button" onClick={handleLogout}>
              Log Out
            </a>
          </>
        ) : (
          <a href="#" id="auth-button" onClick={handleLogin}>
            Login / Sign Up
          </a>
        )}
      </nav>
    </header>
  );
}

export default Header;
