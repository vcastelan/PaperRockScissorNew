//create a function that allows the computer to select a random choice either Rock,Paper, or Scissors
function getComputerChoice() {
    //return compChoice;
    let choices = ['Rock', 'Paper', 'Scissor'];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

//new function called game(). call the playround func isnside of this one to play a 5 round game that keeps score
function game() {

    //establish a round count,playerWin count, computerWin count
    let round = 0;
    let playerWin = 0;
    let computerWin = 0;

    //reports a winner or loser at the end
//use a loop. either for loop or while loop.
    while (round < 5) {
        
        //when invoked increment round by one.
        round++;
        //getComputerChoice(compChoice);
        //use prompt() to get the input from the user. 
        const playerSelection = window.prompt("Rock, Paper, Scissors?");
        
        if (playerSelection === null) {
            console.log('Select Rock, Paper or Scissors. Refresh to play again..');
            return;
        } 

        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Player wins totals " + playerWin);
        console.log("Computer wins totals " + computerWin);

        //write a function that plays a single rnd of rock,paper,scisors. should take 2 parameters. the playerSelection adn computerSelection
        function playRound(playerSelection, computerSelection) {
        //return a string that declares the winner of teh round. "You Lose! Paper beats Rock"
        //make sure playerSelection parameter case-insensitve users can input rock,Rock, ROCK or any other variation
            const capitalizedFirstLetter = playerSelection.charAt(0).toUpperCase();
            const remainingLetters = playerSelection.slice(1).toLowerCase();
            const playerChoice = capitalizedFirstLetter + remainingLetters;
            //should use console.log to display the results of each rnd and winner at the end.
            if (playerChoice === computerSelection ) {
                return "Tie, play again."
            } else if ((playerChoice === 'Rock' && computerSelection === 'Scissor') || (playerChoice === 'Paper' && computerSelection === 'Rock') || (playerChoice === 'Scissor' && computerSelection === 'Paper')) {
                playerWin++;
                return 'Horray! You Win!'
            } else if ((playerChoice === 'Scissor' && computerSelection === 'Rock') || (playerChoice === 'Rock' && computerSelection === 'Paper') || (playerChoice === 'Paper' && computerSelection === 'Scissor'))  {
                computerWin++;
                return `You Lose! ${computerSelection} beats ${playerChoice}`
            } else {
                computerWin++;
                return `You Lose! ${computerSelection} beats ${playerChoice}`
            }
        }

    }

    if (playerWin === computerWin) {
        console.log('Tie game, run it again?'
        )
    } else if (playerWin > computerWin) {
        console.log("You did it!! Congrats, you won!!!");
    } else {
        console.log("Game over. You Lost!");
    }
}

game();

