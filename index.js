const compHand = getCompChoice();
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const startButton = document.getElementById('start');
const score = document.querySelector('#score');
const gameScore = document.querySelector('#gameScore');
score.textContent = 'Start a game!';
const gameHistory = [];

rockButton.onclick = () => playRoundRock();
paperButton.onclick = () => playRoundPaper();
scissorsButton.onclick = () => playRoundScissors();
startButton.onclick = () => startGame();

function getCompChoice() {
    let hand = ["rock", "paper", "scissors"];
    let compChoice = hand[Math.floor(Math.random() * hand.length)];
    return compChoice;
}

function startGame() {
    score.textContent = 'Make Your Pick';
    document.getElementById('compPick').textContent = '';
    gameHistory.length = 0;
}

function findWinner() {
    const winArray = gameHistory.filter((element) => element === 'You Win!!');
    const loseArray = gameHistory.filter((element) => element === 'You Lose!!');
    if (winArray.length == 3) {
        gameScore.textContent = 'You won the game!! :3'
    } else if (loseArray.length == 3) {
        gameScore.textContent = 'You lost the game....:('
    } else {
        gameScore.textContent = 'Tie game! Play again :3'
    }
    gameHistory.length = 0; 
}

function updateHistory() {
    gameHistory.push(score.textContent);
    gameScore.textContent = gameHistory.join(' ').trim();
    if (gameHistory.length >= 5) {
        findWinner()
    }
}



function playRoundRock() {
    const compHand = getCompChoice();
    document.getElementById('compPick').textContent = 'Computer chose : ' + compHand;
    if (compHand === "rock") {
        score.textContent = 'Draw!!';
    } else if (compHand === "paper") {
        score.textContent = "You Lose!!";
    } else {
        score.textContent = "You Win!!";
    }
    updateHistory();
}

function playRoundPaper() {
    const compHand = getCompChoice();
    document.getElementById('compPick').textContent = 'Computer chose : ' + compHand;
    if (compHand === "paper") {
        score.textContent = 'Draw!!';
    } else if (compHand === "scissors") {
        score.textContent = "You Lose!!";
    } else {
        score.textContent = "You Win!!";
    }
    updateHistory();
}

function playRoundScissors() {
    const compHand = getCompChoice();
    document.getElementById('compPick').textContent = 'Computer chose : ' + compHand;
    if (compHand === "scissors") {
        score.textContent = "Draw!!";
    } else if (compHand === "rock") {
        score.textContent = "You Lose!!";
    } else {
        score.textContent = "You Win!!";
    }
    updateHistory();
}
