
const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // Home page
    if (req.url === "/" && req.method === "GET") {
        res.setHeader("Content-Type", "text/html");

        res.write("<h1>Welcome to Home Page</h1>");

        res.write('<form action="/submit-details" method="POST">');

        res.write(
            '<input type="text" name="name" placeholder="Enter your name" required><br><br>'
        );

        res.write('<label>Gender:</label><br>');

        res.write(
            '<input type="radio" name="gender" value="male" required> Male'
        );

        res.write(
            '<input type="radio" name="gender" value="female"> Female<br><br>'
        );

        res.write('<button type="submit">Submit</button>');
        res.write("</form>");

        return res.end();
    }

    // Handle form submission
    if (req.url === "/submit-details" && req.method === "POST") {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            const params = new URLSearchParams(body);

            const name = params.get("name");
            const gender = params.get("gender");

            res.setHeader("Content-Type", "text/html");

            res.write(`<h1>Form Submitted Successfully!</h1>`);
            res.write(`<p>Name: ${name}</p>`);
            res.write(`<p>Gender: ${gender}</p>`);

            res.end();
        });

        return;
    }

    // Handle unknown routes
    res.statusCode = 404;
    res.end("Page Not Found");
});

const PORT = 3001;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
