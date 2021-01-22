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
var timerEl = document.getElementById("timer");
var openpageEl = document.getElementById("openpage");
var gamepageEl = document.getElementById("gamepage");
    

// questions & answers array
var questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hypertool Machine Language", correct: false},
            { text: "Hypertext Markup Language", correct: true},
            { text: "Hypertech Multi Learning", correct: false},
            { text: "Hypertone Margin Learning", correct: false},
        ]
    },
    {
        question: "Which is the most common coding language?",
        answers: [
            { text: "JavaScript", correct: true},
            { text: "Ruby", correct: false},
            { text: "PHP", correct: false},
            { text: "Assembly", correct: false},
        ]
    },
    {
        question: "Which naming convention is being used: 'codeQuiz'?",
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



var timer;

// Event listener on Start button
startButton.addEventListener("click", startGame, startTimer);


function startGame () {
    // hides openpage & unhides gamepage
    openpageEl.classList.add("hide");
    gamepageEl.classList.remove("hide");
    getQuestions();

}

function startTimer () {
    timer =setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        
    })
}

function getQuestions() {

}