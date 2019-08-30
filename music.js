const musicList = [
  { title: "Paths that cross", artist: "Patti" },
  { title: "Because The Nigth", artist: "Patti" },
  { title: "Dancing Barefoot", artist: "Patti" },
  { title: "People have the Power", artist: "Patti" },
  { title: "Gloria", artist: "Patti" },
  { title: "Looking for You", artist: "Patti" },
  { title: "The Wild One", artist: "Suzi" },
  { title: "Stumblin In", artist: "Suzi" },
  { title: "I´m a Rocker", artist: "Suzi" },
  { title: "Woman Cry", artist: "Suzi" },
  { title: "If You Can´t Give Me Love", artist: "Suzi" },
  { title: "Edge of Seventeen", artist: "Stevie" },
  { title: "Stop Draggin My Heart Around", artist: "Stevie" },
  { title: "Wild Heart", artist: "Stevie" },
  { title: "Landslide", artist: "Stevie" },
  { title: "Dreams", artist: "Stevie" },
  { title: "Nothing Ever Changes", artist: "Stevie" },
  { title: "Down By The Water", artist: "PJ" },
  { title: "This Mess We´re In", artist: "PJ" },
  { title: "The Wind", artist: "PJ" },
  { title: "Rid Of Me", artist: "PJ" },
  { title: "This Is Love", artist: "PJ" },
  { title: "Hit Me With Your Best Shot", artist: "Pat" },
  { title: "We Belong", artist: "Pat" },
  { title: "Love Is A Battlefield", artist: "Pat" },
  { title: "Heartbreaker", artist: "Pat" },
  { title: "Shadows Of The Nigth", artist: "Pat" },
  { title: "Chelsea Girls", artist: "Nico" },
  { title: "Heroin", artist: "Nico" },
  { title: "Venus In Furs", artist: "Nico" },
  { title: "Sunday Morning", artist: "Nico" },
  { title: "These Days", artist: "Nico" },
  { title: "I´m Waiting For The Man", artist: "Nico" },
  { title: "Somebody to Love", artist: "Grace" },
  { title: "White Rabbit", artist: "Grace" },
  { title: "Rejoyce", artist: "Grace" },
  { title: "Lather", artist: "Grace" },
  { title: "Sketches of China", artist: "Grace" },
  { title: "We Built This City", artist: "Grace" },
  { title: "I Love Rock´N Roll", artist: "Joan" },
  { title: "I Hate Myself for Loving You", artist: "Joan" },
  { title: "Bad Reputation", artist: "Joan" },
  { title: "Crimson and Clover", artist: "Joan" },
  { title: "Do you Wanna Touch Me", artist: "Joan" },
  { title: "Rebel, Rebel", artist: "Joan" },
  { title: "Love Is Pain", artist: "Joan" },
  { title: "Cherry Bomb", artist: "Joan" },
  { title: "Piece of My Heart", artist: "Janice" },
  { title: "Cry Baby", artist: "Janice" },
  { title: "Me and Bobby McGee", artist: "Janice" },
  { title: "Call On Me", artist: "Janice" },
  { title: "Mercedes Benz", artist: "Janice" },
  { title: "Wuthering Heights", artist: "Kate" },
  { title: "Running Up That Hill", artist: "Kate" },
  { title: "Cloudbusting", artist: "Kate" },
  { title: "This Woman´s Work", artist: "Kate" },
  { title: "Hounds Of Love", artist: "Kate" },
  { title: "Shadows", artist: "Debbie" },
  { title: "I Want That Man", artist: "Debbie" },
  { title: "Rush, Rush", artist: "Debbie" },
  { title: "French Kissin´in the USA", artist: "Debbie" },
  { title: "Tehran 1979", artist: "Debbie" }
];

// add velocity so the titles falls down faster and faster

class Music {
  constructor(title, artist) {
    this.x = random(0, WIDTH - 200);
    this.y = -100;
    this.artist = artist;
    this.title = title;
  }

  setup() {
    this.div = createDiv(this.title);
  }

  draw() {
    this.div.position(this.x, this.y);
    this.div.style("background-color", "black");
    this.div.style("border", "2px solid white");
    this.div.style("width", "150px");
    this.div.style("text-align", "center");
    this.div.style("color", "white");
    this.div.style("padding", "5px");
    this.width = 150;
    this.height = this.div.height;
    this.y++;

    if (this.y > 580) {
      this.remove();
      this.offScreen = true;
      
    }
  }

  remove() {
    this.div.remove();
  }
}
