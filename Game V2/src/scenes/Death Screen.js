//import Phaser from 'https://codepen.io/bealec2022/pen/GRMoPLG.js'

export default class Death extends Phaser.Scene{
  
  constructor() {
        super({key: "Death"});
    }
  
  preload(){
    this.load.image("background", "https://images.creativemarket.com/0.1.0/ps/120087/910/607/m1/fpnw/wm0/stonefloor001_large-.jpg?1401477523&s=aeb8c8fbad2e06ac22344908c9ad2c9e");   
  }
  
  create(){
    this.add.image(400,300,"background").setScale(0.5);
    
    keyboard = this.input.keyboard.addKeys("enter","tab");
    
    var deathText;
    var restartText;
    var titleScreenText;
    
    deathText = this.add.text(150, 125, "Game Over", {
      fontSize: "60px",
      fill:"#000"
    })
    deathText.setColor("White");
    
    restartText = this.add.text(275, 200, "Hit Enter To Start Game", {
      fontSize: "32px",
      fill:"#000"
    })
    restartText.setColor("White");
    
    titleScreenText = this.add.text(325, 250, "Hit tab To Return to the Title Screen", {
      fontSize: "32px",
      fill:"#000"
    })
    titleScreenText.setColor("White");
  }
  
  update(){
    if (keyboard.enter.isDown) {
      //enable switch to title screen
    } else if (keyboard.tab.isDown){
      //enable switch to game
    } else {
      retun false; 
    }
  }
}
