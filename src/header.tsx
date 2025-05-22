import React from 'react';
import './header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>SWAHILIPOT | Pwani Innovation Week 2025 </h1>
        <p>Empowering Minds • Driving Change • Igniting Innovation</p>
        <p>📍 Venue: SwahiliPot Hub, Mombasa</p>
        <p>📅 Dates: [Insert Event Dates Here]</p>
        <p>Welcome to the official platform for Pwani Innovation Week — a celebration of creativity, technology, and entrepreneurial spirit along Kenya’s beautiful coastal region.</p>
        <p>✨ Discover new ideas. 🤝 Connect with innovators. 🚀 Launch the future.</p>
        <p>Join us as we shape a thriving, inclusive digital economy from the Coast of Kenya.</p>
        <p>#PwaniInnovationWeek | #SwahiliPot | #InnovationFromTheCoast</p>
        <a href="https://www.swahilipot.or.ke/piw2025" target="_blank" rel="noopener noreferrer">Visit: www.swahilipot.or.ke/piw2025</a>
      </div>
    </header>
  );
};
export default Header;
