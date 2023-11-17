import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/screens/home/Home.tsx';
import './assets/styles/global.css';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <Home />
    </ErrorBoundary>
  </React.StrictMode>
);
