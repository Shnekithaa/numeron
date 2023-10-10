// Iteration 5: Store the player score and display it on the game over screen
let scoreBoard = document.getElementById("score-board");
let playAgain = document.getElementById("play-again-button");

scoreBoard.innerText = localStorage.getItem("total");

playAgain.addEventListener('click', function(){
    location.href = "index.html";
})