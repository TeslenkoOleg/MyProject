var cluster = require('cluster');
var fs = require('fs');
var os = require('os').cpus().length;

/*console.log('Free mem - '+os.freemem()/1000000+' M|bytes');
console.log(os.type())
console.log(os.cpus())
console.log(os.platform())*/

var counter = 0;


if (cluster.isMaster) {
    console.log('I am master');
    for (var i = 0; i<os; i++){
    cluster.fork()
    }

} else if (cluster.isWorker) {
    console.log(cluster.worker.id);
    for (let a = 1 + (cluster.worker.id -1)*1000/os; a < 1 + (cluster.worker.id-1)*1000/os + 1000/os; a++){
        fs.appendFileSync('Text.'+process.pid+'txt', a+'\n')

    }
}

