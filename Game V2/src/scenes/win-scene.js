var Win = new Phaser.Class({
    Extends: Phaser.scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "Win" });
    },
    init: function() {},
    preload: function() {
        this.load.image("floor", "https://raw.githubusercontent.com/Pieternauw/ULS-Inc/main/Game%20V2/src/resources/dungeon/OpenChest.png");
    },
    create: function() {
      
        this.add.image(350, 300, "floor").setScale(2.25);
      
        cursors = this.input.keyboard.createCursorKeys();
        keyboard = this.input.keyboard.addKeys("enter");
      
        var winText;
        var winText2;
        var continueText;
      
        winText = this.add.text(80, 40, "The Treasure Has Been Moved", {
            fontSize: "40px",
            fill: "#000"
        })
        winText.setColor("White");
      
        winText2 = this.add.text(200, 90, "To The Next Floor", {
            fontSize: "40px",
            fill: "#000"
        })
        winText2.setColor("White");

        continueText = this.add.text(150, 600, "Hit Enter To Continue", {
            fontSize: "40px",
            fill: "#000"
        })
        continueText.setColor("White");
    },
    update: function() {
        if (keyboard.enter.isDown) {
            this.scene.start("Title");
            this.themeSound.stop();
        }
    }
});
