const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 8080;

let home, about, services, contact; // Declare variables outside try-catch

try {
  home = fs.readFileSync(path.join(__dirname, 'index.html'));
  about = fs.readFileSync(path.join(__dirname, 'about.html'));
  services = fs.readFileSync(path.join(__dirname, 'services.html'));
  contact = fs.readFileSync(path.join(__dirname, 'contact.html'));
} catch (err) {
  console.error("Error reading files:", err);
  process.exit(1); // Exit if files can't be read
}

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  if (url === '/') {
    res.end(home);
  } else if (url === '/about') {
    res.end(about);
  } else if (url === '/services') {
    res.end(services);
  } else if (url === '/contact') {
    res.end(contact);
  } else {
    res.statusCode = 404;
    res.end('<h1>404 Not Found</h1>');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});