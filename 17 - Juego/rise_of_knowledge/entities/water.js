//Declaramos las dependencias a usar.
import { config } from "../config.js";

/**
 * Esta clase define la entidad para el agua.
 */
export class Water {
    x = 0;
    y = 0;
    size = config.tileSize;
    hitboxXOffset = 13;
    hitboxYOffset = 10;
    hitboxWidthOffset = 27;
    hitboxHeightOffset = 26;
    isAnimated = false;
    currentFrame = 0;
    animationSpeed = 1000;
    lastFrameTime = 0;
    sprites = [];

    constructor(x, y, spriteTypes) {
        this.x = x;
        this.y = y;
        this.isAnimated = Array.isArray(spriteTypes);
        this.sprites = [];

        if (this.isAnimated) {
            for (let i = 0; i < spriteTypes.length; i++) {
                const img = new Image();
                img.src = spriteTypes[i];
                this.sprites.push(img);
            }
            this.lastFrameTime = Date.now();
        } else {
            this.sprite = new Image();
            this.sprite.src = spriteTypes;
        }

        this.hitboxX = this.x + this.hitboxXOffset;
        this.hitboxY = this.y + this.hitboxYOffset;
        this.hitboxWidth = this.size - this.hitboxWidthOffset;
        this.hitboxHeight = this.size - this.hitboxHeightOffset;
    }

    draw() {
        if (this.isAnimated) {
            this.animate();
            config.ctx.drawImage(this.sprites[this.currentFrame], this.x, this.y, this.size, this.size);
        } else {
            config.ctx.drawImage(this.sprite, this.x, this.y, this.size, this.size);
        }
    }

    animate() {
        const now = Date.now();
        if (now - this.lastFrameTime > this.animationSpeed) {
            this.currentFrame = (this.currentFrame + 1) % this.sprites.length;
            this.lastFrameTime = now;
        }
    }
}