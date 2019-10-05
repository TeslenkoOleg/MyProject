const fs = require('fs');
var counter = 0;
var start = Date.now();

var i = setInterval(function(){
    if(counter<10){
        fs.appendFileSync('Text.txt', counter+"\n");
        console.log(counter);
        console.log(Date.now() - start);

        counter++;


    }else{

        clearInterval(i)
    }
}, 200)