import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section id="home" className="section hero">
        <h1>Pwani Innovation Week 2025</h1>
        <p className="subtitle">
          Join us at Swahilipot Hub for the biggest Tech and Innovation event in the Coast region!
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
        <h2>About Pwani Innovation Week, 2025</h2>
        <div className="about-content">
          <p>
            Pwani Innovation Week (PIW) is an annual event held at Swahilipot Hub, Mombasa, 
            bringing together Innovators, Entrepreneurs, and Tech enthusiasts. 
            The week-long event features Pitching, hackathons, Panel sessions, 
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
              <p>12-hour coding challenge to solve real-world problems.</p>
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
              <p>Connect with industry professionals and Tech Gurus.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

import "./App.css";
import Hackathon from "./hackathon";
import InfoPanel from "./InfoPanel";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import { Pitches } from "./Pitches";
function App() {
  return (
    <>
      <Navbar />
      <InfoPanel />
      <Hackathon />
      <Pitches />
      <Footer />
    </>
  );
}

export default App;

