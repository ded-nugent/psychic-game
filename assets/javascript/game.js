var randomLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var guesses = 10;
var guessed = []

var computerChoice = randomLetter[Math.floor(Math.random()*randomLetter.length)];


function resetGame() {
    guesses = 10
    guessed = []
    computerChoice = randomLetter[Math.floor(Math.random()*randomLetter.length)];
    console.log(computerChoice)
}

document.onkeypress = function(event) {
    var yourGuess = event.key;

    if(yourGuess === computerChoice){
        wins++;
        resetGame(); 
    }
    else{
        guesses--;
        guessed.push(yourGuess)
    }
    if(guesses === 0){
        losses++;
        resetGame();
    }
    
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
    document.getElementById('guessed').innerHTML = "Guessed letters: " + guessed.join(', ');
}