var Death = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "Death" });
    },
    create: function() {

        cursors = this.input.keyboard.createCursorKeys();
        keyboard = this.input.keyboard.addKeys("enter");

        var deathText;
        var restartText;

       deathText = this.add.text(40, 125, "You Died", {
            fontSize: "150px",
            fill: "#000"
        })
        deathText.setColor("Red");

        restartText = this.add.text(120, 400, "Hit Enter To Try Again", {
            fontSize: "45px",
            fill: "#000"
        })
        restartText.setColor("Red");
      
        this.themeSound = this.sound.add("death");
        this.themeSound.play({
          mute: false,
          volume: 1,
          rate: 1,
          detune: 0,
          seek: 0,
          loop: true,
          delay: 0.5});
    },
    update: function() {
        if (keyboard.enter.isDown) {
            this.scene.start("Title");
            this.themeSound.stop();
        }
    }
});
