const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container')

const rulesContainer  = document.getElementById('rules-container');
const rulesButton = document.getElementById('rules-btn');
const span = document.getElementsByClassName('close')[0];

let jumble, currentQuestion
const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)

rulesButton.onclick = function() {
    rulesContainer.style.display = 'block';
}

span.onclick = function(event) {
    rulesContainer.style.display = 'none';
}

function startGame() {
    startButton.classList.add('hide')
    rulesButton.classList.add('hide')
    jumble = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    questionContainer.classList.remove('hide')
    nextQuestion()

}

function nextQuestion() {
    showQuestion(jumble[currentQuestion])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtons.appendChild(button)
    })
}

function selectAnswer(e) {
    
}

const questions = [
    {
        question: 'What song are these lyrics from? "...Oh momma dear, were not the fortunate ones"' ,
        answers: [
            { text:'Girls Just Want to Have fun', correct: true},
            { text:'Living on a Prayer', correct: false},
            { text:"Don't stop believing", correct: false},
            { text:'I want to know what love is', correct: false}
        ]
    }
]