const r = require('raylib');

class Bird {
    constructor() {
        this.sprites = this.loadSprites();
        this.initPosition();
        this.speedY = 10;
        this.spriteIndex = 0;
        this.timer = 0;
        this.isDead = false;
    }

    initPosition = () => {
        this.posY = 250;
        this.posX = 100;
    }

    loadSprites = () => {
        const upFlap = r.LoadTexture('./assets/sprites/upflap.png');
        const midFlap = r.LoadTexture('./assets/sprites/midflap.png');        
        const downFlap = r.LoadTexture('./assets/sprites/downflap.png');

        return ([midFlap, downFlap, midFlap, upFlap]);
    }

    updateAnimation = () => {
        this.timer++;
        if (this.timer > 5 && !this.isDead) {
            this.timer = 0;
            const len = this.sprites.length;
            this.spriteIndex++;
            if (this.spriteIndex >= len) this.spriteIndex = 0;
        }
    }

    updatePosition = () => {
        if (this.posY <= 720) {
            this.posY += this.speedY;
        } else if (!this.isDead) {
            this.isDead = true;
        } else this.posX -= 2;
    }

    update = () => {
        r.DrawTexture(this.sprites[this.spriteIndex], this.posX, this.posY, r.WHITE);
        if (!this.isDead) {
            this.updateAnimation();
        }
        this.updatePosition();
    }
}

module.exports.Bird = Bird;
