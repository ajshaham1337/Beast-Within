// game configuration
let config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    parent: "game-container",
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 }
        }
    },
    fps: {
        target: 60,
        forceSetTimeOut: true,
    },
    scene: [Storage, Menu, Game],
}

let game = new Phaser.Game(config);
let player;

// define game settings
game.settings = {
    gameOver: false,
    isUnstable: false,
    playerSpeed: 100,
}

// reserve keyboard variables
let keyW, keyA, keyS, keyD, keyQ, keyE, keySpace;