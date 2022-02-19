// $(document).ready(function() {
//     $("#quiz").click(function () {
//         var nextQuestion = ("input[questions]").valueOf()
//     })
// })
//Create function to move to the next question.
// var nextQuestion(Questions, generateQuiz);

// var nextQuestion = document.getElementById('quiz');

// const quizContainer = documentgetElementbyId('quiz')
// // Create a question variable with the question and answers defined within it. 
// var answerScore = 0;
// var askQuestions = document.querySelector("#card")
// document.getElementById("#btn").onclick = startQuiz;
// document.getElementById("Next Question").onclick = nextQuestion;

// var startQuiz = (askQuestions);
const startButton = document.getElementById('start-btn')

startButton.addEventListener('click', startGame)

function startGame() {
startButton.classList.add('hide')
questionContanerElement.classList.remove('hide')
nextQuestion()
}   

function nextQuestion() {

}

function selectAnswer(){

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
var askQuestions = function(questions) {

}

for(var i=0; i < questions.length; i++) {
    askQuestions(questions[i]);

}

// var nextQuestion = function(askQuestions);


// function generateQuiz (questions, quizContainer, resultsContainer, submitButton) {

//     function askQuestions(questions, quizContainer) {

//     }
//     function revealResults(questions, quizContainer, resultsContainer){

//     }
//     askQuestions (questions, quizContainer);

//     submitButton.onclick = function(){
//         revealResults(questions, quizContainer, resultsContainer);
//     }
