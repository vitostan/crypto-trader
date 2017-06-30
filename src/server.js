import http from 'http';

var timeout = 3000; //sleep 10 seconds

http.createServer(function(req, res) {
  setTimeout((function() {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end("Hello I am awake");
  }), timeout);
}).listen(8080);