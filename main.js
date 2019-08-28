const game = new Game();
let button;


function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("gameBoard");
  game.setup();
  button = createButton("START GAME!!!");
  button.parent("gameBoard");
  button.position(WIDTH / 2, HEIGHT / 4);
  button.mousePressed(startGame);
}
function startGame() {
  button.hide();

  game.setup();
}

function draw() {
  //background(0);
  game.draw();
  //background.draw();
  if (game.started == true) {
    game.draw();
  }
  if (game.started == false) {
    button.show();
  }
}


window.addEventListener(
  "keydown",
  function(e) {
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  },
  false
  
);

