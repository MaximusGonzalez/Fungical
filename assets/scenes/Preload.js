import { SHAPES } from '../../utils.js';
const { TRIANGLE, SQUARE, DIAMOND, STAR } = SHAPES;

export default class Preload extends Phaser.Scene {
  constructor() {
    super("Preload");
  }

  preload() {
    this.load.image("sky", "./assets/images/sky.png");
    this.load.image("ground", "./assets/images/platform.png");
    this.load.image("ninja", "./assets/images/ninja.png");
    this.load.image(SQUARE, "./assets/images/square.png");
    this.load.image(DIAMOND, "./assets/images/diamond.png");
    this.load.image(STAR, "./assets/images/star.png");
    this.load.image(TRIANGLE, "./assets/images/triangle.png");
    this.load.image("win", "./assets/images/win.png")
    this.load.image("gameover", "./assets/images/gameover.png")
  }

  create() {
    this.scene.start("Game");
  }
}