class Text1 extends Phaser.Scene {

    constructor() {
        super("text1Scene");
    }

    create() {
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

        this.add.text(screenCenterX, screenCenterY + 100, "When you were a young boy, your parents often took you to go foraging with them.\nYou started to help them gather after a few weeks of watching.\nYour body grew bigger. You got used to the cold.\n You were becoming a man like your father. Until one fateful night...", {
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
            this.scene.start("story1Scene");
        }
    }
}