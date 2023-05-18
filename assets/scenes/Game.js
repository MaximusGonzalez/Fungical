export default class Game extends Phaser.Scene {
  constructor() {
    super("game");
  }

  init() {}

  preload(){
    this.load.image("sky", "./assets/images/sky.png");
    this.load.image("ground", "./assets/images/platform.png");
    this.load.image("ninja", "./assets/images/ninja.png");
    this.load.image("square", "./assets/images/square.png");
    this.load.image("diamond", "./assets/images/diamond.png");
    this.load.image("triangle", "./assets/images/triangle.png");
  }

  create() {
    // add background
    this.add.image(400, 300, "sky").setScale(0.555);

    // add static platforms group
    let platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, "ground").setScale(2).refreshBody();

    // add shapes group
    this.shapesGroup = this.physics.add.group();
    // this.shapesGroup.create(100, 0, 'diamond');
    // this.shapesGroup.create(200, 0, 'triangle');
    // this.shapesGroup.create(300, 0, 'square');
    // create event to add shapes
    this.time.addEvent({
      delay: 1500,
      callback: this.addShape,
      callbackScope: this,
      loop: true,
    });
    
    // add sprite player
    this.player = this.physics.add.sprite(100, 450, "ninja");
    this.player.setCollideWorldBounds(true);
    
    // create cursors
    this.cursors = this.input.keyboard.createCursorKeys();
    
    // add collider between player and platforms
    // add collider between player and shapes
    // add overlap between player and shapes
    this.physics.add.collider(this.player, platforms);
    this.physics.add.collider(this.player, this.shapesGroup);
    this.physics.add.collider(platforms, this.shapesGroup);

    
  }

  update() {
    // check if not game over or win
    // update player movement
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-250);
    } else {
      if (this.cursors.right.isDown) {
        this.player.setVelocityX(250);
      } else {
        this.player.setVelocityX(0);
      }
    }

    // update player jump
    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-330);
    }
  }

  addShape() {
    // get random shape
    const randomShape = Phaser.Math.RND.pick(['diamond', 'square', 'triangle']);

    // get random position x
    const randomX = Phaser.Math.RND.between(0, 800);

    // add shape to screen
    this.shapesGroup.create(randomX, 0, randomShape);

    console.log("shape is added", randomX, randomShape);
  }
}