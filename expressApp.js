const fs = require('fs');
/*var i =0;


var timer = setTimeout(function (){
    console.log(i)
}, 200);
while (i<10){
    timer;
}*/

var counter = 0;
var start = Date.now();
/* --first case
var i = setInterval(function(){
    if(counter<10){
        console.log(counter)
        console.log(Date.now() - start)
        counter++

    }else{
        console.log(Date.now() - start)
        clearInterval(i)
    }
}, 200)*/


for (var i=0; i<1; i++){

    var inter = setInterval(function () {
        console.log(i);
        console.log(Date.now()-start);
        i++;
        if (i ===10){
            clearInterval(inter);
        }
    }, 2000)
}
/*var start = Date.now();
//console.log(date);


while (i<10){
    i++;
    console.log(i);
}
var finish = Date.now();

var result = finish - start;*/
/*
console.log("____________________");
console.log("The time is "+result+" mili sec");*/
