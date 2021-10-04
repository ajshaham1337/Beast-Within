class Storage extends Phaser.Scene {

    constructor() {
        super("storageScene");
    }

    // This file is for preloading the game's assets.

    preload() {
        // Background images
        this.load.image('menu', './assets/atlas/Menu_Splash_Logo.png');
        this.load.image('intro1', './assets/atlas/storyboard1.png');
        this.load.image('intro2', './assets/atlas/storyboard2.png');
        this.load.image('outro1', './assets/atlas/MiddleSplash.png');
        this.load.image('outro2', './assets/atlas/Final_Splash.png');

        // Character models
        this.load.image('player', './assets/atlas/wolf_hunter.png');
        this.load.spritesheet('playerAnim', './assets/atlas/wolf_hunter_spritesheet.png', { frameWidth: 30, frameHeight: 40, startFrame: 0, endFrame: 15 });
        this.load.image('villagerMan', './assets/atlas/npcman.png');
        this.load.image('villagerWoman', './assets/atlas/npcwoman.png');
        this.load.image('wolf', './assets/atlas/wolf.png');

        // Game Map Assets: Tileset & Tilemap
        // this.load.image("tiles", "./assets/tiled/wolf game tileset.png");
        // this.load.tilemapTiledJSON("map", "./assets/tiled/wolf_game_map.json");

        this.load.image("tiles", "./assets/temp/wolf game tileset.png");
        this.load.tilemapTiledJSON("map", "./assets/temp/wolf_game_map.json");


    }

    create() {
        // Character animations
        this.anims.create({
            key: 'walkUp',
            frames: this.anims.generateFrameNumbers('playerAnim', { start: 12, end: 15, first: 12 }),
            frameRate: 12,
            repeat: -1,
        });
        this.anims.create({
            key: 'walkLeft',
            frames: this.anims.generateFrameNumbers('playerAnim', { start: 4, end: 7, first: 4 }),
            frameRate: 12,
            repeat: -1,
        });
        this.anims.create({
            key: 'walkDown',
            frames: this.anims.generateFrameNumbers('playerAnim', { start: 0, end: 3, first: 0 }),
            frameRate: 12,
            repeat: -1,
        });
        this.anims.create({
            key: 'walkRight',
            frames: this.anims.generateFrameNumbers('playerAnim', { start: 8, end: 11, first: 8 }),
            frameRate: 12,
            repeat: -1,
        });

        this.scene.start("menuScene");
    }
}