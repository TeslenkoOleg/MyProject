var cluster = require('cluster');
var os = require('os');

if (cluster.isMaster){
    console.log('Hello, Master '+process.pid);
    cluster.on("online", (worker) =>{
        console.log('Hello, worker '+worker.process.pid)

    } );
    for (var i=0; i<os.cpus().length; i++){
        cluster.fork()
    }
} else {
    //console.log("Worker "+process.pid+" is started")

}
