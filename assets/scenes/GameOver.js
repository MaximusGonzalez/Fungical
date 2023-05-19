export default class GameOver extends Phaser.Scene {
    constructor(){
        super("GameOver")
    }
    create(){
        this.add.image(400, 300,"gameover")
            .setScale(0.5)
            .setInteractive()
            .on('pointerdown', () => this.scene.start('Game')); ;
    }
}