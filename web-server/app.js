const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  if (req.url === "/") {
    res.end("<h2>Index sayfasina hos geldiniz.</h2>");
  } else if (req.url === "/hakkimda") {
    res.end("<h2>Hakkimda sayfasina hos geldiniz.</h2>");
  } else if (req.url === "/iletisim") {
    res.end("<h2>Iletisim sayfasina hos geldiniz.</h2>");
  } else {
    res.end("<h2>404 - Sayfa bulunamadi.</h2>");
  }
});

const port = 5000;
server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
