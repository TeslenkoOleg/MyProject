var http=require('http');


var server = http.createServer(function (request, response) {
   if (request.url==='/'){
    response.end('Home')
   } else response.statusCode = 400
});


server.listen(3000, ()=>console.log("Server is running!"));



var httpRequest;
if (window.XMLHttpRequest) {
    httpRequest = new XMLHttpRequest();
}

httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === 4){
        if (httpRequest.status === 200){
            console.log(httpRequest.responseText)
        }
    }
};
httpRequest.open('POST', '/', true);
httpRequest.send('');
