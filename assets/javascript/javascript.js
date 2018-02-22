var wordBeingGuessed = "";
var displayedWord = "";
var alreadyGuessedChar = [""];
var currentlyGuessed = " ";
var wrongGuesses = [];
var guessedCharCheck = 0;
var guessesLeft = 15;
var wins = 0;
var losses = 0;
var inWord = 0;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var possibleWords = ["piccard", "kirk", "spock", "warf", "enterprise", "riker", "ferengi", "borg", "romulan", "klingon", "phaser", "bridge", "torpedo", "shield"]

wordBeingGuessed = possibleWords[Math.floor(Math.random() * 13) + 0]

document.onkeyup = function(event) {
    var pressedKey = event.key

    for (var i = 0; i < alphabet.length; i++) {
        if (alphabet[i] === pressedKey) {
            currentlyGuessed = pressedKey;
            console.log("you pressed " + currentlyGuessed);
        } 
    }
    for (var i = 0; i <= alreadyGuessedChar.length; i++) {
        if (alreadyGuessedChar[i] === currentlyGuessed) {
            console.log("Character has already been guessed")
            guessedCharCheck = 1
        }
    }
    if (guessedCharCheck === 0) {
        alreadyGuessedChar.push(currentlyGuessed);
        console.log("Already guessed characters: " + alreadyGuessedChar);
        displayedWord = "";
        for (var i = 0; i < wordBeingGuessed.length; i++ ) {
            var currentLetter = wordBeingGuessed.charAt(i);
            if (alreadyGuessedChar.indexOf(currentLetter) > -1) {
                displayedWord = displayedWord + currentLetter + " ";
            } else {
                displayedWord = displayedWord + "_ ";
            }
            console.log(displayedWord);
        }
        for (var i = 0; i < wordBeingGuessed.length; i++) {
            var currentLetter = wordBeingGuessed.charAt(i);
            if (currentlyGuessed.indexOf(currentLetter) > -1) {
                inWord = 1
            }
        }
        document.getElementById("displayedWord").textContent = displayedWord;
        if (inWord === 0) {
            wrongGuesses.push(currentlyGuessed);
            document.getElementById("wrongGuesses").textContent = wrongGuesses;
            console.log("Wrong Guesses: " + wrongGuesses);
        } else {
            inWord = 0;
        }
        guessesLeft = guessesLeft - 1;
        document.getElementById("guessesLeft").textContent = guessesLeft;
        console.log("Guesses left: " + guessesLeft);
        if (displayedWord.search("_") < 0) {
            alert("You win")
            wins = wins + 1;
            document.getElementById("wins").textContent = wins;
            displayedWord = "";
            alreadyGuessedChar = [""];
            wrongGuesses = [];
            guessesLeft = 15;
            wordBeingGuessed = possibleWords[Math.floor(Math.random() * 13) + 0]
        }
        if (guessesLeft === 0) {
            alert("You lose");
            losses = losses + 1;
            document.getElementById("losses").textContent = losses;
            displayedWord = "";
            alreadyGuessedChar = [""];
            wrongGuesses = [];
            guessesLeft = 15;
            wordBeingGuessed = possibleWords[Math.floor(Math.random() * 13) + 0]
        }
    } else {   
        guessedCharCheck = 0;
    }
}
