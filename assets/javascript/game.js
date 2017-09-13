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

document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === compGuess){
        wins++;
    }else{
        guesses--;
    }

    if(guesses = 0){
        losses++
    }
}   
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;