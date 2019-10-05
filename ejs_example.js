const express = require('express');
const app = express();



app.set("view engine", "ejs");

app.use("/hi", function(request, response){

    response.render("hi", {
        hello: ""

})});
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));



// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({extended: false});

var min = 0;
var max = 100;
var Player_number='';
var counter = 0;

var RandomNumber = Math.floor(Math.random()*(max-min+1)+min);


app.get("/hi", urlencodedParser, function (request, response) {
    response.sendFile(__dirname + "/hi.ejs");
});
app.post("/hi", urlencodedParser, function (request, response) {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body);
    console.log(RandomNumber);
    response.render('hi', {
        hello:request.body.UserNumber

    });
    response.send('hi.ejs')
});


app.get("/", function(request, response){
    response.send("Главная страница");
});
app.post("/", function(request, response){
    console.log(parseInt(request.body.number))
    response.send();
});
app.listen(3000);
console.log("Server is running");

