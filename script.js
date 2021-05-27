// click start button to start game X
// switches from main-page (hide) to game-page (unhide) X
// starts timer X
// presents question/answers X
// logs answers X
// display correct or incorrect X
// if incorrect subtract time X
// time end or questions done = game over X
// add intials to score

// DOM elements
var startButton = document.getElementById("start-btn");
var currentScore = document.getElementById("currentScore");
var highscoreEl = document.getElementById("highscore");
var timerEl = document.getElementById("countdown");
var openpageEl = document.getElementById("openpage");
var gamepageEl = document.getElementById("gamepage");
var scorepageEl = document.getElementById("finalscore-page");
var finalScoreEl = document.getElementById("finalScore");
var resultEl = document.getElementById("result");

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

// var lastQuestion = questions.length;

// Answer button elements
var buttonA = document.getElementById("btn-a");
var buttonB = document.getElementById("btn-b");
var buttonC = document.getElementById("btn-c");
var buttonD = document.getElementById("btn-d");

// Event listener on Start button
startButton.addEventListener("click", startGame);
// Event listeners on Answer buttons (A-B-C-D)
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

//Endgame button elements
var buttonHS = document.getElementById("highscore-btn");
var buttonRS = document.getElementById("restart-btn");

// Event listener on highscore button
buttonHS.addEventListener("click", function () {
    viewHighScore();
})

// Event listener on restart button
buttonRS.addEventListener("click", function () {
    restartGame();
})

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
    secondsLeft = 76;
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

// function to getQuestions
function getQuestions() {

    if (currentQuestionIndex === 6) {
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

        console.log("correct answer:", correctAnswer);
        console.log("selected answer:", answer);
    }
}

// ends game displays score screen
function endGame() {
    clearInterval(timerInterval);
    gamepageEl.classList.add("hide");
    scorepageEl.classList.remove("hide");
    alert("END OF GAME!" + " You got " + score + " out of 6 questions correct! ");
    finalScoreEl.textContent = " = " + score + " / 6";
}

// restarts game 
function restartGame() {
    console.log("RS Clicked!");
    // hides game & score page
    gamepageEl.classList.add("hide");
    scorepageEl.classList.add("hide");
    // resets question array
    currentQuestionIndex = 0;
    // restarts game
    startGame();
}

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
