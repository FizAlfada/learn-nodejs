import http from "http";

const port = 8005;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello From NodeJS</h1>");
  res.end();
});

server.listen(port, (error) => {
  if (error) {
    console.log(`There was an error ${error}`);
  } else {
    console.log("Server Up");
  }
});
