// Generates random number from 1 - 3 to determine the computer will play
computerPlay = () => (
    Math.floor(Math.random() * 3) + 1
);

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

console.log(playRound('rock','scissors'));