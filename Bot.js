const http = require("http");

// Render Free exige essa porta
const port = process.env.PORT || 3000;

// Servidor HTTP básico que responde qualquer requisição
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <html>
      <head><title>Farm Bot</title></head>
      <body style="background:#111;color:#0f0;font-family:sans-serif;text-align:center;margin-top:50px;">
        <h1>🔥 Farm Bot Online 🔥</h1>
        <p>Rodando 24h no Render!</p>
      </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}...`);
});

// Script “farmando” continua funcionando
setInterval(() => {
  console.log("farmando... 🔥");
}, 5000);
