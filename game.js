// let music = new musicList();
let point = 0;

class Game {
  constructor() {
    this.background = new Background();
    this.box = [];
    this.artists = [
      new Artist("Patti", 0),
      new Artist("Debbie", 60),
     /*  new Artist("Janice", 170),
      new Artist("Pat", 350),
      new Artist("Suzi", 325),
      new Artist("Stevie", 406),
      new Artist("Nico", 488),
      new Artist("Kate", 569),
      new Artist("PJ", 650),
      new Artist("Joan", 730) */
    ];

    this.x = Math.floor(Math.random() * WIDTH);
    this.y = 30;
    this.musicTitles = [];
  }
  setup() {
    //this.background.setup();
    this.artists.forEach(artist => {
      artist.setup();
    });
  }
  draw() {
    this.background.draw();

    this.artists.forEach((artist, index) => {
      if (artist.x + artist.width <= 0) {
      }
      artist.draw();
    });

    if (frameCount % 60 === 0) {
      // this will run every second
    }

    if (frameCount % 180 === 0) {
      // this will run every 3 seconds
      // push in this musicTitles a random new object from musicList
      const randomIdx = Math.floor(Math.random() * musicList.length);
      const randomSong = musicList[randomIdx];
      let newMusic = new Music(randomSong.title, randomSong.artist);
      newMusic.setup();
      this.musicTitles.push(newMusic);
      // create a class with a constructor that takes a title and an artist and that draws the title
      // push in this.musicTitles an instance of that class with the random song
    }

    this.musicTitles.forEach(musicObj => {
      musicObj.draw();
    });

    this.y += 2;
  }
}
