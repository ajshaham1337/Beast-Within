class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // physics conditions
        scene.physics.add.existing(this);
        this.setDebug(true, true, 0xFF0000); // shows physics body

        scene.add.existing(this);
    }

    update() {
        // Stop any previous movement from the last frame
        this.body.setVelocity(0);

        // Horizontal movement
        if (keyA.isDown) {
            this.body.setVelocityX(-game.settings.playerSpeed);
        } else if (keyD.isDown) {
            this.body.setVelocityX(game.settings.playerSpeed);
        }

        // Vertical movement
        if (keyW.isDown) {
            this.body.setVelocityY(-game.settings.playerSpeed);
        } else if (keyS.isDown) {
            this.body.setVelocityY(game.settings.playerSpeed);
        }

        // Normalize and scale the velocity so that player can't move faster along a diagonal
        this.body.velocity.normalize().scale(game.settings.playerSpeed);
    }
}