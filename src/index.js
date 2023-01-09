import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/fonts/quicksand/Quicksand-Bold.ttf';
import './assets/fonts/quicksand/Quicksand-Light.ttf';
import './assets/fonts/quicksand/Quicksand-Medium.ttf';
import './assets/fonts/quicksand/Quicksand-Regular.ttf';
import './assets/fonts/quicksand/Quicksand-SemiBold.ttf';
import './css/fonts.css';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
