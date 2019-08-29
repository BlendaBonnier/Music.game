

// game over when you have made 5 mistakes (you have 5 strikes)


class Match {
  constructor(x, y, width, higth) {
    this.x = x;
    this.y = y;
    this.match = false;
    this.show = true;
  }

  setup() {
    this.musicTitles.forEach(title => {
      //find the artist and if it´s vlue is true => make the artistImg return to it´s starting position => title disapear => collect points
      let match = new titleMatch();
      //
      match.setup();
    });
    this.image = loadImage("assets/guitar-player.png");
  }
  draw() {
      if(this.show === true)
      image(this.image, this.x, this.y, this.width, this.higth);
  }
  hide() {
      this.show = false;
  }
}
