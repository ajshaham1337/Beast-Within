class Game extends Phaser.Scene {
    constructor() {
        super("gameScene");
    }

    create() {
        // reset variables
        game.settings.gameOver = false;
        game.settings.isUnstable = false;
        
        // define hotkeys
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
        // environment
        // this.gamebg = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'gameBG').setScale(0.5).setOrigin(0).setScrollFactor(0);
        this.bg = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'gameBG').setScale(1).setOrigin(0);

        // player + cam
        this.player = new Player(this, 100, 100, 'player').setSize(25, 25);
        this.cameras.main.startFollow(this.player);
    }

    // Game goes here...
    update() {
        if (game.settings.gameOver == false) {
            this.player.update();
        }
    }

}