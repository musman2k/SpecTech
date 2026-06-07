import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { client } from './lib/appwrite';

// Ping the Appwrite backend on startup to verify the connection is working.
client.ping();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);