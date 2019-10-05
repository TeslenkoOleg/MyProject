const express = require('express');
//Для получения данных форм из запроса необходимо использовать специальный пакет body-parser
const bodyParser = require('body-parser');

const app = express();


// Поскольку данные отправляются с помощью формы, то для создания парсера
// применяется функция urlencoded(). В эту функцию передается объект,
// устанавливающий параметры парсинга. Значение extended: false указывает,
// что объект - результат парсинга будет представлять набор пар ключ-значение, а каждое значение может быть представлено в виде строки или массива.
var urlencodedParser = bodyParser.urlencoded({extended:false});

//При переходе по адресу "/register" будет срабатывать метод app.get,
//    который отправит пользователю файл
app.get('/game', urlencodedParser, function (request, response) {
    response.sendFile(__dirname+'/game.html');

});

app.post("/game", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body.UserNumber);
    response.send(request.body.UserNumber);
});


app.get('/', function (request, response) {
    response.send('Home page');


});

app.listen(3000);
console.log('Server is run');

