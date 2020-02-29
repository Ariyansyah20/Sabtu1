const http = require("http");

const server = http.createServer((req, res) =>{
  if (req.url == "/saya") {

    res.writeHead(200, { "content-Type": "text/html"});
    res.write("<html><body><p>This is home Page.</p></body></html");
    res.end();
  } else if (req.url == "/profile") {

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>aku cinta kamu</p></body></html>");
    res.end();

  } else if (req.url =="/admin") {
      res.writeHead(200, { "Content-Type": "text/html"});
      res.write("<html><body><p>Cinta itu buta.</p></body></html>");
      res.end();

    } else if (req.url =="/ari") {
        res.writeHead(200, { "Content-Type": "text/html"});
        res.write("<html><body><p>Nanti Kita Cerita Tentang Hari ini.</p></body></html>");
        res.end();

    } else if (req.url =="/kepo") {
        res.writeHead(200, { "Content-Type": "text/html"});
        res.write("<html><body><p>Aku sayang kamu.</p></body></html>");
        res.end();

    } else if (req.url =="/manusia") {
        res.writeHead(200, { "Content-Type": "text/html"});
        res.write("<html><body><p>Kamu jahat.</p></body></html>");
        res.end();

    } else if (req.url =="/orang pintar") {
        res.writeHead(200, { "Content-Type": "text/html"});
        res.write("<html><body><p>iring jihit idilih iring biik ying tisikiti.</p></body></html>");
        res.end();

    } else if (req.url =="/pacar") {
        res.writeHead(200, { "Content-Type": "text/html"});
        res.write("<html><body><p>hujan turun lagi.</p></body></html>");
        res.end();

    } else if (req.url =="/gorengan") {
        res.writeHead(200, { "Content-Type": "text/html"});
        res.write("<html><body><p>saya siapa?.</p></body></html>");
        res.end();

    } else if (req.url =="/kocheng") {
        res.writeHead(200, { "Content-Type": "text/html"});
        res.write("<html><body><p>hfdhfhaghfghag.</p></body></html>");
        res.end();

  } else{
      res.writeHead(404);
      res.end("Page Not Found");
  }
});

console.log('server running in port 3008');

server.listen(3008);