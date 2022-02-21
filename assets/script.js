// $(document).ready(function() {
//     $("#quiz").click(function () {
//         var nextQuestion = ("input[questions]").valueOf()

var quizQuestions = document.getElementById("question");
var timerEl = document.getElementById("timer-countdown");
var score=0;
var highScore = localStorage.getItem("highscore");
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
// const answerButtonEl = document.getElementById('answer-buttons');
// //Create timer to countdown when startGame function called
function countdown() {
    var timeLeft = 5;

    var timeInterval = setInterval(function(){
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + 'seconds remaining';
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
// function questions = {
// for (i=0; i < questions.length; i++) {
//     questions[i]();
// }
//Start the game and move the the first questions in the array
var startGame = function () {
    // startButton.classList.add('hide')
    // questionContainerElement.classList.remove('hide')
    // setTimer()
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



        
    }
}
function checkAnswer(event){
    var userAnswer = event.target.textContent
    console.log(userAnswer)
    console.log(questions[questionIndex-1].correctAnswer)
    if(userAnswer == questions[questionIndex-1].correctAnswer)
    {
        alert("Correct")
    }
    else {
        alert("Wrong")
        //deduct certain amount of time
    }
    nextQuestion()
}

    // quizAnswers.innerHTML= questions[answerIndex].answers;
    // answerIndex++;
    
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



