var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};
//creates var for game in console log
var game = new Phaser.Game(config);
/*
 *creates function for preloaded files to be used in game
 */
function preload() {
  //this.load.setBaseURL("https://labs.phaser.io/assets");
  this.load.image("floor", "https://images.creativemarket.com/0.1.0/ps/120087/910/607/m1/fpnw/wm0/stonefloor001_large-.jpg?1401477523&s=aeb8c8fbad2e06ac22344908c9ad2c9e");
  this.load.image("ground", "https://labs.phaser.io/assets/sets/objects/platform3.png");
  this.load.image("star", "https://labs.phaser.io/assets/demoscene/star3.png");
  this.load.image("bomb", "https://labs.phaser.io/assets/demoscene/blue_ball.png");
  this.load.spritesheet("dude", "https://labs.phaser.io/assets/sprites/dude.png", {
    frameWidth: 32,
    frameHeight: 48
  });
}
/*
 *creates function to create new features in the game
 */
function create() {
  //adds image for background
  this.add.image(400, 300, "floor");
  //creates platforms
  platforms = this.physics.add.staticGroup();
  platforms.create(400, 568, "ground").setScale(2).refreshBody();
  platforms.create(600, 400, "ground");
  platforms.create(50, 250, "ground");
  platforms.create(750, 220, "ground");
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
  stars.children.iterate(function (child) {
    //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
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
      stars.children.iterate(function (child) {
        child.enableBody(true, child.x, 0, true, true);
      });
      //creates bombs at random locations with properties
      var x =
        player.x < 400
          ? Phaser.Math.Between(400, 800)
          : Phaser.Math.Between(0, 400);
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
      gameOver = true;
      gameOverText.visible = true;
      this.physics.pause();
      player.setTint(0xff0000);
    }
  }
}
/*
 * creates function for updates within the game as it's played
 */
function update(game) {
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
