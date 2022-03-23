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
        attackText.setColor("white");
        timer = 15;
        this.time.addEvent({
            delay: 1000,
            repeat: 10,
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
        attackText.setColor("white");

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