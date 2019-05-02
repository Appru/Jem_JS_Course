const fs = require("fs");
const http = require("http");
const url = require("url");

const json = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");

const laptop = JSON.parse(json);
console.log(laptop);

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url, true).pathname;

  if (pathname === "/products" || pathname === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("This is da producst page");
  } 
  else if (pathname === "/laptop") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("dis the laptoppages");
  } 
  else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("EROOR");
  }
});

server.listen(1337, "127.0.0.1", () => {
  console.log("server has started listeninnn");
});
