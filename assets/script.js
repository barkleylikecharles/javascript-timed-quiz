// $(document).ready(function() {
//     $("#quiz").click(function () {
//         var nextQuestion = ("input[questions]").valueOf()

var quizQuestions = document.getElementById("question");
var timerEl = document.getElementById("timer-countdown");
// var score=0;
// var highScore = localStorage.getItem("highscore");
// var quizAnswers = document.getElementById("answers-buttons")

// if (highscore ! == null){
//     if (score > highscore) {
//         localStorage.setItem("highscore", score);
//     }
// }else{
//     localStorage.setItem("highscore", score);)
// };
var startButton = document.getElementById('start-btn');
var questionIndex = 0;
var answerIndex = 0;
// var quizAnswers = document.querySelector("answers")
const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results');
const highScore = document.getElementById("highscore")
let scoreListEl = document.querySelector("#score-list");
// const answerButtonEl = document.getElementById('answer-buttons');
// //Create timer to countdown when startGame function called
var timeLeft = 180;

function countdown() {
    // var timeLeft = 240;

    var timeInterval = setInterval(function(){
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        }
        else if (timeLeft === 1) {
            timerEl.textContent= timeLeft + " second remaining";
            timeLeft--;
        }else {
            timerEl.textContent = "";
            clearInterval(timeInterval);
            displayMessage("You are all out of time");
            }
        }, 1000);
        };
        
var buttonA = document.getElementById("btn-1");
var buttonB = document.getElementById("btn-2");
var buttonC = document.getElementById("btn-3");
var buttonD = document.getElementById("btn-4");
//Define questions and answers in an array
var questions = [
    {
        question: "Javascript is a ______ -side programming language",
        answers: {
            ansA: 'Client',
            ansB: 'Server',
            ansC: 'Both',
            ansD: 'Neither',
        },
        correctAnswer: 'Both'
    },

    {
        question: "Which of the following will write the message “Hello DataFlair!” in an alert box?",
        answers: {
            ansA: 'alertBox("Hello DataFlair!")',
            ansB: 'alert(Hello DataFlair!)',
            ansC: 'msgAlert("Hello DataFlair!")',
            ansD: 'alert("Hello DataFlair!")',
        },
        correctAnswer: 'alert("Hello DataFlair!")'
    },

    {
        question: "How do you find the minimum of x and y using JavaScript?",
        answers: {
            ansA: 'min(x,y)',
            ansB: 'Math.min(x,y)',
            ansC: 'Math.min(xy)',
            ansD: 'min(xy)',
        },
        correctAnswer: 'Math.min(x,y)'
    },

    {
        question: "Which JavaScript label catches all the values, except for the ones specified?",
        answers: {
            ansA: 'catch',
            ansB: 'label',
            ansC: 'try',
            ansD: 'default',
        },
        correctAnswer: 'default'
    },
]

//Start the game and move the the first questions in the array
var startGame = function () {
    console.log("startGame");
    nextQuestion();
    countdown();
}
//Call all the questions from the array to the question element in the html
function nextQuestion() {
    if(questionIndex < questions.length) {
        console.log("nextQuestion")
        quizQuestions.innerHTML = questions[questionIndex].question; 

        buttonA.innerHTML = questions[questionIndex].answers.ansA
        buttonA.addEventListener("click", checkAnswer)
        buttonB.innerHTML = questions[questionIndex].answers.ansB
        buttonB.addEventListener("click", checkAnswer)
        buttonC.innerHTML = questions[questionIndex].answers.ansC
        buttonC.addEventListener("click", checkAnswer)
        buttonD.innerHTML = questions[questionIndex].answers.ansD
        buttonD.addEventListener("click", checkAnswer)
        questionIndex++;
    } else {
        alert("You finished the quiz!")
    // function storeHighScore
    


    }
}
function checkAnswer(event){
    var userAnswer = event.target.textContent
    console.log(userAnswer)
    console.log(questions[questionIndex-1].correctAnswer)
    if(userAnswer == questions[questionIndex-1].correctAnswer)
    {
        document.getElementById("results").innerHTML = "Correct!"
        nextQuestion();
    }
    else {
        timeLeft = timeLeft - 15;
        document.getElementById("results").innerHTML = "Wrong. 15 seconds will be deducted from your timer and final score."
        alert("Wrong. 15 seconds will be deducted from your timer and final score.");
        // timer = timer - 15;
        // displayMessage.getElementById("timer-countdown");
        // timerEl.innerHTML=timer;
        //deduct certain amount of time from the clock
        nextQuestion();
    }
    // nextQuestion()
}


// function addScore(event) {
   
//     let init = initialsInput.value.toUpperCase();
//     scoreList.push({ initials: init, score: timeLeft });

//     // sort scores
//     scoreList = scoreList.sort((a, b) => {
//         if (a.score < b.score) {
//           return 1;
//         } else {
//           return -1;
//         }
//       });
    
//     scoreListEl.innerHTML="";
//     for (let i = 0; i < scoreList.length; i++) {
//         let li = document.createElement("li");
//         li.textContent = `${scoreList[i].initials}: ${scoreList[i].score}`;
//         scoreListEl.append(li);
//     }

//     // Add to local storage
//     storeScores();
//     displayScores();
// }

// function storeScores() {
//     localStorage.setItem("scoreList", JSON.stringify(scoreList));
// }

// function displayScores() {
//     // Get stored scores from localStorage
//     // Parsing the JSON string to an object
//     let storedScoreList = JSON.parse(localStorage.getItem("scoreList"));

//     // If scores were retrieved from localStorage, update the scorelist array to it
//     if (storedScoreList !== null) {
//         scoreList = storedScoreList;
//     }
// }


startButton.addEventListener('click', startGame)





