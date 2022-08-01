function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    const res = document.querySelector('.results');

    if (playerSelection.toLowerCase() == computerSelection) {
        res.textContent = "It's a Tie!";
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        res.textContent = 'You Win! Rock beats Scissors';
        return "W";
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        res.textContent = 'You Lose! Rock beats Scissors';
        return "L";
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        res.textContent = 'You Lose! Scissors beats Paper';
        return "L";
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        res.textContent = 'You Win! Scissors beats Paper';
        return "W";
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        res.textContent = 'You Lose! Paper beats Rock';
        return "L";
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        res.textContent = 'You Win! Paper beats Rock' ;
        return "W";
    } 
}

function game() {
    const buttons = document.querySelector('.buttons');
    const restart = document.querySelector('.restart');
    const res = document.querySelector('.results');
    const p = document.querySelector('.p');
    res.textContent = '';
    
    let playerScore = 0;
    let computerScore = 0;

    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');
    const playerOptions = [rock, paper, scissors];
    const h3 = document.querySelector('.score');

    playerOptions.forEach(option => {
        option.addEventListener('click', () => {
            // buttons.classList.remove('hidden');
            p.textContent = '';
            let userInput = option.textContent.toLowerCase();
            let computerSelection = getComputerChoice();
            let result = playRound(userInput, computerSelection);
            // console.log(result + '  დაიცა');
            if (result == 'W') {
                playerScore += 1;
            } else if (result == 'L') {
                computerScore += 1;
            }
            
            h3.textContent = `Current score is: ${playerScore} : ${computerScore}`
            
            if (playerScore === 2 || computerScore === 2) {
                p.textContent = `Game Over! Final score is: ${playerScore}:${computerScore}`;
                h3.textContent = '';
                playerScore = 0;
                computerScore = 0;
                buttons.classList.add('hidden');
                restart.classList.remove('hidden');
                restart.addEventListener('click', () => {
                    buttons.classList.remove('hidden');
                    restart.classList.add('hidden');
                })
            }
        })            
    })  
}

game();


