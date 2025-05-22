import { useState } from "react";
import "../App.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMenuOpen(false); // Close menu after navigation
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbarLogo">
          <img src="/assets/sph-logo.png" alt="Logo" />
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`navbarLinks ${menuOpen ? "open" : ""}`}>
          <button
            onClick={() => scrollToSection("panel")}
            className="navButton"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("hackathon")}
            className="navButton"
          >
            Hackathon
          </button>
          <button
            onClick={() => scrollToSection("panel")}
            className="navButton"
          >
            Panel
          </button>
          <button
            onClick={() => scrollToSection("pitches")}
            className="navButton"
          >
            Pitches
          </button>
          <button
            onClick={() => scrollToSection("footer")}
            className="navButton"
          >
            Contacts
          </button>
        </div>
      </nav>
      <div className="hero">
        <div className="heroImage">
          <img src="/assets/innovation.webp" alt="Hackathon" />
        </div>
      </div>
    </div>
  );
}
