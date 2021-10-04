class Game extends Phaser.Scene {

    constructor() {
        super("gameScene");
    }

    create() {
        // Stability bar graphic
        this.stability = 100;
        this.stabilityBar = this.add.text(16, 16, 'Humanity: ' + this.stability, {
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
            console.log("yo!");
            wolf.disableBody(true, true);
            t.stability -= 10;
            t.stabilityBar.setText('Humanity: ' + t.stability);
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

        // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
        // Phaser's cache (i.e. the name you used in preload)
        const tileset = map.addTilesetImage("wolf game tileset", "tiles");

        // Parameters: layer name (or index) from Tiled, tileset, x, y
        const backgroundLayer = map.createLayer("Background", tileset, 0, 0);
        const belowLayer = map.createLayer("Below Player", tileset, 0, 0);
        const worldLayer = map.createLayer("World", tileset, 0, 0);
        const aboveLayer = map.createLayer("Above Player", tileset, 0, 0);

        worldLayer.setCollisionByProperty({ collides: true });
        aboveLayer.setDepth(10);

        // Object layers in Tiled let you embed extra info into a map - like a spawn point or custom
        // collision shapes. In the tmx file, there's an object layer with a point named "Spawn Point"
        // const spawnPoint = map.findObject("Objects", obj => obj.name === "Spawn Point");

        this.player = new Player(this, 550, 250, "player");
        this.villager1 = new Villager(this, 700, 100, "villagerMan");
        this.villager2 = new Villager(this, 525, 200, "villagerWoman");

        let wolves = this.physics.add.group({
            key: 'wolf',
            repeat: 10,
            setXY: { x: 12, y: 12, stepX: 50, stepY: 50 }
        });
        // Watch the player and worldLayer for collisions, for the duration of the scene:
        this.physics.add.collider(this.player, worldLayer);

        this.physics.add.collider(this.player, this.villager1);
        this.physics.add.collider(this.player, this.villager2);

        // this.physics.add.collider(this.player, wolves);
        // this.physics.add.collider(wolves, worldLayer);
        // this.physics.add.overlap(worldLayer, wolves, fcnHelper, null, this);
        this.physics.add.overlap(this.player, wolves, fcnHelper, null, this);

        // this.wolf1 = new Wolf(this, 525, 525, "wolf");
        // this.wolf2 = new Wolf(this, 525, 525, "wolf");
        // this.wolf3 = new Wolf(this, 525, 525, "wolf");
        // this.wolf4 = new Wolf(this, 525, 525, "wolf");
        // this.wolf5 = new Wolf(this, 525, 525, "wolf");
        // this.wolf6 = new Wolf(this, 525, 525, "wolf");
        // this.wolf7 = new Wolf(this, 525, 525, "wolf");
        // this.wolf8 = new Wolf(this, 525, 525, "wolf");
        // this.wolf9 = new Wolf(this, 525, 525, "wolf");
        // this.wolf10 = new Wolf(this, 525, 525, "wolf");

        // this.player.body.onCollide = new Phaser.Signal();
        // this.player.body.onCollide.add(hitSprite, this);

        // this.physics.add.collider(this.player, this.wolf1, wolfSlain(this.wolf1, this), null, this);
        // // this.player.body.onCollide.add(wolfSlain(this.wolf1, this));
        // this.player.body.onCollide.add(wolfSlain(this.wolf2, this));
        // this.player.body.onCollide.add(wolfSlain(this.wolf3, this));
        // this.player.body.onCollide.add(wolfSlain(this.wolf4, this));
        // this.player.body.onCollide.add(wolfSlain(this.wolf5, this));
        // this.player.body.onCollide.add(wolfSlain(this.wolf6, this));
        // this.player.body.onCollide.add(wolfSlain(this.wolf7, this));
        // this.player.body.onCollide.add(wolfSlain(this.wolf8, this));
        // this.player.body.onCollide.add(wolfSlain(this.wolf9, this));
        // this.player.body.onCollide.add(wolfSlain(this.wolf10, this));

        // this.physics.add.collider(this.player, this.wolf1);
        // this.physics.add.collider(this.player, this.wolf2);
        // this.physics.add.collider(this.player, this.wolf3);
        // this.physics.add.collider(this.player, this.wolf4);
        // this.physics.add.collider(this.player, this.wolf5);
        // this.physics.add.collider(this.player, this.wolf6);
        // this.physics.add.collider(this.player, this.wolf7);
        // this.physics.add.collider(this.player, this.wolf8);
        // this.physics.add.collider(this.player, this.wolf9);
        // this.physics.add.collider(this.player, this.wolf10);

        // Camera
        this.cameras.main.startFollow(this.player).setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    }

    update() {
        if (this.stability = 0) {
            //mid+end slides and story
            this.scene.start("text3Scene");
        }

        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start("text3Scene");
        }

        this.player.update();

        // if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
        //     this.decrease(10);
        // }

        //out of interest of time just make it on collision
        // if (Phaser.Input.Keyboard.JustDown(keyE)) {
        //     this.decrease(10);
        // }

        // if (this.player.body.onCollide.add(this.wolfSlain, this.wolf1)) {
        //     wolfSlain(this.wolf1);
        // }

        // if (this.player.physics.add.onCollision(this.wolf1)) {
        //     this.wolfSlain(this.wolf1);
        // } else if (this.player.body.onCollide(this.wolf2)) {
        //     this.wolfSlain(this.wolf2);
        // } else if (this.player.body.onCollide(this.wolf3)) {
        //     this.wolfSlain(this.wolf3);
        // } else if (this.player.body.onCollide(this.wolf4)) {
        //     this.wolfSlain(this.wolf4);
        // } else if (this.player.body.onCollide(this.wolf5)) {
        //     this.wolfSlain(this.wolf5);
        // } else if (this.player.body.onCollide(this.wolf6)) {
        //     this.wolfSlain(this.wolf6);
        // } else if (this.player.body.onCollide(this.wolf7)) {
        //     this.wolfSlain(this.wolf7);
        // } else if (this.player.body.onCollide(this.wolf8)) {
        //     this.wolfSlain(this.wolf8);
        // } else if (this.player.body.onCollide(this.wolf9)) {
        //     this.wolfSlain(this.wolf9);
        // } else if (this.player.body.onCollide(this.wolf10)) {
        //     this.wolfSlain(this.wolf10);
        // }

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




    //maybe add a pause feature with esc menu?
}