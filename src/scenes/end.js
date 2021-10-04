class End extends Phaser.Scene {

    constructor() {
        super("endScene");
    }

    create() {
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // this.bg = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'menu').setOrigin(0);

        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

        this.add.text(screenCenterX, screenCenterY - 100, 'The End', {
                font: "36px monospace",
                fill: "#000000",
                padding: { x: 40, y: 20 },
                backgroundColor: "#ffffff"
            })
            .setOrigin(0.5);

        this.add.text(screenCenterX, screenCenterY + 100, 'Thanks for playing!', {
                font: "36px monospace",
                fill: "#000000",
                padding: { x: 40, y: 20 },
                backgroundColor: "#ffffff"
            })
            .setOrigin(0.5);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start("menuScene");
        }
    }
}