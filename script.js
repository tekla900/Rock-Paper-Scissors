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

function gameOver() {
    const container = document.querySelector('.container');
    const p = document.createElement('p');
    p.textContent = 'Game Over';
    container.append(p);
    const h3 = document.querySelector('.score');
    h3.textContent = '';
    //თავიდან დასაწყებად უნდა გასუფთავდეს რიზალთის, სქორის და პ-ის მნიშვნელობა
    //და თავიდან გამოძახებული იქნას გეიმ ფუნქცია
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');
    const playerOptions = [rock, paper, scissors];

    playerOptions.forEach(option => {
        option.addEventListener('click', () => {
            let userInput = option.textContent.toLowerCase();
            let computerSelection = getComputerChoice();
            let result = playRound(userInput, computerSelection);
            console.log(result + '  დაიცა');
            if (result == 'W') {
                playerScore += 1;
            } else if (result == 'L') {
                computerScore += 1;
            }
            const h3 = document.querySelector('.score');
            h3.textContent = `Current score is: ${playerScore} : ${computerScore}`
            
            if (playerScore === 2 || computerScore === 2) {
                gameOver();
            }
        })            
    })  
}

game();


//ანდა პირდაპირ შემიძლია იფ სტეიტმენტშივე გავასუფთავო