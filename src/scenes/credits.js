class Credits extends Phaser.Scene {

    constructor() {
        super("creditsScene");
    }

    create() {
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

        this.add.text(screenCenterX, screenCenterY, 'CREDITS', {
                font: "36px monospace",
                fill: "#000000",
                padding: { x: 40, y: 20 },
                backgroundColor: "#ffffff"
            })
            .setOrigin(0.5);
    }

    update() {

    }
}