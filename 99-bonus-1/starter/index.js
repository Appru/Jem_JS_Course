const fs = require("fs");
const http = require("http");
const url = require("url");

const json = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");

const laptopData = JSON.parse(json);
console.log(laptopData);

const server = http.createServer((req, res) => {
  
  const pathname = url.parse(req.url, true).pathname;
  const id = url.parse(req.url, true).query.id;


  if (pathname === "/products" || pathname === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("This is da producst page");
  } 
  else if (pathname === "/laptop" && id < laptopData.length) {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(`dis the laptoppages for da laptop ${id}`);
  } 
  else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("EROOR");
  }
});

server.listen(1337, "127.0.0.1", () => {
  console.log("server has started listeninnn");
});
