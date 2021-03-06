class Credits extends Phaser.Scene {

    constructor() {
        super("creditsScene");
    }

    create() {
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

        this.add.text(screenCenterX, screenCenterY - 100, 'Credits', {
                font: "36px monospace",
                fill: "#000000",
                padding: { x: 40, y: 20 },
                backgroundColor: "#ffffff"
            })
            .setOrigin(0.5);

        this.add.text(screenCenterX, screenCenterY + 100, 'Daniel Liao: Splash Art\n   Emily Ye: Pixel Artist\n   Alfy Lam: Debugger\nAlex Shaham: Producer/Coder', {
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