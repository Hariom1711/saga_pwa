// Import Workbox libraries
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';

// Define files to cache
const filesToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/css/styles.css',
  '/js/main.js',
  '/js/redux-saga.js',
  '/images/logo.png',
  '/images/bg.jpg',
];

// Add files to precache
precacheAndRoute(filesToCache);

// Define API route to cache
registerRoute(
  ({ url }) => url.origin === '',
  new CacheFirst({
    cacheName: 'api-cache',
    plugins: [
      // Add plugins for cache expiration and other features
    ],
  })
);

// Register service worker
export const register = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/serviceworkerRegistration.js')
        .then(registration => {
          console.log('SW registered: ', registration );
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
};

// Unregister service worker
export const unregister = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(registration => {
        registration.unregister();
      })
      .catch(error => {
        console.error(error.message);
      });
  }
};

// Add service worker lifecycle event listeners
// self.addEventListener('install', (event) => {
//   // Perform install steps
//   console.log('SW installed');
// });

// self.addEventListener('activate', (event) => {
//   // Perform activation steps
//   console.log('SW activated');
// });

// Add any other service worker event listeners as needed
// ...
