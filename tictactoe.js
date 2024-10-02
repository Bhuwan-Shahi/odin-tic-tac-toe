let humanScore = 0;
let computerScore = 0;

// Getting computer choice
function getComputerChoice() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let humanChoice; 
    do {
        humanChoice = prompt("Enter your choice: (rock, paper, scissors)");
        humanChoice = humanChoice ? humanChoice.toLowerCase() : ""; 
    } while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors");
    
    return humanChoice; 
}

// Function to determine the winner
function winner(human, computer) {
    if (human === computer) {
        return "It's a tie!!!";
    } else if (human === "rock" && computer === "scissors" || 
               human === "paper" && computer === "rock" || 
               human === "scissors" && computer === "paper") {
        humanScore++;
        return "Player wins!!";
    } else {
        computerScore++;
        return "Computer wins!!";
    }
}

// Function to play the game
function playGame() {
    while (humanScore < 5 && computerScore < 5) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        alert("The computer choice is:");
        alert(computerChoice);

        let result = winner(humanChoice, computerChoice);
        alert(result);
        alert(`Score - Player: ${humanScore}, Computer: ${computerScore}`);
    }

    if (computerScore === 5) {
        alert("Computer wins the game!");
    } else {
        alert("You win the game!!!");
    }
}


playGame();
