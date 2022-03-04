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
        this.load.image("enemy", "https://raw.githubusercontent.com/Pieternauw/ULS-Inc/main/Game%20V2/src/resources/sprite/skeletonminion.png");
        this.load.spritesheet("dude", "https://raw.githubusercontent.com/Pieternauw/ULS-Inc/main/Game%20V2/src/resources/sprite/Dude.png", {
            frameWidth: 32,
            frameHeight: 48
        });
    },
    create: function() {

        //floor, add more if a bigger room required
        {
            this.add.image(0, 0, "floor").setScale(1.5);
            this.add.image(0, 910, "floor").setScale(1.5);
            this.add.image(700, 0, "floor").setScale(1.5);
            this.add.image(700, 910, "floor").setScale(1.5);
        }

        //boss room walls
        {
            platforms = this.physics.add.staticGroup();
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

        //boss health
        {
            bossLife = 10;
            bossText = " ";
            bossText = this.add.text(150, 700, "renoB giB: 10", {
                fontSize: "64px",
                fill: "#000"
            });

            bossText.setColor("White");

            bossText.scrollFactorX = 0;
            bossText.scrollFactorY = 0;
        }
        //player health
        {
            life = localStorage.getItem("Health")

            lifeText = " ";
            lifeText = this.add.text(0, 0, "Hearts: 3", {
                fontSize: "32px",
                fill: "#000"
            });
            //color for scoreText
            lifeText.setColor("white");

            lifeText.scrollFactorX = 0;
            lifeText.scrollFactorY = 0;
        }
        //keyboard
        {
            cursors = this.input.keyboard.createCursorKeys();
            keyboard = this.input.keyboard.addKeys("enter");
            keyboard = this.input.keyboard.addKeys("space");
        }

        //boss movement and other code

        //attack
        {
            x = player.body.position.x;
            y = player.body.position.y;

            attackLayer = this.add.layer();
            attackLayer.setVisible(false);
            attack = this.add.image(x + 20, y + 20, "bomb").setScale(3);
            attackLayer.add([attack])

            attack.scrollFactorX = 0;
            attack.scrollFactorY = 0;
            attack.scrollFactorX = 0;
            attack.scrollFactorY = 0;
        }
        //collision of attacks and boss
        {
            //look back at bomb creating functions for how this was done idk why it isn't creating a collider
            //bomb function doesn't help this is exactly the same
            this.physics.add.collider(renoB, attack, attackMuks, null, this);

            function attackMuks(renoB, attack) {
                renoB.setTint(0xff0000);
                attack.setTint(0xff0000);
                this.time.addEvent({
                    delay: 100,
                    callback: () => {
                        attack.clearTint();
                        renoB.clearTint();
                    }
                });
                bossLife--;
                bossText.setText("renoB giB: " + bossLife);
                if (bossLife == 0) {
                    this.scene.start("Win");
                }
            }
        }
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

        x = player.body.position.x;
        y = player.body.position.y;

        //attack layer hiding
        {
            if (keyboard.space.isDown) {
                attackLayer.setVisible(true);
                this.time.addEvent({
                    delay: 500,
                    loop: false,
                    callback: () => {
                        attackLayer.setVisible(false);
                    }
                });
                console.log("space");
                this.time.addEvent({
                    delay: 500,
                });
            }
        }
    }
});

//boss name Renob
