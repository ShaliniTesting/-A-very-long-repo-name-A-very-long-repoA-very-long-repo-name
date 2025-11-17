// Import Express.js framework
const express = require('express');

// Create Express application instance
const app = express();

// Configure server port from environment variable or use default
const PORT = process.env.PORT || 3000;

// Define route for "Hello world" endpoint
// GET / - Returns "Hello world" response
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Define route for "Good evening" endpoint
// GET /evening - Returns "Good evening" response
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

// Start server and listen on configured port
app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Available endpoints:`);
  console.log(`  - GET http://localhost:${PORT}/`);
  console.log(`  - GET http://localhost:${PORT}/evening`);
});
