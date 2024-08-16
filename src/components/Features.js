import React from 'react';
import './Features.css';


const Features = () => {
  return (
    <section id="features" className="features">
      <div className="feature">
        <div className="feature-icon">
          <i className="fas fa-robot"></i>
        </div>
        <h3>AI-Powered Writing</h3>
        <p>Generate high-quality content with advanced AI technology.</p>
      </div>
      <div className="feature">
        <div className="feature-icon">
          <i className="fas fa-book"></i>
        </div>
        <h3>Custom Genres</h3>
        <p>Create stories in any genre or blend multiple styles.</p>
      </div>
      <div className="feature">
        <div className="feature-icon">
          <i className="fas fa-download"></i>
        </div>
        <h3>Instant Download</h3>
        <p>Get your completed book in various formats instantly.</p>
      </div>
      <div className="feature">
        <div className="feature-icon">
          <i className="fas fa-language"></i>
        </div>
        <h3>Multilingual</h3>
        <p>Generate content in multiple languages effortlessly.</p>
      </div>
    </section>
  );
};

export default Features;
