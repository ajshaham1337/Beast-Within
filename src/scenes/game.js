class Game extends Phaser.Scene {

    constructor() {
        super("gameScene");
    }

    create() {
        // Stability bar graphic
        let stability = 100;
        let stabilityBar = this.add.text(16, 16, 'Humanity: ' + stability, {
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

        function wolfSlain(wolf, t) {
            wolf.disableBody(true, true);
            stability -= 10;
            stabilityBar.text = ('Humanity: ' + stability);
            if (stabilityBar.text == 'Humanity: 0') {
                game.settings.winCon = true;
            }
        }

        function fcnHelper(player, wolf) {
            wolfSlain(wolf, this);
        }

        // Define hotkeys
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // Map
        const map = this.make.tilemap({ key: "map" });

        const tileset = map.addTilesetImage("wolf game tileset", "tiles");

        const backgroundLayer = map.createLayer("Background", tileset, 0, 0);
        const belowLayer = map.createLayer("Below Player", tileset, 0, 0);
        const worldLayer = map.createLayer("World", tileset, 0, 0);
        const aboveLayer = map.createLayer("Above Player", tileset, 0, 0);

        worldLayer.setCollisionByProperty({ collides: true });
        aboveLayer.setDepth(10);

        this.player = new Player(this, 550, 250, "player");
        this.villager1 = new Villager(this, 700, 100, "villagerMan");
        this.villager2 = new Villager(this, 525, 200, "villagerWoman");
        this.wolf1 = new Wolf(this, 100, 200, "wolf");
        this.wolf2 = new Wolf(this, 200, 250, "wolf");
        this.wolf3 = new Wolf(this, 300, 350, "wolf");
        this.wolf4 = new Wolf(this, 400, 250, "wolf");
        this.wolf5 = new Wolf(this, 750, 500, "wolf");
        this.wolf6 = new Wolf(this, 50, 150, "wolf");
        this.wolf7 = new Wolf(this, 200, 250, "wolf");
        this.wolf8 = new Wolf(this, 500, 300, "wolf");
        this.wolf9 = new Wolf(this, 600, 500, "wolf");
        this.wolf10 = new Wolf(this, 300, 500, "wolf");

        // let wolves = this.physics.add.group({
        //     key: 'wolf',
        //     repeat: 10,
        //     setXY: { x: 12, y: 12, stepX: 50, stepY: 50 }
        // });
        // Watch the player and worldLayer for collisions, for the duration of the scene:
        this.physics.add.collider(this.player, worldLayer);

        this.physics.add.collider(this.player, this.villager1);
        this.physics.add.collider(this.player, this.villager2);

        // this.physics.add.collider(this.player, wolves);
        // this.physics.add.collider(wolves, worldLayer);
        // this.physics.add.overlap(worldLayer, wolves, fcnHelper, null, this);
        this.physics.add.overlap(this.player, this.wolf1, fcnHelper, null, this);
        this.physics.add.overlap(this.player, this.wolf2, fcnHelper, null, this);
        this.physics.add.overlap(this.player, this.wolf3, fcnHelper, null, this);
        this.physics.add.overlap(this.player, this.wolf4, fcnHelper, null, this);
        this.physics.add.overlap(this.player, this.wolf5, fcnHelper, null, this);
        this.physics.add.overlap(this.player, this.wolf6, fcnHelper, null, this);
        this.physics.add.overlap(this.player, this.wolf7, fcnHelper, null, this);
        this.physics.add.overlap(this.player, this.wolf8, fcnHelper, null, this);
        this.physics.add.overlap(this.player, this.wolf9, fcnHelper, null, this);
        this.physics.add.overlap(this.player, this.wolf10, fcnHelper, null, this);

        // Camera
        this.cameras.main.startFollow(this.player).setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    }

    update() {
        if (game.settings.winCon == true) {
            this.scene.start("text3Scene");
        }

        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start("text3Scene");
        }

        this.player.update();

        if (keyA.isDown) {
            this.player.anims.play('walkLeft', true);
        } else if (keyD.isDown) {
            this.player.anims.play('walkRight', true);
        } else if (keyW.isDown) {
            this.player.anims.play('walkUp', true);
        } else if (keyS.isDown) {
            this.player.anims.play('walkDown', true);
        } else {
            this.player.anims.stop();
        }
    }

}