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



// var nextQuestion = document.getElementById('quiz');

// const quizContainer = documentgetElementbyId('quiz')
// // Create a question variable with the question and answers defined within it. 
// var answerScore = 0;
// var askQuestions = document.querySelector("#card")
// document.getElementById("#btn").onclick = startQuiz;
// document.getElementById("Next Question").onclick = nextQuestion;

// var startQuiz = (askQuestions);
var startButton = document.getElementById('start-btn')
// var gameTimerEl=document.querySelector("#timer-countdown");
startButton.addEventListener('click', startGame)



function startGame() {
// startButton.classList.add('hide')
// questionContainerElement.classList.remove('hide')
nextQuestion(){
    questionTitle.textContent - questions[]
}
}   
//Create function to move to the next question.
function nextQuestion(question) {
    for(i=0; i<questions.length; i++)

}

function selectAnswer(){
    if (correctAnswer === answers)
    keepScore.
    localStorage.

}
var questions = [
    {question: "Javascript is a ______ -side programming language",
    answers: {
        a: 'Client',
        b: 'Server',
        c: 'Both',
        d: 'Neither',
    },
    correctAnswer: 'c'
    },  
    
    {question: "Which of the following will write the message “Hello DataFlair!” in an alert box?",
    answers: {
        a: 'alertBox("Hello DataFlair!")',
        b: 'alert(Hello DataFlair!)',
        c: 'msgAlert("Hello DataFlair!")',
        d: 'alert("Hello DataFlair!")',
    },
    correctAnswer: 'd'
},

    {question: "How do you find the minimum of x and y using JavaScript?",
    answers: {
        a: 'min(x,y)',
        b: 'Math.min(x,y)',
        c: 'Math.min(xy)',
        d: 'min(xy)',
        },
        correctAnswer: 'b'
    },
    
    {question: "Which JavaScript label catches all the values, except for the ones specified?",
    answers: {
        a: 'catch',
        b: 'label',
        c: 'try',
        d: 'default',
        },
        correctAnswer: 'd'
    },
]

var choiceA = document.getElementById("q")
var askQuestions = function(questions) {

}

for(var i=0; i < questions.length; i++) {
    askQuestions(questions[i]);