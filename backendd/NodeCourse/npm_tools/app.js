const http = require('http');
const { requestHandler } = require('./handler');

const server = http.createServer((req,res)=>
    {
        console.log('Request received');
    });

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});