var GAME_NUMBERS = 5;

var memoNumbers = [];
var userNumbers = [];

while (memoNumbers.length < GAME_NUMBERS) {
  var randomNumber = Math.floor (Math.random () * ((100) - 1) + 1)
  alert(randomNumber);
  memoNumbers.push(randomNumber);
}

while (userNumbers.length < GAME_NUMBERS) {
  var inputNumber = parseInt(prompt('Inserisci i numeri nella stessa sequenza'))
  userNumbers.push(inputNumber);
}

console.log(inputNumber);
