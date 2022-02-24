var Title = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "Title" });
    },
    //init: function() {},
    preload: function() {
        this.load.image("background", "https://images.creativemarket.com/0.1.0/ps/120087/910/607/m1/fpnw/wm0/stonefloor001_large-.jpg?1401477523&s=aeb8c8fbad2e06ac22344908c9ad2c9e");
        
      //this.load.setBaseURL("https://raw.github.com/Pieternauw/ULS-Inc/tree/main/Game%20V2/src/resources");
      this.load.audio('theme', 'https://raw.githubusercontent.com/nlaranio/CSResources/main/Jumper/assets/sfx/Dungeon-Menu-Track-1.mp3');
    },
    create: function() {
        this.add.image(400, 400, "background");

        var title;
        var title2;
        var Start;

        title = this.add.text(215, 125, "Dungeon", {
            fontSize: "100px",
            fill: "#000"
        })
        title.setColor("White");

        title2 = this.add.text(250, 225, "Raider", {
            fontSize: "100px",
            fill: "#000"
        })
        title2.setColor("White");
      
        Start = this.add.text(200, 400, "Hit Enter To Start Game", {
            fontSize: "32px",
            fill: "#000"
        })
        Start.setColor("White");

        cursors = this.input.keyboard.createCursorKeys();
        keyboard = this.input.keyboard.addKeys("enter");
      
      this.themeSound = this.sound.add('theme');
      this.themeSound.play({
          mute: false,
          volume: 1,
          rate: 1,
          detune: 0,
          seek: 0,
          loop: true,
          delay: 0.25});
    },
    update: function() {
        if (keyboard.enter.isDown) {
            this.scene.start("Game");
            this.themeSound.stop();
        }
    }
});
