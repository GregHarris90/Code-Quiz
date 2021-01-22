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

// questions & answers array
var questions = [];
var answers = [];
var timer;

// Event listener on Start button
document.addEventListener("click", startGame, startTimer);


function startGame () {

}

function startTimer () {
    timer =setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        
    })
}

function getQuestions() {}