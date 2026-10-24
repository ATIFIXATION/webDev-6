
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url,req.method,req.headers);
    res.end('Hello from my first Node.js server!');
   
});

server.listen(3001, () => {
    const port = 3001;
    console.log('Server running at http://localhost:3001');
});



