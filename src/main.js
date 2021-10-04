// Game configuration
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: "game-container",
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
            debug: true,
            gravity: { y: 0 },
        }
    },
    fps: {
        target: 60,
        forceSetTimeOut: true,
    },
    scene: [Storage, Menu, Tutorial, Credits, Text1, Story1, Text2, Story2, Game, Text3, Story3, Text4, Story4, End],

}

let game = new Phaser.Game(config);

// Define game settings
game.settings = {
    // isUnstable: false,
    playerSpeed: 75,
    // can use game.settings to finesse game states i believe.
}

// Reserve keyboard variables
let keyW, keyA, keyS, keyD, keyQ, keyE, keySPACE, keyT, keyC, keyESC;