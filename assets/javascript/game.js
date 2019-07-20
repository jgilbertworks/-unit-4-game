$(document).ready(function() {

let winCount = 0; // counter for game wins
$("#wins").text("Wins: " + winCount);

let lossCount = 0; // counter lossses
$("#losses").text("losses: " + lossCount); 

let scoreGuessed = 0; // counter for user score

let targetNumber = 53; // sets game score to 53

let crystalOne = 10; // sets first crystal to 10
let crystalTwo = 5; // sets second cystal to 5
let crystalThree = 3; // sets third crystal to 3
let crystalFour = 7; // sets 4th crystal to 7

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
    targetNumber = 53;
    crystalOne = 10;
    crystalTwo = 5;
    crystalThree = 3;
    crystalFour = 7;

    $("#score-id").text(" Game Score: " + targetNumber); 
    $("#score-total-display-id").text(scoreGuessed);

    
    console.log(targetNumber);
    console.log(crystalOne);
    console.log(crystalTwo);
    console.log(crystalThree);
    console.log(crystalFour);
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

$("#crystal2").click(function(){
    scoreGuessed = scoreGuessed + crystalTwo; // add value of crystalOne to scoreGuessed
    console.log("Score Guessed: " + scoreGuessed);
    $("#score-total-display-id").text("Score Total: " +scoreGuessed);
    if(scoreGuessed === targetNumber) {
        win();
    } else if (scoreGuessed > targetNumber) {
        loose();
    }
});

$("#crystal3").click(function(){
    scoreGuessed = scoreGuessed + crystalThree; // add value of crystalOne to scoreGuessed
    console.log("Score Guessed: " + scoreGuessed);
    $("#score-total-display-id").text("Score Total: " +scoreGuessed);
    if(scoreGuessed === targetNumber) {
        win();
    } else if (scoreGuessed > targetNumber) {
        loose();
    }
});

$("#crystal4").click(function(){
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
