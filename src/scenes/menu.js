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

        // startButton = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'START', ) //textstyle last param { ... }
        //     .setOrigin(0.5)
        //     .setPadding(10)
        //     .setStyle({ backgroundColor: '#111' })
        //     .setInteractive({ useHandCursor: true })
        //     .on('pointerdown', this.startGame())
        //     .on('pointerover', () => startButton.setStyle({ fill: '#f39c12' }))
        //     .on('pointerout', () => startButton.setStyle({ fill: '#FFF' }));

        this.add.text(screenCenterX, screenCenterY - 100, 'Game Name', {
                font: "42px monospace",
                fill: "#000000",
                padding: { x: 20, y: 10 },
                backgroundColor: "#ffffff",
                fixedWidth: 250,
                align: 'center',
            })
            .setOrigin(0.5);


        this.add.text(screenCenterX, screenCenterY, 'START', {
                font: "18px monospace",
                fill: "#000000",
                padding: { x: 20, y: 10 },
                backgroundColor: "#ffffff",
                fixedWidth: 125,
                align: 'center',
            })
            .setOrigin(0.5);


        this.add.text(screenCenterX, screenCenterY + 50, 'CREDITS', {
                font: "18px monospace",
                fill: "#000000",
                padding: { x: 20, y: 10 },
                backgroundColor: "#ffffff",
                fixedWidth: 125,
                align: 'center',
            })
            .setOrigin(0.5);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyS)) {
            this.scene.start("gameScene");
        } else if (Phaser.Input.Keyboard.JustDown(keyC)) {
            this.scene.start("creditsScene");
        }
    }
}