const game = new Game();
let startGame = false;
let startPage = false;
let button = document.querySelector(".start-button");
button.onclick = start;
let gameOver = false;

function end() {
  document.querySelector(".gameOver").style.display = "display";
  if(point <= -10){
    gameOver = true;
  }
}

function start() {
  document.querySelector(".startpage").style.display = "none";
  startGame = true;
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("gameBoard");
  game.setup();
}

function draw() {
  if (startGame) game.draw();
}
