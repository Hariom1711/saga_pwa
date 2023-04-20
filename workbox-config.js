module.exports = {
    globDirectory: 'build/',
    globPatterns: ['**/*.{json,ico,html,js,css}'],
    swDest: 'build/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: new RegExp('https://example.com/api/'),
        handler: 'NetworkFirst',
        options: {
          cacheName: 'api-cache',
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 3600,
          },
        },
      },
    ],
  };