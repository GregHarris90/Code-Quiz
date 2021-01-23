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

// Timer elements
var timerInterval;
var secondsLeft = 76; 

// Question elements
var questionEl = document.getElementById("question");
var shuffleQuestions;
var currentQuestionIndex;

// Answer elements
var buttonA = document.getElementById("btn-a");
var buttonB = document.getElementById("btn-b");
var buttonC = document.getElementById("btn-c");
var buttonD = document.getElementById("btn-d");

// Event listener on Start button
startButton.addEventListener("click", startGame);

var buttonA = document.getElementById("btn-a");
var buttonB = document.getElementById("btn-b");
var buttonC = document.getElementById("btn-c");
var buttonD = document.getElementById("btn-d");

// function to start game
function startGame () {
    // hides openpage
    openpageEl.classList.add("hide");
    // sets question index at 0
    currentQuestionIndex = 0
    // shuffles questions in index
    shuffleQuestions = questions.sort(() => Math.random() - .5);
    // unhides game-page
    gamepageEl.classList.remove("hide");
    //runs getQuestions function
    getQuestions();

    // starts timer
    timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds left";
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
        }
      }, 1000);

}

// function to getQuestions
function getQuestions() {
    showQuestion(shuffleQuestions[currentQuestionIndex]);
    showAnswers(shuffleQuestions[currentQuestionIndex]);
}

// function to add question text to question element
function showQuestion(question) {
    questionEl.innerText = question.question;
    }
// function to add answer text to buttons
function showAnswers(texta) {
    var currentAnswers = questions[currentQuestionIndex]
    buttonA.innerText = currentAnswers.texta;
    buttonB.innerText = currentAnswers.textb;
    buttonC.innerText = currentAnswers.textc;
    buttonD.innerText = currentAnswers.textd;
}

// questions & answers array
var questions = [
    {
        question:"What does HTML stand for?",
        texta:"Hypertool Machine Language",
        textb: "Hypertext Markup Language",
        textc: "Hypertech Multi Learning",
        textd: "Hypertone Margin Learning",
    },
    {
        question: 'Which is the most common coding language?', 
        texta: "JavaScript",
        textb: "Ruby",
        textc: "PHP",
        textd: "Assembly",
    },
    {
        question: "Which naming convention is being used: codeQuiz?",
        texta: "gorilla case",
        textb: "pascal case",
        textc: "snake case",
        textd: "camel case",
    },
    {
        question: "What does NaN mean, and what is it's data type?",
        texta: "never apply number, character",
        textb: "not a number, number",
        textc: "non attribute number, string",
        textd: "nominal attached number, ordinary",
    }
];
