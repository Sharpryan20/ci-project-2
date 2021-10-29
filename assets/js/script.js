const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container')
const resultsButton = document.getElementById('results-btn')

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
        resultsButton.classList.remove('hide')
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
    } else {
        element.classList.add('wrong')
    }
}

function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText)
    document.getElementById("score").innerText = ++oldScore;

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
            { text:'Take on me', correct: false},
            { text:"Billie Jean", correct: false},
            { text:'Total eclipse of the heart', correct: true},
            { text:'Tainted Love', correct: false}
        ]
    },
    {
        question: 'What song are these lyrics from? "...Were no strangers to love"' ,
        answers: [
            { text:'All Night Long', correct: false},
            { text:'Never Gonna Give You Up', correct: true},
            { text:"West End Girls", correct: false},
            { text:'Love Shack', correct: false}
        ]
    },
    {
        question: 'Who sung this song? "...Karma, karma, karma, karma, karma chameleon"' ,
        answers: [
            { text:'Karma Chameleon', correct: false},
            { text:'Michael Jackson', correct: false},
            { text:"U2", correct: false},
            { text:'Culture Club', correct: true}
        ]
    },
    {
        question: 'Who sung this song? "...Pour some sugar on me"' ,
        answers: [
            { text:'Def Leppard', correct: true},
            { text:'Phil Collins', correct: false},
            { text:"Rick Astley", correct: false},
            { text:'Simple Minds', correct: false}
        ]
    },
    {
        question: 'What song are these lyrics from? "...Just beat it (beat it), beat it (beat it)"' ,
        answers: [
            { text:'Beat it', correct: true},
            { text:'Sweet Child O Mine', correct: false},
            { text:"Billie Jean", correct: false},
            { text:'Jump', correct: false}
        ]
    },
    {
        question: 'What song are these lyrics from? "...All night long (all night), All night (all night)"' ,
        answers: [
            { text:'The Night Is Long', correct: false},
            { text:"It's a Long Night", correct: false},
            { text:'All Night Long', correct: true},
            { text:'Night Long', correct: false}
        ]
    },
    {
        question: 'What song are these lyrics from? "...You were working as a waitress in a cocktail bar"' ,
        answers: [
            { text:'Another One Bites The Dust', correct: false},
            { text:'Dont You Want Me', correct: true},
            { text:"Betty Davies Eyes", correct: false},
            { text:'Love Shack', correct: false}
        ]
    },
    {
        question: 'Who sung this song? "...Buying bread from a man in Brussels"' ,
        answers: [
            { text:'Men Without Hats', correct: false},
            { text:'The Cure', correct: false},
            { text:"U2", correct: false},
            { text:'Men At Work', correct: true}
        ]
    },
    {
        question: 'Who sung this song? "...Oooh, he speaks the languages of love"' ,
        answers: [
            { text:'Blondie', correct: true},
            { text:'Queen', correct: false},
            { text:"Beastie Boys", correct: false},
            { text:'Tommy Tutone', correct: false}
        ]
    },
    {
        question: 'What song are these lyrics from? "...When you wanna go to it (whats inside me?)"' ,
        answers: [
            { text:'Relax', correct: true},
            { text:'The Safety Dance', correct: false},
            { text:"You Give Love A Bad Name", correct: false},
            { text:'Lets Groove', correct: false}
        ]
    },
    {
        question: 'What song are these lyrics from? "...The clock strikes upon the hour"' ,
        answers: [
            { text:'Time After Time', correct: false},
            { text:"Girls Just Want To Have Fun", correct: false},
            { text:'Dance With Somebody', correct: true},
            { text:'Tainted Love', correct: false}
        ]
    },
    {
        question: 'What song are these lyrics from? "...You spin me right round, baby, right round"' ,
        answers: [
            { text:'All Night Long', correct: false},
            { text:'You Spin Me Round', correct: true},
            { text:"Should I Stay Or Should I Go", correct: false},
            { text:'Everywhere', correct: false}
        ]
    },
    {
        question: 'Who sung this song? "...Welcome to the house of fun"' ,
        answers: [
            { text:'Karma Chameleon', correct: false},
            { text:'Guns N Roses', correct: false},
            { text:"Tears for Fears", correct: false},
            { text:'Madness', correct: true}
        ]
    },
    {
        question: 'Who sung this song? "...With or without you"' ,
        answers: [
            { text:'U2', correct: true},
            { text:'George Michael', correct: false},
            { text:"Elton John", correct: false},
            { text:'Fleetwood Mac', correct: false}
        ]
    },
]
