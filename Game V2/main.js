import Phaser from "./src/lib/Phaser.js"

export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    scene: [],
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