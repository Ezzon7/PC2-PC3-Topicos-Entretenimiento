import Phaser from "phaser"

class PreloadScene extends Phaser.Scene{
    constructor(){
        super("PreloadScene");
    }
    preload(){
        this.load.image('menu', 'assets/fondos/menu.png');
        this.load.image('game', 'assets/fondos/game.png');  
        this.load.image('game-over', 'assets/fondos/game-over.jpg');
        this.load.image('player', 'assets/player.png'); 
        this.load.image('amarillo', 'assets/amarillo.png'); 
        this.load.image('rojo', 'assets/rojo.png'); 
        this.load.image('verde', 'assets/verde.png');   
             
    }
    create(){
        this.scene.start('MenuScene');
    }
}
export default PreloadScene