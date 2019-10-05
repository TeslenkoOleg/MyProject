var min = 0;
var max = 100;
var Player_number='';
var counter = 0;

alert("Hello! Welcome to the game! You must to guess number what I make up!");
var RandomNumber = Math.floor(Math.random()*(max-min+1)+min);
alert(RandomNumber);
while (true) {
    if (Player_number != RandomNumber) {
        var Player_number = prompt("Enter your number:");
        if (Player_number < RandomNumber) {
            alert('Your number is ' + Player_number + ". Your number is LESS then My number! Try again!")
        } else if (Player_number > RandomNumber) {
            alert('Your number is ' + Player_number + '. Your number is MORE than My number! Try again!')
        }
        counter++;
        if (counter===7){
            alert("You Loser!!!");
            break
        }
    } else {
        alert("You win!!! My number is - " + RandomNumber);
        break
    }
}
