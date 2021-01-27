const r = require('raylib');

class Bird {
    constructor() {
        this.sprites = this.loadSprites();
        this.initPosition();
        this.speedY = 10;
        this.spriteIndex = 0;
        this.timer = 0;
        this.width = 68;
        this.height = 48;
        this.isDead = false;
        this.jumpForce = 0;
        this.jumpAmount = 25;
        this.jumpSound = r.LoadSound('./assets/audio/wing.wav');
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
            this.speedY *= 1.015;
        } else this.posX -= speed;
    }

    pollEvent = () => {
        if (r.GetCharPressed()) { // jumping
            r.PlaySound(this.jumpSound);
            this.jumpForce += this.jumpAmount;
            this.speedY = 10;
            if (this.jumpForce > this.jumpAmount) this.jumpForce = 20;
        }
        if (this.jumpForce > 0) this.jumpForce *= 0.96; // jump force decreasing over time
    }

    colidesWithObstacle = (o) => { // to know if it collides i check if
        return (this.posX >= (o.x - this.width - o.width) && this.posX <= o.x// they have the same x
            && !(this.posY >= o.y && this.posY <= o.y + o.gap - this.height)); // but different y
    }

    checkCollisions = (groundY, obstacles) => {
        //  with the ground
        if (this.posY >= groundY - this.height) {
            this.isDead = true;
        } else {
            // and obstacles
            obstacles.map((o) => {
                if (this.colidesWithObstacle(o)) {
                    this.isDead = true;
                }
            });
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
    free = () => {
        this.sprites.map((s) => r.UnloadTexture(s));
        r.UnloadSound(this.jumpSound);
    }
}

module.exports.Bird = Bird;
