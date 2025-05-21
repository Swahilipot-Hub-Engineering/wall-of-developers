import React from 'react';
import './App.css';

// Define the InfoPanel component
const Panel: React.FC = () => {
  return (
     <div>
      <h2>Pwani Innovation Event 2025</h2>
      <p><strong>Theme:</strong> Empowering Innovation for a Sustainable Future</p>
      <p><strong>Date:</strong> August 15–17, 2025</p>
      <p><strong>Venue:</strong> Pwani Tech Hub, Mombasa</p>

          <h3>Highlights:</h3>
      <ul>
        <li>Tech Exhibitions</li>
        <li>Startup Pitches</li>
        <li>Workshops & Demos</li>
        <li>Panel Discussions</li>
        <li>Networking Sessions</li>
      </ul>

      <h3>Target Audience:</h3>
      <p>Innovators, Startups, Investors, Students, and Development Partners.</p>

      <h3>Contact:</h3>
      <p>Email: info@pwaniinnovation.ke</p>
      <p>Phone: ‪+254 712 345 678‬</p>

      <a href="#">Register Now</a>
    </div>

  );
};

export default Panel;
