function getCompChoice() {
    let hand = ["rock", "paper", "scissors"];
    let compChoice = hand[Math.floor(Math.random() * hand.length)];
    return compChoice;
}

const compHand = getCompChoice()
const playerChoice = "scissors"
const playerHand = (playerChoice.toLowerCase())

console.log(playerHand)
console.log(compHand)

function playRound () {
    if (playerHand === "rock") {
        playRoundRock();
    } else if (playerHand === "paper") {
        playRoundPaper();
    } else if (playerHand === "scissors") {
        playRoundScissors();
    }
}

function playRoundRock() {
    if (compHand === "rock") {
        console.log("DRAW!!");
    } else if (compHand === "paper") {
        console.log("You Lose!!");
    } else {
        console.log("You Win!!");
    }
}

function playRoundPaper() {
    if (compHand === "paper") {
        console.log("DRAW!!");
    } else if (compHand === "scissors") {
        console.log("You Lose!!");
    } else {
        console.log("You Win!!");
    }
}

function playRoundScissors() {
    if (compHand === "scissors") {
        console.log("DRAW!!");
    } else if (compHand === "rock") {
        console.log("You Lose!!");
    } else {
        console.log("You Win!!");
    }
}



// p > r > s 

