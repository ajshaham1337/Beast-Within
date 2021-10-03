class Villager extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // physics conditions
        scene.physics.add.existing(this);
        this.setImmovable(true)
        this.setDebug(true, true, 0xFF0000); // shows physics body

        scene.add.existing(this);
    }

    update() {

    }
}