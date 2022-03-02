function computerPlay () {
    let moveCPU = ["rock", "paper", "scissors"];
    moveCPU = moveCPU[Math.floor(Math.random()*moveCPU.length)];
    return moveCPU;
}


function playerPlay () {
    let move = prompt("You are about to play Paper, scissors, rock against a computer. Please choose an option");
    move = move.toLowerCase();
    return move;
}



let playerScore = 0;
let computerScore = 0;
 
function playRound () {
    let playerSelection = playerPlay();
    let randomChoice = computerPlay();
    let outcome;
    

    if (playerSelection == randomChoice) {
        outcome = "Round Tie!";
    }
    else if (playerSelection == "rock" && randomChoice == "scissors") {
        playerScore = playerScore + 1;  
        outcome = "Round won! Rock beats Scissors";
    }

    else if (playerSelection == "rock" && randomChoice == "paper") {
        computerScore = computerScore + 1;
        outcome = "Round Loss! Paper beats Rock";
    }

    else if (playerSelection == "scissors" && randomChoice == "paper") {
        playerScore = playerScore + 1;
        outcome = "Round Win! Scissors beats Paper";
    }

    else if (playerSelection == "scissors" && randomChoice == "rock") {
        computerScore = computerScore + 1;
        outcome = "Round Loss! Rock beats Scissors";
    }

    else if (playerSelection == "paper" && randomChoice == "rock") {
        playerScore = playerScore + 1;
        outcome = "Round Win! Paper beats Rock";
    }

    else if (playerSelection == "paper" && randomChoice == "scissors") {
        computerScore = computerScore + 1;
        outcome = "Round Loss! Scissors beats Paper";
    }
    console.log("Your move: " + playerSelection);
    console.log("Computer move: " + randomChoice);
    console.log(outcome);

    return {computerScore, playerScore};
}


/*
function bestOfFive () {
    for (let rounds = 0; rounds < 5; rounds++) {
        playRound();
    }

    if (playerScore > computerScore) {
        console.log("You win the game! Final score is " + playerScore + "-" + computerScore);
    }
    
    else if (playerScore < computerScore) {
        console.log("Computer wins the game! Final score is " + computerScore + "-" + playerScore);
    }

    else {
        playRound();

        if (playerScore > computerScore) {
            console.log("You win the game! Final score is " + playerScore + "-" + computerScore);
        }
        
        else if (playerScore < computerScore) {
            console.log("Computer wins the game! Final score is " + computerScore + "-" + playerScore);
        }
    }
}

*/


function firstToThree () {
    while (true) {
        playRound();

        if (playerScore == 3) {
            return console.log("You win the game! Final score is " + playerScore + "-" + computerScore);
        }

        else if (computerScore == 3) {
            return console.log("Computer wins the game! Final score is " + computerScore + "-" + playerScore);
        }
    }
}

firstToThree();