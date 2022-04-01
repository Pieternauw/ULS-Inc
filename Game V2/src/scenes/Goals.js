var Goals = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "Goals" });
    },
    init: function() {},
    preload: function() {},
    create: function() {
        var moveText = ' ';
        moveText = this.add.text(75, 100, "Kill all of the enemies to move on", {
            fontSize: "32px",
            fill: "#000"
        });
        moveText.setColor("white");

        var attackText = ' ';
        attackText = this.add.text(100, 300, "Collect coins for extra health", {
            fontSize: "32px",
            fill: "#000"
        });
        attackText.setColor("white");
        timer = 15;
        this.time.addEvent({
            delay: 1000,
            repeat: 16,
            callback: () => {
                console.log(timer);
                timer--;
            }
        });

        var enterText = ' ';
        enterText = this.add.text(200, 500, "Press Enter to play", {
            fontsize: "32px",
            fill: "#000"
        });
        enterText.setColor("white");

        cursors = this.input.keyboard.createCursorKeys();
        keyboard = this.input.keyboard.addKeys("enter");
    },
    update: function() {
        if (timer <= 0) {
            this.scene.start("Game");
        }

        if (keyboard.enter.isDown) {
            this.scene.start("Game");
        }
    }
})