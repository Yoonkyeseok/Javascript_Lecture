for(let i=0; i<100; i++) {
    const square = document.createElement("div");
    document.querySelector(".grid").appendChild(square);
}
const grid = document.querySelector(".grid");
const square = document.querySelectorAll(".grid div");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const scoreDisplay = document.querySelector("#score");
const width = 10;
let snake = 0;
let interval;              
let intervalTime = 1000;

function start() {
    squares[snake].classList.add("snake");
    interval = setInterval(runGame, intervalTime);
    runGame();
    runGame();
}
function runGame() {
    squares[snake].classList.remove("snake");
    snake = snake + dir;
    squares[snake].classList.add("snake");
}
document.addEventListener("kevuo". move);
startBtn.addEventListener("click", start);