function computerPlay () {
    let choiceRPS = ["rock", "paper", "scissors"];
    return choiceRPS[Math.floor(Math.random()*choiceRPS.length)];
}

function playerPlay () {
    let playerSelection = prompt("You are about to play Paper, scissors, rock against a computer. Please choose an option");
    return playerSelection = playerSelection.toLowerCase();
}
let randomChoice = computerPlay();
let playerSelection = playerPlay();


let playerScore = 0; 
let computerScore = 0;


function playRound () {
    if (playerSelection == randomChoice) {
        return "Tie!";
    }
    else if (playerSelection == "rock" && randomChoice == "scissors") {
        playerScore = playerScore + 1;  
        return "You Win! Rock beats Scissors";
    }

    else if (playerSelection == "rock" && randomChoice == "paper") {
        computerScore = computerScore + 1;
        return "You Lose! Paper beats Rock";
    }

    else if (playerSelection == "scissors" && randomChoice == "paper") {
        playerScore = playerScore + 1;
        return "You Win! Scissors beats Paper";
    }

    else if (playerSelection == "scissors" && randomChoice == "rock") {
        computerScore = computerScore + 1;
        return "You Lose! Rock beats Scissors";
    }

    else if (playerSelection == "paper" && randomChoice == "rock") {
        playerScore = playerScore + 1;
        return "You Win! Paper beats Rock";
    }

    else if (playerSelection == "paper" && randomChoice == "scissors") {
        computerScore = computerScore + 1;
        return "You Lose! Scissors beats Paper";
    }
}




function game () {
    for (let rounds = 0; rounds < 5; rounds++) {
        playRound();
        computerPlay();
        randomChoice = computerPlay;
        playerPlay();
        playerSelection = playerPlay;
        
        console.log("Computer score: " + computerScore + " and Player score is: " + playerScore);
    }
}

console.log(game());