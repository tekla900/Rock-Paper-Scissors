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

const buttons = document.querySelectorAll('button');

function gameOver() {
    const container = document.querySelector('.container');
    const p = document.createElement('p');
    p.textContent = 'Game Over';
    container.append(p);
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
    const buttons = document.querySelectorAll('button');
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');
    const playerOptions = [rock, paper, scissors];

    // for (let i = 0; i < 3; i++) {
    // while (playerScore < 3 || computerScore < 3) {
        playerOptions.forEach(option => {
            option.addEventListener('click', () => {
                let userInput = option.textContent.toLowerCase();
                let computerSelection = getComputerChoice();
                let result = playRound(userInput, computerSelection);
                console.log(result + '  დაიცა');
                if (result == 'W') {
                    playerScore += 1;
                    moves += 1;
                } else if (result == 'L') {
                    computerScore += 1;
                    moves += 1;
                }
                console.log(playerScore + ":" + computerScore + 'loop-ის შიგნით რომელიცაა');
                
                if (playerScore === 3 || computerScore === 3) {
                    gameOver();
                }
            })
            // moves += 1;
            
        })

        // if (moves == 3)
        // buttons.forEach(button => button.addEventListener('click', () => {
        //     let userInput = button.textContent.toLowerCase();
        //     let computerSelection = getComputerChoice();
        //     let result = playRound(userInput, computerSelection);
        //     console.log(result + '  დაიცა');
        //     if (result == 'W') {
        //         playerScore += 1;
        //         moves += 1;
        //     } else if (result == 'L') {
        //         computerScore += 1;
        //         moves += 1;
        //     }
        //     console.log(playerScore + ":" + computerScore + 'loop-ის შიგნით რომელიცაა');

        // }))
        // console.log('this');
        // moves += 1;
    // }

    console.log(playerScore + ":" + computerScore + 'loop-ის გარეთ რომელიცაა');

   
}

function getUserChoice(button) {
    return button.textContent.toLowerCase();
}


// buttons.forEach(button => button.addEventListener('click', () => {
//     // let userInput = button.textContent;
//     console.log('clicked');
//     game(); //აქ გადაეცემა ქაღალდი

// }));

game();
