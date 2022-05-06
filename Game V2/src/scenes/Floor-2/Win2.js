var Win2 = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "Win2" });
    },
    init: function() {},
    create: function() {

        this.add.image(390, 300, "winFloor").setScale(4.7);

        cursors = this.input.keyboard.createCursorKeys();
        keyboard = this.input.keyboard.addKeys("enter");

        var win2Text;
        var win2Text2;
        var continue2Text;

        win2Text = this.add.text(80, 40, "You've Conqured The Dungeon", {
            fontSize: "40px",
            fill: "#000"
        })
        win2Text.setColor("White");

        win2Text2 = this.add.text(180, 90, "Collect Your Prize", {
            fontSize: "40px",
            fill: "#000"
        })
        win2Text2.setColor("White");

        continue2Text = this.add.text(150, 600, "Hit Enter To Continue", {
            fontSize: "40px",
            fill: "#000"
        })
        continue2Text.setColor("White");
      {
      this.finalWinSound = this.sound.add('finalwin');
      this.finalWinSound.play({
          mute: false,
          volume: 1,
          rate: 1,
          detune: 0,
          seek: 0,
          loop: true,
          delay: 0.25});
      } //Audio
    },
    update: function() {
        if (keyboard.enter.isDown) {
            this.scene.start("Credits");
            this.winnerSound.stop();
        }
    }
});
