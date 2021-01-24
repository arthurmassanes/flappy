const r = require('raylib');

class Score {
    constructor() {
        this.value = 0;
    }

    draw = () => {
        r.DrawText(this.value.toString(), 220, 30, 100, r.BLACK);
        r.DrawText(this.value.toString(), 220, 25, 100, r.WHITE);
    }

    restart = () => {
        this.value = 0;
    }

    update = (isGameOver, obstacle) => {
        this.draw();
        if (!isGameOver && obstacle
            && obstacle.x === 100) {
                this.value += 1;
            }

    }
}

module.exports.Score = Score;
