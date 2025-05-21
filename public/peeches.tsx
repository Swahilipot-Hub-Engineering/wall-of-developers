import './peeches.css';

const Peeches = () => {
  return (
    <div className="slides-container">
      {/* Hero Slide */}
      <section className="slide hero">
        <h1>🚀 Project Name: DevLink</h1>
        <p>Connecting developers across the globe through code, creativity, and collaboration.</p>
        <p className="presented-by">Presented by: Team Alpha</p>
      </section>

      {/* About Slide */}
      <section className="slide about">
        <h2>About the Project</h2>
        <p>
          DevLink is a platform that allows developers to build profiles, showcase their projects, and connect with other engineers in real-time.
        </p>
        <ul>
          <li>👥 Community-focused</li>
          <li>💡 Project portfolios</li>
          <li>📬 Instant messaging</li>
        </ul>
      </section>

      {/* Main Content Slide */}
      <section className="slide content">
        <h2>Key Features & Design Choices</h2>
        <div className="subsection">
          <h3>📱 Responsive Design</h3>
          <p>Optimized for both desktop and mobile using Tailwind and Flexbox layout techniques.</p>
        </div>
        <div className="subsection">
          <h3>⚙ Tech Stack</h3>
          <p>Built using React, TypeScript, Vite, and TailwindCSS for rapid development and scalability.</p>
        </div>
        <div className="subsection">
          <h3>🔐 Authentication</h3>
          <p>Secure sign-in with OAuth2 and role-based access control for different types of users.</p>
        </div>
      </section>
    </div>
  );
};

export default Peeches;
