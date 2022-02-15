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
        this.load.image("star", "https://raw.githubusercontent.com/Pieternauw/ULS-Inc/main/Game%20V2/src/resources/coin/coin_gold.png");
        this.load.image("bomb", "https://labs.phaser.io/assets/demoscene/blue_ball.png");
        this.load.spritesheet("dude", "https://raw.githubusercontent.com/Pieternauw/ULS-Inc/main/Game%20V2/src/resources/sprite/Dude.png", {
            frameWidth: 32,
            frameHeight: 48
        });
    },
    create: function() {
        //adds image for background
        {
            this.add.image(0, 0, "floor").setScale(1.5);
            this.add.image(700, 0, "floor").setScale(1.5);
            this.add.image(1400, 0, "floor").setScale(1.5);
            this.add.image(2100, 0, "floor").setScale(1.5);
            this.add.image(2800, 0, "floor").setScale(1.5);
            this.add.image(3500, 0, "floor").setScale(1.5);
            this.add.image(4200, 0, "floor").setScale(1.5);
            this.add.image(0, 910, "floor").setScale(1.5);
            this.add.image(700, 910, "floor").setScale(1.5);
            this.add.image(1400, 910, "floor").setScale(1.5);
            this.add.image(2100, 910, "floor").setScale(1.5);
            this.add.image(2800, 910, "floor").setScale(1.5);
            this.add.image(3500, 910, "floor").setScale(1.5);
            this.add.image(4200, 910, "floor").setScale(1.5);
            this.add.image(0, 1820, "floor").setScale(1.5);
            this.add.image(700, 1820, "floor").setScale(1.5);
            this.add.image(1400, 1820, "floor").setScale(1.5);
            this.add.image(2100, 1820, "floor").setScale(1.5);
            this.add.image(2800, 1820, "floor").setScale(1.5);
            this.add.image(3500, 1820, "floor").setScale(1.5);
            this.add.image(4200, 1820, "floor").setScale(1.5);
            this.add.image(0, 2730, "floor").setScale(1.5);
            this.add.image(700, 2730, "floor").setScale(1.5);
            this.add.image(1400, 2730, "floor").setScale(1.5);
            this.add.image(2100, 2730, "floor").setScale(1.5);
            this.add.image(2800, 2730, "floor").setScale(1.5);
            this.add.image(3500, 2730, "floor").setScale(1.5);
            this.add.image(4200, 2730, "floor").setScale(1.5);
            this.add.image(0, 3640, "floor").setScale(1.5);
            this.add.image(700, 3640, "floor").setScale(1.5);
            this.add.image(1400, 3640, "floor").setScale(1.5);
            this.add.image(2100, 3640, "floor").setScale(1.5);
            this.add.image(2800, 3640, "floor").setScale(1.5);
            this.add.image(3500, 3640, "floor").setScale(1.5);
            this.add.image(4200, 3640, "floor").setScale(1.5);
            this.add.image(0, 4550, "floor").setScale(1.5);
            this.add.image(700, 4550, "floor").setScale(1.5);
            this.add.image(1400, 4550, "floor").setScale(1.5);
            this.add.image(2100, 4550, "floor").setScale(1.5);
            this.add.image(2800, 4550, "floor").setScale(1.5);
            this.add.image(3500, 4550, "floor").setScale(1.5);
            this.add.image(4200, 4550, "floor").setScale(1.5);
        }
        //creates platforms physics
        platforms = this.physics.add.staticGroup();
        //creates platforms
        { //top left room (1,1)
            //floor
            platforms.create(0, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(75, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(150, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(225, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(300, 650, "ground").setScale(0.25).refreshBody();
            //platforms.create(375, 650, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor
            //platforms.create(400, 650, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor  
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
            platforms.create(0, 350, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 400, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 450, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 525, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 600, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 675, "ground").setScale(0.25).refreshBody();
            //top side (done)
            platforms.create(75, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(150, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(225, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(300, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(375, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(425, 0, "ground").setScale(0.25).refreshBody();
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
            //top middle room #1 (2,1)
            //floor
            platforms.create(800, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(875, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(950, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(1025, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(1100, 650, "ground").setScale(0.25).refreshBody();
            //platforms.create(1175, 650, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor
            //platforms.create(1200, 650, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor  
            platforms.create(1275, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(1325, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(1400, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(1475, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(1550, 650, "ground").setScale(0.25).refreshBody();
            //top side (done)
            platforms.create(875, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(950, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(1025, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(1100, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(1175, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(1225, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(1275, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(1325, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(1400, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(1475, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(1550, 0, "ground").setScale(0.25).refreshBody();
            //right side (done)
            platforms.create(1600, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 75, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 150, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 225, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 275, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 450, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 525, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 600, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 675, "ground").setScale(0.25).refreshBody();
            //top middle room #2 (3,1)
            //floor
            platforms.create(1600, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(1675, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(1750, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(1825, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(1900, 650, "ground").setScale(0.25).refreshBody();
            //platforms.create(1975, 650, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor
            //platforms.create(2000, 650, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor  
            platforms.create(2075, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(2125, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(2200, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(2275, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(2350, 650, "ground").setScale(0.25).refreshBody();
            //top side (done)
            platforms.create(1675, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(1750, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(1825, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(1900, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(1975, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(2025, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(2075, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(2125, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(2200, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(2275, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(2350, 0, "ground").setScale(0.25).refreshBody();
            //right side (done)
            platforms.create(2400, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 75, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 150, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 225, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 275, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 450, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 525, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 600, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 675, "ground").setScale(0.25).refreshBody();
            //top middle room #3 (4,1)
            //floor
            platforms.create(2400, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(2475, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(2550, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(2625, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(2700, 650, "ground").setScale(0.25).refreshBody();
            //platforms.create(2775, 650, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor
            //platforms.create(2800, 650, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor  
            platforms.create(2875, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(2925, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(3000, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(3075, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(3150, 650, "ground").setScale(0.25).refreshBody();
            //top side (done)
            platforms.create(2475, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(2550, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(2625, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(2700, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(2775, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(2825, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(2875, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(2925, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(3000, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(3075, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(3150, 0, "ground").setScale(0.25).refreshBody();
            //right side (done)
            platforms.create(3200, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 75, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 150, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 225, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 275, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 450, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 525, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 600, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 675, "ground").setScale(0.25).refreshBody();
            //right top room (5,1)
            //floor
            platforms.create(3200, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(3275, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(3350, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(3425, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(3500, 650, "ground").setScale(0.25).refreshBody();
            //platforms.create(3575, 650, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor
            //platforms.create(3600, 650, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor  
            platforms.create(3675, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(3725, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(3800, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(3875, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(3950, 650, "ground").setScale(0.25).refreshBody();
            //top side (done)
            platforms.create(3275, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(3350, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(3425, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(3500, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(3575, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(3625, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(3675, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(3725, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(3800, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(3875, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(3950, 0, "ground").setScale(0.25).refreshBody();
            //right side (done)
            platforms.create(4000, 0, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 75, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 150, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 225, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 275, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 325, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 400, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 450, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 525, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 600, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 675, "ground").setScale(0.25).refreshBody();
            //left side room #1 (1,2)
            //floor
            platforms.create(0, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(75, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(150, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(225, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(300, 1300, "ground").setScale(0.25).refreshBody();
            //platforms.create(375, 1450, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor
            //platforms.create(400, 1450, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor  
            platforms.create(475, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(525, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(600, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(675, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(750, 1300, "ground").setScale(0.25).refreshBody();
            //left side (done)
            platforms.create(0, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 725, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 800, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 875, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 925, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 1000, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 1050, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 1100, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 1175, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 1250, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 1325, "ground").setScale(0.25).refreshBody();
            //right side (done)
            platforms.create(800, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 725, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 800, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 875, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 925, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 1100, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 1175, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 1250, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 1325, "ground").setScale(0.25).refreshBody();
            //left side room #2 (1,3)
            //floor
            platforms.create(0, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(75, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(150, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(225, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(300, 1950, "ground").setScale(0.25).refreshBody();
            //platforms.create(375, 1950, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor
            //platforms.create(400, 1950, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor  
            platforms.create(475, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(525, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(600, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(675, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(750, 1950, "ground").setScale(0.25).refreshBody();
            //left side (done)
            platforms.create(0, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 1375, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 1450, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 1525, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 1575, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 1650, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 1700, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 1750, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 1825, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 1900, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 1975, "ground").setScale(0.25).refreshBody();
            //right side (done)
            platforms.create(800, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 1375, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 1450, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 1525, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 1575, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 1750, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 1825, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 1900, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 1975, "ground").setScale(0.25).refreshBody();
            //left side room #3 (1,4)
            //floor
            platforms.create(0, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(75, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(150, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(225, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(300, 2600, "ground").setScale(0.25).refreshBody();
            //platforms.create(375, 2600, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor
            //platforms.create(400, 2600, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor  
            platforms.create(475, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(525, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(600, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(675, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(750, 2600, "ground").setScale(0.25).refreshBody();
            //left side (done)
            platforms.create(0, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 2025, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 2100, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 2175, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 2225, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 2300, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 2350, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 2400, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 2475, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 2550, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 2625, "ground").setScale(0.25).refreshBody();
            //right side (done)
            platforms.create(800, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 2025, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 2100, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 2175, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 2225, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 2400, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 2475, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 2550, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 2625, "ground").setScale(0.25).refreshBody();
            //bottom left corner room (1,5)
            //floor
            platforms.create(0, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(75, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(150, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(225, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(300, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(375, 3250, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor
            platforms.create(400, 3250, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor  
            platforms.create(475, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(525, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(600, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(675, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(750, 3250, "ground").setScale(0.25).refreshBody();
            //left side (done)
            platforms.create(0, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 2675, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 2750, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 2825, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 2875, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 2950, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 3000, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 3050, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 3125, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 3200, "ground").setScale(0.25).refreshBody();
            platforms.create(0, 3250, "ground").setScale(0.25).refreshBody();
            //right side (done)
            platforms.create(800, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 2675, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 2750, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 2825, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 2875, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 3050, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 3125, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 3200, "ground").setScale(0.25).refreshBody();
            platforms.create(800, 3250, "ground").setScale(0.25).refreshBody();
            //bottom middle room #1 (start of bottom) (2,5)
            //floor
            platforms.create(800, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(875, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(950, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(1025, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(1100, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(1175, 3250, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor
            platforms.create(1200, 3250, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor  
            platforms.create(1275, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(1325, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(1400, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(1475, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(1550, 3250, "ground").setScale(0.25).refreshBody();
            //right side (done)
            platforms.create(2400, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 2675, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 2750, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 2825, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 2875, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 3050, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 3125, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 3200, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 3250, "ground").setScale(0.25).refreshBody();
            //bottom middle room #2 (3,5)
            //floor
            platforms.create(1600, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(1675, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(1750, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(1825, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(1900, 3250, "ground").setScale(0.25).refreshBody();
            //platforms.create(1975, 3250, "ground").setScale(0.25).refreshBody();
            //platforms.create(2000, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(2075, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(2125, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(2200, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(2275, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(2350, 3250, "ground").setScale(0.25).refreshBody();
            //right side (done)
            platforms.create(1600, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 2675, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 2750, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 2825, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 2875, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 3050, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 3125, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 3200, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 3250, "ground").setScale(0.25).refreshBody();
            //bottom middle room #3 (4,5)
            //floor
            platforms.create(2400, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(2475, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(2550, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(2625, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(2700, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(2775, 3250, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor
            platforms.create(2800, 3250, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor  
            platforms.create(2875, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(2925, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(3000, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(3075, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(3150, 3250, "ground").setScale(0.25).refreshBody();
            //right side (done)
            platforms.create(3200, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 2675, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 2750, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 2825, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 2875, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 3050, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 3125, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 3200, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 3250, "ground").setScale(0.25).refreshBody();
            //right bottom room (5,5)
            //floor
            platforms.create(3200, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(3275, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(3350, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(3425, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(3500, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(3575, 3250, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor
            platforms.create(3600, 3250, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor  
            platforms.create(3675, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(3725, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(3800, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(3875, 3250, "ground").setScale(0.25).refreshBody();
            platforms.create(3950, 3250, "ground").setScale(0.25).refreshBody();
            //right side (done)
            platforms.create(4000, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 2675, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 2750, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 2825, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 2875, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 2925, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 3000, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 3050, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 3125, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 3200, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 3250, "ground").setScale(0.25).refreshBody();
            //(start of right side rooms)
            //right side room #1 (5,2)
            //floor
            platforms.create(3200, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(3275, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(3350, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(3425, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(3500, 1300, "ground").setScale(0.25).refreshBody();
            //platforms.create(375, 1450, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor
            //platforms.create(400, 1450, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor  
            platforms.create(3675, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(3725, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(3800, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(3875, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(3950, 1300, "ground").setScale(0.25).refreshBody();
            //right side (done)
            platforms.create(4000, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 725, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 800, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 875, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 925, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 1000, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 1050, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 1100, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 1175, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 1250, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 1325, "ground").setScale(0.25).refreshBody();
            //right side room #2 (5,3)
            //floor
            platforms.create(3200, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(3275, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(3350, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(3400, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(3475, 1950, "ground").setScale(0.25).refreshBody();
            //platforms.create(375, 1950, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor
            //platforms.create(400, 1950, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor  
            platforms.create(3675, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(3725, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(3800, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(3875, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(3950, 1950, "ground").setScale(0.25).refreshBody();
            //right side (done)
            platforms.create(4000, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 1375, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 1450, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 1525, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 1575, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 1650, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 1700, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 1750, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 1825, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 1900, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 1975, "ground").setScale(0.25).refreshBody();
            //right side room #3 (5,4)
            //floor
            platforms.create(3200, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(3275, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(3350, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(3425, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(3500, 2600, "ground").setScale(0.25).refreshBody();
            //platforms.create(375, 2600, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor
            //platforms.create(400, 2600, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor  
            platforms.create(3675, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(3725, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(3800, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(3875, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(3950, 2600, "ground").setScale(0.25).refreshBody();
            //right side (done)
            platforms.create(4000, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 2025, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 2100, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 2175, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 2225, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 2300, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 2350, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 2400, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 2475, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 2550, "ground").setScale(0.25).refreshBody();
            platforms.create(4000, 2625, "ground").setScale(0.25).refreshBody();
            //right side room #1 (4,2)
            //floor
            platforms.create(2400, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(2475, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(2550, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(2625, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(2700, 1300, "ground").setScale(0.25).refreshBody();
            //platforms.create(375, 1450, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor
            //platforms.create(400, 1450, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor  
            platforms.create(2875, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(2925, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(3000, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(3075, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(3150, 1300, "ground").setScale(0.25).refreshBody();
            //right side (done)
            platforms.create(3200, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 725, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 800, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 875, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 925, "ground").setScale(0.25).refreshBody();
            //platforms.create(3200,1000, "ground").setScale(0.25).refreshBody();
            //platforms.create(3200,1050, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 1100, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 1175, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 1250, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 1325, "ground").setScale(0.25).refreshBody();
            //right side room #2 (4,3)
            //floor
            platforms.create(2400, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(2475, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(2550, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(2625, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(2700, 1950, "ground").setScale(0.25).refreshBody(); //here
            //platforms.create(375, 1950, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor
            //platforms.create(400, 1950, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor  
            platforms.create(2875, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(2925, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(3000, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(3075, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(3150, 1950, "ground").setScale(0.25).refreshBody();
            //right side (done)
            platforms.create(3200, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 1375, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 1450, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 1525, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 1575, "ground").setScale(0.25).refreshBody();
            //platforms.create(3200,1650, "ground").setScale(0.25).refreshBody();
            //platforms.create(3200,1700, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 1750, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 1825, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 1900, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 1975, "ground").setScale(0.25).refreshBody();
            //right side room #3 (4,4)
            //floor
            platforms.create(2400, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(2475, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(2550, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(2625, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(2700, 2600, "ground").setScale(0.25).refreshBody();
            //platforms.create(375, 2600, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor
            //platforms.create(400, 2600, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor  
            platforms.create(2875, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(2925, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(3000, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(3075, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(3150, 2600, "ground").setScale(0.25).refreshBody();
            //right side (done)
            platforms.create(3200, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 2025, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 2100, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 2175, "ground").setScale(0.25).refreshBody();
            //platforms.create(3200,2225, "ground").setScale(0.25).refreshBody();
            //platforms.create(3200,2300, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 2350, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 2400, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 2475, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 2550, "ground").setScale(0.25).refreshBody();
            platforms.create(3200, 2625, "ground").setScale(0.25).refreshBody();
            //right side room #1 (3,2)
            //floor
            platforms.create(1600, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(1675, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(1750, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(1825, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(1900, 1300, "ground").setScale(0.25).refreshBody();
            //platforms.create(375, 1450, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor
            //platforms.create(400, 1450, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor  
            platforms.create(2075, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(2125, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(2200, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(2275, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(2350, 1300, "ground").setScale(0.25).refreshBody();
            //right side (done)
            platforms.create(2400, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 725, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 800, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 875, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 925, "ground").setScale(0.25).refreshBody();
            //platforms.create(3200,1000, "ground").setScale(0.25).refreshBody();
            //platforms.create(3200,1050, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 1100, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 1175, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 1250, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 1325, "ground").setScale(0.25).refreshBody();
            //right side room #2 (3,3)
            //floor
            platforms.create(1600, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(1675, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(1750, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(1825, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(1900, 1950, "ground").setScale(0.25).refreshBody(); //here
            //platforms.create(375, 1950, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor
            //platforms.create(400, 1950, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor  
            platforms.create(2075, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(2125, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(2200, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(2275, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(2350, 1950, "ground").setScale(0.25).refreshBody();
            //right side (done)
            platforms.create(2400, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 1375, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 1450, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 1525, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 1575, "ground").setScale(0.25).refreshBody();
            //platforms.create(3200,1650, "ground").setScale(0.25).refreshBody();
            //platforms.create(3200,1700, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 1750, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 1825, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 1900, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 1975, "ground").setScale(0.25).refreshBody();
            //right side room #3 (3,4)
            //floor
            platforms.create(1600, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(1675, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(1750, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(1825, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(1900, 2600, "ground").setScale(0.25).refreshBody();
            //platforms.create(375, 2600, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor
            //platforms.create(400, 2600, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor  
            platforms.create(2075, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(2125, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(2200, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(2275, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(2350, 2600, "ground").setScale(0.25).refreshBody();
            //right side (done)
            platforms.create(2400, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 2025, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 2100, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 2175, "ground").setScale(0.25).refreshBody();
            //platforms.create(3200,2225, "ground").setScale(0.25).refreshBody();
            //platforms.create(3200,2300, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 2350, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 2400, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 2475, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 2550, "ground").setScale(0.25).refreshBody();
            platforms.create(2400, 2625, "ground").setScale(0.25).refreshBody();
            //right side room #1 (2,2)
            //floor
            platforms.create(800, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(875, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(950, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(1025, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(1100, 1300, "ground").setScale(0.25).refreshBody();
            //platforms.create(375, 1450, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor
            //platforms.create(400, 1450, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor  
            platforms.create(1275, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(1325, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(1400, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(1475, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(1550, 1300, "ground").setScale(0.25).refreshBody();
            //right side (done)
            platforms.create(1600, 650, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 725, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 800, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 875, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 925, "ground").setScale(0.25).refreshBody();
            //platforms.create(3200,1000, "ground").setScale(0.25).refreshBody();
            //platforms.create(3200,1050, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 1100, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 1175, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 1250, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 1325, "ground").setScale(0.25).refreshBody();
            //right side room #2 (2,3)
            //floor
            platforms.create(800, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(875, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(950, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(1025, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(1100, 1950, "ground").setScale(0.25).refreshBody(); //here
            //platforms.create(375, 1950, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor
            //platforms.create(400, 1950, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor  
            platforms.create(1275, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(1325, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(1400, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(1475, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(1550, 1950, "ground").setScale(0.25).refreshBody();
            //right side (done)
            platforms.create(1600, 1300, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 1375, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 1450, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 1525, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 1575, "ground").setScale(0.25).refreshBody();
            //platforms.create(3200,1650, "ground").setScale(0.25).refreshBody();
            //platforms.create(3200,1700, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 1750, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 1825, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 1900, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 1975, "ground").setScale(0.25).refreshBody();
            //right side room #3 (2,4)
            //floor
            platforms.create(800, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(875, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(950, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(1025, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(1100, 2600, "ground").setScale(0.25).refreshBody();
            //platforms.create(375, 2600, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor
            //platforms.create(400, 2600, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor  
            platforms.create(1275, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(1325, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(1400, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(1475, 2600, "ground").setScale(0.25).refreshBody();
            platforms.create(1550, 2600, "ground").setScale(0.25).refreshBody();
            //right side (done)
            platforms.create(1600, 1950, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 2025, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 2100, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 2175, "ground").setScale(0.25).refreshBody();
            //platforms.create(3200,2225, "ground").setScale(0.25).refreshBody();
            //platforms.create(3200,2300, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 2350, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 2400, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 2475, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 2550, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 2625, "ground").setScale(0.25).refreshBody();
            //Boss Room
            platforms.create(1300, 3300, "ground").setScale(0.25).refreshBody();
            platforms.create(1300, 3350, "ground").setScale(0.25).refreshBody();
            platforms.create(1300, 3400, "ground").setScale(0.25).refreshBody();
            platforms.create(1300, 3450, "ground").setScale(0.25).refreshBody();
            platforms.create(1300, 3500, "ground").setScale(0.25).refreshBody();
            platforms.create(1300, 3550, "ground").setScale(0.25).refreshBody();
            platforms.create(1300, 3600, "ground").setScale(0.25).refreshBody();
            platforms.create(1300, 3650, "ground").setScale(0.25).refreshBody();
            platforms.create(1300, 3700, "ground").setScale(0.25).refreshBody();
            platforms.create(1300, 3750, "ground").setScale(0.25).refreshBody();
            platforms.create(1300, 3800, "ground").setScale(0.25).refreshBody();
            platforms.create(1300, 3850, "ground").setScale(0.25).refreshBody();
            platforms.create(1300, 3900, "ground").setScale(0.25).refreshBody();
            platforms.create(1300, 3950, "ground").setScale(0.25).refreshBody();
            platforms.create(1300, 4000, "ground").setScale(0.25).refreshBody();
            platforms.create(1300, 4050, "ground").setScale(0.25).refreshBody();
            platforms.create(1300, 4100, "ground").setScale(0.25).refreshBody();
            platforms.create(1300, 4150, "ground").setScale(0.25).refreshBody();
            platforms.create(1300, 4200, "ground").setScale(0.25).refreshBody();
            platforms.create(1300, 4250, "ground").setScale(0.25).refreshBody();
            platforms.create(1300, 4300, "ground").setScale(0.25).refreshBody();
            platforms.create(2650, 3300, "ground").setScale(0.25).refreshBody();
            platforms.create(2650, 3350, "ground").setScale(0.25).refreshBody();
            platforms.create(2650, 3400, "ground").setScale(0.25).refreshBody();
            platforms.create(2650, 3450, "ground").setScale(0.25).refreshBody();
            platforms.create(2650, 3500, "ground").setScale(0.25).refreshBody();
            platforms.create(2650, 3550, "ground").setScale(0.25).refreshBody();
            platforms.create(2650, 3600, "ground").setScale(0.25).refreshBody();
            platforms.create(2650, 3650, "ground").setScale(0.25).refreshBody();
            platforms.create(2650, 3700, "ground").setScale(0.25).refreshBody();
            platforms.create(2650, 3750, "ground").setScale(0.25).refreshBody();
            platforms.create(2650, 3800, "ground").setScale(0.25).refreshBody();
            platforms.create(2650, 3850, "ground").setScale(0.25).refreshBody();
            platforms.create(2650, 3900, "ground").setScale(0.25).refreshBody();
            platforms.create(2650, 3950, "ground").setScale(0.25).refreshBody();
            platforms.create(2650, 4000, "ground").setScale(0.25).refreshBody();
            platforms.create(2650, 4050, "ground").setScale(0.25).refreshBody();
            platforms.create(2650, 4100, "ground").setScale(0.25).refreshBody();
            platforms.create(2650, 4150, "ground").setScale(0.25).refreshBody();
            platforms.create(2650, 4200, "ground").setScale(0.25).refreshBody();
            platforms.create(2650, 4250, "ground").setScale(0.25).refreshBody();
            platforms.create(2650, 4300, "ground").setScale(0.25).refreshBody();
            platforms.create(1375, 4300, "ground").setScale(0.25).refreshBody();
            platforms.create(1450, 4300, "ground").setScale(0.25).refreshBody();
            platforms.create(1525, 4300, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 4300, "ground").setScale(0.25).refreshBody();
            platforms.create(1675, 4300, "ground").setScale(0.25).refreshBody();
            platforms.create(1750, 4300, "ground").setScale(0.25).refreshBody();
            platforms.create(1825, 4300, "ground").setScale(0.25).refreshBody();
            platforms.create(1900, 4300, "ground").setScale(0.25).refreshBody();
            platforms.create(1975, 4300, "ground").setScale(0.25).refreshBody();
            platforms.create(2050, 4300, "ground").setScale(0.25).refreshBody();
            platforms.create(2125, 4300, "ground").setScale(0.25).refreshBody();
            platforms.create(2200, 4300, "ground").setScale(0.25).refreshBody();
            platforms.create(2275, 4300, "ground").setScale(0.25).refreshBody();
            platforms.create(2350, 4300, "ground").setScale(0.25).refreshBody();
            platforms.create(2425, 4300, "ground").setScale(0.25).refreshBody();
            platforms.create(2500, 4300, "ground").setScale(0.25).refreshBody();
            platforms.create(2575, 4300, "ground").setScale(0.25).refreshBody();
            //Random Walls
            platforms.create(2125, 4000, "ground").setScale(0.25).refreshBody();
            platforms.create(2200, 4000, "ground").setScale(0.25).refreshBody();
            platforms.create(2275, 4000, "ground").setScale(0.25).refreshBody();
            platforms.create(2350, 4000, "ground").setScale(0.25).refreshBody();
            platforms.create(2425, 4000, "ground").setScale(0.25).refreshBody();
            platforms.create(2500, 4000, "ground").setScale(0.25).refreshBody();
            //Random Walls
            platforms.create(2125, 3550, "ground").setScale(0.25).refreshBody();
            platforms.create(2200, 3550, "ground").setScale(0.25).refreshBody();
            platforms.create(2275, 3550, "ground").setScale(0.25).refreshBody();
            platforms.create(2350, 3550, "ground").setScale(0.25).refreshBody();
            platforms.create(2425, 3550, "ground").setScale(0.25).refreshBody();
            platforms.create(2500, 3550, "ground").setScale(0.25).refreshBody();
            //Random Walls
            platforms.create(1450, 4000, "ground").setScale(0.25).refreshBody();
            platforms.create(1525, 4000, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 4000, "ground").setScale(0.25).refreshBody();
            platforms.create(1675, 4000, "ground").setScale(0.25).refreshBody();
            platforms.create(1750, 4000, "ground").setScale(0.25).refreshBody();
            platforms.create(1825, 4000, "ground").setScale(0.25).refreshBody();
            //Random Walls
            platforms.create(1450, 3550, "ground").setScale(0.25).refreshBody();
            platforms.create(1525, 3550, "ground").setScale(0.25).refreshBody();
            platforms.create(1600, 3550, "ground").setScale(0.25).refreshBody();
            platforms.create(1675, 3550, "ground").setScale(0.25).refreshBody();
            platforms.create(1750, 3550, "ground").setScale(0.25).refreshBody();
            platforms.create(1825, 3550, "ground").setScale(0.25).refreshBody();
        }
        //creates player
        {
            player = this.physics.add.sprite(400, 400, "dude").setScale(1.25);
            //player.setBounce(0.2);
            //player.setCollideWorldBounds(true);      
            this.cameras.main.startFollow(player);
        }
        //this.anims.create
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
        //creates stars for room

        {
            stars = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 100, y: 80, stepX: 200 }
            });
            //creates multiple stars
            stars.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            //adds physics
            this.physics.add.collider(stars, platforms);
            this.physics.add.overlap(player, stars, collectStar, null, this)

            function collectStar(player, star) {
                star.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars.countActive(true) === 0) {
                    stars.children.iterate(function(child) {});
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
                repeat: 1,
                setXY: { x: 100, y: 220, stepY: 225 }
            });
            //creates multiple stars
            stars2.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars2, platforms);
            this.physics.add.overlap(player, stars2, collectStar2, null, this);

            function collectStar2(player, star2) {
                star2.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars2.countActive(true) === 0) {
                    stars2.children.iterate(function(child) {});
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
                repeat: 3,
                setXY: { x: 100, y: 575, stepX: 200 }
            });
            //creates multiple stars
            stars3.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars3, platforms);
            this.physics.add.overlap(player, stars3, collectStar3, null, this);

            function collectStar3(player, star3) {
                star3.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars3.countActive(true) === 0) {
                    stars3.children.iterate(function(child) {});
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
                repeat: 1,
                setXY: { x: 700, y: 220, stepY: 225 }
            });
            //creates multiple stars
            stars4.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars4, platforms);
            this.physics.add.overlap(player, stars4, collectStar4, null, this);

            function collectStar4(player, star4) {
                star4.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars4.countActive(true) === 0) {
                    stars4.children.iterate(function(child) {});
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

            stars5 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 900, y: 80, stepX: 200 }
            });
            //creates multiple stars
            stars5.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            //adds physics
            this.physics.add.collider(stars5, platforms);
            this.physics.add.overlap(player, stars5, collectStar5, null, this)

            function collectStar5(player, star5) {
                star5.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars5.countActive(true) === 0) {
                    stars5.children.iterate(function(child) {});
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

            stars6 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 900, y: 220, stepY: 225 }
            });
            //creates multiple stars
            stars6.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars6, platforms);
            this.physics.add.overlap(player, stars6, collectStar6, null, this);

            function collectStar6(player, star6) {
                star6.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars6.countActive(true) === 0) {
                    stars6.children.iterate(function(child) {});
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

            stars7 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 900, y: 575, stepX: 200 }
            });
            //creates multiple stars
            stars7.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars7, platforms);
            this.physics.add.overlap(player, stars7, collectStar7, null, this);

            function collectStar7(player, star7) {
                star7.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars7.countActive(true) === 0) {
                    stars7.children.iterate(function(child) {});
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

            stars8 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 1500, y: 220, stepY: 225 }
            });
            //creates multiple stars
            stars8.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars8, platforms);
            this.physics.add.overlap(player, stars8, collectStar8, null, this);

            function collectStar8(player, star8) {
                star8.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars8.countActive(true) === 0) {
                    stars8.children.iterate(function(child) {});
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

            stars9 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 1700, y: 80, stepX: 200 }
            });
            //creates multiple stars
            stars9.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            //adds physics
            this.physics.add.collider(stars9, platforms);
            this.physics.add.overlap(player, stars9, collectStar9, null, this)

            function collectStar9(player, star9) {
                star9.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars9.countActive(true) === 0) {
                    stars9.children.iterate(function(child) {});
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

            stars10 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 1700, y: 220, stepY: 225 }
            });
            //creates multiple stars
            stars10.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars10, platforms);
            this.physics.add.overlap(player, stars10, collectStar10, null, this);

            function collectStar10(player, star10) {
                star10.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars10.countActive(true) === 0) {
                    stars10.children.iterate(function(child) {});
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

            stars11 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 1700, y: 575, stepX: 200 }
            });
            //creates multiple stars
            stars11.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars11, platforms);
            this.physics.add.overlap(player, stars11, collectStar11, null, this);

            function collectStar11(player, star11) {
                star11.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars11.countActive(true) === 0) {
                    stars11.children.iterate(function(child) {});
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

            stars12 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 2300, y: 220, stepY: 225 }
            });
            //creates multiple stars
            stars12.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars12, platforms);
            this.physics.add.overlap(player, stars12, collectStar12, null, this);

            function collectStar12(player, star12) {
                star12.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars12.countActive(true) === 0) {
                    stars12.children.iterate(function(child) {});
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

            stars13 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 2500, y: 80, stepX: 200 }
            });
            //creates multiple stars
            stars13.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            //adds physics
            this.physics.add.collider(stars13, platforms);
            this.physics.add.overlap(player, stars13, collectStar13, null, this)

            function collectStar13(player, star13) {
                star13.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars13.countActive(true) === 0) {
                    stars13.children.iterate(function(child) {});
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

            stars14 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 2500, y: 220, stepY: 225 }
            });
            //creates multiple stars
            stars14.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars14, platforms);
            this.physics.add.overlap(player, stars14, collectStar14, null, this);

            function collectStar14(player, star14) {
                star14.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars14.countActive(true) === 0) {
                    stars14.children.iterate(function(child) {});
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

            stars15 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 2500, y: 575, stepX: 200 }
            });
            //creates multiple stars
            stars15.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars15, platforms);
            this.physics.add.overlap(player, stars15, collectStar15, null, this);

            function collectStar15(player, star15) {
                star15.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars15.countActive(true) === 0) {
                    stars15.children.iterate(function(child) {});
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

            stars16 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 3100, y: 220, stepY: 225 }
            });
            //creates multiple stars
            stars16.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars16, platforms);
            this.physics.add.overlap(player, stars16, collectStar16, null, this);

            function collectStar16(player, star16) {
                star16.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars16.countActive(true) === 0) {
                    stars16.children.iterate(function(child) {});
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

            stars17 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 3300, y: 80, stepX: 200 }
            });
            //creates multiple stars
            stars17.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            //adds physics
            this.physics.add.collider(stars17, platforms);
            this.physics.add.overlap(player, stars17, collectStar17, null, this)

            function collectStar17(player, star17) {
                star17.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars17.countActive(true) === 0) {
                    stars17.children.iterate(function(child) {});
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

            stars18 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 3300, y: 220, stepY: 225 }
            });
            //creates multiple stars
            stars18.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars18, platforms);
            this.physics.add.overlap(player, stars18, collectStar18, null, this);

            function collectStar18(player, star18) {
                star18.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars18.countActive(true) === 0) {
                    stars18.children.iterate(function(child) {});
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

            stars19 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 3300, y: 575, stepX: 200 }
            });
            //creates multiple stars
            stars19.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars19, platforms);
            this.physics.add.overlap(player, stars19, collectStar19, null, this);

            function collectStar19(player, star19) {
                star19.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars19.countActive(true) === 0) {
                    stars19.children.iterate(function(child) {});
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

            stars20 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 3900, y: 220, stepY: 225 }
            });
            //creates multiple stars
            stars20.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars20, platforms);
            this.physics.add.overlap(player, stars20, collectStar20, null, this);

            function collectStar20(player, star20) {
                star20.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars20.countActive(true) === 0) {
                    stars20.children.iterate(function(child) {});
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

            stars21 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 100, y: 730, stepX: 200 }
            });
            //creates multiple stars
            stars21.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            //adds physics
            this.physics.add.collider(stars21, platforms);
            this.physics.add.overlap(player, stars21, collectStar21, null, this)

            function collectStar21(player, star21) {
                star21.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars21.countActive(true) === 0) {
                    stars21.children.iterate(function(child) {});
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

            stars22 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 100, y: 870, stepY: 225 }
            });
            //creates multiple stars
            stars22.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars22, platforms);
            this.physics.add.overlap(player, stars22, collectStar22, null, this);

            function collectStar22(player, star22) {
                star22.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars22.countActive(true) === 0) {
                    stars22.children.iterate(function(child) {});
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

            stars23 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 100, y: 1225, stepX: 200 }
            });
            //creates multiple stars
            stars23.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars23, platforms);
            this.physics.add.overlap(player, stars23, collectStar23, null, this);

            function collectStar23(player, star23) {
                star23.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars23.countActive(true) === 0) {
                    stars23.children.iterate(function(child) {});
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

            stars24 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 700, y: 870, stepY: 225 }
            });
            //creates multiple stars
            stars24.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars24, platforms);
            this.physics.add.overlap(player, stars24, collectStar24, null, this);

            function collectStar24(player, star24) {
                star24.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars24.countActive(true) === 0) {
                    stars24.children.iterate(function(child) {});
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

            stars25 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 900, y: 730, stepX: 200 }
            });
            //creates multiple stars
            stars25.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            //adds physics
            this.physics.add.collider(stars25, platforms);
            this.physics.add.overlap(player, stars25, collectStar25, null, this)

            function collectStar25(player, star25) {
                star25.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars25.countActive(true) === 0) {
                    stars25.children.iterate(function(child) {});
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

            stars26 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 900, y: 870, stepY: 225 }
            });
            //creates multiple stars
            stars26.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars26, platforms);
            this.physics.add.overlap(player, stars26, collectStar26, null, this);

            function collectStar26(player, star26) {
                star26.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars26.countActive(true) === 0) {
                    stars26.children.iterate(function(child) {});
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

            stars27 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 900, y: 1225, stepX: 200 }
            });
            //creates multiple stars
            stars27.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars27, platforms);
            this.physics.add.overlap(player, stars27, collectStar27, null, this);

            function collectStar27(player, star27) {
                star27.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars27.countActive(true) === 0) {
                    stars27.children.iterate(function(child) {});
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

            stars28 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 1500, y: 870, stepY: 225 }
            });
            //creates multiple stars
            stars28.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars28, platforms);
            this.physics.add.overlap(player, stars28, collectStar28, null, this);

            function collectStar28(player, star28) {
                star28.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars28.countActive(true) === 0) {
                    stars28.children.iterate(function(child) {});
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

            stars29 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 1700, y: 730, stepX: 200 }
            });
            //creates multiple stars
            stars29.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            //adds physics
            this.physics.add.collider(stars29, platforms);
            this.physics.add.overlap(player, stars29, collectStar29, null, this)

            function collectStar29(player, star29) {
                star29.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars29.countActive(true) === 0) {
                    stars29.children.iterate(function(child) {});
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

            stars30 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 1700, y: 870, stepY: 225 }
            });
            //creates multiple stars
            stars30.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars30, platforms);
            this.physics.add.overlap(player, stars30, collectStar30, null, this);

            function collectStar30(player, star30) {
                star30.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars30.countActive(true) === 0) {
                    stars30.children.iterate(function(child) {});
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

            stars31 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 1700, y: 1225, stepX: 200 }
            });
            //creates multiple stars
            stars31.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars31, platforms);
            this.physics.add.overlap(player, stars31, collectStar31, null, this);

            function collectStar31(player, star31) {
                star31.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars31.countActive(true) === 0) {
                    stars31.children.iterate(function(child) {});
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

            stars32 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 2300, y: 870, stepY: 225 }
            });
            //creates multiple stars
            stars32.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars32, platforms);
            this.physics.add.overlap(player, stars32, collectStar32, null, this);

            function collectStar32(player, star32) {
                star32.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars32.countActive(true) === 0) {
                    stars32.children.iterate(function(child) {});
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

            stars33 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 2500, y: 730, stepX: 200 }
            });
            //creates multiple stars
            stars33.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            //adds physics
            this.physics.add.collider(stars33, platforms);
            this.physics.add.overlap(player, stars33, collectStar33, null, this)

            function collectStar33(player, star33) {
                star33.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars33.countActive(true) === 0) {
                    stars33.children.iterate(function(child) {});
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

            stars34 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 2500, y: 870, stepY: 225 }
            });
            //creates multiple stars
            stars34.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars34, platforms);
            this.physics.add.overlap(player, stars34, collectStar34, null, this);

            function collectStar34(player, star34) {
                star34.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars34.countActive(true) === 0) {
                    stars34.children.iterate(function(child) {});
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

            stars35 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 2500, y: 1225, stepX: 200 }
            });
            //creates multiple stars
            stars35.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars35, platforms);
            this.physics.add.overlap(player, stars35, collectStar35, null, this);

            function collectStar35(player, star35) {
                star35.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars35.countActive(true) === 0) {
                    stars35.children.iterate(function(child) {});
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

            stars36 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 3100, y: 870, stepY: 225 }
            });
            //creates multiple stars
            stars36.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars36, platforms);
            this.physics.add.overlap(player, stars36, collectStar36, null, this);

            function collectStar36(player, star36) {
                star36.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars36.countActive(true) === 0) {
                    stars36.children.iterate(function(child) {});
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

            stars37 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 3300, y: 730, stepX: 200 }
            });
            //creates multiple stars
            stars37.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            //adds physics
            this.physics.add.collider(stars37, platforms);
            this.physics.add.overlap(player, stars37, collectStar37, null, this)

            function collectStar37(player, star37) {
                star37.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars37.countActive(true) === 0) {
                    stars37.children.iterate(function(child) {});
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

            stars38 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 3300, y: 870, stepY: 225 }
            });
            //creates multiple stars
            stars38.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars38, platforms);
            this.physics.add.overlap(player, stars38, collectStar38, null, this);

            function collectStar38(player, star38) {
                star38.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars38.countActive(true) === 0) {
                    stars38.children.iterate(function(child) {});
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

            stars39 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 3300, y: 1225, stepX: 200 }
            });
            //creates multiple stars
            stars39.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars39, platforms);
            this.physics.add.overlap(player, stars39, collectStar39, null, this);

            function collectStar39(player, star39) {
                star39.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars39.countActive(true) === 0) {
                    stars39.children.iterate(function(child) {});
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

            stars40 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 3900, y: 870, stepY: 225 }
            });
            //creates multiple stars
            stars40.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars40, platforms);
            this.physics.add.overlap(player, stars40, collectStar40, null, this);

            function collectStar40(player, star40) {
                star40.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars40.countActive(true) === 0) {
                    stars40.children.iterate(function(child) {});
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

            stars41 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 100, y: 1380, stepX: 200 }
            });
            //creates multiple stars
            stars41.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            //adds physics
            this.physics.add.collider(stars41, platforms);
            this.physics.add.overlap(player, stars41, collectStar41, null, this)

            function collectStar41(player, star41) {
                star41.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars41.countActive(true) === 0) {
                    stars41.children.iterate(function(child) {});
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

            stars42 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 100, y: 1520, stepY: 225 }
            });
            //creates multiple stars
            stars42.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars42, platforms);
            this.physics.add.overlap(player, stars42, collectStar42, null, this);

            function collectStar42(player, star42) {
                star42.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars42.countActive(true) === 0) {
                    stars42.children.iterate(function(child) {});
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

            stars43 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 100, y: 1875, stepX: 200 }
            });
            //creates multiple stars
            stars43.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars43, platforms);
            this.physics.add.overlap(player, stars43, collectStar43, null, this);

            function collectStar43(player, star43) {
                star43.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars43.countActive(true) === 0) {
                    stars43.children.iterate(function(child) {});
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

            stars44 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 700, y: 1520, stepY: 225 }
            });
            //creates multiple stars
            stars44.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars44, platforms);
            this.physics.add.overlap(player, stars44, collectStar44, null, this);

            function collectStar44(player, star44) {
                star44.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars44.countActive(true) === 0) {
                    stars44.children.iterate(function(child) {});
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

            stars45 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 900, y: 1380, stepX: 200 }
            });
            //creates multiple stars
            stars45.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            //adds physics
            this.physics.add.collider(stars45, platforms);
            this.physics.add.overlap(player, stars45, collectStar45, null, this)

            function collectStar45(player, star45) {
                star45.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars45.countActive(true) === 0) {
                    stars45.children.iterate(function(child) {});
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

            stars46 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 900, y: 1520, stepY: 225 }
            });
            //creates multiple stars
            stars46.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars46, platforms);
            this.physics.add.overlap(player, stars46, collectStar46, null, this);

            function collectStar46(player, star46) {
                star46.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars46.countActive(true) === 0) {
                    stars46.children.iterate(function(child) {});
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

            stars47 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 900, y: 1875, stepX: 200 }
            });
            //creates multiple stars
            stars47.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars47, platforms);
            this.physics.add.overlap(player, stars47, collectStar47, null, this);

            function collectStar47(player, star47) {
                star47.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars47.countActive(true) === 0) {
                    stars47.children.iterate(function(child) {});
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

            stars48 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 1500, y: 1520, stepY: 225 }
            });
            //creates multiple stars
            stars48.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars48, platforms);
            this.physics.add.overlap(player, stars48, collectStar48, null, this);

            function collectStar48(player, star48) {
                star48.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars48.countActive(true) === 0) {
                    stars48.children.iterate(function(child) {});
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

            stars49 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 1700, y: 1380, stepX: 200 }
            });
            //creates multiple stars
            stars49.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            //adds physics
            this.physics.add.collider(stars49, platforms);
            this.physics.add.overlap(player, stars49, collectStar49, null, this)

            function collectStar49(player, star49) {
                star49.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars49.countActive(true) === 0) {
                    stars49.children.iterate(function(child) {});
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

            stars50 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 1700, y: 1520, stepY: 225 }
            });
            //creates multiple stars
            stars50.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars50, platforms);
            this.physics.add.overlap(player, stars50, collectStar50, null, this);

            function collectStar50(player, star50) {
                star50.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars50.countActive(true) === 0) {
                    stars50.children.iterate(function(child) {});
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

            stars51 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 1700, y: 1875, stepX: 200 }
            });
            //creates multiple stars
            stars51.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars51, platforms);
            this.physics.add.overlap(player, stars51, collectStar51, null, this);

            function collectStar51(player, star51) {
                star51.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars51.countActive(true) === 0) {
                    stars51.children.iterate(function(child) {});
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

            stars52 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 2300, y: 1520, stepY: 225 }
            });
            //creates multiple stars
            stars52.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars52, platforms);
            this.physics.add.overlap(player, stars52, collectStar52, null, this);

            function collectStar52(player, star52) {
                star52.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars52.countActive(true) === 0) {
                    stars52.children.iterate(function(child) {});
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

            stars53 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 2500, y: 1380, stepX: 200 }
            });
            //creates multiple stars
            stars53.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            //adds physics
            this.physics.add.collider(stars53, platforms);
            this.physics.add.overlap(player, stars53, collectStar53, null, this)

            function collectStar53(player, star53) {
                star53.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars53.countActive(true) === 0) {
                    stars53.children.iterate(function(child) {});
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

            stars54 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 2500, y: 1520, stepY: 225 }
            });
            //creates multiple stars
            stars54.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars54, platforms);
            this.physics.add.overlap(player, stars54, collectStar54, null, this);

            function collectStar54(player, star54) {
                star54.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars54.countActive(true) === 0) {
                    stars54.children.iterate(function(child) {});
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

            stars55 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 2500, y: 1875, stepX: 200 }
            });
            //creates multiple stars
            stars55.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars55, platforms);
            this.physics.add.overlap(player, stars55, collectStar55, null, this);

            function collectStar55(player, star55) {
                star55.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars55.countActive(true) === 0) {
                    stars55.children.iterate(function(child) {});
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

            stars56 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 3100, y: 1520, stepY: 225 }
            });
            //creates multiple stars
            stars56.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars56, platforms);
            this.physics.add.overlap(player, stars56, collectStar56, null, this);

            function collectStar56(player, star56) {
                star56.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars56.countActive(true) === 0) {
                    stars56.children.iterate(function(child) {});
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

            stars57 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 3300, y: 1380, stepX: 200 }
            });
            //creates multiple stars
            stars57.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            //adds physics
            this.physics.add.collider(stars57, platforms);
            this.physics.add.overlap(player, stars57, collectStar57, null, this)

            function collectStar57(player, star57) {
                star57.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars57.countActive(true) === 0) {
                    stars57.children.iterate(function(child) {});
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

            stars58 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 3300, y: 1520, stepY: 225 }
            });
            //creates multiple stars
            stars58.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars58, platforms);
            this.physics.add.overlap(player, stars58, collectStar58, null, this);

            function collectStar58(player, star58) {
                star58.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars58.countActive(true) === 0) {
                    stars58.children.iterate(function(child) {});
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

            stars59 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 3300, y: 1875, stepX: 200 }
            });
            //creates multiple stars
            stars59.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars59, platforms);
            this.physics.add.overlap(player, stars59, collectStar59, null, this);

            function collectStar59(player, star59) {
                star59.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars59.countActive(true) === 0) {
                    stars59.children.iterate(function(child) {});
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

            stars60 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 3900, y: 1520, stepY: 225 }
            });
            //creates multiple stars
            stars60.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars60, platforms);
            this.physics.add.overlap(player, stars60, collectStar60, null, this);

            function collectStar60(player, star60) {
                star60.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars60.countActive(true) === 0) {
                    stars60.children.iterate(function(child) {});
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

            stars61 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 100, y: 2030, stepX: 200 }
            });
            //creates multiple stars
            stars61.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            //adds physics
            this.physics.add.collider(stars61, platforms);
            this.physics.add.overlap(player, stars61, collectStar41, null, this)

            function collectStar61(player, star61) {
                star61.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars61.countActive(true) === 0) {
                    stars61.children.iterate(function(child) {});
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

            stars62 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 100, y: 2170, stepY: 225 }
            });
            //creates multiple stars
            stars62.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars62, platforms);
            this.physics.add.overlap(player, stars62, collectStar62, null, this);

            function collectStar62(player, star62) {
                star62.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars62.countActive(true) === 0) {
                    stars62.children.iterate(function(child) {});
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

            stars63 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 100, y: 2525, stepX: 200 }
            });
            //creates multiple stars
            stars63.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars63, platforms);
            this.physics.add.overlap(player, stars63, collectStar63, null, this);

            function collectStar63(player, star63) {
                star63.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars63.countActive(true) === 0) {
                    stars63.children.iterate(function(child) {});
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

            stars64 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 700, y: 2170, stepY: 225 }
            });
            //creates multiple stars
            stars64.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars64, platforms);
            this.physics.add.overlap(player, stars64, collectStar64, null, this);

            function collectStar64(player, star64) {
                star64.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars64.countActive(true) === 0) {
                    stars64.children.iterate(function(child) {});
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

            stars65 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 900, y: 2030, stepX: 200 }
            });
            //creates multiple stars
            stars65.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            //adds physics
            this.physics.add.collider(stars65, platforms);
            this.physics.add.overlap(player, stars65, collectStar65, null, this)

            function collectStar65(player, star65) {
                star65.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars65.countActive(true) === 0) {
                    stars65.children.iterate(function(child) {});
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

            stars66 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 900, y: 2170, stepY: 225 }
            });
            //creates multiple stars
            stars66.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars66, platforms);
            this.physics.add.overlap(player, stars66, collectStar66, null, this);

            function collectStar66(player, star66) {
                star66.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars66.countActive(true) === 0) {
                    stars66.children.iterate(function(child) {});
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

            stars67 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 900, y: 2525, stepX: 200 }
            });
            //creates multiple stars
            stars67.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars67, platforms);
            this.physics.add.overlap(player, stars67, collectStar67, null, this);

            function collectStar67(player, star67) {
                star67.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars67.countActive(true) === 0) {
                    stars67.children.iterate(function(child) {});
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

            stars68 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 1500, y: 2170, stepY: 225 }
            });
            //creates multiple stars
            stars68.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars68, platforms);
            this.physics.add.overlap(player, stars68, collectStar68, null, this);

            function collectStar68(player, star68) {
                star68.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars68.countActive(true) === 0) {
                    stars68.children.iterate(function(child) {});
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

            stars69 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 1700, y: 2030, stepX: 200 }
            });
            //creates multiple stars
            stars69.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            //adds physics
            this.physics.add.collider(stars69, platforms);
            this.physics.add.overlap(player, stars69, collectStar69, null, this)

            function collectStar69(player, star69) {
                star69.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars69.countActive(true) === 0) {
                    stars69.children.iterate(function(child) {});
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

            stars70 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 1700, y: 2170, stepY: 225 }
            });
            //creates multiple stars
            stars70.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars70, platforms);
            this.physics.add.overlap(player, stars70, collectStar70, null, this);

            function collectStar70(player, star70) {
                star70.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars70.countActive(true) === 0) {
                    stars70.children.iterate(function(child) {});
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

            stars71 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 1700, y: 2525, stepX: 200 }
            });
            //creates multiple stars
            stars71.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars71, platforms);
            this.physics.add.overlap(player, stars71, collectStar71, null, this);

            function collectStar71(player, star71) {
                star71.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars71.countActive(true) === 0) {
                    stars71.children.iterate(function(child) {});
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

            stars72 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 2300, y: 2170, stepY: 225 }
            });
            //creates multiple stars
            stars72.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars72, platforms);
            this.physics.add.overlap(player, stars72, collectStar72, null, this);

            function collectStar72(player, star72) {
                star72.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars72.countActive(true) === 0) {
                    stars72.children.iterate(function(child) {});
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

            stars73 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 2500, y: 2030, stepX: 200 }
            });
            //creates multiple stars
            stars73.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            //adds physics
            this.physics.add.collider(stars73, platforms);
            this.physics.add.overlap(player, stars73, collectStar73, null, this)

            function collectStar73(player, star73) {
                star73.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars73.countActive(true) === 0) {
                    stars73.children.iterate(function(child) {});
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

            stars74 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 2500, y: 2170, stepY: 225 }
            });
            //creates multiple stars
            stars74.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars74, platforms);
            this.physics.add.overlap(player, stars74, collectStar74, null, this);

            function collectStar74(player, star74) {
                star74.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars74.countActive(true) === 0) {
                    stars74.children.iterate(function(child) {});
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

            stars75 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 2500, y: 2525, stepX: 200 }
            });
            //creates multiple stars
            stars75.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars75, platforms);
            this.physics.add.overlap(player, stars75, collectStar75, null, this);

            function collectStar75(player, star75) {
                star75.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars75.countActive(true) === 0) {
                    stars75.children.iterate(function(child) {});
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

            stars76 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 3100, y: 2170, stepY: 225 }
            });
            //creates multiple stars
            stars76.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars76, platforms);
            this.physics.add.overlap(player, stars76, collectStar76, null, this);

            function collectStar76(player, star76) {
                star76.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars76.countActive(true) === 0) {
                    stars76.children.iterate(function(child) {});
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

            stars77 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 3300, y: 2030, stepX: 200 }
            });
            //creates multiple stars
            stars77.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            //adds physics
            this.physics.add.collider(stars77, platforms);
            this.physics.add.overlap(player, stars77, collectStar77, null, this)

            function collectStar77(player, star77) {
                star77.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars77.countActive(true) === 0) {
                    stars77.children.iterate(function(child) {});
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

            stars78 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 3300, y: 2170, stepY: 225 }
            });
            //creates multiple stars
            stars78.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars78, platforms);
            this.physics.add.overlap(player, stars78, collectStar78, null, this);

            function collectStar78(player, star78) {
                star78.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars78.countActive(true) === 0) {
                    stars78.children.iterate(function(child) {});
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

            stars79 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 3300, y: 2525, stepX: 200 }
            });
            //creates multiple stars
            stars79.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars79, platforms);
            this.physics.add.overlap(player, stars79, collectStar79, null, this);

            function collectStar79(player, star79) {
                star79.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars79.countActive(true) === 0) {
                    stars79.children.iterate(function(child) {});
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

            stars80 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 3900, y: 2170, stepY: 225 }
            });
            //creates multiple stars
            stars80.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars80, platforms);
            this.physics.add.overlap(player, stars80, collectStar80, null, this);

            function collectStar80(player, star80) {
                star80.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars80.countActive(true) === 0) {
                    stars80.children.iterate(function(child) {});
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


            stars81 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 100, y: 2680, stepX: 200 }
            });
            //creates multiple stars
            stars81.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            //adds physics
            this.physics.add.collider(stars81, platforms);
            this.physics.add.overlap(player, stars81, collectStar81, null, this)

            function collectStar81(player, star81) {
                star81.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars81.countActive(true) === 0) {
                    stars81.children.iterate(function(child) {});
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

            stars82 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 100, y: 2820, stepY: 225 }
            });
            //creates multiple stars
            stars82.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars82, platforms);
            this.physics.add.overlap(player, stars82, collectStar82, null, this);

            function collectStar82(player, star82) {
                star82.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars82.countActive(true) === 0) {
                    stars82.children.iterate(function(child) {});
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

            stars83 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 100, y: 3175, stepX: 200 }
            });
            //creates multiple stars
            stars83.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars83, platforms);
            this.physics.add.overlap(player, stars83, collectStar83, null, this);

            function collectStar83(player, star83) {
                star83.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars83.countActive(true) === 0) {
                    stars83.children.iterate(function(child) {});
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

            stars84 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 700, y: 2820, stepY: 225 }
            });
            //creates multiple stars
            stars84.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars84, platforms);
            this.physics.add.overlap(player, stars84, collectStar84, null, this);

            function collectStar84(player, star84) {
                star84.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars84.countActive(true) === 0) {
                    stars84.children.iterate(function(child) {});
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

            stars85 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 900, y: 2680, stepX: 200 }
            });
            //creates multiple stars
            stars85.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            //adds physics
            this.physics.add.collider(stars85, platforms);
            this.physics.add.overlap(player, stars85, collectStar85, null, this)

            function collectStar85(player, star85) {
                star85.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars85.countActive(true) === 0) {
                    stars85.children.iterate(function(child) {});
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

            stars86 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 900, y: 2820, stepY: 225 }
            });
            //creates multiple stars
            stars86.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars86, platforms);
            this.physics.add.overlap(player, stars86, collectStar86, null, this);

            function collectStar86(player, star86) {
                star86.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars86.countActive(true) === 0) {
                    stars86.children.iterate(function(child) {});
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

            stars87 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 900, y: 3175, stepX: 200 }
            });
            //creates multiple stars
            stars87.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars87, platforms);
            this.physics.add.overlap(player, stars87, collectStar87, null, this);

            function collectStar87(player, star87) {
                star87.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars87.countActive(true) === 0) {
                    stars87.children.iterate(function(child) {});
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

            stars88 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 1500, y: 2820, stepY: 225 }
            });
            //creates multiple stars
            stars88.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars88, platforms);
            this.physics.add.overlap(player, stars88, collectStar88, null, this);

            function collectStar88(player, star88) {
                star88.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars88.countActive(true) === 0) {
                    stars88.children.iterate(function(child) {});
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

            stars89 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 1700, y: 2680, stepX: 200 }
            });
            //creates multiple stars
            stars89.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            //adds physics
            this.physics.add.collider(stars89, platforms);
            this.physics.add.overlap(player, stars89, collectStar89, null, this)

            function collectStar89(player, star89) {
                star89.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars89.countActive(true) === 0) {
                    stars89.children.iterate(function(child) {});
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

            stars90 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 1700, y: 2820, stepY: 225 }
            });
            //creates multiple stars
            stars90.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars90, platforms);
            this.physics.add.overlap(player, stars90, collectStar90, null, this);

            function collectStar90(player, star90) {
                star90.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars90.countActive(true) === 0) {
                    stars90.children.iterate(function(child) {});
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

            stars91 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 1700, y: 3175, stepX: 200 }
            });
            //creates multiple stars
            stars91.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars91, platforms);
            this.physics.add.overlap(player, stars91, collectStar91, null, this);

            function collectStar91(player, star91) {
                star91.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars91.countActive(true) === 0) {
                    stars91.children.iterate(function(child) {});
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

            stars92 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 2300, y: 2820, stepY: 225 }
            });
            //creates multiple stars
            stars92.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars92, platforms);
            this.physics.add.overlap(player, stars92, collectStar92, null, this);

            function collectStar92(player, star92) {
                star92.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars92.countActive(true) === 0) {
                    stars92.children.iterate(function(child) {});
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

            stars93 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 2500, y: 2680, stepX: 200 }
            });
            //creates multiple stars
            stars93.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            //adds physics
            this.physics.add.collider(stars93, platforms);
            this.physics.add.overlap(player, stars93, collectStar93, null, this)

            function collectStar93(player, star93) {
                star93.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars93.countActive(true) === 0) {
                    stars93.children.iterate(function(child) {});
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

            stars94 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 2500, y: 2820, stepY: 225 }
            });
            //creates multiple stars
            stars94.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars94, platforms);
            this.physics.add.overlap(player, stars94, collectStar94, null, this);

            function collectStar94(player, star94) {
                star94.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars74.countActive(true) === 0) {
                    stars74.children.iterate(function(child) {});
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

            stars95 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 2500, y: 3175, stepX: 200 }
            });
            //creates multiple stars
            stars95.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars95, platforms);
            this.physics.add.overlap(player, stars95, collectStar95, null, this);

            function collectStar95(player, star95) {
                star95.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars95.countActive(true) === 0) {
                    stars95.children.iterate(function(child) {});
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

            stars96 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 3100, y: 2820, stepY: 225 }
            });
            //creates multiple stars
            stars96.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars96, platforms);
            this.physics.add.overlap(player, stars96, collectStar96, null, this);

            function collectStar96(player, star96) {
                star96.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars76.countActive(true) === 0) {
                    stars76.children.iterate(function(child) {});
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

            stars97 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 3300, y: 2680, stepX: 200 }
            });
            //creates multiple stars
            stars97.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            //adds physics
            this.physics.add.collider(stars97, platforms);
            this.physics.add.overlap(player, stars97, collectStar97, null, this)

            function collectStar97(player, star97) {
                star97.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars97.countActive(true) === 0) {
                    stars97.children.iterate(function(child) {});
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

            stars98 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 3300, y: 2820, stepY: 225 }
            });
            //creates multiple stars
            stars98.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars98, platforms);
            this.physics.add.overlap(player, stars98, collectStar98, null, this);

            function collectStar98(player, star98) {
                star98.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars98.countActive(true) === 0) {
                    stars98.children.iterate(function(child) {});
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

            stars99 = this.physics.add.group({
                key: "star",
                repeat: 3,
                setXY: { x: 3300, y: 3175, stepX: 200 }
            });
            //creates multiple stars
            stars99.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars99, platforms);
            this.physics.add.overlap(player, stars99, collectStar99, null, this);

            function collectStar99(player, star99) {
                star99.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars99.countActive(true) === 0) {
                    stars99.children.iterate(function(child) {});
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

            stars100 = this.physics.add.group({
                key: "star",
                repeat: 1,
                setXY: { x: 3900, y: 2820, stepY: 225 }
            });
            //creates multiple stars
            stars100.children.iterate(function(child) {
                //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            this.physics.add.collider(stars100, platforms);
            this.physics.add.overlap(player, stars100, collectStar100, null, this);

            function collectStar100(player, star100) {
                star100.disableBody(true, true);
                score += 1;
                scoreText.setText("Coins: " + score);
                if (stars100.countActive(true) === 0) {
                    stars100.children.iterate(function(child) {});
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
        }
        //creates Life & Score counter
        {
            score = 0;
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
        //Bombs
        {
            bombs = this.physics.add.group();
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
        }
        //add Space key
        {
            keyboard = this.input.keyboard.addKeys("space");
            if (keyboard.space.isDown) {
                sword = this.add.image(x, y, "sword-down");
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

        x = player.body.position.x; //lock to middle of camera not player spawn
        y = player.body.position.y;

        attack = this.add.image(x, y, "bomb").setScale(3);
        attackLayer = this.add.layer();
        attackLayer.setVisible(false);
        attackLayer.add([attack]);

        if (score > 10) {
            if (keyboard.space.isDown) {
                if (x - bombs.x <= 100 && y - bombs.y <= 100) {

                    bombs.destroy();
                    attackLayer.setVisible(true);
                    this.time.addEvent({
                        delay: 500,
                        loop: false,
                        callback: () => {
                            attackLayer.setVisible(false);
                        }
                    });

                }
                console.log("space");
            }
        }
    }
});
