class Tutorial extends Phaser.Scene {

    constructor() {
        super("tutorialScene");
    }

    create() {
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

        this.add.text(screenCenterX, screenCenterY - 100, 'Tutorial', {
                font: "42px monospace",
                fill: "#000000",
                padding: { x: 20, y: 10 },
                backgroundColor: "#ffffff",
                // fixedWidth: 250,
                align: 'center',
            })
            .setOrigin(0.5);


        this.add.text(screenCenterX, screenCenterY + 100, 'Movement: WASD\nContinue through scenes by pressing SPACE\nHunt all of the wolves by running into them\nThe score is bugged so press SPACE after clearing all wolves', {
                font: "18px monospace",
                fill: "#000000",
                padding: { x: 20, y: 10 },
                backgroundColor: "#ffffff",
                // fixedWidth: 125,
                align: 'center',
            })
            .setOrigin(0.5);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start("menuScene");
        }
    }
}