class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.bg = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'menu').setOrigin(0);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySpace)) {
            this.scene.start("gameScene");
        }
    }
}