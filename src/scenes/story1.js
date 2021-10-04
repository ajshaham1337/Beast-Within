class Story1 extends Phaser.Scene {

    constructor() {
        super("story1Scene");
    }

    create() {
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.bg = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'intro1').setOrigin(0);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start("text2Scene");
        }
    }
}