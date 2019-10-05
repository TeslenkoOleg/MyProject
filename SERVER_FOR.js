var http = require("http");
var fs = require('fs');

var port = 3000;
var max = 100;
var min =0;
var Random_num = Math.floor(Math.random()*(max-min)+min);

console.log("Random - "+Random_num);
//var counter=7;
var server = http.createServer(function (request, response) {

    var data = '';

    if (request.url==="/"){

        var site = fs.readFileSync('Home1.html','utf-8');
        response.write(site);


    } else if (request.url==="/data"){
        request.on('data', function(chunk) {
            data += chunk.toString();
        });
        request.on('end', function() {
            //counter--;
            //console.log(counter);
            var body = JSON.parse(data);
            var PL_num = parseInt(body['data']);
            if (Random_num > PL_num ){
                response.write("Your number is LESS")
            } else if (Random_num < PL_num) {
                response.write("Your number is MORE")
            } else if (Random_num===PL_num){
                response.write('You are won! My number is '+PL_num);
            }

            console.log("Send data - "+PL_num);
            response.end()


        });

    } else if (request.url==='/newGame') {
        var Random_num = Math.floor(Math.random()*(max-min)+min);
        response.write("New Game");
        console.log(Random_num)

    }

});
server.listen(port, function () {
    console.log('http://localhost:'+3000);


});