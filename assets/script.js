const quizContainer = documentgetElementbyId('quiz')

varQuestions = [
    {question: "What is an AVI?",
    answers: {

    },
},
]
function generateQuiz (questions, quizContainer, resultsContainer, submitButton) {

    function askQuestions(questions, quizContainer) {

    }
    function revealResults(questions, quizContainer, resultsContainer){

    }
    askQuestions (questions, quizContainer);

    submitButton.onclick = function(){
        revealResults(questions, QuizContainer, resultsContainer);
    }
}