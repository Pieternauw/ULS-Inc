import Phaser from "https://codepen.io/nauwelaertsp2022/pen/GRMqmGY.js"
import Game from "https://codepen.io/nauwelaertsp2022/pen/YzrjxmJ?editors=0010.js"
import Title from "https://codepen.io/nauwelaertsp2022/pen/OJxaPwQ?editors=0010.js"

export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    scene: [Title, Game],
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
