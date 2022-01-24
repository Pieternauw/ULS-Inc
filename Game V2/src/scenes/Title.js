var Title = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "Title" });
    },
    //init: function() {},
    preload: function() {
        this.load.image("background", "https://images.creativemarket.com/0.1.0/ps/120087/910/607/m1/fpnw/wm0/stonefloor001_large-.jpg?1401477523&s=aeb8c8fbad2e06ac22344908c9ad2c9e");
    },
    create: function() {
        this.add.image(400, 400, "background");

        var title;
        var Start;

        title = this.add.text(325, 125, "Title", {
            fontSize: "32px",
            fill: "#000"
        })
        title.setColor("White");

        Start = this.add.text(275, 200, "Hit Enter To Start Game", {
            fontSize: "16px",
            fill: "#000"
        })
        Start.setColor("White");

    },
    update: function() {
        this.input.keyboard.on("keydown-ENTER", function() {
            this.scene.start("Game");
        });
    }
});
