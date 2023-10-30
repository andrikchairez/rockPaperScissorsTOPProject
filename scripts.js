/*I am creating a rock paper scissors game
that will go against a computer.I

I first want to make some sort of function
that will call a random answer from the bot:
Returning either Rock Paper or Scissors. 

May want to use console to ensure that step 
working as expected. 

I need a function that plays ONE round of
the game, taking TWO parameters. It would take
a player selection and computerSelection.

    It returns a string declaring the winner.
    Make playerSelection parameter case insensitive.
    so somebody can input rock in whatever way.
I want to return the result not console print.

Then make a function called game.

Use a previous function inside this one to 
play a 5 round game, keeping score and reports a winner
OR loser at the need.

You can learn to loop or just stick to what u know.*/

//First step is to list variables and functions needed
//getComputerChoice = randomly return rock, paper, scissors
//gameRound (playerSelection SHOULD BE CASE INSENSITIVE, computerSelection) 
//{ return string "You lose! Paper beats Rock!"}

//introduce your player and computer variable for choices
let playerSelection, computerSelection;
computerSelection = getComputerChoice();
playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();

//create function called getComputerChoice
    //create a range component 
    // based on the number, give it an assigned string
function getComputerChoice() {
        // make it select a randomly select between 0-1 floating point
    //convert to a whole by rounding down
    //multiply it by ten to finally get a whole useable integer.
    let number = Math.random() 

    if (number <= 0.33) {
        return "rock";
    } else if (number > 0.33 && number <= .66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// TEST to ensure CPU is working
//Next, I need to make a new function accepting the two introduced
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'rock') {
        return 'Tie!'
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'Win!'
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'Loser!'
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'Loser!'
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return 'Tie!'
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'Win!'
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'Win!'
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'Loser!'
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return 'Tie!'
    } 
}

// To get player selection, I need to prompt.
// Based on the string input, I need to plug that in, with the play
// round function
// Then call the getComputerChoice function, and evaluate.
// do a switch or if statements to evaluate what situation is true form 
// from the play round function.
// let playerSelection, computerSelection;
