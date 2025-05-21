import React from 'react';
import welcomeImage from './assets/welcome.jpg';

const App: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <img src={welcomeImage} alt="Welcome" style={{ width: '300px', borderRadius: '12px' }} />
      <h1>Welcome to the App!</h1>
      <p>This is a more visual and engaging homepage.</p>
    </div>
  );
};

export default App;
