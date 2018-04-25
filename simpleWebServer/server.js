const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hello world\n');
}).listen(3000, 'localhost');

console.log('Server started at http://localhost:3000');