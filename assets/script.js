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

if (highscore ! == null){
    if (score > highscore) {
        localStorage.setItem("highscore", score);
    }
}else{
    localStorage.setItem("highscore", score);)
  }
var startButton = document.getElementById('start-btn');
var questionIndex = 0;
var quizAnswers = document.querySelector("answers")
const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results');
const answerButtonEl = document.getElementById('answer-buttons');
//Create timer to countdown when startGame function called
function countdown() {
    var timeLeft = 5;

    var timeInterval = setIntervel(function(){
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
        }
    
//Define questions and answers in an array
var questions = [
    {
        question: "Javascript is a ______ -side programming language",
        answers: {
            a: 'Client',
            b: 'Server',
            c: 'Both',
            d: 'Neither',
        },
        correctAnswer: 'c'
    },

    {
        question: "Which of the following will write the message “Hello DataFlair!” in an alert box?",
        answers: {
            a: 'alertBox("Hello DataFlair!")',
            b: 'alert(Hello DataFlair!)',
            c: 'msgAlert("Hello DataFlair!")',
            d: 'alert("Hello DataFlair!")',
        },
        correctAnswer: 'd'
    },

    {
        question: "How do you find the minimum of x and y using JavaScript?",
        answers: {
            a: 'min(x,y)',
            b: 'Math.min(x,y)',
            c: 'Math.min(xy)',
            d: 'min(xy)',
        },
        correctAnswer: 'b'
    },

    {
        question: "Which JavaScript label catches all the values, except for the ones specified?",
        answers: {
            a: 'catch',
            b: 'label',
            c: 'try',
            d: 'default',
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
    // var answerbutton = document.getElementById('answer-buttons')
    quizAnswers.innerHTML = questions[answerIndex].answers;
    console.log(answers)
()    // for (var i = 0; i < questions.length; i++) {
// console.log(questions[i].question)
//         quizQuestions.innerHTML = questions[i].question;
//     }
//Call all answers from the questions array to the container
 var nextAnswerSet
        console.log("answers)")
    
    resetAnswers()
    displayQuestion(arrayShuffledQuestions[questionContainer])
};
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



