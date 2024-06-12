console.log(getHumanChoice());

function getComputerChoice() {
    choice = Math.random();
    if(choice < 0.3333){
        return "rock"
    }
    else if(choice > 0.3333 && choice < 0.66666){
        return "paper"
    }
    else if(choice > 0.66666){
        return "scissors"
    }
}

function getHumanChoice(){
    choice = prompt("Enter your choice:")
    return choice
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // your code here!
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);