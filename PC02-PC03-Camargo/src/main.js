import PreloadScene from "./states/Preload";
import MenuScene from "./states/Menu";
import GameScene from "./states/Game";
import GameOverScene from "./states/GameOver";

let config = {

    width: 800 ,
    height: 600,
    scene: [PreloadScene,MenuScene, GameScene, GameOverScene],
    scale:{
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics:{
        default : 'arcade',
        arcade:{
        }
    }
};
new Phaser.Game(config);