import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Import the main App component
import './css/global.css';     // Import global CSS styles (optional)

// This is the root element in your HTML file where the React app will be injected
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />  {/* Render the main App component */}
  </React.StrictMode>

);

