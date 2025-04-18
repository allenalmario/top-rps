console.log("Hello World!")

// create function getComputerChoice
// var hold rand number between 1-3
//if 0 return rock
// if 1 return paper
// if 2 return scissors

function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    if (randNum == 0) {
        return "rock";
    }
    else if (randNum == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// create function getHumanChoice
// var hold prompt to get answer from human
// return var

function getHumanChoice() {
    let humanChoice = prompt("rock, paper, or scissors?: ");
    return humanChoice;
}

// create two vars to hold human score and computer score
let humanScore = 0;
let computerScore = 0;

// create function playRound, params humanChoice and computerChoice
// convert humanChoice and computerChoice to all lowercase

// rock beats scissors
// scissors beats rock
// paper beats rock
// 6 total conditions

// if humanChoice == computerChoice is a tie
// console log tie
// if humanChoice equals rock and computerChoice equals scissors, human wins
// console log human wins 
// increment winners score
// if humanChoice equals paper and computerChoice equals rock, human wins
// console log human wins 
// increment winners score
// if humanChoice equals scissors and computerChoice equals paper, human wins
// console log human wins 
// increment winners score
// if humanChoce equals rock and computerChoice equals paper, computer wins
// console log computer wins 
// increment winners score
// if humanChoice equals paper and computerChoice equals scissors, compputer wins
// console log computer wins 
// increment winners score
// if humanChoice equals scissors and computerChoice equals rock, computer wins
// console log computer wins 
// increment winners score

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`Human choice: ${humanChoice} vs Compuer choice: ${computerChoice}`)
        console.log("TIE, no one wins...");
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log(`Human choice: ${humanChoice} vs Compuer choice: ${computerChoice}`)
        console.log("Human wins!!! Computer loses...")
        humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log(`Human choice: ${humanChoice} vs Compuer choice: ${computerChoice}`)
        console.log("Human wins!!! Computer loses...")
        humanScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log(`Human choice: ${humanChoice} vs Compuer choice: ${computerChoice}`)
        console.log("Human wins!!! Computer loses...")
        humanScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log(`Human choice: ${humanChoice} vs Compuer choice: ${computerChoice}`)
        console.log("Computer wins!!! Human loses...")
        computerScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log(`Human choice: ${humanChoice} vs Compuer choice: ${computerChoice}`)
        console.log("Computer wins!!! Human loses...")
        computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log(`Human choice: ${humanChoice} vs Compuer choice: ${computerChoice}`)
        console.log("Computer wins!!! Human loses...")
        computerScore++;
    }
}

// create function playGame
// move playRound function and score variables into function
// play 5 rounds

function playGame() {
    for (let i = 1; i < 6; i++) {
        const humanSelection = getHumanChoice().toLowerCase();
        const computerSelection = getComputerChoice().toLowerCase();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log(`Human wins with ${humanScore} points and computer loses with ${computerScore} points`)
    }
    else if (humanScore == computerScore) {
        console.log(`TIE!!! at ${humanScore} points`)
    }
    else {
        console.log(`Human loses with ${humanScore} points and computer wins with ${computerScore} points`)
    }
}

playGame();