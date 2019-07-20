$(document).ready(function() {

let winCount = 0; // counter for game wins
$("#wins").text("Wins: " + winCount);

let lossCount = 0; // counter lossses
$("#losses").text("losses: " + lossCount); 

let scoreGuessed = 0; // counter for user score

// creates a random genrated number between 19 & 120, assigns number to targetNumber variable
let targetNumber = Math.floor(Math.random() * 120) + 19;

// creates a random generated number between 1 & 12, assigns number to cystal variable
let crystalOne = Math.floor(Math.random() * 12) +1;

let crystalTwo = Math.floor(Math.random() * 12) +1;

let crystalThree = Math.floor(Math.random() * 12) +1;

let crystalFour = Math.floor(Math.random() * 12) +1;

$("#score-id").text("Game Score: " + targetNumber); 

$("#score-total-display-id").text(scoreGuessed);

console.log(targetNumber);

console.log(crystalOne);

console.log(crystalTwo);

console.log(crystalThree);

console.log(crystalFour);

// Reset the game values after game ends
function gameReset() {

    scoreGuessed = 0;

    targetNumber = Math.floor(Math.random() * 120) +19;

    crystalOne = Math.floor(Math.random() * 12) +1;

    crystalTwo = Math.floor(Math.random() * 12) +1;

    crystalThree = Math.floor(Math.random() * 12) +1;

    crystalFour = Math.floor(Math.random() * 12) +1;

    $("#score-id").text(" Game Score: " + targetNumber); 

    $("#score-total-display-id").text(scoreGuessed);
}


// Create the function for wonning the game
function win() {

    alert("winner!");

    winCount = winCount + 1;

    $("#wins").text("Wins: " +winCount);

    gameReset();
}

// create the function for loosing the game
function loose() {

    alert("You loose");

    lossCount = lossCount + 1;

    $("#losses").text("losses: " +lossCount);

    gameReset();
}

// create function for the first crystal
$("#crystal1").click(function(){

    scoreGuessed = scoreGuessed + crystalOne; // add value of crystalOne to scoreGuessed

    console.log("Score Guessed: " + scoreGuessed);

    $("#score-total-display-id").text("Score Total: " +scoreGuessed);

    if(scoreGuessed === targetNumber) {

        win();

    } else if (scoreGuessed > targetNumber) {

        loose();
    }
});

$("#crystal2").click(function() {

    scoreGuessed = scoreGuessed + crystalTwo; // add value of crystalOne to scoreGuessed

    console.log("Score Guessed: " + scoreGuessed);

    $("#score-total-display-id").text("Score Total: " +scoreGuessed);

    if(scoreGuessed === targetNumber) {

        win();

    } else if (scoreGuessed > targetNumber) {

        loose();
    }
});

$("#crystal3").click(function() {

    scoreGuessed = scoreGuessed + crystalThree; // add value of crystalOne to scoreGuessed

    console.log("Score Guessed: " + scoreGuessed);

    $("#score-total-display-id").text("Score Total: " +scoreGuessed);

    if(scoreGuessed === targetNumber) {

        win();

    } else if (scoreGuessed > targetNumber) {

        loose();
    }
});

$("#crystal4").click(function() {

    scoreGuessed = scoreGuessed + crystalFour; // add value of crystalOne to scoreGuessed

    console.log("Score Guessed: " + scoreGuessed);

    $("#score-total-display-id").text("Score Total: " +scoreGuessed);

    if(scoreGuessed === targetNumber) {

        win();

    } else if (scoreGuessed > targetNumber) {
        
        loose();
    }
});





});
