// DOM ELEMENTS //
var currentScore = document.getElementById("currentScore");
var highscoreEl = document.getElementById("highscore");
var timerEl = document.getElementById("countdown");
var openpageEl = document.getElementById("openpage");
var gamepageEl = document.getElementById("gamepage");
var scorepageEl = document.getElementById("finalscore-page");
var finalScoreEl = document.getElementById("finalScore");
var resultEl = document.getElementById("result");
var inputName = document.getElementById("initials");

// Button elements
var startBtn = document.getElementById("start-btn");
var submitScoreBtn = document.getElementById("submit-score");
var highScoreBtn = document.getElementById("highscore-btn");
var restartBtn = document.getElementById("restart-btn");

// Game elements
var score;
var correctAnswer;

// Timer elements
var timerInterval;
var secondsLeft = 76;

// Question elements
var questionEl = document.getElementById("question");
var shuffleQuestions;
var currentQuestionIndex;

// Checks localStorage for highscores
if(!localStorage.getItem("highscores")) {
    var highscores = []
} else {
    var highscores = localStorage.getItem("highscores")
}


// Event listener on (Start Button)
startBtn.addEventListener("click", startGame);

// Event listener on (HighScore Button) 
highScoreBtn.addEventListener("click", function () {
    viewHighScore();
});

// Event listener on (Submit Score Button)
submitScoreBtn.addEventListener("click", saveScore);

// Event listener on restart button
restartBtn.addEventListener("click", function () {
    restartGame();
});

// Answer button elements
var buttonA = document.getElementById("btn-a");
var buttonB = document.getElementById("btn-b");
var buttonC = document.getElementById("btn-c");
var buttonD = document.getElementById("btn-d");

// Event listeners on (Answer buttons) (A-B-C-D)
buttonA.addEventListener("click", function () {
    checkAnswer("a");
});
buttonB.addEventListener("click", function () {
    checkAnswer("b");
});
buttonC.addEventListener("click", function () {
    checkAnswer("c");
});
buttonD.addEventListener("click", function () {
    checkAnswer("d");
});


// GAME FUNCTIONS //

// function to start game
function startGame() {
    // hides openpage
    openpageEl.classList.add("hide");
    // sets question index at 0
    currentQuestionIndex = 0
    // shuffles questions in index
    shuffleQuestions = questions.sort(() => Math.random() - .5);
    // unhides game-page
    gamepageEl.classList.remove("hide");
    // resets score, currentScore, and secondsLeft
    score = 0;
    currentScore.textContent = score
    //runs getQuestions function
    getQuestions();

    // starts timer
    timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds left";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

// function to get questions
function getQuestions() {
    if (currentQuestionIndex === 6) {
        clearInterval(timerInterval);
        endGame();
    } else {
        showQuestion(shuffleQuestions[currentQuestionIndex]);
        showAnswers(shuffleQuestions[currentQuestionIndex]);
    }
}

// function to add question text to question element
function showQuestion(question) {
    questionEl.innerText = question.question;
}

// function to add answer text to buttons
function showAnswers() {
    var currentAnswers = questions[currentQuestionIndex]
    buttonA.innerText = currentAnswers.texta;
    buttonB.innerText = currentAnswers.textb;
    buttonC.innerText = currentAnswers.textc;
    buttonD.innerText = currentAnswers.textd;
}

// function to check answer
function checkAnswer(answer) {
    var correctAnswer = questions[currentQuestionIndex].correct;
    console.log(correctAnswer);

    if (answer === correctAnswer) {
        score++;
        console.log(score)
        currentScore.textContent = score
        alert("This is correct! (+1 to score)");
        currentQuestionIndex++;
        getQuestions();
    } else if (answer !== correctAnswer) {
        secondsLeft -= 10;
        alert("This is incorrect! (-10 seconds)");
        currentQuestionIndex++;
        getQuestions();
    }
}

// function to ends game / display score screen
function endGame() {
    secondsLeft = 0;
    gamepageEl.classList.add("hide");
    scorepageEl.classList.remove("hide");
    alert("END OF GAME!" + " You got " + score + " out of 6 questions correct! ");
    finalScoreEl.textContent = " = " + score + " / 6";
}

// function to restart game 
function restartGame() {
    // hides game & score page
    gamepageEl.classList.add("hide");
    scorepageEl.classList.add("hide");
    // resets question array
    currentQuestionIndex = 0;
    // resets timer
    clearInterval(timerInterval);
    secondsLeft = 76;
    // restarts game
    startGame();
}

// function to save score
function saveScore() {
    var savedName = inputName.value
    var newScore = {name: savedName, score: score}

    console.log(savedName);
    console.log(newScore);

    localStorage.setItem("highscores", JSON.stringify(newScore));
}

// function to display highscores
function viewHighScore() {
    console.log("HS Clicked!");
    scorepageEl.classList.add("hide");
    highscorepage.classList.remove("hide");


}

// questions & answers array (currently 6 questions)
var questions = [
    {
        question: "What does HTML stand for?",
        texta: "Hypertool Machine Language",
        textb: "Hypertext Markup Language",
        textc: "Hypertech Multi Learning",
        textd: "Hypertone Margin Learning",
        correct: "b"
    },
    {
        question: 'Which is the most common coding language?',
        texta: "JavaScript",
        textb: "Ruby",
        textc: "PHP",
        textd: "Assembly",
        correct: "a"
    },
    {
        question: "Which naming convention is being used: codeQuiz?",
        texta: "gorilla case",
        textb: "pascal case",
        textc: "snake case",
        textd: "camel case",
        correct: "d"
    },
    {
        question: "What does NaN mean, and what is it's data type?",
        texta: "never apply number, character",
        textb: "not a number, number",
        textc: "non attribute number, string",
        textd: "nominal attached number, ordinary",
        correct: "b"
    },
    {
        question: "Who developed the React JS Framework?",
        texta: "Facebook",
        textb: "Google",
        textc: "Amazon",
        textd: "Twitter",
        correct: "a"
    },
    {
        question: "What does CSS stand for?",
        texta: "Color Style Syntax",
        textb: "Circular Sheet Styles",
        textc: "Cascading Style Sheets",
        textd: "Coding Style Sheets",
        correct: "c"
    }
];
