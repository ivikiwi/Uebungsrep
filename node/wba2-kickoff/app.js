var http = require('http');


var server = http.createServer(function(request,response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Ivi");
  response.end();
});



server.listen(8888);
