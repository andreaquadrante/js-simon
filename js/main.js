var GAME_NUMBERS = 5; // quantità di numeri da memorizzare
var MIN_NUMBER = 1; // numero minimo da generare
var MAX_NUMBER = 100; // numero massimo da generare
var MEMO_TIME = 300; // 30 secondi

var memoNumbers = []; // array di numeri da memorizzare
var userNumbers = []; // array di numeri che inserirà l'utente
var checkedNumbers = []; // array di numeri indovinati dall'utente

alert ('Cerca di memorizzare i numeri che seguiranno. Dopo 30 secondi dovrai inserirli tu! Sei pronto?')

// creo un ciclo per generare i numeri casuali, visualizzarli a schermo e inserirli in un array
while (memoNumbers.length < GAME_NUMBERS) {

  var randomGameNumber = randomNumber (MIN_NUMBER, MAX_NUMBER);

  if (!isNumberInArray (randomGameNumber, memoNumbers)) {
    alert (randomGameNumber);
    memoNumbers.push (randomGameNumber);
  }

}

// definisco un tempo di attesa prima che l'utente possa inserire i numeri che dovrà ricordare
setTimeout (timeLeft, MEMO_TIME);
function timeLeft (){
  // creo un ciclo per chiedere all'utente di inserire i numeri che avrà ricordato da quelli visualizzati in precedenza e inserirli in un array
  while (userNumbers.length < GAME_NUMBERS) {

    var inputNumber = parseInt (prompt('Inserisci i numeri che ricordi'))

    if (!isNumberInArray (inputNumber, userNumbers)) {
      userNumbers.push (inputNumber);
    } else if (isNumberInArray (inputNumber, userNumbers)) {
      alert ('Numero già inserito! Riprova')
    }

    if (memoNumbers.includes(inputNumber)) {
      checkedNumbers.push (inputNumber)
    }

  }

  var resultMessageEl = document.getElementById('resultMessage');
  var resultNumbersEl = document.getElementById('resultNumbers');

  if (checkedNumbers.length == 1) {
    resultMessageEl.innerHTML = 'Hai ricordato ' + checkedNumbers.length + ' numero. Non male...';
    resultNumbersEl.innerHTML = 'Hai inserito il numero ' + checkedNumbers;
  } else if (checkedNumbers.length == GAME_NUMBERS) {
    resultNumbersEl.innerHTML = 'Hai ricordato tutti i ' + checkedNumbers.length + ' numeri. Complimenti!'
  } else if (checkedNumbers.length > 1) {
    resultMessageEl.innerHTML = 'Hai ricordato ' + checkedNumbers.length + ' numeri. Bravo!';
    resultNumbersEl.innerHTML = 'Hai inserito i numeri ' + checkedNumbers;
  } else {
    resultMessageEl.innerHTML = 'Non hai ricordato nessun numero... riprova!'
  }

}
