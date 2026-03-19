const http = require("http");

const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("online 🔥");
}).listen(port);

setInterval(() => {
  console.log("farmando... 🔥");
}, 5000);
