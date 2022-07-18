let computerSelection;
let playerScore = 0;
let computerScore = 0;
let userSelect;

const playerScoreText = document.querySelector(".playerscore");
const computerScoreText = document.querySelector(".computerscore");


// Generates random number from 1 - 3 to determine the computer will play
function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3) + 1
    
    if (randomNum === 1) {
        return 'rock'
    } else if (randomNum === 2) {
        return 'paper'
    } else if (randomNum === 3) {
        return 'scissors'
    }
}

//Takes user input from buttons to pick what to play
function pickRock() {
    userSelect = 'rock';
    game() 
}
function pickPaper() {
    userSelect = 'paper';
    game()
}
function pickScissors() {
    userSelect = 'scissors';
    game()
}

//Takes in both selections and determines which selection is the winner/loser
function playRound(userSelect, computerSelection) {
    let result;

    //If both inputs are the same, return 'tie' value
    if (userSelect === computerSelection) {
        result = 'tie';
    } else if (userSelect === 'rock') {
        if (computerSelection === 'scissors') {
            result = 'win';
        } else if (computerSelection === 'paper') {
            result = 'lose';
        }
    } else if (userSelect === 'paper') {
        if (computerSelection === 'rock') {
            result = 'win';
        } else if (computerSelection === 'scissors') {
            result = 'lose';
        }
    } else if (userSelect === 'scissors') {
        if (computerSelection === 'rock') {
            result = 'lose';
        } else if (computerSelection === 'paper') {
            result = 'win';
        }
    }
    return result;
}

function updateText() {
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
}

function game() {
    computerSelection = computerPlay();
    let round = playRound(userSelect,computerSelection);
    if (playerScore < 5 && computerScore < 5) { 
        if (round==='win') {
            playerScore++;
            updateText();
        } else if (round==='lose') {
            computerScore++;
            updateText();
        } else if (round==='tie') {
            updateText();
        }
    } else if (playerScore === 5 || computerScore === 5) {
        resetGame();
    }
}

function resetGame() {
    computerScore = 0;
    playerScore = 0;
    updateText();
}