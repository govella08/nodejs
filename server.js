var http = require('http');
var modules = require('./modules/Functions');
var module2 = require('./modules/Module2');

function onRequest(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write(modules.myString);
  modules.myFunction();
  module2.calculate();
  response.end();
}

http.createServer(onRequest).listen(8000);
