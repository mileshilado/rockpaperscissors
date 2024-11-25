function getbotChoice() {
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

var humanpoints = 0
var botpoints = 0
var gameOver = 0

function playRound(choice) {
    var humanchoice = choice
    var botchoice = getbotChoice()
    var winner

    if(gameOver == 1){
        console.log('hi')
    }
    else{
        if(humanchoice === botchoice){
            winner = 'none'
        }
        else if(humanchoice == 'scissors' && botchoice == 'rock'){;
            winner = 'bot'
        }
        else if(humanchoice == 'rock' && botchoice == 'paper'){
            winner = 'bot'
        }
        else if(humanchoice == 'paper' && botchoice == 'scissors'){
            winner = 'bot'
        }
        else if(humanchoice == 'rock' && botchoice == 'scissors'){
            winner = 'human'
        }
        else if(humanchoice == 'paper' && botchoice == 'rock'){
            winner = 'human'
        }
        else if(humanchoice == 'scissors' && botchoice == 'paper'){
            winner = 'human'
        }
        else{
            winner = 'none'
        }
        console.log(`${winner} wins the round`)
    }
    if(winner == 'bot'){
        botpoints = botpoints + 1
        botscore.textContent = 'bot score: ' + botpoints
    }
    else if(winner == 'human'){
        humanpoints += 1
        humanscore.textContent = 'human score: ' + humanpoints
    }
    
    if(humanpoints >= 5){
        gameOver = 1
    }
    if(botpoints >= 5){
        gameOver = 1
    }
  }

const rockButton = document.createElement('button')
const paperButton = document.createElement('button')
const scissorsButton = document.createElement('button')

rockButton.addEventListener('click', ()=>playRound('rock'))
rockButton.textContent = "rock"
paperButton.addEventListener('click', ()=>playRound('paper'))
paperButton.textContent = "paper"
scissorsButton.addEventListener('click', ()=>playRound('scissors'))
scissorsButton.textContent = 'scissors'

const body = document.querySelector('body')

body.appendChild(rockButton)
body.appendChild(paperButton)
body.appendChild(scissorsButton)

const scoreboard = document.createElement('div')
scoreboard.textContent = 'Scoreboard'
body.appendChild(scoreboard)

var humanscore = document.createElement('p')
humanscore.textContent = 'Human score: ' + humanpoints
scoreboard.appendChild(humanscore)

var botscore = document.createElement('p')
botscore.textContent = 'Bot score: ' + botpoints
scoreboard.appendChild(botscore)

function resetGame(){
    gameOver = 0
    botpoints = 0
    botscore.textContent = 'Bot score: ' + botpoints
    humanpoints = 0
    humanscore.textContent = 'Human score: ' + humanpoints
}