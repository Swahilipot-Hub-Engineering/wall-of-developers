import './Hackathon.css';

export function Hackathon() {
  return (
    <div className="hackathon">
      <div className="hackathon-header">
        <h1>Hackathon 2025</h1>
        <p>Innovate, Collaborate, and Create!</p>
      </div>
      <div className="hackathon-content">
        <img
          src="https://img.freepik.com/free-vector/hackathon-isometric-landing-software-development_107791-2942.jpg?semt=ais_hybrid&w=740" // Replace with your image URL
          alt="Hackathon Banner"
          className="hackathon-image"
        />
        <p>
          Join us for an exciting journey of innovation and creativity. Showcase your skills, 
          collaborate with like-minded individuals, and build something amazing!
        </p>
      </div>
    </div>
  );
}