const r = require('raylib');
class GameOverScreen {
    constructor(background, score) {
        this.background = background;
        this.texture = r.LoadTexture('./assets/sprites/gameover.png');
        this.sound = r.LoadSound('./assets/audio/die.wav');
        this.score = score || 0;
    }
    
    run = () => {
        r.PlaySound(this.sound);
        while (!r.GetKeyPressed()) {
            this.background.update();
            r.BeginDrawing();
            r.ClearBackground(r.BLUE);
            r.DrawTexture(this.texture, 70, 200, r.WHITE);
            r.DrawText('Press any key to play again', 70, 500, 25, r.WHITE);
            r.DrawText(`Score: ${this.score}`, 70, 405, 50, r.BLACK);
            r.DrawText(`Score: ${this.score}`, 70, 400, 50, r.WHITE);
            r.DrawText('[ESC] Exit', 10, 10, 30, r.WHITE);
            r.EndDrawing();
        }
    }
}

module.exports.GameOverScreen = GameOverScreen;
