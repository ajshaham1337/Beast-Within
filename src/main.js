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
            debug: true,
            gravity: { y: 0 },
        }
    },
    fps: {
        target: 60,
        forceSetTimeOut: true,
    },
    scene: [Storage, Menu, Credits, Game],
}

let game = new Phaser.Game(config);

// Define game settings
game.settings = {
    gameOver: false,
    isUnstable: false,
    playerSpeed: 100,
    // can use game.settings to finesse game states i believe.
}

// Reserve keyboard variables
let keyW, keyA, keyS, keyD, keyQ, keyE, keySPACE, keyT, keyC, keyESC;