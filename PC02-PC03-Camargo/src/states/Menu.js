import Phaser from "phaser"

class MenuScene extends Phaser.Scene{
    constructor(){
        super("MenuScene");
    }
    init(){
        
    }
    create() {
        this.add.image(0, 0, 'menu').setOrigin(0, 0);

        const titleStyle = { font: '40px Arial', fill: '#ffffff' };
        const nameStyle = { font: '30px Arial', fill: '#ffffff' };

        this.add.text(100, 150, 'Bica 4 life G_G and forever', titleStyle);
        this.add.text(100, 220, 'Enzo Camargo', nameStyle);

        this.input.on('pointerdown', () => {
            this.scene.start('GameScene');
        });
    }
    update(){

    }

}
export default MenuScene