class Artist {
  constructor(artistName, x) {
    this.name = artistName;
    // this.x = WIDTH / 2;
    this.width = 140;
    this.height = 140;
    this.x = x;
    this.y = HEIGHT - this.height;
    this.point = 0;
    this.selected = false;
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
    console.log(this);
    if (
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
    console.log("selected");
    if (
      mouseX > this.x &&
      mouseX < this.x + this.width &&
      mouseY > this.y &&
      mouseY < this.y + this.height
    ) {
      this.selected = true;
    }
  }
}

function mouseDragged() {
  // Did I click on the rectangle?
  game.artists.forEach(artist => {
    artist.move();
  });
}
/* 
function mousePressed() {
  game.artists.forEach(artist => {
    artist.select();
  });
} */
