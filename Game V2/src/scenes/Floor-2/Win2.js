var Win2 = new Phaser.Class({
    Extends: Phaser.scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "Win2" });
    },
    init: function() {},
    preload: function() {
        this.load.image("floor", "https://raw.githubusercontent.com/Pieternauw/ULS-Inc/main/Game%20V2/src/resources/dungeon/images.jpg");
    },
    create: function() {
      
        this.add.image(390, 300, "floor").setScale(4.7);
      
        cursors = this.input.keyboard.createCursorKeys();
        keyboard = this.input.keyboard.addKeys("enter");
      
        var winText;
        var winText2;
        var continueText;
      
        winText = this.add.text(80, 40, "You've Conqured The Dungeon", {
            fontSize: "40px",
            fill: "#000"
        })
        winText.setColor("White");
      
        winText2 = this.add.text(180, 90, "Collect Your Prize", {
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
            this.scene.start("Credits");
            //this.themeSound.stop();
        }
    }
});