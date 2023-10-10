// Iteration 2: Generate 2 random number and display it on the screen
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");

const buttons = document.getElementById("buttons");
buttons.addEventListener('click', handleOperations);

const timer = document.getElementById("timer");

let num1, num2;
displayRandomNumbers();

function displayRandomNumbers(){
    num1 = generateRandomNumber();
    num2 = generateRandomNumber();
    number1.innerText = num1;
    number2.innerText = num2;
}


function generateRandomNumber(){
    return Math.floor(Math.random()*100) + 1;
}



// Iteration 3: Make the options button functional

let score = 0;

function handleOperations(event){
    if(event.target.id == "greater-than" && num1>num2){
        displayRandomNumbers();
        updateScore()
    }else if(event.target.id == "equal-to" && num1==num2){
        displayRandomNumbers();
        updateScore();
    }else if(event.target.id == "lesser-than" && num1<num2){
        displayRandomNumbers();
        updateScore();
    }else{
        gameOver();
    }
}

function updateScore(){
    time = 5;
    score++;
}

function gameOver(){
    localStorage.setItem("total", score);
    location.href = "gameover.html";
}


// Iteration 4: Build a timer for the game

setInterval(showTimer, 1000);

let time = 5;
function showTimer(){
    if(time == 0){
        gameOver();
    }else{
        time--;
        timer.innerText = time;
    }
}
