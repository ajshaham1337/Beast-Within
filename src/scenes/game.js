class Game extends Phaser.Scene {

    constructor() {
        super("gameScene");
    }

    create() {
        // Reset variables
        game.settings.gameOver = false;
        game.settings.isUnstable = false;

        // Define hotkeys
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);

        // Map
        const map = this.make.tilemap({ key: "map" });

        // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
        // Phaser's cache (i.e. the name you used in preload)
        const tileset = map.addTilesetImage("wolf_game_map_tileset", "tiles");

        // Parameters: layer name (or index) from Tiled, tileset, x, y
        const belowLayer = map.createLayer("Below Player", tileset, 0, 0);
        const worldLayer = map.createLayer("World", tileset, 0, 0);
        const aboveLayer = map.createLayer("Above Player", tileset, 0, 0);

        belowLayer.setCollisionByProperty({ collides: true });
        worldLayer.setCollisionByProperty({ collides: true });
        aboveLayer.setCollisionByProperty({ collides: true });

        // By default, everything gets depth sorted on the screen in the order we created things. Here, we
        // want the "Above Player" layer to sit on top of the player, so we explicitly give it a depth.
        // Higher depths will sit on top of lower depth objects.
        aboveLayer.setDepth(10);

        // Object layers in Tiled let you embed extra info into a map - like a spawn point or custom
        // collision shapes. In the tmx file, there's an object layer with a point named "Spawn Point"
        // const spawnPoint = map.findObject("Objects", obj => obj.name === "Spawn Point");

        player = new Player(this, 400, 300, "player");
        // this.stability = new StabilityBar(this, 784, 584); // bar doesnt show? why?
        // this.stability.setScrollFactor(0).setDepth(30);

        // Watch the player and worldLayer for collisions, for the duration of the scene:
        this.physics.add.collider(player, belowLayer);
        this.physics.add.collider(player, worldLayer); //should only be world, fix later.
        this.physics.add.collider(player, aboveLayer);

        // Camera
        const camera = this.cameras.main
        camera.startFollow(player);
        camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

        // // Sanity Bar
        // let stabilityBar = this.makeBar(140, 100, 0x2ecc71);
        // this.setValue(stabilityBar, 100);
        // dynamic bar rather than static text. needs to be anchored to player or to a point on the screen not just a location on map to work.

        // Help text that has a "fixed" position on the screen
        this.controls = this.add.text(16, 16, 'Movement: WASD\nInteract: E\nContinue: Q', {
                font: "16px monospace",
                fill: "#000000",
                padding: { x: 20, y: 10 },
                backgroundColor: "#A87D7D"
            })
            .setScrollFactor(0)
            .setDepth(30)
            .setAlpha(0.75);

        this.stability = 100;
        this.stabilityBar = this.add.text(560, 16, 'Stability: ' + this.stability, {
                font: '24px monospace',
                backgroundColor: '#A87D7D',
                fill: "#000000",
                align: 'center',
                padding: { x: 20, y: 10 },
                fixedWidth: 225,
            })
            .setScrollFactor(0)
            .setDepth(30)
            .setAlpha(0.75);
    }

    update() {
        // const prevVelocity = player.body.velocity.clone();

        if (game.settings.gameOver == false) {
            player.update();
            // this.playerMovementAnimation(player, prevVelocity);
        }

        if (Phaser.Input.Keyboard.JustDown(keyE)) {
            this.decrease(5);
        }

        // have a hud toggle for player controls, (H key) and move it to bottom left.
        // and put a quest box up top left in its spot.
    }

    decrease(amount) {
        console.log("does it get in here");
        this.stability -= amount;
        this.stabilityBar.text = 'Stability: ' + this.stability;
    }

    // playerMovementAnimation(player, prevVelocity) {
    //     // Update the animation last and give left/right animations precedence over up/down animations
    //     if (keyA.isDown) {
    //         player.anims.play("misa-left-walk", true);
    //     } else if (keyD.isDown) {
    //         player.anims.play("misa-right-walk", true);
    //     } else if (keyW.isDown) {
    //         player.anims.play("misa-back-walk", true);
    //     } else if (keyS.isDown) {
    //         player.anims.play("misa-front-walk", true);
    //     } else {
    //         player.anims.stop();

    //         // If we were moving, pick and idle frame to use
    //         if (prevVelocity.x < 0) player.setTexture("atlas", "misa-left");
    //         else if (prevVelocity.x > 0) player.setTexture("atlas", "misa-right");
    //         else if (prevVelocity.y < 0) player.setTexture("atlas", "misa-back");
    //         else if (prevVelocity.y > 0) player.setTexture("atlas", "misa-front");
    //     }
    // }
}