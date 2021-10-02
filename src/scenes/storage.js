class Storage extends Phaser.Scene {
    constructor() {
        super("storageScene");
    }

    // This file is for preloading the game's assets.

    preload() {
        this.load.image('menu', './assets/temp123.jpg');
        this.load.image('player', './assets/tempplayer.png');
        this.load.image('gameBG', './assets/tempbg123.jpg');
    }

    create() {
        this.scene.start("menuScene");
    }
}