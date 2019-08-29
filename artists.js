class Artist {
  constructor(artistName, x) {
    this.name = artistName;
    // this.x = WIDTH / 2;
    this.width = 80;
    this.height = 80;
    this.x = x;
    this.y = HEIGHT - this.height;
    this.defaultX = this.x;
    this.defaultY = this.y;
    this.point = 0;
    this.selected = false;
  }

  reset() {
    this.x = this.defaultX;
    this.y = this.defaultY;
  }

  setup() {
    if (this.name === "Patti") {
      this.image = loadImage("assets/patti-face.png");
    } else if (this.name === "Debbie") {
      this.image = loadImage("assets/debbie-face.png");
    } else if (this.name === "Janice") {
      this.image = loadImage("assets/janice.face.png");
    } else if (this.name === "Pat") {
      this.image = loadImage("assets/pat-face.png");
    } else if (this.name === "Suzi") {
      this.image = loadImage("assets/suzi-face.png");
    } else if (this.name === "Stevie") {
      this.image = loadImage("assets/stevie-face.png");
    } else if (this.name === "Nico") {
      this.image = loadImage("assets/nico-face.png");
    } else if (this.name === "Joan") {
      this.image = loadImage("assets/joan-face.png");
    } else if (this.name === "Kate") {
      this.image = loadImage("assets/kate-face.png");
    } else if (this.name === "PJ") {
      this.image = loadImage("assets/pj-face.png");
    }
  }

  draw() {
    stroke(0);
    // rect(this.x, this.y, this.width, this.height);
    image(this.image, this.x, this.y, this.width, this.height);
  }

  move() {
    if (
      this.selected &&
      mouseX > this.x &&
      mouseX < this.x + this.width &&
      mouseY > this.y &&
      mouseY < this.y + this.height
    ) {
      // console.log("in rectangle");
      this.x = mouseX - this.width / 2;
      this.y = mouseY - this.height / 2;
    }
  }

  select() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.width &&
      mouseY > this.y &&
      mouseY < this.y + this.height
    ) {
      this.selected = true;
    }
  }

  /*return() {
  if (mouseReleased = true) {
    artist.selected()
  } 
}//return to it´s startin position (connect to mouse released function)
*/
}

let firstClick = true;

function mouseDragged() {
  // Did I click on the rectangle?

  if (firstClick) {
    game.artists.forEach(artist => {
      if (!game.artists.some(artist => artist.selected)) artist.select();
    });
  }

  firstClick = false;

  game.artists.forEach(artist => {
    artist.move();
  });
}

function mouseReleased() {
  game.artists.forEach(artist => {
    artist.selected = false;
    artist.reset();
  });
  firstClick = true;
}

/* 
function mousePressed() {
  game.artists.forEach(artist => {
    artist.select();
  });
} */
