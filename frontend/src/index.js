import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './Page/auth/LandingPage';
import Classifier from './Page/auth/PredictionPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Classifier />
  </React.StrictMode>
);

