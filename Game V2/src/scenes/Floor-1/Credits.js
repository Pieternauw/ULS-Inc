var Credits = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "Credits" });
    },
    init: function() {},
    create: function() {
    {
        cursors = this.input.keyboard.createCursorKeys();
        keyboard = this.input.keyboard.addKeys("enter");
    } //Keys
    {
        var credit1Text = '';
        var credit2Text = '';
        var credit3Text = '';
        var credit4Text = '';
        var credit5Text = '';
        var credit6Text = '';
        var credit7Text = '';
        var credit8Text = '';
        var credit9Text = '';

        credit1Text = this.add.text(300, 40, "Credits", {
            fontSize: "50px",
            fill: "#000"
        })
        credit1Text.setColor("White");
        
        credit2Text = this.add.text(325, 165, "Game Mechanics:", {
            fontSize: "20px",
            fill: "#000"
        })
        credit2Text.setColor("White");
        
        credit3Text = this.add.text(305, 215, "Pieter Nauwelaerts", {
            fontSize: "20px",
            fill: "#000"
        })
        credit3Text.setColor("White");
        
        credit4Text = this.add.text(335, 280, "Level Design:", {
            fontSize: "20px",
            fill: "#000"
        })
        credit4Text.setColor("White");
        
        credit5Text = this.add.text(335, 325, "Cameron Beale", {
            fontSize: "20px",
            fill: "#000"
        })
        credit5Text.setColor("White");
        
        credit6Text = this.add.text(325, 400, "Audio & Assets:", {
            fontSize: "20px",
            fill: "#000"
        })
        credit6Text.setColor("White");
        
        credit7Text = this.add.text(345, 450, "Eli Korsmeyer", {
            fontSize: "20px",
            fill: "#000"
        })
        credit7Text.setColor("White");
        
        credit8Text = this.add.text(350, 500, "Caleb Murai", {
            fontSize: "20px",
            fill: "#000"
        })
        credit8Text.setColor("White");
        
        credit9Text = this.add.text(275, 575, "Hit Enter for Title Screen", {
            fontSize: "20px",
            fill: "#000"
        })
        credit9Text.setColor("White");
} //Text
    {
        this.creditsSound = this.sound.add('credits');
        this.creditsSound.play({
             mute: false,
             volume: 1,
             rate: 1,
             detune: 0,
             seek: 0,
             loop: true,
             delay: 0
          });
        }    
    },
    update: function() {
        if (keyboard.enter.isDown) {
            this.scene.start("Title");
            this.creditsSound.stop();
        }
    }
});
