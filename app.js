const computerChoice =  document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const possibleChoice = document.querySelector('button')
let userChoice


possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
}) )

function generateComputerChoice() {
    const random = Math.random() * possibleChoice.length // this basically times 3
}

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber ===1){
        computerChoice = 'rock'
    }

    if (randomNumber ===2){
        computerChoice = 'scissors'
    }

    if (randomNumber === 3){
        computerChoice = 'paper'
    }

    computerChoice.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice){
        result = 'its a draw!'
    }

    if (computerChoice === 'rock' && userChoice === 'paper'){
        result = 'you win'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors'){
        reuslt = 'you lose'
    }
    if (computerChoice === 'paper' && userChoice === 'rock'){
        result = 'you lose'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'you win'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'you win'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'you lose'
    }
    resultDisplay.innerHTML = result
}