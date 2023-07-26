// const playerChoice = prompt("Rock, Paper, Scissors", "Rock") 
// const playerHand = (playerChoice.toLowerCase())

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

function getCompChoice() {
    let hand = ["rock", "paper", "scissors"];
    let compChoice = hand[Math.floor(Math.random() * hand.length)];
    return compChoice;
}

const compHand = getCompChoice();
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.onclick = () => playRoundRock();
paperButton.onclick = () => playRoundPaper();
scissorsButton.onclick = () => playRoundScissors();

function playRoundRock() {
    const compHand = getCompChoice()
    if (compHand === "rock") {
        alert("DRAW!!");
    } else if (compHand === "paper") {
        alert("You Lose!!");
    } else {
        alert("You Win!!");
    }
}

function playRoundPaper() {
    const compHand = getCompChoice()
    if (compHand === "paper") {
        alert("DRAW!!");
    } else if (compHand === "scissors") {
        alert("You Lose!!");
    } else {
        alert("You Win!!");
    }
}

function playRoundScissors() {
    const compHand = getCompChoice()
    if (compHand === "scissors") {
        alert("DRAW!!");
    } else if (compHand === "rock") {
        alert("You Lose!!");
    } else {
        alert("You Win!!");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}