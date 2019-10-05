var http = require("http");
var fs = require('fs');

var port = 3000;
var max = 100;
var min =0;

function Random (){
    return Math.floor(Math.random()*(max-min)+min)
}
var Random_num = Random();

var server = http.createServer(function (request, response) {

    var data = '';

    if (request.url==="/"){

        var site = fs.readFileSync('Bootstrap.html','utf-8');
        response.write(site);



    } else if (request.url==="/data"){

        request.on('data', function(chunk) {
            data += chunk.toString();
        });
        request.on('end', function() {
            var body = JSON.parse(data);
            var PL_num = body['data'];
            if (Random_num > PL_num){
                response.write("Your number is LESS")
            } else if (Random_num < PL_num) {
                response.write("Your number is MORE")
            } else if (Random_num === parseInt(PL_num)){
                response.write('You are won!');
            } else if (request.url==='/NewGame'){
                Random_num = Random();
                response.write('New Game is beginning!');
                console.log('Random -'+Random_num)
            }






            console.log("Send data - "+PL_num);

            response.end();
        });
    }

});
server.listen(port, function () {
    console.log('http://localhost:'+3000);
    console.log("Random - "+Random_num)


});




