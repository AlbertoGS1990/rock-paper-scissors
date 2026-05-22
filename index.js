
let humanScore = 0
let computerScore = 0
const containerBtn = document.querySelector('#container-btn')
const containerResults = document.querySelector("#container-results")

function getComputerChoice() {
    const possibilities = ['rock', 'paper', 'scissor']
    let randomNum = Math.floor(Math.random() * 3)
    return possibilities[randomNum]
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock') {
        if (computerChoice === 'rock')
            renderResults(humanChoice, computerChoice, 'You tied.')
        else if (computerChoice === 'paper') {
            computerScore++
            renderResults(humanChoice, computerChoice, 'Paper beats Rock. Computer\'s point')
        } else if (computerChoice === 'scissor') {
            humanScore++
            renderResults(humanChoice, computerChoice, 'Rock beats Scissor. Your point')
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            humanScore++
            renderResults(humanChoice, computerChoice, 'Paper beats Rock. Your point')
        } else if (computerChoice === 'paper') 
            renderResults(humanChoice, computerChoice, 'You tied.')
        else if (computerChoice === 'scissor') {
            computerScore++
            renderResults(humanChoice, computerChoice, 'Scissor beats Paper. Computer\'s point')
        }
    } else if (humanChoice === 'scissor') {
        if (computerChoice === 'rock') {
            computerScore++
            renderResults(humanChoice, computerChoice, 'Rock beats Scissor. Computer\'s point')
        } else if (computerChoice === 'paper') {
            renderResults(humanChoice, computerChoice, 'Scissor beats Paper. Your point')
            humanScore++
        } else 
            renderResults(humanChoice, computerChoice, 'You tied.')
        
    }
}

containerBtn.addEventListener('click', e => {
    const computerChoice = getComputerChoice()
    switch (e.target.id) {
        case 'rock':
            playRound('rock', computerChoice)
            break
        case 'paper':
            playRound('paper', computerChoice)
            break
        case 'scissor':
            playRound('scissor', computerChoice)
            break
    }  
})

function renderResults(humanChoice, computerChoice, result) {
    const paraComputerScore = document.querySelector('#para-computer-score')
    const paraHumanScore = document.querySelector('#para-human-score')
    
    containerResults.classList.remove('hidden')

    document.querySelector('#para-human-choosen').textContent = `[+] Human chooses: ${humanChoice.toUpperCase()};`
     document.querySelector('#para-computer-choosen').textContent = `[+] Computer chooses: ${computerChoice.toUpperCase()};`
    document.querySelector('#para-partial-result').textContent = result
    paraHumanScore.textContent = `Your score: ${humanScore}`
    paraComputerScore.textContent = `Computer score: ${computerScore}`

    if (humanScore === 5) {
        document.querySelector("#container-winner").classList.remove('hidden')
        document.querySelector("#para-winner").textContent = 'You Win!! 🥳'
        document.querySelectorAll('#container-btn button').forEach(button => button.disabled = true)
        
    } else if (computerScore === 5) {
        document.querySelector("#container-winner").classList.remove('hidden')
        document.querySelector("#para-winner").textContent = 'Computer Wins 😭'
         document.querySelectorAll('#container-btn button').forEach(button => button.disabled = true)
    }

    
}


// function playGame() {
//     for (let i = 0; i < 5; i++){
//         playRound(getHumanChoice(), getComputerChoice())
//     }
//     console.log('===== FINAL RESULTS =====')
//     console.log(`You: ${humanScore} points`)
//     console.log(`Computer: ${computerScore} points`)
// }

// playGame()