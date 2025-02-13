const http = require('http');
const fs = require('fs');
const path = require('path'); // Import the path module

const server = http.createServer((req, res) => {
  try {
    const filePath = path.join(__dirname, '53.html'); // Correct path construction
    const fileContent = fs.readFileSync(filePath); // No 'utf-8' needed for binary data

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fileContent);
  } catch (err) {
    if (err.code === 'ENOENT') {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      console.error("File not found:", err); // Log the error for debugging
    } else {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 Internal Server Error');
      console.error("Error reading file:", err);
    }
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log("Listening on port 8000"); // Changed to 80 to avoid potential conflicts
});