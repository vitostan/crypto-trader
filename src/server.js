import http from 'http';

http.createServer(function(req, res) {
  let timeout = 3000; //sleep 10 seconds
  setTimeout((function() {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end("Hello I am awake");
  }), timeout);
}).listen(8080);