const r = require('raylib');
const { Background } = require('./Background');
const { Bird } = require('./Bird');
const { Obstacles } = require('./Obstacles');
const { Score } = require('./Score');
const { GameOverScreen } = require('./GameOverScreen');

class Game {
    constructor() {
        this.run = true;
        this.screenWidth = 500;
        this.screenHeight = 1000;
        r.InitWindow(this.screenWidth, this.screenHeight, "raylib [core] example - basic window");
        r.SetTargetFPS(60);
        this.bird = new Bird();
        this.background = new Background();
        this.obstacles = new Obstacles();
        this.score = new Score();
    }

    restart = () => {
        this.obstacles.obstacles = [];
        this.bird.initPosition();
        this.bird.isDead = false;
        this.bird.speedY = 10;
        this.score.restart();
    }

    isRunning = () => {
        return (this.run && !r.WindowShouldClose());
    }

    update = () => {
        r.BeginDrawing();
        r.ClearBackground(r.BLUE);
        r.DrawTexture(this.background, 0, 0, r.WHITE);
        this.background.update();
        this.obstacles.update();
        this.bird.update();
        this.score.update(this.bird.isDead, this.obstacles.obstacles[0]);
        this.bird.checkCollisions(this.background.baseY, this.obstacles.obstacles);
        if (this.bird.isDead) {
            const g = new GameOverScreen(this.background, this.score.value);
            g.run();
            this.restart();
        }
        r.EndDrawing();
    }
};

module.exports.Game = Game;