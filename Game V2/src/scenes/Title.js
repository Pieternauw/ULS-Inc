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

        title = this.add.text(250, 125, "Title", {
            fontSize: "100px",
            fill: "#000"
        })
        title.setColor("White");

        Start = this.add.text(200, 350, "Hit Enter To Start Game", {
            fontSize: "32px",
            fill: "#000"
        })
        Start.setColor("White");

        cursors = this.input.keyboard.createCursorKeys();
        keyboard = this.input.keyboard.addKeys("enter");
    },
    update: function() {
        if (keyboard.enter.isDown) {
            this.scene.start("Game");
        }
    }
});
