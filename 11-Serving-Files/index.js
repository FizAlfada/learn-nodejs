const http = require("http");
const fs = require("fs");
const port = 8000;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Homepage</h1>");
  } else if (req.url == "/contact") {
    fs.readFile("./public/contact.html", (err, data) => {
      if (err) {
        res.writeHead(404, "BAD", { "Content-Type": "text/html" });
        res.end("<h1>Bad Request. File not found!</h1>");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url === "/about") {
    fs.readFile("./public/about.html", (err, data) => {
      if (err) {
        res.writeHead(404, "BAD", { "Content-Type": "text/html" });
        res.end("<h1>Bad Request. File not found!</h1>");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, "BAD", { "Content-Type": "text/html" });
    res.end("<h1>No Match Routing</h1>");
  }
});

server.listen(port, (err) => {
  if (err) console.log(`There was an error ${err}`);
  console.log(`Server running on port ${port}`);
});
