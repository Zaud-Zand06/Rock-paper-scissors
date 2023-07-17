function getCompChoice() {
    let hand = ["rock", "paper", "scissors"];
    let compChoice = hand[Math.floor(Math.random() * hand.length)];
    return compChoice;
}
const compHand = getCompChoice()
const playerChoice = prompt("Rock, Paper, Scissors", "Rock") 
const playerHand = (playerChoice.toLowerCase())

function playRound () {
    if (playerHand === "rock") {
        playRoundRock();
    } else if (playerHand === "paper") {
        playRoundPaper();
    } else if (playerHand === "scissors") {
        playRoundScissors();
    }
    return;
}

function playRoundRock() {
    const compHand = getCompChoice()
    if (compHand === "rock") {
        console.log("DRAW!!");
    } else if (compHand === "paper") {
        console.log("You Lose!!");
    } else {
        console.log("You Win!!");
    }
}

function playRoundPaper() {
    const compHand = getCompChoice()
    if (compHand === "paper") {
        console.log("DRAW!!");
    } else if (compHand === "scissors") {
        console.log("You Lose!!");
    } else {
        console.log("You Win!!");
    }
}

function playRoundScissors() {
    const compHand = getCompChoice()
    if (compHand === "scissors") {
        console.log("DRAW!!");
    } else if (compHand === "rock") {
        console.log("You Lose!!");
    } else {
        console.log("You Win!!");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}