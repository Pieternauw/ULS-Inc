var Tutorial = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "Tutorial" });
    },
    init: function() {},
    create: function() {
        var moveText = ' ';
        moveText = this.add.text(200, 100, "Move with arrow keys", {
            fontSize: "32px",
            fill: "#000"
        });
        moveText.setColor("white");

        var attackText = ' ';
        attackText = this.add.text(210, 300, "Attack with space", {
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

        specialText = ' ';
        specialText = this.add.text(250, 400, "Use Enter for a special \nattack using 10 coins", {
            fontsize: "32px",
            fill: "#000"
        });
        specialText.setColor("white");

        var enterText = ' ';
        enterText = this.add.text(250, 600, "Press Enter to continue", {
            fontsize: "32px",
            fill: "#000"
        });
        enterText.setColor("white");

        cursors = this.input.keyboard.createCursorKeys();
        keyboard = this.input.keyboard.addKeys("enter");
    },
    update: function() {
        if (timer <= 0) {
            this.scene.start("Goals");
        }

        if (keyboard.enter.isDown) {
            this.scene.start("Goals");
        }
    }
})