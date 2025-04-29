import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';

import '@fontsource/poppins'; // Defaults to weight 400
import '@fontsource/comic-neue'

import '@fontsource/comic-neue/300.css';  // Light
import '@fontsource/comic-neue/400.css';  // Regular
import '@fontsource/comic-neue/700.css';  // Bold

// If you need different weights
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
