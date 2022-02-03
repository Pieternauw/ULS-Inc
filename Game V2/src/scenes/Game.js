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
        this.load.image("sword-up", "https://raw.githubusercontent.com/Pieternauw/ULS-Inc/main/Game%20V2/src/resources/sword/sword1.png")
        this.load.image("sword-down", "https://raw.githubusercontent.com/Pieternauw/ULS-Inc/main/Game%20V2/src/resources/sword/sworddown.png");
        this.load.image("sword-left", "https://raw.githubusercontent.com/Pieternauw/ULS-Inc/main/Game%20V2/src/resources/sword/swordleft.png");
        this.load.image("sword-right", "https://raw.githubusercontent.com/Pieternauw/ULS-Inc/main/Game%20V2/src/resources/sword/swordright.png");
        this.load.spritesheet("dude", "https://raw.githubusercontent.com/Pieternauw/ULS-Inc/main/Game%20V2/src/resources/sprite/Dude.png", {
            frameWidth: 32,
            frameHeight: 48
        });
    },
    create: function() {
        //adds image for background
        this.add.image(400, 300, "floor").setScale(1.5);
        //creates platforms
        platforms = this.physics.add.staticGroup();
        //floor
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



        //creates player with bounce and collision
        player = this.physics.add.sprite(300, 450, "dude");
        //player.setBounce(0.2);
        player.setCollideWorldBounds(true);

        this.cameras.main.startFollow(player);

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
        //adds physics for player
        this.physics.add.collider(player, platforms);
        //allows cursors for inputs
        cursors = this.input.keyboard.createCursorKeys();
        keyboard = this.input.keyboard.addKeys("enter");
        //creates stars
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
            score += 1;
            scoreText.setText("Coins: " + score);
            if (stars.countActive(true) === 0) {
                stars.children.iterate(function(child){});
                //creates bombs at random locations with properties
                var x =
                    player.x < 400 ?
                    Phaser.Math.Between(400, 800) :
                    Phaser.Math.Between(0, 400);
                var bomb = bombs.create(x, 16, "bomb");
                bomb.setBounce(1);
                bomb.setCollideWorldBounds(true);
                bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            }
        }

        stars2 = this.physics.add.group({
            key: "star",
            repeat: 5,
            setXY: { x: 80, y: 150, stepY: 70 }
        });

        this.physics.add.collider(stars2, platforms);
        this.physics.add.overlap(player, stars2, collectStar2, null, this);

        function collectStar2(player, star2) {
            star2.disableBody(true, true);
            score += 1;
            scoreText.setText("Coins: " + score);
            if (stars2.countActive(true) === 0) {
                stars2.children.iterate(function(child){});
                //creates bombs at random locations with properties
                var x =
                    player.x < 400 ?
                    Phaser.Math.Between(400, 800) :
                    Phaser.Math.Between(0, 400);
                var bomb = bombs.create(x, 16, "bomb");
                bomb.setBounce(1);
                bomb.setCollideWorldBounds(true);
                bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            }
        }

        stars3 = this.physics.add.group({
            key: "star",
            repeat: 9,
            setXY: { x: 80, y: 575, stepX: 70}
        });

        this.physics.add.collider(stars3, platforms);
        this.physics.add.overlap(player, stars3, collectStar3, null, this);

        function collectStar3(player, star3) {
            star3.disableBody(true, true);
            score += 1;
            scoreText.setText("Coins: " + score);
            if (stars3.countActive(true) === 0) {
                stars3.children.iterate(function(child){});
                //creates bombs at random locations with properties
                var x =
                    player.x < 400 ?
                    Phaser.Math.Between(400, 800) :
                    Phaser.Math.Between(0, 400);
                var bomb = bombs.create(x, 16, "bomb");
                bomb.setBounce(1);
                bomb.setCollideWorldBounds(true);
                bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            }
        }

        stars4 = this.physics.add.group({
            key: "star",
            repeat: 5,
            setXY: { x: 715, y: 150, stepY: 70 }
        });

        this.physics.add.collider(stars4, platforms);
        this.physics.add.overlap(player, stars4, collectStar4, null, this);

        function collectStar4(player, star4) {
            star4.disableBody(true, true);
            score += 1;
            scoreText.setText("Coins: " + score);
            if (stars4.countActive(true) === 0) {
                stars4.children.iterate(function(child){});
                //creates bombs at random locations with properties
                var x =
                    player.x < 400 ?
                    Phaser.Math.Between(400, 800) :
                    Phaser.Math.Between(0, 400);
                var bomb = bombs.create(x, 16, "bomb");
                bomb.setBounce(1);
                bomb.setCollideWorldBounds(true);
                bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            }
        }
        
        //creates score counter
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

        //add physics for bombs
        var bombs = this.physics.add.group();
        this.physics.add.collider(bombs, platforms);
        this.physics.add.collider(player, bombs, hitBomb, null, this);

        function hitBomb(player, bomb) {
            player.setTint(0xff0000);
            player.anims.play("turn");
            life--; //subtracts one from the lifetext, turn into hearts when there's a UI
            lifeText.setText("Hearts: " + life);
            player.clearTint();
            bomb.destroy(); //freezes, find way to ma
            if (life <= 0) {
                this.scene.start("Death")
            }
        }

        keyboard = this.input.keyboard.addKeys("space");
        if (keyboard.space.isDown) {
            sword = this.add.image(x, y, "sword-down");
        }
    },
    update: function(game) {
        if (cursors.left.isDown) {
            player.setVelocityX(-200);
            player.setVelocityY(0);
            player.anims.play("left", true);
            localStorage.setItem("Direction", 1)
        } else if (cursors.right.isDown) {
            player.setVelocityX(200);
            player.setVelocityY(0);
            player.anims.play("right", true);
            localStorage.setItem("Direction", 2)
        } else if (cursors.up.isDown) {
            player.setVelocityY(-200);
            localStorage.setItem("Direction", 3)
        } else if (cursors.down.isDown) {
            player.setVelocityY(200);
            localStorage.setItem("Direction", 4)
        } else {
            player.setVelocity(0);
            player.anims.play("turn");
        }
        storage = localStorage.getItem("Direction");
        x = player.body.position.x;
        y = player.body.position.y;
        console.log(storage);
    }
});
