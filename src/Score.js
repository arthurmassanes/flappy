const r = require('raylib');

class Score {
    constructor() {
        this.pointSound = r.LoadSound('./assets/audio/point.wav');
        this.value = 0;
    }

    draw = () => {
        r.DrawText(this.value.toString(), 220, 30, 100, r.BLACK);
        r.DrawText(this.value.toString(), 220, 25, 100, r.WHITE);
    }

    restart = () => {
        this.value = 0;
    }

    update = (obstacle, bird) => {
        this.draw();
        if (obstacle.x - obstacle.width <= bird.posX && !obstacle.passed) {
                obstacle.passed = true;
                this.value += 1;
                r.PlaySound(this.pointSound);
                speed += 0.2;
                console.log(speed)
            }

    }
}

module.exports.Score = Score;
