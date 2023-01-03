import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Education from './components/education';
import Experience from './components/experience'
import General from './components/general'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <General />
    <Education />
    <Experience />
  </React.StrictMode>
);
