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

function playRound() {
    var humanchoice = getHumanChoice()
    var computerchoice = getComputerChoice()
    var winner
    if(humanchoice === computerchoice){
        winner = 'none'
    }
    else if(humanchoice == 'scissors' && computerchoice == 'rock'){;
        winner = 'computer'
    }
    else if(humanchoice == 'rock' && computerchoice == 'paper'){
        winner = 'computer'
    }
    else if(humanchoice == 'paper' && computerchoice == 'scissors'){
        winner = 'computer'
    }
    else if(humanchoice == 'rock' && computerchoice == 'scissors'){
        winner = 'human'
    }
    else if(humanchoice == 'paper' && computerchoice == 'rock'){
        winner = 'human'
    }
    else if(humanchoice == 'scissors' && computerchoice == 'paper'){
        winner = 'human'
    }
    else{
        winner = 'none'
    }
    console.log(`${winner} wins the round`)
    return winner
  }

function playGame(){
    let humanScore = 0
    let computerScore = 0

    while(humanScore < 3 && computerScore < 3){
        winner = playRound()
        if(winner == "human"){
            humanScore++
            console.log(`Human score: ${humanScore}`);
        }
        else if(winner =="computer"){
            computerScore++
            console.log(`Computer score: ${computerScore}`);
        }
        else if(winner =="none"){
            continue
        }
    }
        if (humanScore === 3) {
            console.log("You win the game!");
        } else if (computerScore === 3) {
            console.log("Computer wins the game!");
        }
    return
}