let userInput = prompt('Rock, Paper, or Scissors ?');
userInput = userInput.toLowerCase();

function getUserChoice() {
    console.log(userInput);
    if (userInput.toLowerCase == 'rock' || userInput == 'paper' || userInput == 'scissors') {
        return userInput;
    } else {
        
        return 'invalid input';
    }
}
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    // let userWins;

    if (playerSelection.toLowerCase() == computerSelection) {
        return "It's a Tie!";
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        return 'You Win! Rock beats Scissors';
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        return 'You Lose! Rock beats Scissors';
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        return 'You Lose! Scissors beats Paper';
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        return 'You Win! Scissors beats Paper';
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        return 'You Win! Paper beats Rock';
    } 
}

