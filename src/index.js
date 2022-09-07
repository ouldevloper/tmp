import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.css';
import App from './App';
import './index.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
