const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.write("<h1>Hello from my first Node.js server!</h1>");
  } else if (req.url === "/about") {
    res.write("<h1>About Page</h1>");
    res.end();
    return;
  }

  res.end("Hello from my first Node.js server!");
  res.sethead("Content-Type", "text/html");
  res.write("<h1>Hello from my first Node.js server!</h1>");
  res.write("html");
  res.write("<head><title>My First Node.js Server</title></head>");
  res.write("<body><h1>Hello from my first Node.js server!</h1></body> ");
  res.end();
});

server.listen(3001, () => {
  const port = 3001;
  console.log("Server running at http://localhost:3001");
});
