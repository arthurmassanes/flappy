const r = require('raylib');
const { speed } = require('./constants');
class Obstacles {
    constructor() {
        this.obstacles = [];
        this.gap = 140;
        this.start = 500;
        this.pipeWidth = 90;
        this.texture = r.LoadTexture('./assets/sprites/pipe.png');
    }

    createObstacle = () => {
        const posY = r.GetRandomValue(100, 500);
        const posX = this.start + this.texture.width;
        this.obstacles.push({ x: posX, y: posY, gap: this.gap, width: this.texture.width });
    }

    draw = () => {
        this.obstacles.map((o) => {
            r.DrawTextureEx(this.texture, { x: o.x, y: o.y }, 180, 1, r.WHITE);
            r.DrawTexture(this.texture,  o.x - this.texture.width - 2, o.y + o.gap, r.WHITE);
        });
    }

    destroyObstacles = () => {
        this.obstacles = this.obstacles.filter((o) => (o.x > -50));
    }

    update = () => {
        this.draw();
        this.obstacles.map((obstacle) => {
            obstacle.x -= speed;
        });
        if (this.obstacles.length < 1) this.createObstacle();
        else if (this)
        this.destroyObstacles();
    }
}

module.exports.Obstacles = Obstacles;
