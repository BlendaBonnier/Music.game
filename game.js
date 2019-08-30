let point = 0;
var speedTime = 180;
class Game {
  constructor() {
    this.background = new Background();
    this.match = [];
    this.artists = [
      new Artist("Patti", 0),
      new Artist("Debbie", 80),
      new Artist("Janice", 160),
      new Artist("Pat", 240),
      new Artist("Suzi", 320),
      new Artist("Stevie", 400),
      new Artist("Nico", 480),
      new Artist("Kate", 560),
      new Artist("PJ", 640),
      new Artist("Joan", 720)
    ];

    this.x = Math.floor(Math.random() * WIDTH);
    this.y = 30;
    this.musicTitles = [];
  }
  setup() {
    this.artists.forEach(artist => {
      artist.setup();
    });
    this.image = loadImage("assets/guitar-player.png");
    this.sound = loadSound("assets/error.mp3");
  }

  draw() {
    this.background.draw();

    if (this.showGuitar === true) {
      image(
        this.image,
        mouseX - this.image.width / 6,
        mouseY - this.image.width / 6,
        this.image.width / 3,
        this.image.height / 3
      );

      setTimeout(() => {
        this.showGuitar = false;
      }, 1000);

      // after 2 seconds set this.showGuitar = false
    }

    this.artists.forEach((artist, index) => {
      if (artist.x + artist.width <= 0) {
      }
      artist.draw();
    });

    if (point >= 10 && speedTime > 80) {
      speedTime--;
    }
    if (frameCount % speedTime === 0) {
      // push in this musicTitles a random new object from musicList
      const randomIdx = Math.floor(Math.random() * musicList.length);
      const randomSong = musicList[randomIdx];
      let newMusic = new Music(randomSong.title, randomSong.artist);

      newMusic.setup();
      this.musicTitles.push(newMusic);
    }

    this.musicTitles.forEach((musicObj, index) => {
      if (musicObj.offScreen) return;
      musicObj.draw();
      this.artists.forEach(artist => {
        if (this.collisionCheck(artist, musicObj)) {
          if (artist.name === musicObj.artist) {
            point += 5;
            artist.reset();

            this.showGuitar = true;

            guitarSolo.play();
            musicObj.remove();
            this.musicTitles.splice(index, 1);
          } else {
            artist.reset();
            point -= 1;

            this.sound.play();
          }
        }
      });
    });

    //this.y += 2;

    fill("white");
    textSize(20);
    text(point, 10, 30);

    if (point > 20) {
      fill("red");
      textSize(50);
      text("YOU WIN!!!!", 250, 300);
      textFont("Helvetica");
      noLoop();
    } else {
      if (point < -10) {
        fill("white");
        textSize(50);
        text("YOU LOSE!!!!!", 250, 300);
        noLoop();
      }
    }
  }

  collisionCheck(title, artist) {
    if (title.x + title.width < artist.x || artist.x + artist.width < title.x)
      return false;
    if (title.y + title.height < artist.y || artist.y + artist.height < title.y)
      return false;
    return true;
  }
}
