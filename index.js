
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const possibilities = ['rock', 'paper', 'scissor']
    let randomNum = Math.floor(Math.random() * 3)
    return possibilities[randomNum]
}

function getHumanChoice() {
    return prompt('What do you choose?: Rock, Paper or Scissor').toLowerCase()
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock') {
        if (computerChoice === 'rock') console.log('You tied.')
        else if (computerChoice === 'paper') {
            console.log('You lose! Paper beats Rock')
            computerScore++
        } else if (computerChoice === 'scissor') {
            console.log('You win! Rock beats scissor')
            humanScore++
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            console.log('You win! Paper beats Rock')
            humanScore++
        } else if (computerChoice === 'paper') console.log('You tied.')
        else if (computerChoice === 'scissor') {
            console.log('You lose! Scissor beats Paper')
            computerScore++
        }
    } else if (humanChoice === 'scissor') {
        if (computerChoice === 'rock') {
            console.log('You lose! Rock beats Scissor')
            computerScore++
        } else if (computerChoice === 'paper') {
            console.log('You win! Scissor beats Paper')
            humanScore++
        } else console.log('You tied.')
    }
}

function playGame() {
    for (let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice())
    }
    console.log('===== FINAL RESULTS =====')
    console.log(`You: ${humanScore} points`)
    console.log(`Computer: ${computerScore} points`)
}

playGame()