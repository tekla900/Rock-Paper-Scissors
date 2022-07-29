function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 3; i++) {
        let userInput = prompt('Rock, Paper, or Scissors ?');
        userInput = userInput.toLowerCase();
        if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors') { 
            let computerSelection = getComputerChoice();
            let oneRound = playRound(userInput, computerSelection);
            console.log(oneRound);
            let result = oneRound.slice(4, 5);
            if (result == 'W') {
                playerScore += 1;
            } else if (result == 'L') {
                computerScore += 1;
            }
            
        } else {
            console.log('invalid input');
            break;
        }
    }
    if (playerScore > computerScore) {
        console.log(`Yon won! Final score is ${playerScore}:${computerScore}`)
    } else {
        console.log(`Yon Lost! Final score is ${playerScore}:${computerScore}`)
    }
}

game();
