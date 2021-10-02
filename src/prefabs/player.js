class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // physics conditions
        scene.physics.add.existing(this);
        this.setDebug(true, true, 0xFACADE); // shows physics body

        scene.add.existing(this);
    }

    update() {
        // player motion WASD
        if (keyW.isDown) {
            this.y -= game.settings.playerSpeed;
        } else if (keyA.isDown) {
            this.x -= game.settings.playerSpeed;
        } else if (keyS.isDown) {
            this.y += game.settings.playerSpeed;
        } else if (keyD.isDown) {
            this.x += game.settings.playerSpeed;
        }
    }
}