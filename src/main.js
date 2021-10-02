// game configuration
let config = {
    audio: { },
    type: Phaser.CANVAS,
    pixelArt: true,
    width: 960,
    height: 600,
    physics: {
        default: "arcade",
        arcade: {
            debug: true,
        }
    },
    fps: {
        target: 60,
        forceSetTimeOut: true,
    },
    scene: [Storage, Menu, Game],
}

let game = new Phaser.Game(config);

// define game settings
game.settings = {
    gameOver: false,
    isUnstable: false,
    playerSpeed: 10,
}

// reserve keyboard variables
let keyW, keyA, keyS, keyD, keySpace;