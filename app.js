var http = require('http'); // require http module
var fs = require('fs'); // require file system module

function onRequest(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'}); // set the content type
  fs.readFile('./views/indexx.html', null, function(error, data) {
    if (error) {
      response.writeHead(404);
      fs.readFile('./views/errors.html', null);
    } else {
      response.write(data);
    }
  
    response.end();
  });
  
}

http.createServer(onRequest).listen(3000);