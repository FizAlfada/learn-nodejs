const http = require("http");
const port = 8000;

const server = http.createServer((req, res) => {
  // console.log(req.url);
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Homepage</h1>");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Contact</h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>About Me</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("404: Bad Request");
  }
});

server.listen(port, () => console.log("Server ready!"));
