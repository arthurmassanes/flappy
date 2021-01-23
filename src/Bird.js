const r = require('raylib');

class Bird {
    constructor() {
        this.sprites = this.loadSprites();
        this.posY = 250;
        this.posX = 100;
        this.speedY = 10;
        this.spriteIndex = 0;
        this.timer = 0;
    }

    loadSprites = () => {
        const upFlap = r.LoadTexture('./assets/sprites/upflap.png');
        const midFlap = r.LoadTexture('./assets/sprites/midflap.png');        
        const downFlap = r.LoadTexture('./assets/sprites/downflap.png');

        return ([midFlap, downFlap, midFlap, upFlap]);
    }

    updateAnimation = () => {
        this.timer++;
        if (this.timer > 5) {
            this.timer = 0;
            const len = this.sprites.length;
            this.spriteIndex++;
            if (this.spriteIndex >= len) this.spriteIndex = 0;
        }
    }

    updatePosition = () => {
        
    }

    update = () => {
        r.DrawTexture(this.sprites[this.spriteIndex], this.posX, this.posY, r.WHITE);
        this.updateAnimation();
        this.updatePosition();
    }
}

module.exports.Bird = Bird;
