console.log(getComputerChoice());

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