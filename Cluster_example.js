var cluster = require('cluster');
var fs = require('fs');
var os = require('os').cpus().length;

/*console.log('Free mem - '+os.freemem()/1000000+' M|bytes');
console.log(os.type())
console.log(os.cpus())
console.log(os.platform())*/

var counter = 0;


if (cluster.isMaster){
    console.log("Master "+process.pid+" is running");

    for (let i=0; i<os; i++){
        cluster.fork();
    }
    cluster.on("exit", (worker, code, signal) => {
        console.log("Worker "+worker.process.pid+" is died")
    });
//first case

   /* cluster.disconnect( ()=>{
        console.log('Callback function is started');
        for (var i=5; i<20; i++){

            console.log(i);
            fs.appendFileSync('SecondText'+process.pid+'.txt', i)
        }
    });*/

} else {
    var interval = setInterval(() => {
        
            if (counter<10) {
                counter++;
                console.log(counter);
                fs.appendFileSync('NewText'+process.pid+'.txt', counter + "\n")
            } else {
                clearInterval(interval);
//second case
                function secondAction() {
                    console.log('---------------------------');
                    console.log('Callback function is started');
                    for (var i=5; i<20; i++){

                        console.log(i);
                        fs.appendFileSync('SecondText'+process.pid+'.txt', i+'\n')
                    }
                }
                secondAction()
            }
            }, 500);


    console.log('Worker '+ process.pid+" started")
}

