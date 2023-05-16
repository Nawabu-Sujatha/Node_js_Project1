// Import required modules
const http = require('http');

// Create a server instance
const server = http.createServer((req, res) => {
  // Handle incoming requests
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

// Start the server and listen on a specific port
const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
