const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("content-type", "text/html");

    res.write("<html>");
    res.write("<head><title></title></head>practice set");
    res.write("<body><h1>its ur calculator:</h1>");
  }
};

exports.requestHandler = requestHandler;
