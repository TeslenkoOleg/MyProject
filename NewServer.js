const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({extended: false});

var min = 0;
var max = 100;
var Player_number='';
var counter = 0;

var RandomNumber = Math.floor(Math.random()*(max-min+1)+min);


app.get("/game", urlencodedParser, function (request, response) {
    response.sendFile(__dirname + "/game.html");
});
app.post("/game", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    console.log(RandomNumber);
     if (RandomNumber!=request.body.UserNumber){
         response.send("Not this number");
     } else {
    response.send(`${request.body.UserNumber}`);}
});

app.get("/", function(request, response){
    response.send("Главная страница");
});

app.listen(3000);
console.log("Server is running");