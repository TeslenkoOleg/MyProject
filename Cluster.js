
const cluster = require('cluster');

const numCPUs = require('os').cpus().length;

const fs = require('fs');

var counter = 0;
var start = Date.now();

if (cluster.isMaster) {
    console.log('Master ' + process.pid+ ' is running');

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    // Workers can share any TCP connection


            var i = setInterval(function(){
            if(counter<10){
                fs.appendFileSync('Text'+process.pid+'.txt', counter+"\n");
                console.log(counter);
                console.log(Date.now() - start);

                counter++;


            }else{

                clearInterval(i)
            }
        }, 200)


    console.log(`Worker ${process.pid} started`);
}