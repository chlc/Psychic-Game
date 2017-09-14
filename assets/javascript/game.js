//List of Avaialable Letters
  var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

//Initializing all of the variables
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

//Have computer choose random letter
var compGuess = letters[Math.floor(Math.random() * letters.length)];
	console.log(compGuess);

//onKeyUp event to identify user input
document.onKeyUp = function(event) {

var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
}
//Showing what the user input is
document.querySelector('#guessedLetters').innerHTML = "Guessed Letters: " + guessedLetters;

//Updated how many guesses are left
var changeGuessesLeft = function() {
	document.querySelector('#guessesLeft').innerHTML = "Guessese left: " + guessesLeft;
}