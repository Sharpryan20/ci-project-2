const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container')

const rulesContainer  = document.getElementById('rules-container');
const rulesButton = document.getElementById('rules-btn');
const span = document.getElementsByClassName('close')[0];

let jumble, currentQuestion
const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestion++
    nextQuestion()
})

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
    resetState()
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

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e) {
    const selectButton = e.target
    const correct = selectButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (jumble.length > currentQuestion + 1) {
        nextButton.classList.remove('hide') 
    } else {
        startButton.innerText = "Results"
        startButton.classList.remove('hide')
    }
}

function clearStatusClass(element) {
   element.classList.remove('correct')
   element.classList.remove('wrong') 
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }
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
    },
    {
        question: 'What song are these lyrics from? "...every now and then I get a little bit lonely"' ,
        answers: [
            { text:'Total eclipse of the heart', correct: true},
            { text:'Take on me', correct: false},
            { text:"Billie Jean", correct: false},
            { text:'Tainted Love', correct: false}
        ]
    },
    {
        question: 'What song are these lyrics from? "...Oh momma dear, were not the fortunate ones"' ,
        answers: [
            { text:'Girls Just Want to Have fun', correct: true},
            { text:'Living on a Prayer', correct: false},
            { text:"Don't stop believing", correct: false},
            { text:'I want to know what love is', correct: false}
        ]
    },
    {
        question: 'What song are these lyrics from? "...Oh momma dear, were not the fortunate ones"' ,
        answers: [
            { text:'Girls Just Want to Have fun', correct: true},
            { text:'Living on a Prayer', correct: false},
            { text:"Don't stop believing", correct: false},
            { text:'I want to know what love is', correct: false}
        ]
    },
    {
        question: 'What song are these lyrics from? "...Oh momma dear, were not the fortunate ones"' ,
        answers: [
            { text:'Girls Just Want to Have fun', correct: true},
            { text:'Living on a Prayer', correct: false},
            { text:"Don't stop believing", correct: false},
            { text:'I want to know what love is', correct: false}
        ]
    },
    {
        question: 'What song are these lyrics from? "...Oh momma dear, were not the fortunate ones"' ,
        answers: [
            { text:'Girls Just Want to Have fun', correct: true},
            { text:'Living on a Prayer', correct: false},
            { text:"Don't stop believing", correct: false},
            { text:'I want to know what love is', correct: false}
        ]
    },
]