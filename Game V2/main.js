import Phaser from "./src/lib/Phaser.js"
import Game from "./src/scenes/Game.js"

export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    scene: [Game],
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scale: {
        zoom: 2
    }
})
