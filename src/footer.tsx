import './footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Hackathon. All rights reserved.</p>
        <p>
          Built with ❤️ by the Hackathon Team. Follow us on{' '}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>{' '}
          and{' '}
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>.
        </p>
      </div>
    </footer>
  );
}