import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import store from './Redux/store';
import { BrowserRouter } from 'react-router-dom';
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function(registration) {
        console.log('Service worker registered successfully:', registration.scope);
      })
      .catch(function(error) {
        console.error('Service worker registration failed:', error);
      });
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
console.warn(store)
root.render(
  <Provider store={store} >
   <BrowserRouter >
    <App />
   </BrowserRouter> 
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();