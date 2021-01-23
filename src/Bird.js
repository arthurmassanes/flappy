const r = require('raylib');

class Bird {
    constructor() {
        this.sprites = this.loadSprites();
        this.initPosition();
        this.speedY = 10;
        this.spriteIndex = 0;
        this.timer = 0;
        this.height = 48;
        this.isDead = false;
        this.jumpForce = 0;
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
        if (!this.isDead) {
            this.posY += this.speedY;
            this.posY -= this.jumpForce;
        } else this.posX -= 2;
    }

    pollEvent = () => {
        if (r.IsKeyPressed(r.KEY_SPACE)) {
            this.jumpForce += 20;
            if (this.jumpForce > 20) this.jumpForce = 20;
        }
        if (this.jumpForce > 0) this.jumpForce *= 0.96;
    }

    checkCollisions = (groundY) => {
        if (this.posY >= groundY - this.height) {
            this.isDead = true;
        }
    }

    update = () => {
        r.DrawTexture(this.sprites[this.spriteIndex], this.posX, this.posY, r.WHITE);
        if (!this.isDead) {
            this.updateAnimation();
        }
        this.updatePosition();
        this.pollEvent();
    }
}

module.exports.Bird = Bird;
