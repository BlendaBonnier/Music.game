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

class Music {
  constructor(title, artist) {
    this.x = random(0, WIDTH);
    this.y = -100;
    this.artist = artist;
    this.title = title;
  }

  setup() {
    this.div = createDiv(this.title);
  }

  draw() {
    this.div.position(this.x, this.y);
    this.div.style("background-color", "white");
    this.div.style("border", "2px solid pink");

    this.div.style("color", "black");
    this.y++;
  }
}
//randomMusicTitles =
// musicList[Math.floor(math.random() * this.musicList.length)];

/*
    let janiceTitels = [
      "Piece of My Heart",
      "Cry Baby",
      "Me and Bobby McGee",
      "Call On Me",
      "Mercedes Benz"
    ];
    let debbieTitles = [
      "Shadows",
      "I Want That Man",
      "Rush, Rush",
      "French Kissin´in the USA",
      "Tehran 1979"
    ];
    let graceTitles = [
      "Somebody to Love",
      "White Rabbit",
      "Rejoyce",
      "Lather",
      "Sketches of China",
      "We Built This City"
    ];
    let joanTitles = [
      "I Love Rock´N Roll",
      "I Hate Myself for Loving You",
      "Bad Reputation",
      "Crimson and Clover",
      "Do you Wanna Touch Me",
      "Rebel, Rebel",
      "Love Is Pain",
      "Cherry Bomb"
    ];
    let kateTitles = [
      "Wuthering Heights",
      "Running Up That Hill",
      "Cloudbusting",
      "This Woman´s Work",
      "Hounds Of Love"
    ];
    let nicoTitles = [
      "Chelsea Girls",
      "Heroin",
      "Venus In Furs",
      "Sunday Morning",
      "These Days",
      "I´m Waiting For The Man"
    ];
    let patTitles = [
      "Hit Me With Your Best Shot",
      "We Belong",
      "Love Is A Battlefield",
      "Heartbreaker",
      "Shadows Of The Nigth"
    ];
    let pjTitles = [
      "Down By The Water",
      "This Mess We´re In",
      "The Wind",
      "Rid Of Me",
      "This Is Love"
    ];
    let stevieTitles = [
      "Edge of Seventeen",
      "Stop Draggin My Heart Around",
      "Wild Heart",
      "Landslide",
      "Dreams",
      "Nothing Ever Changes"
    ];
    let suziTitles = [
      "The Wild One",
      "Stumblin In",
      "I´m a Rocker",
      "Woman Cry",
      "If You Can´t Give Me Love"
    ];
    let pattiTitles = [
      "Paths that cross",
      "Because The Nigth",
      "Dancing Barefoot",
      "People have the Power",
      "Gloria",
      "Looking for You"
    ];

    const musicList = [pattiTitles, suziTitles, stevieTitles, pjTitles, patTitles, nicoTitles, graceTitles, joanTitles, janiceTitels, kateTitles, debbieTitles].reduce(function(accumulator, value) {
      const artistName = value[0];
      value.slice(1).forEach(function(title) {
        accumulator.push({
            title: title,
            artist: artistName
          })

      })
    
    return accumulator
      
    }, []*/
