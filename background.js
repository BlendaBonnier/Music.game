class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
  }

  draw() {
    image(janice, this.x, this.y, WIDTH, HEIGHT);
    image(debbi, this.x + WIDTH, this.y, WIDTH, HEIGHT);
    image(joan, this.x + WIDTH * 2, this.y, WIDTH, HEIGHT);
    image(grace, this.x + WIDTH * 3, this.y, WIDTH, HEIGHT);
    image(kate, this.x + WIDTH * 4, this.y, WIDTH, HEIGHT);

    image(nico, this.x + WIDTH * 5, this.y, WIDTH, HEIGHT);
    image(pat, this.x + WIDTH * 6, this.y, WIDTH, HEIGHT);
    image(pj, this.x + WIDTH * 7, this.y, WIDTH, HEIGHT);
    image(stivie, this.x + WIDTH * 8, this.y, WIDTH, HEIGHT);
    image(suzi, this.x + WIDTH * 9, this.y, WIDTH, HEIGHT);

    image(janice, this.x + WIDTH * 10, this.y, WIDTH, HEIGHT);
    image(debbi, this.x + +WIDTH * 11, this.y, WIDTH, HEIGHT);
    image(joan, this.x + WIDTH * 12, this.y, WIDTH, HEIGHT);
    image(grace, this.x + WIDTH * 13, this.y, WIDTH, HEIGHT);
    image(kate, this.x + WIDTH * 14, this.y, WIDTH, HEIGHT);

    image(nico, this.x + WIDTH * 15, this.y, WIDTH, HEIGHT);
    image(pat, this.x + WIDTH * 16, this.y, WIDTH, HEIGHT);
    image(pj, this.x + WIDTH * 17, this.y, WIDTH, HEIGHT);
    image(stivie, this.x + WIDTH * 18, this.y, WIDTH, HEIGHT);
    image(suzi, this.x + WIDTH * 19, this.y, WIDTH, HEIGHT);
    this.x -= 2;
    if (this.x < -WIDTH * 19) {
      this.x = -WIDTH * 2;
    }
  }
}
