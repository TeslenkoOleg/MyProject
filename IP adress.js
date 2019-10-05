var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
    var data='';

    if (request.url === "/"){
        var site = fs.readFileSync('IP.html', 'utf-8')
        response.write(site)
    } else if (request.url === "/sendIP") {
        request.on("data", function (chunk) {
            data = data+chunk.toString();
            //console.log(data)
        });
        request.on("end", function () {
            var body = JSON.parse(data);

            console.log("User IP is - "+body['ip']);
            //console.log(data);
            response.write("I got your IP - "+body['ip']);
            response.end()
        });

    }



}).listen(3000, ()=>{
    console.log("server is runing")
});