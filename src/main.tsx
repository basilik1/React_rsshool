import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/screens/home/Home.tsx';
import './assets/styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
