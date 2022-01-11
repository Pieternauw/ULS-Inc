import Phaser from 'https://codepen.io/bealec2022/pen/GRMoPLG.js'
//import game file once made

export default class Title extends Phaser.Scene {

    constructor() {
        super({key: "title"});
    }

    preload() {
        this.load.image("background", "https://images.creativemarket.com/0.1.0/ps/120087/910/607/m1/fpnw/wm0/stonefloor001_large-.jpg?1401477523&s=aeb8c8fbad2e06ac22344908c9ad2c9e");
    }

    create() {
        this.add.image(400, 300, "background").setScale(0.5);

        keyboard = this.input.keyboard.addKeys("enter");

        var Title;
        var Start;

        Title = this.add.text(150, 125, "Title", {
            fontSize: "00px",
            fill: "#000"
        })
        Title.setColor("White");

        Start = this.add.text(275, 200, "Hit Enter To Start Game", {
            fontSize: "32px",
            fill: "#000"
        })
        Start.setColor("White");
      
        this.input.keyboard.once('keydown-ENTER', () => { this.scene.start('game') });
    }
}
