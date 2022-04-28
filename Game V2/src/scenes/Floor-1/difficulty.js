var Mode = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "Mode" });
    },
    preload: function() {
        this.load.image("bomb", "https://labs.phaser.io/assets/demoscene/blue_ball.png");
    },
    create: function() {
        var diffictuly = ' ';
        diffictuly = this.add.text(75, 100, "Select your difficulty setting", {
            fontSize: "32px",
            fill: "#000"
        });
        diffictuly.setColor("white");

        var mode1 = ' ';
        mode1 = this.add.text(75, 200, "Level 1", {
            fontSize: "32px",
            fill: "#000"
        });
        mode1.setColor("white");

        var mode2 = ' ';
        mode2 = this.add.text(75, 300, "Level 2", {
            fontSize: "32px",
            fill: "#000"
        });
        mode2.setColor("white");
        var mode3 = ' ';
        mode3 = this.add.text(75, 400, "Level 3", {
            fontSize: "32px",
            fill: "#000"
        });
        mode3.setColor("white");

        key1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
        key2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
        key3 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE);

        mode = this.physics.add.group();

        selection = mode.create(50, 0, "bomb").setScale(0.75);
        selection.visible = false;
    },
    update: function() {
        if (Phaser.Input.Keyboard.JustDown(key1)) {
            localStorage.setItem("Mode", 1);
            selection.setPosition(50, 215);
            selection.visible = true;
            this.time.addEvent({
                delay: 4000,
                callback: () => {
                    this.scene.start("Game");
                }
            });
        } else if (Phaser.Input.Keyboard.JustDown(key2)) {
            localStorage.setItem("Mode", 2);
            selection.setPosition(50, 315);
            selection.visible = true;
            this.time.addEvent({
                delay: 4000,
                callback: () => {
                    this.scene.start("Game");
                }
            });
        } else if (Phaser.Input.Keyboard.JustDown(key3)) {
            localStorage.setItem("Mode", 3);
            selection.setPosition(50, 415);
            selection.visible = true;
            this.time.addEvent({
                delay: 4000,
                callback: () => {
                    this.scene.start("Game");
                }
            })
        }
    }

});