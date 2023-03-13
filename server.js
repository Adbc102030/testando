const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  console.log(`Request for ${req.url} received.`);

  if (req.url === '/') {
    const indexPath = path.join(__dirname, 'index.html');

    fs.readFile(indexPath, (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end(`Error loading index.html: ${err}`);
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else if (req.url === '/meta.html') {
    const metaPath = path.join(__dirname, 'meta.html');

    fs.readFile(metaPath, (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end(`Error loading meta.html: ${err}`);
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else if (req.url === '/login.html') {
    const loginPath = path.join(__dirname, 'login.html');

    fs.readFile(loginPath, (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end(`Error loading login.html: ${err}`);
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else if (req.url === '/dashboard.html') {
    const dashboardPath = path.join(__dirname, 'dashboard.html');

    fs.readFile(dashboardPath, (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end(`Error loading dashboard.html: ${err}`);
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else if (req.url.match(/\.(css|js|png|jpg|jpeg|gif|ico|svg)$/)) {
    const filePath = path.join(__dirname, 'public', req.url);
    const extname = path.extname(filePath);
    let contentType = 'text/html';
  
    switch (extname) {
      case '.css':
        contentType = 'text/css';
        break;
      case '.js':
        contentType = 'text/javascript';
        break;
      case '.png':
        contentType = 'image/png';
        break;
      case '.jpg':
      case '.jpeg':
        contentType = 'image/jpeg';
        break;
      case '.gif':
        contentType = 'image/gif';
        break;
      case '.ico':
        contentType = 'image/x-icon';
        break;
      case '.svg':
        contentType = 'image/svg+xml';
        break;
    }
  
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end(`Error loading ${req.url}: ${err}`);
      }
  
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end('404 Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
