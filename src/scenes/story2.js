class Story2 extends Phaser.Scene {

    constructor() {
        super("story2Scene");
    }

    create() {
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.bg = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'intro2').setOrigin(0);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start("gameScene");
        }
    }
}