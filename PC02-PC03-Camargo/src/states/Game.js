import Phaser from "phaser"

class GameScene extends Phaser.Scene{
    constructor(){
        super("GameScene");
    }

    create() {
        this.score = 0;     
        this.timeElapsed = 0; 
        this.lives = 3;      
        this.streak = 0;      

        this.add.image(0, 0, 'game').setOrigin(0, 0);

        const textStyle = { font: '24px Arial', fill: '#ffffff' };

        this.timeText = this.add.text(20, 20, 'Tiempo: 0', textStyle);
        this.scoreText = this.add.text(650, 20, `Puntaje: ${this.score}`, textStyle);
        this.livesText = this.add.text(20, 60, `Vidas: ${this.lives}`, textStyle);

        this.time.addEvent({
            delay: 1000,
            callback: this.updateTime,
            callbackScope: this,
            loop: true
        });

        this.player = this.physics.add.sprite(400, 300, 'player');
        this.player.setCollideWorldBounds(true); 

        this.enemies = this.physics.add.group();

        this.time.addEvent({
            delay: 2000,
            callback: this.spawnEnemy,
            callbackScope: this,
            loop: true
        });

        this.physics.add.overlap(this.player, this.enemies, this.handleCollision, null, this);

        this.cursors = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D
        });
    }

    update() {
        if (this.cursors.up.isDown) {
            this.player.setVelocityY(-200);
            this.player.setTexture('amarillo');
        } else if (this.cursors.down.isDown) {
            this.player.setVelocityY(200);
            this.player.setTexture('rojo'); 
        } else {
            this.player.setVelocityY(0); 
        }

        if (this.cursors.left.isDown) {
            this.player.setTexture('player');
        } else if (this.cursors.right.isDown) {
            this.player.setTexture('verde'); 
        }
    }

    updateTime() {
        this.timeElapsed += 1;
        this.timeText.setText(`Tiempo: ${this.timeElapsed}`);
    }

    spawnEnemy() {
        const colors = ['amarillo', 'rojo', 'verde'];
        const randomColor = Phaser.Utils.Array.GetRandom(colors);
        const yPos = Phaser.Math.Between(50, 550);

        const enemy = this.enemies.create(800, yPos, randomColor);
        enemy.setVelocityX(-200); 
        enemy.setVelocityY(0);   
        enemy.color = randomColor; 
    }

    handleCollision(player, enemy) {
        if (player.texture.key === enemy.color) {
            this.score += 10;
            this.streak += 1;

            if (this.streak === 3) {
                this.score *= 2;
            } else if (this.streak === 5) {
                this.score *= 4;
                this.streak = 0; 
            }

            this.scoreText.setText(`Puntaje: ${this.score}`);
        } else {
            this.lives -= 1;
            this.streak = 0; 
            this.livesText.setText(`Vidas: ${this.lives}`);

            if (this.lives <= 0) {
                this.gameOver();
            }
        }

        enemy.destroy(); 
    }

    gameOver() {
        this.enemies.clear(true, true);
        this.player.setVisible(false);

        this.scene.start('GameOverScene', { score: this.score });
    }

}
export default GameScene