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

        //creates platforms
        platforms = this.physics.add.staticGroup();
        //top left room (1,1)
        //floor
      { platforms.create(0, 650, "ground").setScale(0.25).refreshBody();
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
        platforms.create(0,75, "ground").setScale(0.25).refreshBody();
        platforms.create(0,150, "ground").setScale(0.25).refreshBody();
        platforms.create(0,225, "ground").setScale(0.25).refreshBody();
        platforms.create(0,275, "ground").setScale(0.25).refreshBody();
        platforms.create(0,350, "ground").setScale(0.25).refreshBody();
        platforms.create(0,400, "ground").setScale(0.25).refreshBody();
        platforms.create(0,450, "ground").setScale(0.25).refreshBody();
        platforms.create(0,525, "ground").setScale(0.25).refreshBody();
        platforms.create(0,600, "ground").setScale(0.25).refreshBody();
        platforms.create(0,675, "ground").setScale(0.25).refreshBody();
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
        platforms.create(800,75, "ground").setScale(0.25).refreshBody();
        platforms.create(800,150, "ground").setScale(0.25).refreshBody();
        platforms.create(800,225, "ground").setScale(0.25).refreshBody();
        platforms.create(800,275, "ground").setScale(0.25).refreshBody();
        platforms.create(800,450, "ground").setScale(0.25).refreshBody();
        platforms.create(800,525, "ground").setScale(0.25).refreshBody();
        platforms.create(800,600, "ground").setScale(0.25).refreshBody();
        platforms.create(800,675, "ground").setScale(0.25).refreshBody();
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
        platforms.create(1600,75, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,150, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,225, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,275, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,450, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,525, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,600, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,675, "ground").setScale(0.25).refreshBody(); 
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
        platforms.create(2400,75, "ground").setScale(0.25).refreshBody();
        platforms.create(2400,150, "ground").setScale(0.25).refreshBody();
        platforms.create(2400,225, "ground").setScale(0.25).refreshBody();
        platforms.create(2400,275, "ground").setScale(0.25).refreshBody();
        platforms.create(2400,450, "ground").setScale(0.25).refreshBody();
        platforms.create(2400,525, "ground").setScale(0.25).refreshBody();
        platforms.create(2400,600, "ground").setScale(0.25).refreshBody();
        platforms.create(2400,675, "ground").setScale(0.25).refreshBody(); 
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
        platforms.create(3200,75, "ground").setScale(0.25).refreshBody();
        platforms.create(3200,150, "ground").setScale(0.25).refreshBody();
        platforms.create(3200,225, "ground").setScale(0.25).refreshBody();
        platforms.create(3200,275, "ground").setScale(0.25).refreshBody();
        platforms.create(3200,450, "ground").setScale(0.25).refreshBody();
        platforms.create(3200,525, "ground").setScale(0.25).refreshBody();
        platforms.create(3200,600, "ground").setScale(0.25).refreshBody();
        platforms.create(3200,675, "ground").setScale(0.25).refreshBody();
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
        platforms.create(4000,75, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,150, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,225, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,275, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,325, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,400, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,450, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,525, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,600, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,675, "ground").setScale(0.25).refreshBody();
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
        platforms.create(0,725, "ground").setScale(0.25).refreshBody();
        platforms.create(0,800, "ground").setScale(0.25).refreshBody();
        platforms.create(0,875, "ground").setScale(0.25).refreshBody();
        platforms.create(0,925, "ground").setScale(0.25).refreshBody();
        platforms.create(0,1000, "ground").setScale(0.25).refreshBody();
        platforms.create(0,1050, "ground").setScale(0.25).refreshBody();
        platforms.create(0,1100, "ground").setScale(0.25).refreshBody();
        platforms.create(0,1175, "ground").setScale(0.25).refreshBody();
        platforms.create(0,1250, "ground").setScale(0.25).refreshBody();
        platforms.create(0,1325, "ground").setScale(0.25).refreshBody();
        //right side (done)
        platforms.create(800, 650, "ground").setScale(0.25).refreshBody();
        platforms.create(800,725, "ground").setScale(0.25).refreshBody();
        platforms.create(800,800, "ground").setScale(0.25).refreshBody();
        platforms.create(800,875, "ground").setScale(0.25).refreshBody();
        platforms.create(800,925, "ground").setScale(0.25).refreshBody();
        platforms.create(800,1100, "ground").setScale(0.25).refreshBody();
        platforms.create(800,1175, "ground").setScale(0.25).refreshBody();
        platforms.create(800,1250, "ground").setScale(0.25).refreshBody();
        platforms.create(800,1325, "ground").setScale(0.25).refreshBody();
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
        platforms.create(0,1375, "ground").setScale(0.25).refreshBody();
        platforms.create(0,1450, "ground").setScale(0.25).refreshBody();
        platforms.create(0,1525, "ground").setScale(0.25).refreshBody();
        platforms.create(0,1575, "ground").setScale(0.25).refreshBody();
        platforms.create(0,1650, "ground").setScale(0.25).refreshBody();
        platforms.create(0,1700, "ground").setScale(0.25).refreshBody();
        platforms.create(0,1750, "ground").setScale(0.25).refreshBody();
        platforms.create(0,1825, "ground").setScale(0.25).refreshBody();
        platforms.create(0,1900, "ground").setScale(0.25).refreshBody();
        platforms.create(0,1975, "ground").setScale(0.25).refreshBody();
        //right side (done)
        platforms.create(800, 1300, "ground").setScale(0.25).refreshBody();
        platforms.create(800,1375, "ground").setScale(0.25).refreshBody();
        platforms.create(800,1450, "ground").setScale(0.25).refreshBody();
        platforms.create(800,1525, "ground").setScale(0.25).refreshBody();
        platforms.create(800,1575, "ground").setScale(0.25).refreshBody();
        platforms.create(800,1750, "ground").setScale(0.25).refreshBody();
        platforms.create(800,1825, "ground").setScale(0.25).refreshBody();
        platforms.create(800,1900, "ground").setScale(0.25).refreshBody();
        platforms.create(800,1975, "ground").setScale(0.25).refreshBody();
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
        platforms.create(0,2025, "ground").setScale(0.25).refreshBody();
        platforms.create(0,2100, "ground").setScale(0.25).refreshBody();
        platforms.create(0,2175, "ground").setScale(0.25).refreshBody();
        platforms.create(0,2225, "ground").setScale(0.25).refreshBody();
        platforms.create(0,2300, "ground").setScale(0.25).refreshBody();
        platforms.create(0,2350, "ground").setScale(0.25).refreshBody();
        platforms.create(0,2400, "ground").setScale(0.25).refreshBody();
        platforms.create(0,2475, "ground").setScale(0.25).refreshBody();
        platforms.create(0,2550, "ground").setScale(0.25).refreshBody();
        platforms.create(0,2625, "ground").setScale(0.25).refreshBody();
        //right side (done)
        platforms.create(800, 1950, "ground").setScale(0.25).refreshBody();
        platforms.create(800,2025, "ground").setScale(0.25).refreshBody();
        platforms.create(800,2100, "ground").setScale(0.25).refreshBody();
        platforms.create(800,2175, "ground").setScale(0.25).refreshBody();
        platforms.create(800,2225, "ground").setScale(0.25).refreshBody();
        platforms.create(800,2400, "ground").setScale(0.25).refreshBody();
        platforms.create(800,2475, "ground").setScale(0.25).refreshBody();
        platforms.create(800,2550, "ground").setScale(0.25).refreshBody();
        platforms.create(800,2625, "ground").setScale(0.25).refreshBody();
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
        platforms.create(0,2675, "ground").setScale(0.25).refreshBody();
        platforms.create(0,2750, "ground").setScale(0.25).refreshBody();
        platforms.create(0,2825, "ground").setScale(0.25).refreshBody();
        platforms.create(0,2875, "ground").setScale(0.25).refreshBody();
        platforms.create(0,2950, "ground").setScale(0.25).refreshBody();
        platforms.create(0,3000, "ground").setScale(0.25).refreshBody();
        platforms.create(0,3050, "ground").setScale(0.25).refreshBody();
        platforms.create(0,3125, "ground").setScale(0.25).refreshBody();
        platforms.create(0,3200, "ground").setScale(0.25).refreshBody();
        platforms.create(0,3250, "ground").setScale(0.25).refreshBody();
        //right side (done)
        platforms.create(800, 2600, "ground").setScale(0.25).refreshBody();
        platforms.create(800,2675, "ground").setScale(0.25).refreshBody();
        platforms.create(800,2750, "ground").setScale(0.25).refreshBody();
        platforms.create(800,2825, "ground").setScale(0.25).refreshBody();
        platforms.create(800,2875, "ground").setScale(0.25).refreshBody();
        platforms.create(800,3050, "ground").setScale(0.25).refreshBody();
        platforms.create(800,3125, "ground").setScale(0.25).refreshBody();
        platforms.create(800,3200, "ground").setScale(0.25).refreshBody();
        platforms.create(800,3250, "ground").setScale(0.25).refreshBody();
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
        platforms.create(4000,725, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,800, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,875, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,925, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,1000, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,1050, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,1100, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,1175, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,1250, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,1325, "ground").setScale(0.25).refreshBody();
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
        platforms.create(4000,1375, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,1450, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,1525, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,1575, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,1650, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,1700, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,1750, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,1825, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,1900, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,1975, "ground").setScale(0.25).refreshBody();
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
        platforms.create(4000,2025, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,2100, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,2175, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,2225, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,2300, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,2350, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,2400, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,2475, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,2550, "ground").setScale(0.25).refreshBody();
        platforms.create(4000,2625, "ground").setScale(0.25).refreshBody();
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
        platforms.create(3200,725, "ground").setScale(0.25).refreshBody();
        platforms.create(3200,800, "ground").setScale(0.25).refreshBody();
        platforms.create(3200,875, "ground").setScale(0.25).refreshBody();
        platforms.create(3200,925, "ground").setScale(0.25).refreshBody();
        //platforms.create(3200,1000, "ground").setScale(0.25).refreshBody();
        //platforms.create(3200,1050, "ground").setScale(0.25).refreshBody();
        platforms.create(3200,1100, "ground").setScale(0.25).refreshBody();
        platforms.create(3200,1175, "ground").setScale(0.25).refreshBody();
        platforms.create(3200,1250, "ground").setScale(0.25).refreshBody();
        platforms.create(3200,1325, "ground").setScale(0.25).refreshBody();
        //right side room #2 (4,3)
        //floor
        platforms.create(2400, 1950, "ground").setScale(0.25).refreshBody();
        platforms.create(2475, 1950, "ground").setScale(0.25).refreshBody();
        platforms.create(2550, 1950, "ground").setScale(0.25).refreshBody();
        platforms.create(2625, 1950, "ground").setScale(0.25).refreshBody();
        platforms.create(2700, 1950, "ground").setScale(0.25).refreshBody();//here
        //platforms.create(375, 1950, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor
        //platforms.create(400, 1950, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor  
        platforms.create(2875, 1950, "ground").setScale(0.25).refreshBody();
        platforms.create(2925, 1950, "ground").setScale(0.25).refreshBody();
        platforms.create(3000, 1950, "ground").setScale(0.25).refreshBody();
        platforms.create(3075, 1950, "ground").setScale(0.25).refreshBody();
        platforms.create(3150, 1950, "ground").setScale(0.25).refreshBody();
        //right side (done)
        platforms.create(3200, 1300, "ground").setScale(0.25).refreshBody();
        platforms.create(3200,1375, "ground").setScale(0.25).refreshBody();
        platforms.create(3200,1450, "ground").setScale(0.25).refreshBody();
        platforms.create(3200,1525, "ground").setScale(0.25).refreshBody();
        platforms.create(3200,1575, "ground").setScale(0.25).refreshBody();
        //platforms.create(3200,1650, "ground").setScale(0.25).refreshBody();
        //platforms.create(3200,1700, "ground").setScale(0.25).refreshBody();
        platforms.create(3200,1750, "ground").setScale(0.25).refreshBody();
        platforms.create(3200,1825, "ground").setScale(0.25).refreshBody();
        platforms.create(3200,1900, "ground").setScale(0.25).refreshBody();
        platforms.create(3200,1975, "ground").setScale(0.25).refreshBody();
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
        platforms.create(3200,2025, "ground").setScale(0.25).refreshBody();
        platforms.create(3200,2100, "ground").setScale(0.25).refreshBody();
        platforms.create(3200,2175, "ground").setScale(0.25).refreshBody();
        //platforms.create(3200,2225, "ground").setScale(0.25).refreshBody();
        //platforms.create(3200,2300, "ground").setScale(0.25).refreshBody();
        platforms.create(3200,2350, "ground").setScale(0.25).refreshBody();
        platforms.create(3200,2400, "ground").setScale(0.25).refreshBody();
        platforms.create(3200,2475, "ground").setScale(0.25).refreshBody();
        platforms.create(3200,2550, "ground").setScale(0.25).refreshBody();
        platforms.create(3200,2625, "ground").setScale(0.25).refreshBody();
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
        platforms.create(2400,725, "ground").setScale(0.25).refreshBody();
        platforms.create(2400,800, "ground").setScale(0.25).refreshBody();
        platforms.create(2400,875, "ground").setScale(0.25).refreshBody();
        platforms.create(2400,925, "ground").setScale(0.25).refreshBody();
        //platforms.create(3200,1000, "ground").setScale(0.25).refreshBody();
        //platforms.create(3200,1050, "ground").setScale(0.25).refreshBody();
        platforms.create(2400,1100, "ground").setScale(0.25).refreshBody();
        platforms.create(2400,1175, "ground").setScale(0.25).refreshBody();
        platforms.create(2400,1250, "ground").setScale(0.25).refreshBody();
        platforms.create(2400,1325, "ground").setScale(0.25).refreshBody();
        //right side room #2 (3,3)
        //floor
        platforms.create(1600, 1950, "ground").setScale(0.25).refreshBody();
        platforms.create(1675, 1950, "ground").setScale(0.25).refreshBody();
        platforms.create(1750, 1950, "ground").setScale(0.25).refreshBody();
        platforms.create(1825, 1950, "ground").setScale(0.25).refreshBody();
        platforms.create(1900, 1950, "ground").setScale(0.25).refreshBody();//here
        //platforms.create(375, 1950, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor
        //platforms.create(400, 1950, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor  
        platforms.create(2075, 1950, "ground").setScale(0.25).refreshBody();
        platforms.create(2125, 1950, "ground").setScale(0.25).refreshBody();
        platforms.create(2200, 1950, "ground").setScale(0.25).refreshBody();
        platforms.create(2275, 1950, "ground").setScale(0.25).refreshBody();
        platforms.create(2350, 1950, "ground").setScale(0.25).refreshBody();
        //right side (done)
        platforms.create(2400, 1300, "ground").setScale(0.25).refreshBody();
        platforms.create(2400,1375, "ground").setScale(0.25).refreshBody();
        platforms.create(2400,1450, "ground").setScale(0.25).refreshBody();
        platforms.create(2400,1525, "ground").setScale(0.25).refreshBody();
        platforms.create(2400,1575, "ground").setScale(0.25).refreshBody();
        //platforms.create(3200,1650, "ground").setScale(0.25).refreshBody();
        //platforms.create(3200,1700, "ground").setScale(0.25).refreshBody();
        platforms.create(2400,1750, "ground").setScale(0.25).refreshBody();
        platforms.create(2400,1825, "ground").setScale(0.25).refreshBody();
        platforms.create(2400,1900, "ground").setScale(0.25).refreshBody();
        platforms.create(2400,1975, "ground").setScale(0.25).refreshBody();
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
        platforms.create(2400,2025, "ground").setScale(0.25).refreshBody();
        platforms.create(2400,2100, "ground").setScale(0.25).refreshBody();
        platforms.create(2400,2175, "ground").setScale(0.25).refreshBody();
        //platforms.create(3200,2225, "ground").setScale(0.25).refreshBody();
        //platforms.create(3200,2300, "ground").setScale(0.25).refreshBody();
        platforms.create(2400,2350, "ground").setScale(0.25).refreshBody();
        platforms.create(2400,2400, "ground").setScale(0.25).refreshBody();
        platforms.create(2400,2475, "ground").setScale(0.25).refreshBody();
        platforms.create(2400,2550, "ground").setScale(0.25).refreshBody();
        platforms.create(2400,2625, "ground").setScale(0.25).refreshBody();
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
        platforms.create(1600,725, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,800, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,875, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,925, "ground").setScale(0.25).refreshBody();
        //platforms.create(3200,1000, "ground").setScale(0.25).refreshBody();
        //platforms.create(3200,1050, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,1100, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,1175, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,1250, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,1325, "ground").setScale(0.25).refreshBody();
        //right side room #2 (2,3)
        //floor
        platforms.create(800, 1950, "ground").setScale(0.25).refreshBody();
        platforms.create(875, 1950, "ground").setScale(0.25).refreshBody();
        platforms.create(950, 1950, "ground").setScale(0.25).refreshBody();
        platforms.create(1025, 1950, "ground").setScale(0.25).refreshBody();
        platforms.create(1100, 1950, "ground").setScale(0.25).refreshBody();//here
        //platforms.create(375, 1950, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor
        //platforms.create(400, 1950, "ground").setScale(0.25).refreshBody(); //remove later when we want hole in floor  
        platforms.create(1275, 1950, "ground").setScale(0.25).refreshBody();
        platforms.create(1325, 1950, "ground").setScale(0.25).refreshBody();
        platforms.create(1400, 1950, "ground").setScale(0.25).refreshBody();
        platforms.create(1475, 1950, "ground").setScale(0.25).refreshBody();
        platforms.create(1550, 1950, "ground").setScale(0.25).refreshBody();
        //right side (done)
        platforms.create(1600, 1300, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,1375, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,1450, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,1525, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,1575, "ground").setScale(0.25).refreshBody();
        //platforms.create(3200,1650, "ground").setScale(0.25).refreshBody();
        //platforms.create(3200,1700, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,1750, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,1825, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,1900, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,1975, "ground").setScale(0.25).refreshBody();
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
        platforms.create(1600,2025, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,2100, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,2175, "ground").setScale(0.25).refreshBody();
        //platforms.create(3200,2225, "ground").setScale(0.25).refreshBody();
        //platforms.create(3200,2300, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,2350, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,2400, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,2475, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,2550, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,2625, "ground").setScale(0.25).refreshBody();
        //Boss Room
        platforms.create(1300,3300, "ground").setScale(0.25).refreshBody();
        platforms.create(1300,3350, "ground").setScale(0.25).refreshBody();
        platforms.create(1300,3400, "ground").setScale(0.25).refreshBody();
        platforms.create(1300,3450, "ground").setScale(0.25).refreshBody();
        platforms.create(1300,3500, "ground").setScale(0.25).refreshBody();
        platforms.create(1300,3550, "ground").setScale(0.25).refreshBody();
        platforms.create(1300,3600, "ground").setScale(0.25).refreshBody();
        platforms.create(1300,3650, "ground").setScale(0.25).refreshBody();
        platforms.create(1300,3700, "ground").setScale(0.25).refreshBody();
        platforms.create(1300,3750, "ground").setScale(0.25).refreshBody();
        platforms.create(1300,3800, "ground").setScale(0.25).refreshBody();
        platforms.create(1300,3850, "ground").setScale(0.25).refreshBody();
        platforms.create(1300,3900, "ground").setScale(0.25).refreshBody();
        platforms.create(1300,3950, "ground").setScale(0.25).refreshBody();
        platforms.create(1300,4000, "ground").setScale(0.25).refreshBody();
        platforms.create(1300,4050, "ground").setScale(0.25).refreshBody();
        platforms.create(1300,4100, "ground").setScale(0.25).refreshBody();
        platforms.create(1300,4150, "ground").setScale(0.25).refreshBody();
        platforms.create(1300,4200, "ground").setScale(0.25).refreshBody();
        platforms.create(1300,4250, "ground").setScale(0.25).refreshBody();
        platforms.create(1300,4300, "ground").setScale(0.25).refreshBody();
        platforms.create(2650,3300, "ground").setScale(0.25).refreshBody();
        platforms.create(2650,3350, "ground").setScale(0.25).refreshBody();
        platforms.create(2650,3400, "ground").setScale(0.25).refreshBody();
        platforms.create(2650,3450, "ground").setScale(0.25).refreshBody();
        platforms.create(2650,3500, "ground").setScale(0.25).refreshBody();
        platforms.create(2650,3550, "ground").setScale(0.25).refreshBody();
        platforms.create(2650,3600, "ground").setScale(0.25).refreshBody();
        platforms.create(2650,3650, "ground").setScale(0.25).refreshBody();
        platforms.create(2650,3700, "ground").setScale(0.25).refreshBody();
        platforms.create(2650,3750, "ground").setScale(0.25).refreshBody();
        platforms.create(2650,3800, "ground").setScale(0.25).refreshBody();
        platforms.create(2650,3850, "ground").setScale(0.25).refreshBody();
        platforms.create(2650,3900, "ground").setScale(0.25).refreshBody();
        platforms.create(2650,3950, "ground").setScale(0.25).refreshBody();
        platforms.create(2650,4000, "ground").setScale(0.25).refreshBody();
        platforms.create(2650,4050, "ground").setScale(0.25).refreshBody();
        platforms.create(2650,4100, "ground").setScale(0.25).refreshBody();
        platforms.create(2650,4150, "ground").setScale(0.25).refreshBody();
        platforms.create(2650,4200, "ground").setScale(0.25).refreshBody();
        platforms.create(2650,4250, "ground").setScale(0.25).refreshBody();
        platforms.create(2650,4300, "ground").setScale(0.25).refreshBody();
        platforms.create(1375,4300, "ground").setScale(0.25).refreshBody();
        platforms.create(1450,4300, "ground").setScale(0.25).refreshBody();
        platforms.create(1525,4300, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,4300, "ground").setScale(0.25).refreshBody();
        platforms.create(1675,4300, "ground").setScale(0.25).refreshBody();
        platforms.create(1750,4300, "ground").setScale(0.25).refreshBody();
        platforms.create(1825,4300, "ground").setScale(0.25).refreshBody();
        platforms.create(1900,4300, "ground").setScale(0.25).refreshBody();
        platforms.create(1975,4300, "ground").setScale(0.25).refreshBody();
        platforms.create(2050,4300, "ground").setScale(0.25).refreshBody();
        platforms.create(2125,4300, "ground").setScale(0.25).refreshBody();
        platforms.create(2200,4300, "ground").setScale(0.25).refreshBody();
        platforms.create(2275,4300, "ground").setScale(0.25).refreshBody();
        platforms.create(2350,4300, "ground").setScale(0.25).refreshBody();
        platforms.create(2425,4300, "ground").setScale(0.25).refreshBody();
        platforms.create(2500,4300, "ground").setScale(0.25).refreshBody();
        platforms.create(2575,4300, "ground").setScale(0.25).refreshBody();
        //Random Walls
        platforms.create(2125,4000, "ground").setScale(0.25).refreshBody();
        platforms.create(2200,4000, "ground").setScale(0.25).refreshBody();
        platforms.create(2275,4000, "ground").setScale(0.25).refreshBody();
        platforms.create(2350,4000, "ground").setScale(0.25).refreshBody();
        platforms.create(2425,4000, "ground").setScale(0.25).refreshBody();
        platforms.create(2500,4000, "ground").setScale(0.25).refreshBody();
        //Random Walls
        platforms.create(2125,3550, "ground").setScale(0.25).refreshBody();
        platforms.create(2200,3550, "ground").setScale(0.25).refreshBody();
        platforms.create(2275,3550, "ground").setScale(0.25).refreshBody();
        platforms.create(2350,3550, "ground").setScale(0.25).refreshBody();
        platforms.create(2425,3550, "ground").setScale(0.25).refreshBody();
        platforms.create(2500,3550, "ground").setScale(0.25).refreshBody();
        //Random Walls
        platforms.create(1450,4000, "ground").setScale(0.25).refreshBody();
        platforms.create(1525,4000, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,4000, "ground").setScale(0.25).refreshBody();
        platforms.create(1675,4000, "ground").setScale(0.25).refreshBody();
        platforms.create(1750,4000, "ground").setScale(0.25).refreshBody();
        platforms.create(1825,4000, "ground").setScale(0.25).refreshBody();
        //Random Walls
        platforms.create(1450,3550, "ground").setScale(0.25).refreshBody();
        platforms.create(1525,3550, "ground").setScale(0.25).refreshBody();
        platforms.create(1600,3550, "ground").setScale(0.25).refreshBody();
        platforms.create(1675,3550, "ground").setScale(0.25).refreshBody();
        platforms.create(1750,3550, "ground").setScale(0.25).refreshBody();
        platforms.create(1825,3550, "ground").setScale(0.25).refreshBody(); }
        
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
            setXY: { x: 80, y: 80, stepX: 70}
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
                stars.children.iterate(function(child){});
                //creates bombs at random locations with properties
                var x =
                    player.x < 400 ?
                    Phaser.Math.Between(400, 800) :
                    Phaser.Math.Between(0, 400);
                bomb = bombs.create(x, 16, "bomb");
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

        const attack = this.add.image(x, y, "bomb")
        const attackLayer = this.add.layer();
        attackLayer.add([attack]);
        attackLayer.setVisible(false);

        if (cursors.space.isDown) {
            attackLayer.setVisible(true);
            this.time.addEvent({
                delay: 500,
                loop: false,
                callback: () => {
                    attackLayer.setVisible(false);
                }
            });
        }
    }
});
