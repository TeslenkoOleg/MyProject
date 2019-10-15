const fs = require('fs');

let file =fs.readFileSync('updateForensiq.conf', 'utf-8');
let arr = file.split('\r\n');

let substr = "brave";

var positiveArr = arr.filter(function(item, index, arr) {
    if (item.includes(substr)===true){
       return item
    }
});

var lastArr =function arrOfSplit() {
    let sp = [];

    for (let i = 0; i < positiveArr.length; i++) {
        let oneStep = positiveArr[i].split("|");

        let twoStep = oneStep[2].split("@@@");

        oneStep.splice(2, 1);
        let three = oneStep.concat(twoStep);

        let rv = {"name": '', "count": "", "adress": "", "visit": '', "persent": ""};
        for (let j = 0; j < three.length; j++) {
            for (let key in rv) {
                rv[key] = three[j];
                three.splice(0,1)
            }
        }
        sp.push(rv)
    }
    return sp
};

let num = 0;
for (let i=0; i<lastArr().length; i++){
    if (parseInt(lastArr()[i]['persent'])>20){
        fs.appendFileSync('Obj_Info.txt', "Name:"+lastArr()[i]["name"]+", visit:"+lastArr()[i]["visit"]+", persent:"+lastArr()[i]["persent"]+"\n");
        num = num+1;
        console.log("Count of selected item - "+num);
    }
}
