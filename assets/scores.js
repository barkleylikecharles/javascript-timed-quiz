var scoreButton = document.getElementById('high-score-btn');

function getHighScores() {
    var highScores=JSON.parse(window.localStorage.getItem("savedScore")) || []
    highScores.sort(function(a,b){ return b.score-a.score} )
    highScores.forEach(score => {
        var litag=document.createElement("li")
        litag.textContent=score.initials+ "-" + score.score
        
    });
}
function savedScore(savedScore) {
    highScoreList.push(savedScore)
    localStorage.setItem("savedScore", JSON.stringify(highScoreList))
}

getHighScores();

startButton.addEventListener('click', getHighScores)


