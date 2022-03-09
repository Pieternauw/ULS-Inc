var Game = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "Game" });
    },
    init: function() {},
    preload: function() {
        //this.load.setBaseURL("https://labs.phaser.io/assets");
        this.load.image("floor", "https://images.creativemarket.com/0.1.0/ps/120087/910/607/m1/fpnw/wm0/stonefloor001_large-.jpg?1401477523&s=aeb8c8fbad2e06ac22344908c9ad2c9e");
        this.load.image("ground", "https://raw.githubusercontent.com/Pieternauw/ULS-Inc/main/Game%20V2/src/resources/dungeon/dungeon-wall.png");
        this.load.image("star", "https://labs.phaser.io/assets/demoscene/star3.png");
        this.load.image("bomb", "https://labs.phaser.io/assets/demoscene/blue_ball.png");
        this.load.spritesheet("dude", "https://labs.phaser.io/assets/sprites/dude.png", {
            frameWidth: 32,
            frameHeight: 48
        });
    },
    create: function() {
        //adds image for background
        {
            this.add.image(400, 300, "floor").setScale(1.5);
        }
        //creates platforms
        platforms = this.physics.add.staticGroup();
        //floor
        {
            platforms.create(0, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(75, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(150, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(225, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(300, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(375, 650, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor
            platforms.create(400, 650, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor  
            platforms.create(475, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(525, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(600, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(675, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(750, 650, "ground").setScale(0.25).refreshBody();
            //left side (done)
            platforms.create(0, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 75, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 150, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 225, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 275, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 450, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 525, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 600, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 675, "ground").setScale(0.25).refreshBody();
            //top side (done)
            platforms.create(75, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(150, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(225, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(300, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(475, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(525, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(600, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(675, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(750, 0, "ground").setScale(0.25).refreshBody();
            //right side (done)
            platforms.create(800, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 75, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 150, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 225, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 275, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 450, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 525, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 600, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 675, "ground").setScale(0.25).refreshBody();
        }
        //creates player with bounce and collision
        player = this.physics.add.sprite(300, 450, "dude");

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
        //adds physics for player
        this.physics.add.collider(player, platforms);
        //allows cursors for inputs
        {
            cursors = this.input.keyboard.createCursorKeys();
            keyboard = this.input.keyboard.addKeys("enter");
        }
        //creates stars
        {
            stars = this.physics.add.group({
                key: "star",
                repeat: 9,
                setXY: { x: 80, y: 0, stepX: 70 }
            });
            //creates multiple stars
            stars.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            //adds physics
            this.physics.add.collider(stars, platforms);
            this.physics.add.overlap(player, stars, collectStar, null, this);

            function collectStar(player, star) {
                star.disableBody(true, true);
                score += 10;
                scoreText.setText("Score: " + score);
                if (stars.countActive(true) === 0) {
                    stars.children.iterate(function(child) {
                        child.enableBody(true, child.x, 0, true, true);
                    });
                    //creates bombs at random locations with properties
                    var x =
                        player.x < 400 ?
                        Phaser.Math.Between(400, 800) :
                        Phaser.Math.Between(0, 400);
                }
            }
        }
        //texts
        {
            var score = 0;
            var scoreText;
            scoreText = this.add.text(0, 25, "score: 0", {
                fontSize: "32px",
                fill: "#000"
            });
            //color for scoreText
            scoreText.setColor("white");
            //creates score counter
            var life = 3;
            var lifeText;
            lifeText = this.add.text(0, 0, "Hearts: 3", {
                fontSize: "32px",
                fill: "#000"
            });
            //color for scoreText
            lifeText.setColor("white");

            lifeText.scrollFactorX = 0;
            lifeText.scrollFactorY = 0;
            scoreText.scrollFactorX = 0;
            scoreText.scrollFactorY = 0;
        }
        //enemy code when we get there (need new assets)

        //attacks
        {
            x = player.body.position.x;
            y = player.body.position.y;

            attack = this.physics.add.group();

            attack1 = attack.create(x + 20, y + 20, "bomb").setScale(3);
            attack1.visible = false;
        }
        //collision of attacks and muks
        {
            //this.physics.add.collider(muks, attack, attackMuks, null, this);
            attack1.body.enable = false;

            function attackMuks(muk, attack) {
                muk.setTint(0xff0000);
                attack.setTint(0xff0000);
                this.time.addEvent({
                    delay: 100,
                    callback: () => {
                        muk.destroy();
                        attack.clearTint();
                        enemyCount.setText("Enemy count: " + mukCount);
                    }
                });
                attack.setVelocity(0, 0);
                if (muks.countActive() == 0) {
                    this.scene.start("Boss");
                }
                //muk count = 0 -> scene transition
            }
        }
    },
    update: function(game) {
        if (cursors.left.isDown) {
            player.setVelocityX(-200);
            player.setVelocityY(0);
            player.anims.play("left", true);
        } else if (cursors.right.isDown) {
            player.setVelocityX(200);
            player.setVelocityY(0);
            player.anims.play("right", true);
        } else if (cursors.up.isDown) {
            player.setVelocityY(-200);
        } else if (cursors.down.isDown) {
            player.setVelocityY(200);
        } else {
            player.setVelocity(0);
            player.anims.play("turn");
        }
        x = player.body.position.x;
        y = player.body.position.y;
        //attack layer hiding
        {
            if (keyboard.space.isDown) {
                attack1.body.enable = true;
                attack1.setPosition(x + 20, y + 20);
                attack1.visible = true;
                this.time.addEvent({
                    delay: 500,
                    loop: false,
                    callback: () => {
                        attack1.body.enable = false;
                        attack1.visible = false;
                    }
                });
                //console.log(muks.countActive());
            }
        }
    }
});