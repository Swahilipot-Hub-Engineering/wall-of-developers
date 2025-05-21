
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Home Section */}
      <section className="section">
        <h1>Tech Innovation Summit 2025</h1>
        <p className='par1'>
          Join us for the most anticipated tech event of the year at Swahilipot Hub! 
          This summit brings together industry leaders, innovators, and tech enthusiasts 
          for a day of learning, networking, and collaboration.
        </p>
        <div className="highlight">
          <h3>Why Attend?</h3>
          <ul>
            <li>Learn from industry experts</li>
            <li>Network with like-minded professionals</li>
            <li>Discover new technologies</li>
            <li>Find potential collaborators iokt</li>
          </ul>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <h2>About The Event</h2>
        <div className="details">
          <h3>Tech Innovation Summit 2025</h3>
          <p className="date">November 15-17, 2025 | Swahilipot Hub, Mombasa</p>
          
          <p className='par2'>
            The Tech Innovation Summit is a 3-day immersive experience designed to 
            showcase cutting-edge technologies and foster innovation in Kenya's tech ecosystem.
          </p>
          
          <h4>What to Expect</h4>
          <ul>
            <li>Keynote Speeches from industry leaders</li>
            <li>Hands-on workshops</li>
            <li>Panel discussions on tech trends</li>
            <li>Startup showcase</li>
            <li>Networking sessions</li>
          </ul>
          
          <h4>About Swahilipot Hub</h4>
          <p>
            Mombasa's premier innovation hub providing space for creatives and tech 
            enthusiasts to collaborate, learn, and grow since 2020.
          </p>
        </div>
      </section>

      {/* Contacts Section */}
      <section className="section">
        <h2>Contact Us</h2>
        <div className="contacts">
          <div>
            <h4>General Inquiries</h4>
            <p>Email: info@swahilipothub.com</p>
            <p>Phone: +254 712 345 678</p>
          </div>
          <div>
            <h4>Location</h4>
            <p>Swahilipot Hub, Mombasa</p>
            <p>Near Treasury Square</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (

    
      
      
      
       <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Swahilipot Hub Foundation</div>

     <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Swahilipot Hub</div>

          <ul className="nav-links">
            <li 
              className={activeSection === 'home' ? 'active' : ''}
              onClick={() => setActiveSection('home')}
            >
              Home
            </li>

            <li

            <li 

              className={activeSection === 'about' ? 'active' : ''}
              onClick={() => setActiveSection('about')}
            >
              About Event
            </li>
            <li 
              className={activeSection === 'contacts' ? 'active' : ''}
              onClick={() => setActiveSection('contacts')}
            >
              Contacts
            </li>
          </ul>
        </div>
      </nav>



      
    </div>

</div>

      

  );
}

export default App;

