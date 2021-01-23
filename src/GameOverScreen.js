const r = require('raylib');
let { speed } = require('./constants');

class GameOverScreen {
    constructor() {
        this.texture = r.LoadTexture('./assets/sprites/gameover.png');
    }

    run = () => {
        speed = 0;
        while (!r.GetKeyPressed()) {
            r.BeginDrawing();
            r.ClearBackground(r.BLUE);
            r.DrawTexture(this.texture, 70, 200, r.WHITE);
            r.EndDrawing();
        }
        speed = 4;
    }
}

module.exports.GameOverScreen = GameOverScreen;
