const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
   //response.setHeader('Content-Type','text/html; charset=utf-8;');
    var filePath = request.url.substr(1);
    fs.access(filePath, function (err)

     {
        // если произошла ошибка - отправляем статусный код 404
        if (err){
            response.statusCode = 404;
            response.end('Web-site is not found\n'+'404')
        }
        else {
            fs.createReadStream(filePath).pipe(response)
        }
    });
   // fs.createReadStream(filePath).pipe(response);
   // response.end()

}).listen(3002, function () {
    console.log('Server is started')

});