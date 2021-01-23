const r = require('raylib');
const { Background } = require('./Background');
const { Bird } = require('./Bird');

class Game {
    constructor() {
        this.run = true;
        this.screenWidth = 500;
        this.screenHeight = 1000;
        r.InitWindow(this.screenWidth, this.screenHeight, "raylib [core] example - basic window");
        r.SetTargetFPS(60);
        this.bird = new Bird();
        this.background = new Background();
    }
    isRunning = () => {
        return (this.run && !r.WindowShouldClose());
    }
    update = () => {
        r.BeginDrawing();
        r.ClearBackground(r.BLUE);
        r.DrawTexture(this.background, 0, 0, r.WHITE);
        this.background.update();
        this.bird.update();
        r.EndDrawing();
    }
};

module.exports.Game = Game;