
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
    // Main container for the entire application.
    // min-h-screen ensures it takes at least the full viewport height.
    // bg-gray-100 sets a light background color.
    // font-inter sets a modern sans-serif font (assuming Inter font is available or a fallback).
    <div className="min-h-screen bg-gray-100 font-inter">
      {/* Navbar component for navigation */}
      {/* bg-white and shadow-md provide a clean look. */}
      {/* py-4 adds vertical padding. */}
      {/* sticky top-0 z-50 makes the navbar stick to the top when scrolling. */}
      {/* rounded-b-lg adds rounded corners to the bottom of the navbar. */}
      <nav className="bg-white shadow-md py-4 sticky top-0 z-50 rounded-b-lg">
        {/* Container for navbar content, centered with mx-auto, and responsive padding. */}
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo/Brand name */}
          <div className="text-2xl font-bold text-blue-800">Swahilipot Hub</div>

          {/* Navigation links */}
          <ul className="flex space-x-6">
            {/* Home link */}
            <li
              // cursor-pointer indicates it's clickable.
              // text-lg font-medium sets text size and weight.
              // transition-colors duration-300 provides a smooth hover effect.
              // Conditional classes: 'active' state gets blue text and a bottom border.
              className={`cursor-pointer text-lg font-medium transition-colors duration-300 ${
                activeSection === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-500'
              } rounded-md`}
              // onClick updates the activeSection state to 'home'.
              onClick={() => setActiveSection('home')}
            >
              Home
            </li>

            {/* About Event link */}
            <li
              className={`cursor-pointer text-lg font-medium transition-colors duration-300 ${
                activeSection === 'about' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-500'
              } rounded-md`}
              onClick={() => setActiveSection('about')}
            >
              About Event
            </li>

            {/* Contacts link */}
            <li
              className={`cursor-pointer text-lg font-medium transition-colors duration-300 ${
                activeSection === 'contacts' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-500'
              } rounded-md`}
              onClick={() => setActiveSection('contacts')}
            >
              Contacts
            </li>
          </ul>
        </div>
      </nav>

      {/* Main content area */}
      {/* container mx-auto centers the content. */}
      {/* px-4 py-8 adds padding. */}
      <main className="container mx-auto px-4 py-8">
        {/* Home Section - conditionally rendered */}
        {/* Only renders if activeSection is 'home'. */}
        {activeSection === 'home' && (
          <section id="home" className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Tech Innovation Summit 2025</h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Join us for the most anticipated tech event of the year at Swahilipot Hub!
              This summit brings together industry leaders, innovators, and tech enthusiasts
              for a day of learning, networking, and collaboration.
            </p>
            <div className="bg-blue-50 p-6 rounded-md border border-blue-200">
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">Why Attend?</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Learn from industry experts</li>
                <li>Network with like-minded professionals</li>
                <li>Discover new technologies</li>
                <li>Find potential collaborators</li>
              </ul>
            </div>
          </section>
        )}

        {/* About Section - conditionally rendered */}
        {/* Only renders if activeSection is 'about'. */}
        {activeSection === 'about' && (
          <section id="about" className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About The Event</h2>
            <div className="text-gray-700 space-y-4">
              <h3 className="text-2xl font-semibold text-blue-800">Tech Innovation Summit 2025</h3>
              <p className="text-blue-600 font-medium">November 15-17, 2025 | Swahilipot Hub, Mombasa</p>
              <p className="leading-relaxed">
                The Tech Innovation Summit is a 3-day immersive experience designed to
                showcase cutting-edge technologies and foster innovation in Kenya's tech ecosystem.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 pt-4">What to Expect</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Keynote Speeches from industry leaders</li>
                <li>Hands-on workshops</li>
                <li>Panel discussions on tech trends</li>
                <li>Startup showcase</li>
                <li>Networking sessions</li>
              </ul>
              <h4 className="text-xl font-semibold text-gray-800 pt-4">About Swahilipot Hub</h4>
              <p>
                Mombasa's premier innovation hub providing space for creatives and tech
                enthusiasts to collaborate, learn, and grow since 2020.
              </p>
            </div>
          </section>
        )}

        {/* Contacts Section - conditionally rendered */}
        {/* Only renders if activeSection is 'contacts'. */}
        {activeSection === 'contacts' && (
          <section id="contacts" className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
              <div>
                <h4 className="text-xl font-semibold text-blue-800 mb-2">General Inquiries</h4>
                {/* Added mailto and tel links for direct contact */}
                <p>Email: <a href="mailto:info@swahilipothub.com" className="text-blue-600 hover:underline">info@swahilipothub.com</a></p>
                <p>Phone: <a href="tel:+254712345678" className="text-blue-600 hover:underline">+254 712 345 678</a></p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-blue-800 mb-2">Location</h4>
                <p>Swahilipot Hub, Mombasa</p>
                <p>Near Treasury Square</p>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>

    


    
  );
}

export default App;
