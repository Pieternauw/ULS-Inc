import Phaser from "../lib/Phaser.js" //https://codepen.io/nauwelaertsp2022/pen/GRMqmGY.js

export default class Game extends Phaser.Scene {
    
    constructor() {
        super('game');
    }
  
    preload() {
        this.load.image("floor", '../resources/dungeon/dungeon-floor.png'); 
        //https://raw.githubusercontent.com/Pieternauw/ULS-Inc/main/Game%20V2/src/resources/dungeon/dungeon-floor.png for testing
        this.load.image("wall", '../resources/dungeon/dungeon-wall.png'); 
        //https://raw.githubusercontent.com/Pieternauw/ULS-Inc/main/Game%20V2/src/resources/dungeon/dungeon-wall.png
        this.load.image("star", "https://labs.phaser.io/assets/demoscene/star3.png");
        this.load.image("bomb", "https://labs.phaser.io/assets/demoscene/blue_ball.png");
        this.load.spritesheet("dude", "https://labs.phaser.io/assets/sprites/dude.png", {
            frameWidth: 32,
            frameHeight: 48
        });
    }
    
    create() {
        //adds image for background
        this.add.image(400, 300, "floor").setScale(2);
        //creates platforms
        platforms = this.physics.add.staticGroup();
        platforms.create(400, 568, "wall").setScale(2).refreshBody();
        platforms.create(600, 400, "wall");
        platforms.create(50, 250, "wall");
        platforms.create(750, 220, "wall");
        //creates player with bounce and collision
        player = this.physics.add.sprite(300, 450, "dude");
        //player.setBounce(0.2);
        player.setCollideWorldBounds(true);
        /*
         * creates movement for characters
         */
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
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });
        //creates multiple stars
        stars.children.iterate(function(child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        });
        //adds physics
        this.physics.add.collider(stars, platforms);
        this.physics.add.overlap(player, stars, collectStar, null, this);
        /*
         *function to collect stars & create bombs
         */
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
                var bomb = bombs.create(x, 16, "bomb");
                bomb.setBounce(1);
                bomb.setCollideWorldBounds(true);
                bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            }
        }
        var score = 0;
        var scoreText;
        scoreText = this.add.text(0, 25, "Score: 0", {
            fontSize: "32px",
            fill: "#000"
        });
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

        var gameOverText;
        gameOverText = this.add.text(
            50,
            300,
            "You're Trash! Hit Enter To Try Again", {
                fontSize: "32px",
                fill: "#000"
            }
        );
        gameOverText.setColor("white");
        gameOverText.visible = false;

        //add physics for bombs
        bombs = this.physics.add.group();
        this.physics.add.collider(bombs, platforms);
        this.physics.add.collider(player, bombs, hitBomb, null, this);
        /*
         *creates function for game over
         */
        function hitBomb(player, bomb) {
            player.setTint(0xff0000);
            player.anims.play("turn");
            life--; //subtracts one from the lifetext, turn into hearts when there's a UI
            lifeText.setText("Hearts: " + life);
            player.clearTint();
            bomb.destroy(); //freezes, find way to ma
            if (life <= 0) {
                gameOver = true;
                gameOverText.visible = true;
                this.physics.pause();
                player.setTint(0xff0000);
            }
        }
        
    }

    update(game) {
        /*
         *function for came controls
         */
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

        if (keyboard.enter.isDown) {
            this.scene.restart();
        }
        
    }
}
