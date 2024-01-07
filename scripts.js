//Initiate a few variables to capture a CPU, and player selection
let playerSelection, computerSelection, result;
computerSelection = getComputerChoice();

//Capture the CPU selection
function getComputerChoice() {
    let number = Math.random() 

    if (number <= 0.33) {
        return "rock";
    } else if (number > 0.33 && number <= .66) {
        return "paper";
    } else {
        return "scissors";
    }
}

//Initiates variable to target the DOM element that holds the result text
let outcome = document.getElementById("outcomeText");

//When user presses a button, return a value playerSelection
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id == 'rock') {
            playerSelection = 'rock';
        } else if (button.id == 'paper') {
            playerSelection = 'paper';
        } else if (button.id == 'scissors') {
            playerSelection = 'scissors';
        }

        computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        getWinner();
    });
});

//initiate some vars to keep score of usr and cpu
let usrWin = 0;
let cpuWin = 0;

//Initiate vars to talk to the DOM score counts
const usrWinCount = document.getElementById("usrWin");
const cpuWinCount = document.getElementById("cpuWin");

//evaluate playerSelection vs computerSelection
//update the score variables accordingly
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'rock') {
        outcome.textContent = 'How boring, a tie.'

    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        usrWin += 1;
        usrWinCount.textContent = usrWin;
        outcome.textContent = 'Congratulations, you win!';

    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        cpuWin += 1;
        cpuWinCount.textContent = cpuWin;
        outcome.textContent = 'You lose. What a shame'
        
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        cpuWin += 1;
        cpuWinCount.textContent = cpuWin;
        outcome.textContent = 'You lose. What a shame'

    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        outcome.textContent = 'How boring, a tie.'

    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        usrWin += 1;
        usrWinCount.textContent = usrWin;
        outcome.textContent = 'Congratulations, you win!'

    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        usrWin += 1;
        usrWinCount.textContent = usrWin;
        outcome.textContent = 'Congratulations, you win!'

    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        cpuWin += 1;
        cpuWinCount.textContent = cpuWin;
        outcome.textContent = 'You lose. What a shame'

    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        outcome.textContent = 'How boring, a tie.'

    } 
};


function getWinner(){
    if (usrWin == 5){
        confirm("You get to live another day.")
    } else if (cpuWin == 5){
        confirm("You will die now. Goodbye.")
    }
};
