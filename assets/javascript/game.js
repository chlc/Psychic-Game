//Initializing all of the variables
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

//List of Avaialable Letters
  var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

//Have computer choose random letter
var compGuess = letters[Math.floor(Math.random() * letters.length)];
	console.log(compGuess);

//Updated how many guesses are left
var changeGuessesLeft = function() {
	document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
};

//Computer keeps guessing
var changeLetterGuess = function (){
	this.letterToGuess = this.letters[Math.floor(Math.random() * this.letters.length)];
};

//Showing what the user input is
var changeGuessedLetters = function(){
document.querySelector('#guessedLetters').innerHTML = "Guessed Letters: " + guessedLetters;
};


//Resetting the game
var reset = function() {
	totalGuesses = 9;
	guessesLeft = 9;
	guessedLetters= [];

	changeGuessedLetters();
	changeGuessesLeft();
	changeLetterGuess();
}

changeLetterGuess();

//onKeyUp event to identify user input
document.onKeyUp = function() {
	guessesLeft--;

var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

console.log(userGuess);
guessedLetters.push(userGuess);
changeGuessedLetters();
changeGuessesLeft();

if (guessesLeft > 0){
	if (userGuess===compGuess){
		wins++, reset();
		alert("Your power is terrifying.");
		document.querySelector('#wins').innerHTML = "Wins: " + wins;

	}
} else if (guessesLeft == 0){
	losses++, reset();
	document.querySelector('#losses').innerHTML = "Losses: " + losses;
	alert("This is embarrassing...the correct letter was " + letterToGuess + ".");


}

};