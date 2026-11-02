const { add } = require('./addition');

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  // Home page
  if (req.url === '/' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <h1>Welcome to My Calculator</h1>
      <a href="/calculator">Open Calculator</a>
    `);
  }

  // Calculator page
  else if (req.url === '/calculator' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <h1>Simple Calculator</h1>

      <form action="/calculate-result" method="POST">
        <label>First number:</label>
        <input type="number" name="num1" step="any" required>
        <br><br>

        <label>Second number:</label>
        <input type="number" name="num2" step="any" required>
        <br><br>

        <button type="submit">Sum</button>
      </form>
    `);
  }

  // Calculate result
  else if (
    req.url === '/calculate-result' &&
    req.method === 'POST'
  ) {
    const body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(parsedBody);

      const num1 = Number(params.get('num1'));
      const num2 = Number(params.get('num2'));

      if (
        params.get('num1') === null ||
        params.get('num2') === null ||
        !Number.isFinite(num1) ||
        !Number.isFinite(num2)
      ) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/html');
        return res.end('<h1>Invalid numbers</h1>');
      }

      const sum = add(num1, num2);

      res.setHeader('Content-Type', 'text/html');
      res.end(`
        <h1>Calculation Result</h1>
        <p>${num1} + ${num2} = ${sum}</p>
        <a href="/calculator">Calculate Again</a>
      `);
    });
  }

  // Unknown routes
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>404 - Page Not Found</h1>');
  }
};

exports.requestHandler = requestHandler;