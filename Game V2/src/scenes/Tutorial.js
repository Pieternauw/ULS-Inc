var Tutorial = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "Tutorial" });
    },
    init: function() {},
    preload: function() {},
    create: function() {
        var moveText = ' ';
        moveText = this.add.text(200, 100, "Move with arrow keys", {
            fontSize: "32px",
            fill: "#000"
        });
        moveText.setColor("white");

        var attackText = ' ';
        attackText = this.add.text(200, 300, "Attack with space", {
            fontSize: "32px",
            fill: "#000"
        });
        var timer = 15;
        this.time.addEvent({
            delay: 100,
            repeat: 10,
            callback: () => {
                timer--;
            }
        });
    },
    update: function() {
        if (timer >= 0) {
            this.scene.start("Game");
        }
    }
})