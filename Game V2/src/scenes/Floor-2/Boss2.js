var Boss2 = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "Boss2" });
    },
    init: function() {},
    preload: function() {
        {
            //images
            this.load.image("floor", "https://images.creativemarket.com/0.1.0/ps/120087/910/607/m1/fpnw/wm0/stonefloor001_large-.jpg?1401477523&s=aeb8c8fbad2e06ac22344908c9ad2c9e");
            this.load.image("ground", "https://raw.githubusercontent.com/Pieternauw/ULS-Inc/main/Game%20V2/src/resources/dungeon/dungeon-wall.png");
            this.load.image("enemy", "https://raw.githubusercontent.com/Pieternauw/ULS-Inc/main/Game%20V2/src/resources/sprite/renoB.png");
            this.load.image("muk", "https://raw.githubusercontent.com/Pieternauw/ULS-Inc/main/Game%20V2/src/resources/sprite/skeletonminion.png")


            //music
            this.load.audio("boss1", "https://raw.githubusercontent.com/nlaranio/CSResources/main/Jumper/assets/sfx/QUIETBoss.mp3");
            this.load.audio("boss2", "https://raw.githubusercontent.com/nlaranio/CSResources/main/Jumper/assets/sfx/MEDIUM_Boss.mp3");
            this.load.audio("boss3", "https://raw.githubusercontent.com/nlaranio/CSResources/main/Jumper/assets/sfx/INTENSEBoss.mp3");
            this.load.audio("game", "https://raw.githubusercontent.com/nlaranio/CSResources/main/Jumper/assets/sfx/Dungeon_Main_Track.mp3");
        }
        //ice game loads
        {
            this.load.image("floor2", "https://raw.githubusercontent.com/Pieternauw/ULS-Inc/main/Game%20V2/src/resources/dungeon/MC_IceBackground.jpeg");
            this.load.image("wall", "https://raw.githubusercontent.com/Pieternauw/ULS-Inc/508c262fcaf54d4bfd4fdb4b6adfbd7296ac3649/Game%20V2/src/resources/dungeon/ice_brick.png");
            this.load.image("muk2", "https://raw.githubusercontent.com/Pieternauw/ULS-Inc/main/Game%20V2/src/resources/Snow%20Sprites/evil_snowman.png")
            this.load.image("enemy2", "https://raw.githubusercontent.com/Pieternauw/ULS-Inc/main/Game%20V2/src/resources/Snow%20Sprites/Boss.png");

            this.load.audio("ice", "https://raw.githubusercontent.com/nlaranio/CSResources/main/Jumper/assets/sfx/InGame2Track.mp3");
            this.load.audio("iceBoss1", "https://raw.githubusercontent.com/nlaranio/CSResources/main/Jumper/assets/sfx/QuietIceBoss.mp3");
            this.load.audio("iceBoss2", "https://raw.githubusercontent.com/nlaranio/CSResources/main/Jumper/assets/sfx/MediumIceBoss.mp3");
            this.load.audio("iceBoss3", "https://raw.githubusercontent.com/nlaranio/CSResources/main/Jumper/assets/sfx/Intense_IceBoss.mp3");
        }
        //all file loads
        {
            this.load.spritesheet("dude", "https://raw.githubusercontent.com/Pieternauw/ULS-Inc/main/Game%20V2/src/resources/sprite/Dude.png", {
                frameWidth: 32,
                frameHeight: 48
            });
            this.load.image("bomb", "https://labs.phaser.io/assets/demoscene/blue_ball.png");
            this.load.image("star", "https://raw.githubusercontent.com/Pieternauw/ULS-Inc/main/Game%20V2/src/resources/coin/coin_gold.png");
        }
        //sounds
        {
            //this.load.setBaseURL("https://raw.github.com/Pieternauw/ULS-Inc/tree/main/Game%20V2/src/resources");
            this.load.audio('theme', 'https://raw.githubusercontent.com/nlaranio/CSResources/main/Jumper/assets/sfx/Dungeon-Menu-Track-1.mp3');
            this.load.audio("credits", "https://raw.githubusercontent.com/nlaranio/CSResources/main/Jumper/assets/sfx/Credit_Jazz_Music.mp3");
            this.load.audio('death', 'https://raw.githubusercontent.com/nlaranio/CSResources/main/Jumper/assets/sfx/Death-Screen-Music.mp3');
        }
        //win 
        {
            this.load.image("chest", "https://raw.githubusercontent.com/Pieternauw/ULS-Inc/main/Game%20V2/src/resources/dungeon/OpenChest.png");
            this.load.audio("winner", "https://raw.githubusercontent.com/nlaranio/CSResources/main/Jumper/assets/sfx/Win_1.mp3");

            this.load.image("winFloor", "https://raw.githubusercontent.com/Pieternauw/ULS-Inc/main/Game%20V2/src/resources/dungeon/images.jpg");
            this.load.audio("finalWin", "https://raw.githubusercontent.com/nlaranio/CSResources/main/Jumper/assets/sfx/FINALWIN.mp3");
        }
    },
    create: function() {
        console.log(localStorage.getItem("Health"));
        //floor, add more if a bigger room required
        {
            this.add.image(0, 0, "floor2").setScale(6);
            this.add.image(700, 0, "floor2").setScale(6);
            this.add.image(1400, 0, "floor2").setScale(6);
            this.add.image(2100, 0, "floor2").setScale(6);
            this.add.image(2800, 0, "floor2").setScale(6);
            this.add.image(3500, 0, "floor2").setScale(6);
            this.add.image(4200, 0, "floor2").setScale(6);
            this.add.image(0, 910, "floor2").setScale(6);
            this.add.image(700, 910, "floor2").setScale(6);
            this.add.image(1400, 910, "floor2").setScale(6);
            this.add.image(2100, 910, "floor2").setScale(6);
            this.add.image(2800, 910, "floor2").setScale(6);
            this.add.image(3500, 910, "floor2").setScale(6);
            this.add.image(4200, 910, "floor2").setScale(6);
            this.add.image(0, 1820, "floor2").setScale(6);
            this.add.image(700, 1820, "floor2").setScale(6);
            this.add.image(1400, 1820, "floor2").setScale(6);
            this.add.image(2100, 1820, "floor2").setScale(6);
            this.add.image(2800, 1820, "floor2").setScale(6);
            this.add.image(3500, 1820, "floor2").setScale(6);
            this.add.image(4200, 1820, "floor2").setScale(6);
            this.add.image(0, 2730, "floor2").setScale(6);
            this.add.image(700, 2730, "floor2").setScale(6);
            this.add.image(1400, 2730, "floor2").setScale(6);
            this.add.image(2100, 2730, "floor2").setScale(6);
            this.add.image(2800, 2730, "floor2").setScale(6);
            this.add.image(3500, 2730, "floor2").setScale(6);
            this.add.image(4200, 2730, "floor2").setScale(6);
            this.add.image(0, 3640, "floor2").setScale(6);
            this.add.image(700, 3640, "floor2").setScale(6);
            this.add.image(1400, 3640, "floor2").setScale(6);
            this.add.image(2100, 3640, "floor2").setScale(6);
            this.add.image(2800, 3640, "floor2").setScale(6);
            this.add.image(3500, 3640, "floor2").setScale(6);
            this.add.image(4200, 3640, "floor2").setScale(6);
            this.add.image(0, 4550, "floor2").setScale(6);
            this.add.image(700, 4550, "floor2").setScale(6);
            this.add.image(1400, 4550, "floor2").setScale(6);
            this.add.image(2100, 4550, "floor2").setScale(6);
            this.add.image(2800, 4550, "floor2").setScale(6);
            this.add.image(3500, 4550, "floor2").setScale(6);
            this.add.image(4200, 4550, "floor2").setScale(6);
        }
        //boss room walls
        {
            platforms = this.physics.add.staticGroup();
            platforms.create(0, 0, "wall").setScale(0.25).refreshBody();
            platforms.create(0, 50, "wall").setScale(0.25).refreshBody();
            platforms.create(0, 100, "wall").setScale(0.25).refreshBody();
            platforms.create(0, 150, "wall").setScale(0.25).refreshBody();
            platforms.create(0, 200, "wall").setScale(0.25).refreshBody();
            platforms.create(0, 250, "wall").setScale(0.25).refreshBody();
            platforms.create(0, 300, "wall").setScale(0.25).refreshBody();
            platforms.create(0, 350, "wall").setScale(0.25).refreshBody();
            platforms.create(0, 400, "wall").setScale(0.25).refreshBody();
            platforms.create(0, 450, "wall").setScale(0.25).refreshBody();
            platforms.create(0, 500, "wall").setScale(0.25).refreshBody();
            platforms.create(0, 550, "wall").setScale(0.25).refreshBody();
            platforms.create(0, 600, "wall").setScale(0.25).refreshBody();
            platforms.create(0, 650, "wall").setScale(0.25).refreshBody();
            platforms.create(0, 700, "wall").setScale(0.25).refreshBody();
            platforms.create(0, 750, "wall").setScale(0.25).refreshBody();
            platforms.create(0, 800, "wall").setScale(0.25).refreshBody();
            platforms.create(0, 850, "wall").setScale(0.25).refreshBody();
            platforms.create(0, 900, "wall").setScale(0.25).refreshBody();
            platforms.create(0, 950, "wall").setScale(0.25).refreshBody();
            platforms.create(0, 1000, "wall").setScale(0.25).refreshBody();
            platforms.create(1350, 0, "wall").setScale(0.25).refreshBody();
            platforms.create(1350, 50, "wall").setScale(0.25).refreshBody();
            platforms.create(1350, 100, "wall").setScale(0.25).refreshBody();
            platforms.create(1350, 150, "wall").setScale(0.25).refreshBody();
            platforms.create(1350, 200, "wall").setScale(0.25).refreshBody();
            platforms.create(1350, 250, "wall").setScale(0.25).refreshBody();
            platforms.create(1350, 300, "wall").setScale(0.25).refreshBody();
            platforms.create(1350, 350, "wall").setScale(0.25).refreshBody();
            platforms.create(1350, 400, "wall").setScale(0.25).refreshBody();
            platforms.create(1350, 450, "wall").setScale(0.25).refreshBody();
            platforms.create(1350, 500, "wall").setScale(0.25).refreshBody();
            platforms.create(1350, 550, "wall").setScale(0.25).refreshBody();
            platforms.create(1350, 600, "wall").setScale(0.25).refreshBody();
            platforms.create(1350, 650, "wall").setScale(0.25).refreshBody();
            platforms.create(1350, 700, "wall").setScale(0.25).refreshBody();
            platforms.create(1350, 750, "wall").setScale(0.25).refreshBody();
            platforms.create(1350, 800, "wall").setScale(0.25).refreshBody();
            platforms.create(1350, 850, "wall").setScale(0.25).refreshBody();
            platforms.create(1350, 900, "wall").setScale(0.25).refreshBody();
            platforms.create(1350, 950, "wall").setScale(0.25).refreshBody();
            platforms.create(1350, 1000, "wall").setScale(0.25).refreshBody();
            platforms.create(75, 1000, "wall").setScale(0.25).refreshBody();
            platforms.create(150, 1000, "wall").setScale(0.25).refreshBody();
            platforms.create(225, 1000, "wall").setScale(0.25).refreshBody();
            platforms.create(300, 1000, "wall").setScale(0.25).refreshBody();
            platforms.create(370, 1000, "wall").setScale(0.25).refreshBody();
            platforms.create(450, 1000, "wall").setScale(0.25).refreshBody();
            platforms.create(525, 1000, "wall").setScale(0.25).refreshBody();
            platforms.create(600, 1000, "wall").setScale(0.25).refreshBody();
            platforms.create(675, 1000, "wall").setScale(0.25).refreshBody();
            platforms.create(750, 1000, "wall").setScale(0.25).refreshBody();
            platforms.create(825, 1000, "wall").setScale(0.25).refreshBody();
            platforms.create(900, 1000, "wall").setScale(0.25).refreshBody();
            platforms.create(975, 1000, "wall").setScale(0.25).refreshBody();
            platforms.create(1050, 1000, "wall").setScale(0.25).refreshBody();
            platforms.create(1125, 1000, "wall").setScale(0.25).refreshBody();
            platforms.create(1200, 1000, "wall").setScale(0.25).refreshBody();
            platforms.create(1275, 1000, "wall").setScale(0.25).refreshBody();
            platforms.create(75, 0, "wall").setScale(0.25).refreshBody();
            platforms.create(150, 0, "wall").setScale(0.25).refreshBody();
            platforms.create(225, 0, "wall").setScale(0.25).refreshBody();
            platforms.create(300, 0, "wall").setScale(0.25).refreshBody();
            platforms.create(370, 0, "wall").setScale(0.25).refreshBody();
            platforms.create(450, 0, "wall").setScale(0.25).refreshBody();
            platforms.create(525, 0, "wall").setScale(0.25).refreshBody();
            platforms.create(600, 0, "wall").setScale(0.25).refreshBody();
            platforms.create(675, 0, "wall").setScale(0.25).refreshBody();
            platforms.create(750, 0, "wall").setScale(0.25).refreshBody();
            platforms.create(825, 0, "wall").setScale(0.25).refreshBody();
            platforms.create(900, 0, "wall").setScale(0.25).refreshBody();
            platforms.create(975, 0, "wall").setScale(0.25).refreshBody();
            platforms.create(1050, 0, "wall").setScale(0.25).refreshBody();
            platforms.create(1125, 0, "wall").setScale(0.25).refreshBody();
            platforms.create(1200, 0, "wall").setScale(0.25).refreshBody();
            platforms.create(1275, 0, "wall").setScale(0.25).refreshBody();
        }
        //player code
        player = this.physics.add.sprite(500, 500, "dude").setScale(1.25);
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
            bossLife = 20;
            bossText = " ";
            bossText = this.add.text(150, 700, "Kume Wolf: 20", {
                fontSize: "64px",
                fill: "#000"
            });

            bossText.setColor("White");

            bossText.scrollFactorX = 0;
            bossText.scrollFactorY = 0;
        }
        //player health
        {
            if (localStorage.getItem("Health") < 3) {
                life = 3;
            } else if (localStorage.getItem("Health") < 0) {
                life = 3;
            } else {
                life = localStorage.getItem("Health");
            }


            lifeText = " ";
            lifeText = this.add.text(0, 0, "Hearts: " + life, {
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
            keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
            keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        }
        //timer for boss spawning + boss spawning stuff - testing the boss timer
        {
            //boss movement and other code
            renoB = this.physics.add.group();
            renoBgiB = renoB.create(500, 250, "enemy2").setScale(0.75);
            renoBgiB.setBounce(0.5);
        }
        //boss hitting player
        {
            this.physics.add.collider(renoB, platforms);
            this.physics.add.collider(player, renoB, hitMuk, null, this);

            function hitMuk(player, muk) {
                player.setTint(0xff0000);
                player.anims.play("turn");
                player.body.enable = false;
                this.time.addEvent({
                    delay: 500,
                    loop: false,
                    callback: () => {
                        life--;
                        lifeText.setText("Hearts: " + life);
                        if (life <= 0) {
                            this.scene.start("Death");
                            this.boss1Sound.stop();
                            this.boss2Sound.stop();
                            this.boss3Sound.stop();
                            localStorage.setItem("Health", 3);
                        }
                        this.time.addEvent({
                            delay: 500,
                            loop: false,
                            callback: () => {
                                player.clearTint();
                            }
                        });
                    }
                });
                this.time.addEvent({
                    delay: 200,
                    loop: false,
                    callback: () => {
                        renoBgiB.setPosition(Phaser.Math.Between(100, 1100), Phaser.Math.Between(100, 900));
                        renoBgiB.setVelocity(0, 0);
                        player.body.enable = true;
                    }
                })
            }
        }
        //attack
        {
            x = player.body.position.x;
            y = player.body.position.y;

            attack = this.physics.add.group();

            attack1 = attack.create(x + 20, y + 10, "bomb").setScale(3);
            attack1.visible = false;
        }
        //collision of attacks and boss
        {
            //look back at bomb creating functions for how this was done idk why it isn't creating a collider
            //bomb function doesn't help this is exactly the same
            this.physics.add.collider(renoB, attack, attackMuks, null, this);
            attack1.body.enable = false;

            function attackMuks(renoB, attack) {
                renoB.setTint(0xff0000);
                attack.setTint(0xff0000);
                attack.setVelocity(0, 0);
                this.time.addEvent({
                    delay: 100,
                    callback: () => {
                        attack.clearTint();
                        renoB.clearTint();
                    }
                });
                bossLife--;
                bossText.setText("renoB giB: " + bossLife);
                if (bossLife <= 0) {
                    this.scene.start("Win2");
                    this.boss1Sound.stop();
                    this.boss2Sound.stop();
                    this.boss3Sound.stop();
                }
            }
        }
        //random placement of boss
        {
            bossMove = this.time.addEvent({
                delay: 2500,
                loop: true,
                callback: () => {
                    renoBgiB.setPosition(Phaser.Math.Between(100, 1100), Phaser.Math.Between(100, 900));
                    //renoBgiB.setVelocity(Phaser.Math.Between(-100, 100), Phaser.Math.Between(-100, 100));
                }
            });
            if (bossLife == 0) {
                bossMove.remove();
            }
        }
        //special attack (for boss scene this is just test)
        {
            //special attack is a bigger attack requiring coins
            attack2 = attack.create(x + 20, y + 10, "bomb").setScale(5);
            attack2.visible = false;
            attack2.body.enable = false;
            score = localStorage.getItem("Score");
        }
        //score
        {
            scoreText = ' ';
            scoreText = this.add.text(0, 25, "score: " + score, {
                fontSize: "32px",
                fill: "#000"
            });
            //color for scoreText
            scoreText.setColor("white");
            scoreText.scrollFactorX = 0;
            scoreText.scrollFactorY = 0;
        }
        //audio
        {
            this.boss1Sound = this.sound.add('iceBoss1');
            this.boss1Sound.play({
                mute: false,
                volume: 1,
                rate: 1,
                detune: 0,
                seek: 0,
                loop: true,
                delay: 0
            });
        } //Audio 1
        {
            this.boss2Sound = this.sound.add('iceBoss2');
            this.boss2Sound.play({
                mute: false,
                volume: 1,
                rate: 1,
                detune: 0,
                seek: 0,
                loop: true,
                delay: 0
            });
        } //Audio 2
        {
            this.boss3Sound = this.sound.add('iceBoss3');
            this.boss3Sound.play({
                mute: false,
                volume: 1,
                rate: 1,
                detune: 0,
                seek: 0,
                loop: true,
                delay: 0
            });
        } //Audio 3
        bossStage = 1;
        this.boss2Sound.stop();
        this.boss3Sound.stop();
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
            if (Phaser.Input.Keyboard.JustDown(keyS)) {
                attack1.body.enable = true;
                attack1.setPosition(x + 20, y + 20);
                attack1.visible = true;
                this.time.addEvent({
                    delay: 20,
                    loop: false,
                    callback: () => {
                        attack1.body.enable = false;
                    }
                });
                this.time.addEvent({
                    delay: 500,
                    loop: false,
                    callback: () => {
                        attack1.visible = false;
                    }
                });
                console.log("space");
                this.time.addEvent({
                    delay: 500,
                })
            }
        }
        //special attack 
        {
            if (score >= 30) {
                if (Phaser.Input.Keyboard.JustDown(keyE)) {
                    attack2.setPosition(x + 20, y + 20);
                    attack2.body.enable = true;
                    attack2.visible = true;
                    score = score - 30;
                    scoreText.setText("Score: " + score);
                    this.time.addEvent({
                        delay: 20,
                        loop: false,
                        callback: () => {
                            attack2.body.enable = false;
                        }
                    });
                    this.time.addEvent({
                        delay: 500,
                        loop: false,
                        callback: () => {
                            attack2.visible = false;
                        }
                    });
                }
            }
        }
        //Audio Switches
        {
            if (bossLife < 15 && bossStage == 1) {
                this.boss2Sound.play();
                this.boss1Sound.stop();
                bossStage = 2;
            } else if (bossLife < 7 && bossStage == 2) {
                this.boss3Sound.play();
                this.boss2Sound.stop();
                bossStage = 3;
            }
        }
        localStorage.setItem("Health", life);
    }
});