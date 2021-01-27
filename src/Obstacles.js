const r = require('raylib');

class Obstacles {
    constructor() {
        this.obstacles = [];
        this.gap = 140;
        this.start = 600;
        this.pipeWidth = 90;
        this.texture = r.LoadTexture('./assets/sprites/pipe.png');
    }

    createObstacle = () => {
        const posY = r.GetRandomValue(100, 500);
        const posX = this.start + (this.texture.width * this.obstacles.length * 4);
        this.obstacles.push({ x: posX, y: posY, gap: this.gap, width: this.texture.width });
    }

    draw = () => {
        this.obstacles.map((o) => {
            // put one pipe on each direction
            r.DrawTextureEx(this.texture, { x: o.x, y: o.y }, 180, 1, r.WHITE);
            r.DrawTexture(this.texture,  o.x - this.texture.width - 2, o.y + o.gap, r.WHITE);
        });
    }

    destroyObstacles = () => {
        // remove if out of sight
        this.obstacles = this.obstacles.filter((o) => (o.x > -50));
    }

    update = () => {
        this.draw();
        this.obstacles.map((obstacle) => {
            obstacle.x -= speed;
        });
        if (this.obstacles.length < 3) this.createObstacle(); // maximum 3 obstacles in sight at once
        else if (this)
        this.destroyObstacles();
    }
    free = () => {
        r.UnloadTexture(this.texture);
    }
}

module.exports.Obstacles = Obstacles;
