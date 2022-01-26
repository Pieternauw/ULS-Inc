var Death = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "Death" });
    },
    //init: function() {},
    preload: function() {
        this.load.image("background", "https://images.creativemarket.com/0.1.0/ps/120087/910/607/m1/fpnw/wm0/stonefloor001_large-.jpg?1401477523&s=aeb8c8fbad2e06ac22344908c9ad2c9e");
    },
    create: function() {
        this.add.image(400, 300, "background").setScale(0.5);

        cursors = this.input.keyboard.createCursorKeys();
        keyboard = this.input.keyboard.addKeys("enter");

        var deathText;
        var restartText;

       deathText = this.add.text(250, 125, "Game Over", {
            fontSize: "60px",
            fill: "#000"
        })
        deathText.setColor("White");

        restartText = this.add.text(200, 300, "Hit Enter To Try Again", {
            fontSize: "32px",
            fill: "#000"
        })
        restartText.setColor("White");
    },
    update: function() {
        if (keyboard.enter.isDown) {
            this.scene.start("Title");
        }
    }
});
