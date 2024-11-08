import Phaser from "phaser"

class GameOverScene extends Phaser.Scene{
    constructor(){
        super("GameOverScene");
    }
    init(data) {
        this.finalScore = data.score || 0;
    }

    create() {
        this.add.image(0, 0, 'game-over').setOrigin(0, 0);

        const gameOverText = this.add.text(400, 250, 'YA ME FUI LA BIKA G_G', {
            font: '40px Arial',
            fill: '#ff0000'
        }).setOrigin(0.5);

        const scoreText = this.add.text(400, 300, `Puntaje final: ${this.finalScore}`, {
            font: '30px Arial',
            fill: '#ffffff'
        }).setOrigin(0.5);

        this.input.on('pointerdown', () => {
            this.scene.start('MenuScene');
        });
    }

}
export default GameOverScene