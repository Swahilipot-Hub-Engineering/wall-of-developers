
import './App.css';
import sphLogo from '/src/assets/swahilipot-logo.png';
import React from 'react';
import { useState } from 'react';

function App() {


import { useState } from 'react';
// No need for reactLogo or viteLogo for this content, so they are removed.
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// No App.css needed if using Tailwind extensively, but can be kept for global overrides.
// import './App.css';

function App() {

 

  // useState hook to manage which section is currently active.
  // 'home' is set as the default active section.
  const [activeSection, setActiveSection] = useState('home');



  return (

    <div className="app">
      {/* Fixed Navbar with Local Logo */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img 
            src={sphLogo} 
            alt="Swahilipot Hub Logo" 
            className="logo"
          />
        </div>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section hero">
  <h1>Pwani Innovation Week 2025</h1>
  <p className="subtitle">
    Join us at Swahilipot Hub for the biggest tech and innovation event in the Coast region!
  </p>
  <div className="event-dates">
    <p className="date-range">
      <span className="date-icon"></span> MAY 25-30, 2025
    </p>
    <p className="location">
      <span className="location-icon"></span> Swahilipot Hub, Mombasa
    </p>
  </div>
  <button className="cta-button">Join Today</button>
</section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Pwani Innovation Week waah</h2>
        <div className="about-content">
          <p>
            Pwani Innovation Week (PIW) is an annual event held at Swahilipot Hub, Mombasa, 
            bringing together innovators, entrepreneurs, and tech enthusiasts. 
            The week-long event features workshops, hackathons, networking sessions, 
            and showcases of cutting-edge technology.
          </p>
          <div className="highlight-box">
            <h3>Why Attend?</h3>
            <ul>
              <li>Meet industry leaders & startups</li>
              <li>Participate in hands-on workshops</li>
              <li>Network with investors & mentors</li>
              <li>Showcase your innovations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Events Section */}
     {/* Events Section */}
<section id="events" className="section">
  <h2>Event Highlights</h2>
  <div className="events-grid">
    <div className="event-card">
      <img 
        src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
        alt="Hackathon" 
        className="event-card-image"
      />
      <div className="event-card-content">
        <h3>Hackathon</h3>
        <p>48-hour coding challenge to solve real-world problems.</p>
      </div>
    </div>
    
    <div className="event-card">
      <img 
        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
        alt="Startup Pitch" 
        className="event-card-image"
      />
      <div className="event-card-content">
        <h3>Startup Pitch</h3>
        <p>Early-stage startups present to investors.</p>
      </div>
    </div>
    
    <div className="event-card">
      <img 
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
        alt="Tech Workshops" 
        className="event-card-image"
      />
      <div className="event-card-content">
        <h3>Tech Workshops</h3>
        <p>Learn AI, Blockchain, Web Dev & more.</p>
      </div>
    </div>
    
    <div className="event-card">
      <img 
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
        alt="Networking Mixer" 
        className="event-card-image"
      />
      <div className="event-card-content">
        <h3>Networking Mixer</h3>
        <p>Connect with industry professionals.</p>
      </div>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p>Email: info@pwaniinnovationweek.com</p>
          <p>Phone: +254 700 123 456</p>
          <p>Location: Swahilipot Hub, Mombasa</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Pwani Innovation Week. All rights reserved.</p>
        <div className="social-links">
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>

    


    
  );
}

export default App;