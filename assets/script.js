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
var timer = document.getElementById("timer-countdown");
var startButton = document.getElementById('start-btn');
var questionIndex = 0;
const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results');
const answerButtonEl = document.getElementById('answer-buttons');

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

var startGame = function () {
    // startButton.classList.add('hide')
    // questionContainerElement.classList.remove('hide')
    // arrayShuffledQuestions = questions.sort(() => Math.random() - 0.5)
    // setTimer()
    console.log("startGame")
    nextQuestion()
}

function nextQuestion() {
    console.log("nextQuestion")
    quizQuestions.innerHTML = questions[questionIndex].question; 
    questionIndex++;
    // var answerbutton = document.getElementById('answer-buttons')
    answerButtonEl.innerText=index.answers[i].answer
    console.log(answers)
()    // for (var i = 0; i < questions.length; i++) {
// console.log(questions[i].question)
//         quizQuestions.innerHTML = questions[i].question;
//     }
    
    
    resetAnswers()
    displayQuestion(arrayShuffledQuestions[questionContainer])
};


//Create function to move to the next question.


// function selectAnswer() {

// }

startButton.addEventListener('click', startGame)
// var askQuestions = function(questions) {

// }



