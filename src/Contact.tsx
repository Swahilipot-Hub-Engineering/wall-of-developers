// src/components/Contact.jsx
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Contact() {
  return (
    <section style={styles.section}>
      <h2>Contact Swahilipot Hub</h2>
      <p><strong>Location:</strong> Old Town, Mombasa, Kenya</p>
      <p><strong>Email:</strong> info@swahilipothub.co.ke</p>
      <p><strong>Phone:</strong> +254 712 345678</p>

      <div style={styles.socials}>
        <a href="https://facebook.com/swahilipothub" target="_blank" rel="noopener noreferrer">
          <FaFacebook style={styles.icon} />
        </a>
        <a href="https://instagram.com/swahilipothub" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={styles.icon} />
        </a>
        <a href="https://twitter.com/swahilipothub" target="_blank" rel="noopener noreferrer">
          <FaTwitter style={styles.icon} />
        </a>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    margin: '20px',
  },
  socials: {
    marginTop: '15px',
    fontSize: '28px',
  },
  icon: {
    margin: '0 10px',
    color: '#333',
  }
};

export default Contact;


