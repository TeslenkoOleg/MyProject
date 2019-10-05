var http = require('http');
var fs = require('fs');

var port = 3000;

var min =1;
var max = 100;


var server = http.createServer(function (request, response) {
   // response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    if (request.url==='/'){
        var site = fs.readFileSync("JQUERY.html", 'utf-8');
        response.write(site);

        var Random_Num = Math.floor(Math.random()*(max-min)+min);

    }else if(request.url==='/data'){
        response.writeHead(200);
        var data = '';
        request.on('data', function(chunk) {
            data += chunk.toString();

        });

        request.on('end', function() {
            console.log(JSON.parse(data));
            var body = JSON.parse(data);
            var bodyDataInt = parseInt(body['data']);
            console.log(bodyDataInt);
            if (bodyDataInt > Random_Num){
                response.write("Your number is MORE!")
            }else if (bodyDataInt < Random_Num){
                response.write("Your number is LESS!")
            }
            else if (bodyDataInt===Random_Num) {
                response.write("You are won! My number is "+bodyDataInt)
            }
            /*if (counter===0) {
                response.write("GAME OVER")
            }*/
            response.end();
        });
    }
});
/*server.on('request', function(request, response) {
    response.writeHead(200);
    var data = '';
    request.on('data', function(chunk) {
        data += chunk.toString();
    });

    request.on('end', function() {
        console.log(data);
        //response.write('hi');
        response.end();
    });

});*/

server.listen(port);
console.log('Browse to http://localhost:' + port);
