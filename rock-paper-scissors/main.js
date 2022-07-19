let computerSelection;
let playerScore = 0;
let computerScore = 0;
let userSelect;

const roundText = document.querySelector(".round");
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

function animateText(text) {
    text.animate(
        [{transform: 'scale(1)'},
         {transform: 'scale(1.2)'},
         {transform: 'scale(1)'}],
         {duration: 500,
        iterations: 1}

    ) 
    // text.style.animation = 'resize 1s ease-in-out';
}

function updateText(round) {
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
    roundText.textContent = round;
    animateText(roundText);
    if (round==='Winner!') {
        animateText(playerScoreText);
    } else if (round==='Loser!') {
        animateText(computerScoreText);
    }
}

function game() {
    computerSelection = computerPlay();
    let round = playRound(userSelect,computerSelection);
    if (playerScore < 5 && computerScore < 5) { 
        if (round==='win') {
            playerScore++;
            updateText('Winner!');
        } else if (round==='lose') {
            computerScore++;
            updateText('Loser!');
        } else if (round==='tie') {
            updateText('Tie!');
        }
    } else if (playerScore === 5 || computerScore === 5) {
        resetGame();
        updateText('Begin!')
    }
}

function resetGame() {
    computerScore = 0;
    playerScore = 0;
    updateText();
}