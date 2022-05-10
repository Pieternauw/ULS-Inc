var Title = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "Title" });
    },
    //init: function() {},
    preload: function() {
        //main game loads
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
        this.add.image(400, 400, "floor");

        var title;
        var title2;
        var Start;
        var pp;

        title = this.add.text(215, 125, "Dungeon", {
            fontSize: "100px",
            fill: "#000"
        })
        title.setColor("White");

        title2 = this.add.text(250, 225, "Raider", {
            fontSize: "100px",
            fill: "#000"
        })
        title2.setColor("White");

        Start = this.add.text(200, 400, "Hit Enter To Start Game", {
            fontSize: "32px",
            fill: "#000"
        })
        Start.setColor("White");

        pp = this.add.text(340, 550, "©ULS Inc", {
            fontSize: "32px",
            fill: "#000"
        })
        pp.setColor("White");

        cursors = this.input.keyboard.createCursorKeys();
        keyboard = this.input.keyboard.addKeys("enter");

        this.themeSound = this.sound.add('theme');
        this.themeSound.play({
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0.25
        });
    },
    update: function() {
        if (keyboard.enter.isDown) {
            this.scene.start("Tutorial");
            this.themeSound.stop();
        }
    }
});