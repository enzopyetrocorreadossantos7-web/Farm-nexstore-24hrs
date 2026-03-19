const http = require("http");

http.createServer((req, res) => {
  res.end("online 🔥");
}).listen(3000);

setInterval(() => {
  console.log("farmando... 🔥");
}, 5000);
