var Boss = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "Boss" });
    },
    init: function() {},
    preload: function() {
        this.load.image("floor", "https://images.creativemarket.com/0.1.0/ps/120087/910/607/m1/fpnw/wm0/stonefloor001_large-.jpg?1401477523&s=aeb8c8fbad2e06ac22344908c9ad2c9e");
        this.load.image("ground", "https://raw.githubusercontent.com/Pieternauw/ULS-Inc/main/Game%20V2/src/resources/dungeon/dungeon-wall.png");
        this.load.image("bomb", "https://labs.phaser.io/assets/demoscene/blue_ball.png");
        this.load.spritesheet("dude", "https://raw.githubusercontent.com/Pieternauw/ULS-Inc/main/Game%20V2/src/resources/sprite/Dude.png", {
            frameWidth: 32,
            frameHeight: 48
        });
    },
    create: function() {
        //floor, add more if a bigger room required
        this.add.image(0, 0, "floor").setScale(1.5);
        this.add.image(0, 910, "floor").setScale(1.5);
        this.add.image(700, 0, "floor").setScale(1.5);
        this.add.image(700, 910, "floor").setScale(1.5);

        //platform group

        platforms = this.physics.add.staticGroup();

        //boss room walls
        {
            platforms.create(0, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 50, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 100, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 150, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 200, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 250, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 300, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 350, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 400, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 450, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 500, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 550, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 600, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 700, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 750, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 800, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 850, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 900, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 950, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 1000, "ground").setScale(0.25).refreshBody();
            platforms.create(1350, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(1350, 50, "ground").setScale(0.25).refreshBody();
            platforms.create(1350, 100, "ground").setScale(0.25).refreshBody();
            platforms.create(1350, 150, "ground").setScale(0.25).refreshBody();
            platforms.create(1350, 200, "ground").setScale(0.25).refreshBody();
            platforms.create(1350, 250, "ground").setScale(0.25).refreshBody();
            platforms.create(1350, 300, "ground").setScale(0.25).refreshBody();
            platforms.create(1350, 350, "ground").setScale(0.25).refreshBody();
            platforms.create(1350, 400, "ground").setScale(0.25).refreshBody();
            platforms.create(1350, 450, "ground").setScale(0.25).refreshBody();
            platforms.create(1350, 500, "ground").setScale(0.25).refreshBody();
            platforms.create(1350, 550, "ground").setScale(0.25).refreshBody();
            platforms.create(1350, 600, "ground").setScale(0.25).refreshBody();
            platforms.create(1350, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(1350, 700, "ground").setScale(0.25).refreshBody();
            platforms.create(1350, 750, "ground").setScale(0.25).refreshBody();
            platforms.create(1350, 800, "ground").setScale(0.25).refreshBody();
            platforms.create(1350, 850, "ground").setScale(0.25).refreshBody();
            platforms.create(1350, 900, "ground").setScale(0.25).refreshBody();
            platforms.create(1350, 950, "ground").setScale(0.25).refreshBody();
            platforms.create(1350, 1000, "ground").setScale(0.25).refreshBody();
            platforms.create(75, 1000, "ground").setScale(0.25).refreshBody();
            platforms.create(150, 1000, "ground").setScale(0.25).refreshBody();
            platforms.create(225, 1000, "ground").setScale(0.25).refreshBody();
            platforms.create(300, 1000, "ground").setScale(0.25).refreshBody();
            platforms.create(370, 1000, "ground").setScale(0.25).refreshBody();
            platforms.create(450, 1000, "ground").setScale(0.25).refreshBody();
            platforms.create(525, 1000, "ground").setScale(0.25).refreshBody();
            platforms.create(600, 1000, "ground").setScale(0.25).refreshBody();
            platforms.create(675, 1000, "ground").setScale(0.25).refreshBody();
            platforms.create(750, 1000, "ground").setScale(0.25).refreshBody();
            platforms.create(825, 1000, "ground").setScale(0.25).refreshBody();
            platforms.create(900, 1000, "ground").setScale(0.25).refreshBody();
            platforms.create(975, 1000, "ground").setScale(0.25).refreshBody();
            platforms.create(1050, 1000, "ground").setScale(0.25).refreshBody();
            platforms.create(1125, 1000, "ground").setScale(0.25).refreshBody();
            platforms.create(1200, 1000, "ground").setScale(0.25).refreshBody();
            platforms.create(1275, 1000, "ground").setScale(0.25).refreshBody();
            platforms.create(75, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(150, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(225, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(300, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(370, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(450, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(525, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(600, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(675, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(750, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(825, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(900, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(975, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(1050, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(1125, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(1200, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(1275, 0, "ground").setScale(0.25).refreshBody();
        }

        //player code
        player = this.physics.add.sprite(400, 400, "dude").setScale(1.25);
        this.cameras.main.startFollow(player);

        //animations
        {
            this.anims.create({
                key: "left",
                frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
                frameRate: 10,
                repeat: -1
            });
            this.anims.create({
                key: "turn",
                frames: [{ key: "dude", frame: 4 }],
                frameRate: 20
            });
            this.anims.create({
                key: "right",
                frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
                frameRate: 10,
                repeat: -1
            });
        }
        this.physics.add.collider(player, platforms);

        //keyboard
        {
            cursors = this.input.keyboard.createCursorKeys();
            keyboard = this.input.keyboard.addKeys("enter");
            keyboard = this.input.keyboard.addKeys("space");
        }

        //boss movement and other code
    },
    update: function() {
        //movement
        {
            if (cursors.left.isDown) {
                player.setVelocityX(-500);
                player.setVelocityY(0);
                player.anims.play("left", true);
            } else if (cursors.right.isDown) {
                player.setVelocityX(500);
                player.setVelocityY(0);
                player.anims.play("right", true);
            } else if (cursors.up.isDown) {
                player.setVelocityY(-500);
            } else if (cursors.down.isDown) {
                player.setVelocityY(500);
            } else {
                player.setVelocity(0);
                player.anims.play("turn");
            }
        }

        //attack code   -   doesn't quite work
        {
            x = player.body.position.x; //lock to middle of camera not player spawn
            y = player.body.position.y;

            attack = this.add.image(x + 10, y + 25, "bomb").setScale(3);
            attackLayer = this.add.layer();
            attackLayer.setVisible(false);
            attackLayer.add([attack]);


            if (keyboard.space.isDown) {
                console.log("space");
            }
        }
    }
});
