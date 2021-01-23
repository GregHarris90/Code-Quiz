// click start button to start game
// switches from main-page (hide) to game-page (unhide)
// starts timer
// presents question/answers
// logs answers
// display correct or incorrect
// if incorrect subtract time
// time end or questions done = game over
// add intials to score

// DOM elements
var startButton = document.getElementById("start-btn");
var highscoreEl = document.getElementById("highscore");
var timerEl = document.getElementById("countdown");
var openpageEl = document.getElementById("openpage");
var gamepageEl = document.getElementById("gamepage");

var timerInterval;
var secondsLeft = 76; 

var questionEl = document.getElementById("question");
var answersEl = document.getElementById("answers");
let shuffleQuestions, currentQuestionIndex

// Event listener on Start button
startButton.addEventListener("click", startGame);

// function to start game
function startGame () {
    // hides openpage & unhides gamepage
    openpageEl.classList.add("hide");
    currentQuestionIndex = 0
    shuffleQuestions = questions.sort(() => Math.random() - .5);
    gamepageEl.classList.remove("hide");
    getQuestions();

    timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds left";
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
        }
      }, 1000);

}

function getQuestions() {
    showQuestion(shuffleQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionEl.innerText = question.question;
}





















// questions & answers array
var questions = [
    {
        question:"What does HTML stand for?",
        answers: [
            { text: "Hypertool Machine Language", correct: false},
            { text: "Hypertext Markup Language", correct: true},
            { text: "Hypertech Multi Learning", correct: false},
            { text: "Hypertone Margin Learning", correct: false},
        ]
    },
    {
        question: 'Which is the most common coding language?',
        answers: [
            { text: "JavaScript", correct: true},
            { text: "Ruby", correct: false},
            { text: "PHP", correct: false},
            { text: "Assembly", correct: false},
        ]
    },
    {
        question: "Which naming convention is being used: codeQuiz?",
        answers: [
            { text: "gorilla case", correct: false},
            { text: "pascal case", correct: false},
            { text: "snake case", correct: false},
            { text: "camel case", correct: true},
        ]
    },
    {
        question: "What does NaN mean, and what is it's data type?",
        answers: [
            { text: "never apply number, character", correct: false},
            { text: "not a number, number", correct: true},
            { text: "non attribute number, string", correct: false},
            { text: "nominal attached number, ordinary", correct: false},
        ]
    }
];
