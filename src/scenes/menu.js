class Menu extends Phaser.Scene {

    constructor() {
        super("menuScene");
    }

    create() {
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);

        this.bg = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'menu').setOrigin(0);

        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

        this.add.text(screenCenterX, screenCenterY, 'Press S to Start', {
                font: "18px monospace",
                fill: "#000000",
                padding: { x: 20, y: 10 },
                backgroundColor: '#A87D7D',
                fixedWidth: 250,
                align: 'center',
            })
            .setOrigin(0.5);

        this.add.text(screenCenterX, screenCenterY + 50, 'Press T for tutorial', {
                font: "18px monospace",
                fill: "#000000",
                padding: { x: 20, y: 10 },
                backgroundColor: '#A87D7D',
                fixedWidth: 250,
                align: 'center',
            })
            .setOrigin(0.5);


        this.add.text(screenCenterX, screenCenterY + 100, 'Press C for Credits', {
                font: "18px monospace",
                fill: "#000000",
                padding: { x: 20, y: 10 },
                backgroundColor: '#A87D7D',
                fixedWidth: 250,
                align: 'center',
            })
            .setOrigin(0.5);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyS)) {
            this.scene.start("text1Scene");
        } else if (Phaser.Input.Keyboard.JustDown(keyT)) {
            this.scene.start("tutorialScene");
        } else if (Phaser.Input.Keyboard.JustDown(keyC)) {
            this.scene.start("creditsScene");
        }
    }
}