const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  res.setHeader('Content-Type', 'text/html');

  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Simple Calculator</title>
    </head>
    <body>
      <h1>Simple Calculator</h1>

      <form>
        <label>First Number:</label>
        <input type="number" name="num1" required>
        <br><br>

        <label>Second Number:</label>
        <input type="number" name="num2" required>
        <br><br>

        <button type="submit" name="operation" value="add">Add (+)</button>
        <button type="submit" name="operation" value="subtract">Subtract (-)</button>
        <button type="submit" name="operation" value="multiply">Multiply (×)</button>
        <button type="submit" name="operation" value="divide">Divide (÷)</button>
      </form>
    </body>
    </html>
  `);
};

exports.requestHandler = requestHandler;