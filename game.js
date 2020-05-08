//create secretNumber
var secretNumber = 4;

//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//check guess is right
if (Number(guess) === secretNumber) {
  alert("YOU GOT IT RIGHT!");
}
//otherwise you got wrong
// else {
//   alert("WRONGGGG");
// }

//check if guess is higher
else if (Number(guess) > secretNumber) {
  alert("Too high.Guess agian!");
}

//check if guess is lower
else {
  alert("Too low. Guess agian!");
}
