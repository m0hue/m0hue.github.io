let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

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

//Takes in both selections and determines which selection is the winner/loser
function playRound(playerSelection, computerSelection) {
    let result;

    //If both inputs are the same, return 'tie' value
    if (playerSelection === computerSelection) {
        result = 'tie';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            result = 'win';
        } else if (computerSelection === 'paper') {
            result = 'lose';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            result = 'win';
        } else if (computerSelection === 'scissors') {
            result = 'lose';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            result = 'lose';
        } else if (computerSelection === 'paper') {
            result = 'win';
        }
    }
    return result;
}



function playerPlay() {
    let userSelect = prompt("Rock, Paper, or Scissors?")
    userSelect = userSelect.toLowerCase();

    if (userSelect==='rock' || userSelect==='paper' || userSelect==='scissors') {
        return userSelect;
    } else {
        return 'Invalid input'
    }
}

function game() {
    for (let i = 0; playerScore < 5 && computerScore < 5; i++) {
        computerSelection = computerPlay();
        playerSelection = playerPlay();
        let round = playRound(playerSelection,computerSelection);
        if (round==='win') {
            playerScore++;
        } else if (round==='lose') {
            computerScore++;
        }
        console.log(round);
    }
    console.log(playerScore,computerScore);
}

game()