var max = 100;
var min = 0;
var array = [];

function Sort(a,b) {
    if (a>b) return 1;
    if (a<b) return -1;
    if (a===b) return 0;

}
function Sort(a,b) {return a-b}

function getRandomArr() {
    while (array.length<100) {
        var NumRandom = Math.floor(Math.random() * (max - min + 1) + min)
        array.push(NumRandom)
    }
    array.sort((a,b)=>a-b);
    //reverse
    array.reverse();
    console.log(array);
    console.log(array.length)
}

getRandomArr();