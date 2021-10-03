class Storage extends Phaser.Scene {

    constructor() {
        super("storageScene");
    }

    // This file is for preloading the game's assets.

    preload() {
        // Background images
        this.load.image('menu', './assets/images/temp123.jpg');
        this.load.image('gameBG', './assets/images/tempbg123.jpg');

        // Character models
        this.load.image('player', './assets/atlas/wolf_hunter.png');
        // this.load.spritesheet('player', './assets/atlas/wolf_hunter.png', { frameWidth: 30, frameHeight: 40, startFrame: 0, endFrame: 0 });
        this.load.image('villager', './assets/atlas/temp-villager-art.png');
        this.load.image('wolf', './assets/atlas/temp-wolf-art.png');

        // Game Map Assets: Tileset & Tilemap
        this.load.image("tiles", "./assets/tiled/wolf_game_map_tileset.png");
        this.load.tilemapTiledJSON("map", "./assets/tiled/test.json");

    }

    create() {
        this.scene.start("menuScene");
    }
}