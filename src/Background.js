const r = require('raylib');

class Background {
    constructor() {
        this.backgroundDay = r.LoadTexture('./assets/sprites/backgroundDay.png');
        this.backgroundNight = r.LoadTexture('./assets/sprites/backgroundDay.png');
        this.background;
        this.pickNewBackground();
    }

    pickNewBackground = () => {
        this.background = r.GetRandomValue(0, 1) > 0
        ? this.backgroundDay
        : this.backgroundNight;
    }
}

module.exports.Background = Background;
