const startButton = document.getElementById('start-btn')
const rulesButton = document.getElementById('rules-btn')
const ruleBox = document.getElementById('rules-container')

startButton.addEventListener('click', startGame)
rulesButton.addEventListener('click', rulesGame)

function startGame() {
    startButton.classList.add('hide')

}

function rulesGame() {
    ruleBox.removeProperty('display')
}

function nextQuestion() {

}

function selectAnswer() {
    
}