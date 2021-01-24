const r = require('raylib');
const { speed } = require('./constants');
class Background {
    constructor() {
        this.backgroundDay = r.LoadTexture('./assets/sprites/backgroundDay.png');
        this.backgroundNight = r.LoadTexture('./assets/sprites/backgroundNight.png');
        this.background;

        this.baseY = 776;
        this.baseX = 0;
        this.baseWidth = 672;
        this.base = r.LoadTexture('./assets/sprites/base.png');
        this.pickNewBackground();
    }

    pickNewBackground = () => {
        this.background = r.GetRandomValue(0, 1) > 0
        ? this.backgroundDay
        : this.backgroundNight;
    }

    drawBase = () => {
        this.baseX -= speed;
        r.DrawTexture(this.base, this.baseX, this.baseY, r.WHITE);
        r.DrawTexture(this.base, this.baseX + 500, this.baseY, r.WHITE);
        if (this.baseX <= -500) this.baseX = -10;
    }

    update = () => {
        r.DrawTexture(this.background, 0, 0, r.WHITE);
        this.drawBase();
    }
}

module.exports.Background = Background;
