// $(document).ready(function() {
//     $("#quiz").click(function () {
//         var nextQuestion = ("input[questions]").valueOf()
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
var quizQuestions = document.getElementById("question");
var timerEl = document.getElementById("timer-countdown");
var score=0;
var highscore = localStorage.getItem("highscore");
var quizAnswers = document.querySelector("btn-1, btn-2, btn-3, btn-4")
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
// const answerButtonEl = document.getElementById('answer-buttons');
// //Create timer to countdown when startGame function called
function countdown() {
    var timeLeft = 5;

    var timeInterval = setInterval(function(){
        if (timeLeft > 1) {
            timerEl.textContent= timeLeft + 'seconds remaining';
            timeLeft--;
        }
        else if (timeLeft === 1) {
            timerEl.textContent= timeLeft + "second remaining";
            timeLeft--;
        }else {
            timerEl.textContent = "";
            clearInterval(timeInterval);
            displayMessage();
            }
        }, 1000);
        };
        
// const choiceA =document.querySelector("#btn-1"),  
// const choiceB =document.querySelector("#btn-2"),
// const choiceC =document.getElementById("btn-3"),
// const choiceD =document.getElementById("#btn-4"),
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
        correctAnswer: 'c'
    },

    {
        question: "Which of the following will write the message “Hello DataFlair!” in an alert box?",
        answers: {
            ansA: 'alertBox("Hello DataFlair!")',
            ansB: 'alert(Hello DataFlair!)',
            ansC: 'msgAlert("Hello DataFlair!")',
            ansD: 'alert("Hello DataFlair!")',
        },
        correctAnswer: 'd'
    },

    {
        question: "How do you find the minimum of x and y using JavaScript?",
        answers: {
            ansA: 'min(x,y)',
            ansB: 'Math.min(x,y)',
            ansC: 'Math.min(xy)',
            ansD: 'min(xy)',
        },
        correctAnswer: 'b'
    },

    {
        question: "Which JavaScript label catches all the values, except for the ones specified?",
        answers: {
            ansA: 'catch',
            ansB: 'label',
            ansC: 'try',
            ansD: 'default',
        },
        correctAnswer: 'd'
    },
]
// function questions = {
// for (i=0; i < questions.length; i++) {
//     questions[i]();
// }
//Start the game and move the the first questions in the array
var startGame = function () {
    // startButton.classList.add('hide')
    // questionContainerElement.classList.remove('hide')
    // arrayShuffledQuestions = questions.sort(() => Math.random() - 0.5)
    // setTimer()
    console.log("startGame");
    nextQuestion();
    countdown();
}
//Call all the questions from the array to the question element in the html
function nextQuestion() {
    console.log("nextQuestion")
    quizQuestions.innerHTML = questions[questionIndex].question; 
    questionIndex++;

    quizAnswers.innerHTML = questions[answerIndex].ansA, ansB, ansC, ansD;
    answerIndex++;
    // anserchoiceA.textContent = qst.ansA;
    // choiceB.textContent = qst.ansB;
    // choiceC.textContent = qst.ansC;
    // choiceD.textContent = qst.ansD;
}
    // var answerbutton = document.getElementById('answer-buttons')
//     quizAnswers.innerHTML = questions[answerIndex].answers;
//     console.log(answers)
// ()    // for (var i = 0; i < questions.length; i++) {
// console.log(questions[i].question)
//         quizQuestions.innerHTML = questions[i].question;
// //     }
// //Call all answers from the questions array to the container
//  var nextAnswerSet
//         console.log("answers)")
    
//     resetAnswers()
//     displayQuestion(arrayShuffledQuestions[questionContainer])
;
function results () {
    if (answers === nextQuestion.correctAnswer) {
        score++;
    }

}

//Create function to move to the next question.


// function selectAnswer() {

// }

startButton.addEventListener('click', startGame)
// var askQuestions = function(questions) {

// }



