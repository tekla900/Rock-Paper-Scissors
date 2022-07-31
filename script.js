function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {

    // let playerScore = 0;
    // let computerScore = 0;
    const res = document.querySelector('.results');

    if (playerSelection.toLowerCase() == computerSelection) {
        res.textContent = "It's a Tie!" + `current score is ${playerScore} : ${computerScore}`;
        console.log('პირველი იფი');
        // console.log(playerScore + ':' +  computerScore);
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        playerScore += 1;
        res.textContent = 'You Win! Rock beats Scissors' + `current score is ${playerScore} : ${computerScore}`;
        // console.log(playerScore + ':' +  computerScore);
        console.log('მეორე');
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        computerScore += 1;
        res.textContent = 'You Lose! Rock beats Scissors' + `current score is ${playerScore} : ${computerScore}`;
        console.log(playerScore + ':' +  computerScore);
        console.log('მესამე იფი');
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        computerScore += 1;
        res.textContent = 'You Lose! Scissors beats Paper' + `current score is ${playerScore} : ${computerScore}`;
        console.log(playerScore + ':' +  computerScore);
        console.log('მეოთხე იფი');
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        playerScore += 1;
        res.textContent = 'You Win! Scissors beats Paper' + `current score is ${playerScore} : ${computerScore}`;
        console.log(playerScore + ':' +  computerScore);
        console.log('მეხუთე');
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        computerScore += 1;
        res.textContent = 'You Lose! Paper beats Rock' + `current score is ${playerScore} : ${computerScore}`;
        console.log(playerScore + ':' +  computerScore);
        console.log('მეექვსე');
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        playerScore += 1;
        res.textContent = 'You Win! Paper beats Rock' + `current score is ${playerScore} : ${computerScore}`;
        console.log(playerScore + ':' +  computerScore);
        console.log('მეშვიდე იფი');
    } 
}

function userInputValidation(userInput) {
    return userInput == 'rock' || userInput == 'paper' || userInput == 'scissors';
}

// ----------------
const buttons = document.querySelectorAll('button');
// const rock = document.getElementById('rock');
// const paper = document.getElementById('paper');
// const scissors = document.getElementById('scissors');
function play(e) {
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');
}
// rock.addEventListener('click', playRound());
// buttons.addEventListener('click', play);

// console.log(buttons);



function game(userInput) {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 3; i++) {
        // let userInput = prompt('Rock, Paper, or Scissors ?');
        userInput = userInput.toLowerCase();
        if (userInputValidation(userInput)) { 
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

// game(userInput);

buttons.forEach(button => button.addEventListener('click', () => {
    let userInput = button.textContent;
    playRound(userInput, getComputerChoice());
    // console.log(button.textContent);
}));