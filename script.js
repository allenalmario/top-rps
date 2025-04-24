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

// function getHumanChoice() {
//     let humanChoice = prompt("rock, paper, or scissors?: ");
//     return humanChoice;
// }

// create two vars to hold human score and computer score
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
const totalRounds = 5;

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
    let display = document.querySelector(".logs");
    let p = document.createElement("p");
    if (humanChoice == computerChoice) {
        p.textContent = `Human choice: ${humanChoice} vs Compuer choice: ${computerChoice}`;
        p.textContent += "\n\nTIE!!! No one wins...";
        p.textContent += `\n\nHuman score: ${humanScore} vs Compuer score: ${computerScore}`;
        display.appendChild(p);
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        p.textContent = `Human choice: ${humanChoice} vs Compuer choice: ${computerChoice}`;
        p.textContent += "\n\nHuman wins!!! Computer loses...";
        humanScore++;
        p.textContent += `\n\nHuman score: ${humanScore} vs Compuer score: ${computerScore}`;
        display.appendChild(p);
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        p.textContent = `Human choice: ${humanChoice} vs Compuer choice: ${computerChoice}`;
        p.textContent += "\n\nHuman wins!!! Computer loses...";
        humanScore++;
        p.textContent += `\n\nHuman score: ${humanScore} vs Compuer score: ${computerScore}`;
        display.appendChild(p);
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        p.textContent = `Human choice: ${humanChoice} vs Compuer choice: ${computerChoice}`;
        p.textContent += "\n\nHuman wins!!! Computer loses...";
        humanScore++;
        p.textContent += `\n\nHuman score: ${humanScore} vs Compuer score: ${computerScore}`;
        display.appendChild(p);
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        p.textContent = `Human choice: ${humanChoice} vs Compuer choice: ${computerChoice}`;
        p.textContent += "\n\nComputer wins!!! Human loses...";
        computerScore++;
        p.textContent += `\n\nHuman score: ${humanScore} vs Compuer score: ${computerScore}`;
        display.appendChild(p);
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        p.textContent = `Human choice: ${humanChoice} vs Compuer choice: ${computerChoice}`;
        p.textContent += "\n\nComputer wins!!! Human loses...";
        computerScore++;
        p.textContent += `\n\nHuman score: ${humanScore} vs Compuer score: ${computerScore}`;
        display.appendChild(p);
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        p.textContent = `Human choice: ${humanChoice} vs Compuer choice: ${computerChoice}`;
        p.textContent += "\n\nComputer wins!!! Human loses...";
        computerScore++;
        p.textContent += `\n\nHuman score: ${humanScore} vs Compuer score: ${computerScore}`;
        display.appendChild(p);
    }

    roundCount++;

    if (roundCount === totalRounds) {
        let finalResult = document.createElement("h3");
        if (humanScore > computerScore) {
            finalResult.textContent = `🏆 Game Over! Human wins with ${humanScore} points vs Computer's ${computerScore}`;
        } else if (computerScore > humanScore) {
            finalResult.textContent = `💻 Game Over! Computer wins with ${computerScore} points vs Human's ${humanScore}`;
        } else {
            finalResult.textContent = `🤝 Game Over! It's a tie at ${humanScore} - ${computerScore}`;
        }
        display.appendChild(finalResult);

        // Disable buttons after game is done
        buttons.forEach(button => button.disabled = true);
    }

}

// create function playGame
// move playRound function and score variables into function
// play 5 rounds

// function playGame() {
//     for (let i = 1; i < 6; i++) {
//         const humanSelection = getHumanChoice().toLowerCase();
//         const computerSelection = getComputerChoice().toLowerCase();
//         playRound(humanSelection, computerSelection);
//     }
//     if (humanScore > computerScore) {
//         console.log(`Human wins with ${humanScore} points and computer loses with ${computerScore} points`)
//     }
//     else if (humanScore == computerScore) {
//         console.log(`TIE!!! at ${humanScore} points`)
//     }
//     else {
//         console.log(`Human loses with ${humanScore} points and computer wins with ${computerScore} points`)
//     }
// }

// playGame();

let buttons = document.querySelectorAll(".button");

let humanChoice = "";

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        if (roundCount < totalRounds) {
            let target = event.target;
            switch (target.id) {
                case "rock":
                case "paper":
                case "scissors":
                    humanChoice = target.id;
                    console.log(humanChoice);
                    break;
            }
            playRound(humanChoice, getComputerChoice());
        }
    });
});