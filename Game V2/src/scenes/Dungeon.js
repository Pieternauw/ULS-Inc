//test file storing code for loading the assets and making the actual levels
import Phaser from "../lib/Phaser.js"

export default class Level extends Phaser.Scene {

    constructor() {
        super('level')
    }

    preload() {
        this.load.image("floor", '../resources/dungeon/dungeon-floor.png'); //https://github.com/Pieternauw/ULS-Inc/tree/main/Game V2/src/resources/dungeon/dungeon-floor.png for testing
        this.load.image("ground", "../resources/dungeon/dungeon-wall.png"); //https://github.com/Pieternauw/ULS-Inc/tree/main/Game V2/src/resources/dungeon/dungeon-wall.png
        this.load.image("star", "https://labs.phaser.io/assets/demoscene/star3.png");
        this.load.image("bomb", "https://labs.phaser.io/assets/demoscene/blue_ball.png");
        this.load.spritesheet("dude", "https://labs.phaser.io/assets/sprites/dude.png", {
            frameWidth: 32,
            frameHeight: 48
        });
    }
}
