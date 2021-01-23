const r = require('raylib');

class Obstacles {
    constructor() {
        this.obstacles = [];
        this.gap = 200;
        this.start = 500;
        this.pipeWidth = 90;
        this.texture = r.LoadTexture('./assets/sprites/pipe.png');
    }

    createObstacle = () => {
        const posY = r.GetRandomValue(100, 500);
        const posX = this.start;
        this.obstacles.push({ x: posX, y: posY, gap: this.gap });
    }

    draw = () => {
        this.obstacles.map((o) => {
            r.DrawTextureEx(this.texture, { x: o.x, y: o.y }, 180, 1, r.WHITE);
            r.DrawTexture(this.texture,  o.x - this.pipeWidth, o.y + o.gap, r.WHITE);
        });
    }

    destroyObstacles = () => {
        this.obstacles = this.obstacles.filter((o) => (o.x > -50));
    }

    update = () => {
        this.draw();
        this.obstacles.map((obstacle) => {
            obstacle.x -= 2;
        });
        if (this.obstacles.length < 1) this.createObstacle();
        else if (this)
        this.destroyObstacles();
    }
}

module.exports.Obstacles = Obstacles;
