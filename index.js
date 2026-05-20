
let humanScore = 0
let computerScore = 0
const containerBtn = document.querySelector('#container-btn')

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

containerBtn.addEventListener('click', e => {
    const computerChoice = getComputerChoice()
    switch (e.target.id) {
        case 'rock':
            playRound('rock', computerChoice)
            break
        case 'paper':
            playRound('papper', computerChoice)
            break
        case 'scissor':
            playRound('scissor', computerChoice)
            break
    }  
})

// function playGame() {
//     for (let i = 0; i < 5; i++){
//         playRound(getHumanChoice(), getComputerChoice())
//     }
//     console.log('===== FINAL RESULTS =====')
//     console.log(`You: ${humanScore} points`)
//     console.log(`Computer: ${computerScore} points`)
// }

// playGame()