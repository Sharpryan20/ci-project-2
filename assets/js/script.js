const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const rulesButton = document.getElementById('rules-btn');
const answerButtons = document.getElementById('answer-buttons');
const resultsButton = document.getElementById('results-btn')

const container = document.getElementsByClassName('container')
const questionContainer = document.getElementById('question-container');
const rulesContainer  = document.getElementById('rules-container');
const resultsContainer = document.getElementById('results-container');

const correctText = "correct"
const wrongText = "wrong"

const span = document.getElementsByClassName('close')[0];

let jumbledQuestions // Holds the randomizes questions
let currentQuestion // Holds an index to the current question
let currentScore = 0

const questionElement = document.getElementById('question')

// ============ Callback Functions ============
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestion++
    nextQuestion()
})

rulesButton.onclick = function() {
    rulesContainer.style.display = 'block';
}

span.onclick = function() {
    rulesContainer.style.display = 'none';
}

resultsButton.onclick = function() {
    resultsContainer.style.display = 'block';
}

restartButton.onclick = function() {
    resultsContainer.style.display = 'none';
    questionContainer.classList.add('hide')
    resultsButton.classList.add('hide')
    startButton.classList.remove('hide')
    rulesButton.classList.remove('hide')
    currentScore = 0
    document.getElementById("score").innerText = currentScore;
}

// ============ Quiz Logic ============

/**
 * Hides the start and rules buttons, randomizes the question
 * moves on to the first question
 */

function startGame() {
    startButton.classList.add('hide')
    rulesButton.classList.add('hide')
    // Randomize the questions
    jumbledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    questionContainer.classList.remove('hide')
    nextQuestion()
}

/**
 * Resets the state and shuffles a new question
 */
function nextQuestion() {
    resetState()
    showQuestion(jumbledQuestions[currentQuestion])
}

/**
 * This function gets the questions and answers from const[questions]
 * and displays them using the css styling of 'btn'.
 */
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        // Annotate the correct answer with datasets
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
    document.getElementById("feedback-p").innerText = ""
}

function selectAnswer(e) {
    const selectButton = e.target
    const correct = selectButton.dataset.correct
    let feedbackText = document.getElementById("feedback-p")
    // Increment score if the answer is correct
    if (correct === "true"){
        incrementScore()
        feedbackText.innerText = "Correct!"
    }
    else {
        feedbackText.innerText = "Wrong!"

    }
    // Add CSS to all the buttons to highlight the wrong and correct answers
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (jumbledQuestions.length > currentQuestion + 1) {
        nextButton.classList.remove('hide') 
    } else {
        displayResults()
    }
}

function clearStatusClass(element) {
   element.classList.remove(correctText)
   element.classList.remove(wrongText) 
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    element.classList.add(correct === "true" ? correctText : wrongText)
}

function displayResults() {
    document.getElementById("score-h3").innerText = currentScore
    resultsButton.classList.remove('hide')
}

function incrementScore() {
    currentScore++
    document.getElementById("score").innerText = currentScore;
}
